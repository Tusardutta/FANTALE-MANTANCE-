# Technical Specification - FANTALE Maintenance Page

## Project Type

Standalone single HTML file — no framework, no build step. The user explicitly requested "HTML + CSS + optional JS in one file." This is a single-page static maintenance page with no routing, no state management, and no interactivity beyond ambient CSS animations.

## Rationale

A standalone HTML file is the optimal choice because:
1. User explicitly asked for a single-file output
2. No interactive functionality — purely display/ambient animations
3. All animations are CSS-driven (no JS animation libraries needed)
4. Maintenance pages must work with zero dependencies in emergency scenarios
5. A single HTML file can be deployed anywhere instantly

## Dependencies

| Dependency | Purpose | Installation |
|------------|---------|-------------|
| Google Fonts (Orbitron, Inter, JetBrains Mono) | Typography — loaded via CSS @import | CDN |
| No JS libraries | All effects are CSS-only | — |
| No build tools | Single file output | — |

## CSS Approach

- All CSS is embedded in a `<style>` tag within the HTML file
- CSS custom properties (variables) for all design tokens
- Pure CSS animations — `@keyframes` for all motion (glow pulse, orb drift, scanline, dot pulse, entrance)
- SVG noise filter embedded inline for the grain texture
- No external CSS files

## JavaScript

Minimal JS (~10 lines) for one purpose only:
- Randomize ambient orb starting positions slightly on each load to prevent repetitive patterns
- All other animations are pure CSS

## File Structure

```
/mnt/agents/output/app/
└── index.html          # Single standalone file — complete
```

## Key Implementation Details

1. **Noise Texture**: Use an inline SVG `<filter>` with `feTurbulence` (type="fractalNoise", baseFrequency="0.65") applied via CSS `filter: url(#noise)` on a full-screen fixed div. Alternative: CSS-only approach using `background-image` with a data URI SVG.

2. **Scanline**: A single `div` with `linear-gradient` background (transparent → rgba(0,240,255,0.15) → transparent), animated with `transform: translateY` from `-100vh` to `100vh`.

3. **Ambient Orbs**: Three absolutely-positioned `div` elements with `border-radius: 50%`, large `filter: blur(120px)`, and low opacity colors. CSS `@keyframes` animate their `transform` properties.

4. **Glassmorphism Card**: `backdrop-filter: blur(16px)` with semi-transparent dark background. Note: `backdrop-filter` requires the element to be positioned and have a transparent/semi-transparent background.

5. **Neon Glows**: Multi-layer `text-shadow` and `box-shadow` values to create the neon tube effect — inner bright layer, mid glow layer, outer diffuse layer.

6. **Google Fonts**: Load via `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap');` at the top of the style block.

## Browser Support

Target: Modern browsers (Chrome, Firefox, Safari, Edge). All features used (`backdrop-filter`, `clip-path`, CSS animations, CSS variables) are well-supported in modern browsers. The page degrades gracefully in older browsers — it simply shows as a static dark page with text.
