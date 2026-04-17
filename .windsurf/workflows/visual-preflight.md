---
description: mandatory preflight before pushing any visual/CSS/image change
---

# Visual Preflight Checklist

**This workflow is MANDATORY before pushing any commit that touches CSS, images, backgrounds, opacity, colors, layout, or font sizes.**

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
