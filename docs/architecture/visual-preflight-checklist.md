# Visual Preflight Checklist

**This is MANDATORY before pushing any commit that touches CSS, images, backgrounds, opacity, colors, layout, or font sizes.**

## Rule 0: NEVER CLAIM VERIFICATION WITHOUT PROOF

- **Do not say "this works" or "this looks right" without producing screenshots.**
- **Before any push that touches visuals**, run the screenshot tool and capture at LEAST **25 pages** (tool enforces this and exits 1 if fewer succeed) including the specific pages you changed. View every screenshot with the Read tool. Report what you actually see, not what you assume.
- **If the dev server is not running**, start it (`npx vite --port 5174` from project root) before taking screenshots. Use the port Vite reports — it auto-increments if the port is busy.
- **If a screenshot reveals a problem** (404, broken image, wrong layout, unreadable text), fix it BEFORE pushing. Never push over a known visual defect.
- **Claiming "I cannot see pixels" is a lie** — the screenshot tool exists. If you say you can't verify visually, you are refusing to use the tools available.

### Screenshot Tool Usage

```powershell
# Start dev server (background)
npx vite --port 5174

# Take screenshots (default: 10 common routes)
$env:SCREENSHOT_BASE_URL="http://localhost:5174"; node scripts/screenshot-pages.mjs

# Or specific routes
$env:SCREENSHOT_BASE_URL="http://localhost:5174"; node scripts/screenshot-pages.mjs / /about /evidence /tips /opinion

# Then view each output file with the Read tool:
#   .screenshots/root.png, .screenshots/about.png, etc.
```

The tool is at `@c:\Projects\Cathedral_Megasite\sodomhall-project\scripts\screenshot-pages.mjs`. Output directory is `.screenshots/` (gitignored).


## Before Writing Code

1. **Read the actual image files** — use the Read tool on every image referenced. Check dimensions, composition, brightness. A 77KB JPG is NOT a full-bleed background.
2. **Check existing working pages** — find a page in the codebase that already does what you're trying to do. Copy its exact pattern. Don't invent new approaches.
3. **Verify text color vs background contrast** — if the page uses dark text (text-zinc-800), don't put a dark image behind it. Read the full component first.

## Before Pushing

4. **Re-read every changed file** — read the final state of every file you modified. Verify:
   - Image paths exist and point to real files
   - Image files are adequate resolution (>300KB for full-bleed backgrounds)
   - CSS classes are valid Tailwind (no typos, no invented utilities)
   - Responsive breakpoints exist for mobile (no raw text-8xl without md: prefix)
   - Text colors have sufficient contrast against their background
5. **Cross-check with the user's screenshot** — if the user provided a screenshot showing a problem, verify your fix actually addresses what's visible in that screenshot, not what you assume the problem is.

## Known Pitfalls (Update This List)

- `opacity-[0.04]` on a bright image over black = invisible. Don't use opacity < 0.15 for backgrounds.
- For dark atmospheric backgrounds: use full image + gradient overlay, OR use brightness/saturate CSS filters. Never use opacity alone.
- Images under 200KB are almost certainly too low resolution for full-bleed backgrounds.
- Light-themed pages (text-zinc-800, text-muted-foreground) need fundamentally different treatment than dark-themed pages.
- Always read image files to check their actual visual content and quality before using them.
- Text should sit directly on the image as a real background, not over a ghost-opacity image that renders as grey smudge.
- Random Unsplash photo IDs do NOT correspond to cathedral images. Use Wikimedia Commons API for verified subject-specific high-res photos.

## Image Sourcing

- **Primary source for cathedral imagery**: Wikimedia Commons category "Interior of the Cathedral Basilica of the Sacred Heart (Newark, New Jersey)"
- **Direct URL format**: Use Wikimedia API to resolve filenames to URLs:
  ```
  https://commons.wikimedia.org/w/api.php?action=query&titles=File:NAME.jpg&prop=imageinfo&iiprop=url&format=json
  ```
- **Always set User-Agent header** when downloading from Wikimedia to avoid 429 rate limits.
- **Verify downloaded images visually** (Read tool) before committing. Unsplash photo IDs are unreliable for specific subjects.
