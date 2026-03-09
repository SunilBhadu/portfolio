# Portfolio AI — Claude Code Reference

## Project Overview
This is Sunil Bhadu's AI-powered interactive portfolio, built with **Next.js 14 App Router**. Visitors chat with an AI that answers questions about Sunil's background, projects, skills, and contact info — all in a conversational interface.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **AI**: Anthropic Claude (claude-sonnet-4-20250514) via `@anthropic-ai/sdk`
- **Animations**: Framer Motion
- **Package manager**: pnpm

## Key Architecture Decisions

### Chat Flow
1. User types or clicks a quick-action button (Me / Projects / Skills / Contact / Fun)
2. **Quick-action queries are handled locally** (no API call) — they inject a fake tool invocation to render the correct component
3. Free-form chat messages go to `/api/chat` → Anthropic API → returns plain text
4. Rate limiting: **20 requests per IP per 24 hours** (in-memory, resets on server restart)

### Local Tool Handling
`src/components/chat/chat.tsx` — `LOCAL_TOOL_QUERIES` maps specific query strings to tool names.
These inject `parts[].toolInvocation` directly into the message so `SimplifiedChatView` renders the correct component without an API call.

Mapped tools:
- `getProjects` → `AllProjects` component
- `getSkills` → `Skills` component
- `getContact` → `Contact` component
- `getPresentation` → `Presentation` component

### Message Rendering
- `SimplifiedChatView` → checks `message.parts` for tool invocations (renders rich components) then renders text
- `ChatMessageContent` → renders `message.parts[].text` OR falls back to `message.content` string
- `ToolRenderer` → switches on `toolName` to render the correct component

### GitHub Integration
`src/lib/github.ts` — fetches Sunil's public GitHub repos from the GitHub API.
- Cached in-memory for **1 hour** to avoid rate limits
- Injected into the system prompt on every API call so the AI always knows about Sunil's latest repos
- Uses `GITHUB_TOKEN` env var if set (5000 req/hr), otherwise unauthenticated (60 req/hr)

## Important Files

| File | Purpose |
|------|---------|
| `src/lib/user-profile.ts` | Sunil's full profile data (source of truth) |
| `src/app/api/chat/route.ts` | Chat API with rate limiting + GitHub context injection |
| `src/app/api/chat/prompt.ts` | System prompt generator |
| `src/components/chat/chat.tsx` | Main chat UI + local tool handling |
| `src/components/chat/HelperBoost.tsx` | Quick-action buttons (Me/Projects/Skills/etc.) |
| `src/components/projects/Data.tsx` | Sunil's project cards data |
| `src/components/skills.tsx` | Skills display component |
| `src/components/contact.tsx` | Contact info component |
| `src/components/presentation.tsx` | Profile card with photo |
| `src/lib/github.ts` | GitHub repos fetcher with caching |

## Project Images
`/public/sunil.jpg` — Sunil's photo (used as avatar and project card placeholder).
When adding project-specific images, add them to `/public/` and update `src/components/projects/Data.tsx`.

## Environment Variables
```
ANTHROPIC_API_KEY=   # Required — Anthropic API key
GITHUB_TOKEN=        # Optional — GitHub personal token (raises rate limit to 5000/hr)
```

## Development
```bash
pnpm dev    # Start dev server on localhost:3000
pnpm build  # Production build
```

## Adding New Projects
1. Add images to `/public/` (name them `projectname-preview.jpg` etc.)
2. Update `src/components/projects/Data.tsx` — add a new entry to `PROJECT_CONTENT`
3. Update `src/lib/user-profile.ts` — add the project under `experience[].projects`

## Conventions
- All data for the AI lives in `src/lib/user-profile.ts` — keep it as the single source of truth
- Never hardcode personal info in components — import from `user-profile.ts` or pass as props
- Quick-action queries must exactly match the strings in `HelperBoost.tsx` `questions` object AND the `LOCAL_TOOL_QUERIES` map in `chat.tsx`


Always read AI_CONTEXT.md before making changes


## Current State

Recent updates made to the project:

- Removed WelcomeModal from chat.tsx and page.tsx
- Added Sunil Bhadu Resume.pdf download
- Updated prompt to support all industries (not only healthcare)
- Cleaned Fastfolio tracking and removed unused files
- Simplified tool renderer to only support:
  - getProjects
  - getSkills
  - getContact
  - getPresentation
  - getResume
  - getCrazy
- Landing page uses sunil.jpg instead of emoji