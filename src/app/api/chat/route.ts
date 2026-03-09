import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from './prompt';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // The frontend sends { messages: [{ role: 'user', content: '...' }] } 
    // when using the Vercel AI SDK's useChat hook.
    // If the user's code sends `message` directly, we handle both:
    const messages = body.messages || [{ role: 'user', content: body.message || '' }];

    // We get the last user message to pass to the snippet provided by the user.
    // (If the frontend sends message history, we extract the last sent message)
    const lastMessage = messages.length > 0 ? messages[messages.length - 1].content : "";

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      temperature: 0.7,
      system: SYSTEM_PROMPT, // Anthropic handles system prompt separately
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
