import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from './prompt';
import { fetchGitHubRepos, formatReposForPrompt } from '@/lib/github';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const maxDuration = 30;

// In-memory rate limiter: 20 requests per IP per 24 hours
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 6;
const RATE_WINDOW_MS = 24 * 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return Response.json(
      { success: false, error: 'Rate limit exceeded. Please try again in 24 hours.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // The frontend sends { messages: [{ role: 'user', content: '...' }] } 
    // when using the Vercel AI SDK's useChat hook.
    // If the user's code sends `message` directly, we handle both:
    const messages = body.messages || [{ role: 'user', content: body.message || '' }];

    // We get the last user message to pass to the snippet provided by the user.
    // (If the frontend sends message history, we extract the last sent message)
    const lastMessage = messages.length > 0 ? messages[messages.length - 1].content : "";

    // Fetch live GitHub repos and inject into system prompt (cached 1 hr)
    const repos = await fetchGitHubRepos();
    const githubSection = formatReposForPrompt(repos);
    const systemPrompt = buildSystemPrompt(githubSection);

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: lastMessage,
        },
      ],
    });

    return Response.json({
      success: true,
      data: response.content[0].type === 'text' ? response.content[0].text : '',
    });

  } catch (error: any) {
    console.error('Global error:', error);
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
