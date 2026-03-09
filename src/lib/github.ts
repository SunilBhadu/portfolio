/**
 * GitHub Repos Fetcher
 *
 * Fetches Sunil Bhadu's public GitHub repositories and caches them in memory
 * for 1 hour to avoid hitting API rate limits on every chat request.
 *
 * Uses GITHUB_TOKEN env var if set (5000 req/hr), else unauthenticated (60 req/hr).
 */

const GITHUB_USERNAME = 'SunilBhadu';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

interface RepoCache {
  data: GitHubRepo[];
  fetchedAt: number;
}

let repoCache: RepoCache | null = null;

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const now = Date.now();

  // Return cached data if still fresh
  if (repoCache && now - repoCache.fetchedAt < CACHE_TTL_MS) {
    return repoCache.data;
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status} — using cached/empty data`);
      return repoCache?.data ?? [];
    }

    const repos: GitHubRepo[] = await res.json();
    // Filter out forks to focus on original work
    const ownRepos = repos.filter((r) => !r.fork);

    repoCache = { data: ownRepos, fetchedAt: now };
    return ownRepos;
  } catch (err) {
    console.warn('GitHub fetch failed:', err);
    return repoCache?.data ?? [];
  }
}

/**
 * Formats GitHub repos into a concise system prompt section.
 * Only includes repos with a name/description to keep tokens low.
 */
export function formatReposForPrompt(repos: GitHubRepo[]): string {
  if (repos.length === 0) return '';

  const lines = repos
    .filter((r) => r.name)
    .map((r) => {
      const stars = r.stargazers_count > 0 ? ` ⭐${r.stargazers_count}` : '';
      const lang = r.language ? ` [${r.language}]` : '';
      const desc = r.description ? ` — ${r.description}` : '';
      return `- **${r.name}**${lang}${stars}${desc} (${r.html_url})`;
    });

  return `## GitHub Repositories (live from github.com/${GITHUB_USERNAME})\n${lines.join('\n')}`;
}
