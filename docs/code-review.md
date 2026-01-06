# Code Review – Cathedral Megasite

Date: 2025-02-15  
Reviewer: Codex (GPT-5)

## Overview

The repository builds a Vite-powered React SPA served by an Express wrapper. Authentication is wired through Supabase, there are several rich visualizations (maps, diagrams, timelines), and an About page hosts a “secure tip” workflow. While exploring the codebase I focused on correctness and resiliency issues.

## Findings

1. **Supabase client throws when env vars are absent** (`client/src/lib/supabase.ts:3-15`)  
   `createClient` is invoked with empty strings before `isSupabaseConfigured` short-circuits. When the env vars are missing (the default in repo/CI), Supabase’s SDK throws “supabaseUrl is required” at module-evaluation time, preventing the app from rendering—even in “demo” scenarios that should bypass auth.

2. **Tip submission form points to placeholder Formspree ID** (`client/src/components/TipSubmissionForm.tsx:47-70`)  
   All tips are POSTed to `https://formspree.io/f/YOUR_FORM_ID`, which 404s. The UI just shows a generic error, so evidence submissions are silently dropped unless the deployer edits the code. This should be configurable (env/prop) and default-disabled if unset.

3. **Journey navigation links route to non-existent paths** (`client/src/components/JourneyNav.tsx:6-56`)  
   The `ROUTES` list omits the `/ruling` prefix that the actual router uses (`/ruling/dirty-dozen`, etc.). As a result the component never matches the current route and, even if forced, its links lead to 404 pages. The share button embedded in the component is consequently unreachable.

4. **Map loader never resolves on failure and injects duplicate scripts** (`client/src/components/Map.tsx:95-150`)  
   `loadMapScript` only resolves on successful load and never rejects on error. A failed request (bad API key, offline) causes infinite loading. Additionally the script is inserted every mount even when `window.google` already exists, producing Google’s “multiple API loads” warning and wasting bandwidth.

5. **Search highlights crash on regex metacharacters** (`client/src/components/Search.tsx:80-86`)  
   User queries are interpolated directly into `new RegExp(query, "gi")`. Typing `[` or `\` throws “Invalid regular expression” and the overlay crashes. Input must be escaped before assembling the regex.

## Testing

Attempted `pnpm build`, but the harness lacks the pinned `pnpm@10.4.1`, and fetching via `npx pnpm@10.4.1` failed due to restricted outbound network (EAI_AGAIN). Once pnpm is available locally, re-run `pnpm build` to verify the fixes.

## Recommended Next Steps

1. Guard Supabase client creation so the app can run without credentials (fallback mock user already exists).
2. Add configuration for the Formspree endpoint (env or prop) and disable the form when unset.
3. Align `JourneyNav` routes with the `/ruling` namespace so navigation renders correctly.
4. Harden Google Maps loading by caching the promise and handling errors.
5. Escape user input in the Search highlighter.

