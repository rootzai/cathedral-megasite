# Implementation Plan: Welcoming Arrival Redesign - April 16, 2026

We are completely discarding the "cheap" blocky text backgrounds, rigid cards, and standard UI containers. The arrival experience must feel like stepping into a living, organic, and highly advanced archive. We will let the symbols be the undisputed stars of the show. 

The aesthetic shifts from "Standard Web UI" to an **Immersive, Generative Installation.**

## The New Paradigm: Fluid & Unbound
1. **Kill the Container:** No more bordered boxes, rigid grid cells, or chunky background rects. Navigation text and descriptions will exist as elegant typography floating in pure `#0A0A0C` darkness, appearing only as needed.
2. **The Symbols as Artifacts:** The path emblems (The Apple, The Keyhole, The Hook, The Eye) will be visually elevated from basic vector art into complex, "AI-infused" dynamic entities. They will feel like 3D holographic projections or living biological mechanisms.
3. **Organic Interactivity:** When interacting with the symbols, they shouldn't just scale on hover. They should slither, flip, breath, unfold, and react fluidly to the user's cursor.

## The Entry Portal Experience (`Archive Home` / `EvidenceHub`)

Instead of standard cards, the user is presented with a sweeping, dark void containing glowing, suspended artifacts.

### 1. Visual Execution of the Symbols (Powered by Nano Banana Pro)
We will leverage the Gemini-native image generation engine (Nano Banana Pro) to generate the highly complex, generative base assets. These AI-infused images will then be mapped into our environment and animated using WebGL/CSS to create these effects:
*   **The Breach (The Eye/Wink):** Not a static icon. It feels biological. An impossibly intricate, wireframe or particle-system eye that slowly tracks the user's cursor across the screen. When hovered, the pupil dilates into a crimson (`#8B1A1A`) void, and the organic lines "slither" as the eyelids snap shut and open.
*   **The Method (The Keyhole):** A 3D-perspective corridor of light. Instead of a flat path, hovering over it causes the keyhole to mathematically "unfold" like a tesseract, pulling the user's perspective forward into a blinding gold (`#8B6914`) light.
*   **The Legalist / Document (The Ledger):** Forms from thousands of microscopic, swirling text fragments (an "AI-infused" generative particle cloud) that coalesce into the shape of a beckoning skeletal hand or authoritative seal, dispersing and reforming as you interact.

### 2. Interaction & Typography "The Boiled Frog"
*   **Resting State:** The user sees only the dark void, the ambient particles, and the 3 to 6 slowly breathing, complex symbols. There is no blocky text.
*   **Hover Interaction:** When the cursor nears a symbol, the symbol reacts organically (slithering, flipping). A delicate, sharp beam of Gold light shoots out, illuminating elegant serif typography (Parchment `- #C8BDB0`) that fades into empty space beside the symbol.
*   **The Typography:** Text is completely unboxed. It relies on meticulous spacing, `drop-shadow` for legibility against particles, and strict adherence to the brand book fonts (Libre Baskerville / JetBrains Mono).

## The Prologue (`Prologue.tsx`)
*   **Kill the Block Quotes:** Currently, text might be stuck in rigid shaded boxes. We will unleash the text directly onto the dark background, using subtle gradient masks that make the text look like it is physically manifesting out of the darkness or burning onto parchment.
*   **The Interactive Lock:** The clearance key is a pulsing, rotating geometric anomaly at the bottom of the screen.

## The About Page (`About.tsx`)
*   **No Red Action Boxes:** The "We Welcome Legal Process" will not be a box. We will build a complex, slow-rotating WebGL wireframe of the "Shield" (the six concentric rings). The bold statements of transparency will orbit or exist dynamically alongside this 3D structure. The page becomes an interactive schematic, rather than a text document with borders.

## Open Questions for You
1. **Tech Stack Limit:** To achieve the "3D / AI-infused" generative look, are you comfortable with me utilizing `framer-motion` complex SVG path morphing and CSS 3D transforms, or should we push further into implementing `three.js` canvases for actual WebGL shaders? (SVG/Framer is often better for crisp "architectural" lines, WebGL is better for "slithering/organic particles").
2. **Does this direction terrify and excite you in the right way?** We are throwing away traditional UI for an experiential storytelling canvas.
