# AI Design LA — Design System

Source of truth for the AI Design LA marketing/community site. Compiled from the live code in `lanceshields69/AI-Design-LA` (`css/tokens.css`, `base.css`, `components.css`, `home.css`), not from Figma, though the tokens file itself states Figma as its origin and is written cleanly enough that the two should already agree.

**Sources:**
- GitHub repo: https://github.com/lanceshields69/AI-Design-LA
- Live site: https://lanceshields69.github.io/AI-Design-LA/
- Figma file: https://www.figma.com/design/ysdmqkwOJeMbaIeXYPKoAR/AI-Design-LA---Brand---Site

This is its own project, the site for the AI Design LA Meetup, unrelated to Dreaming in Design. See section 7 for context.

**This is a working document, not a locked spec.** The site is early and still being built out (the `tools.html` page linked in nav doesn't exist yet, LinkedIn hasn't been audited, Substack and Instagram don't exist yet). As the web page and other creative content develop, this doc should get updated alongside them, not written once and left to go stale. Treat drift between this doc and the live code the same way section 6 already treats it: worth catching early, not worth panicking over.

### Version history

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-08-15 | Lance Shields | Initial doc, compiled from `css/tokens.css`, `base.css`, `components.css`, `home.css` in `lanceshields69/AI-Design-LA` |
| 1.1 | 2026-08-15 | Lance Shields | Added Logo & Motion section, sourced from Figma (`ADL-logo-animation`, node `73:554`) |
| 1.2 | 2026-08-15 | Lance Shields | Confirmed small header-scale mark shares identical motion spec (node `83:1854`); consolidated gradient band into Logo & Motion |
| 1.3 | 2026-08-15 | Lance Shields | Added Brand Channels section (LinkedIn, Substack, Instagram) |
| 1.4 | 2026-08-15 | Lance Shields | Added this version history and work-in-progress framing |

When updating this doc, add a new row rather than editing history in place, and bump the version number (patch for corrections/additions to existing sections, minor for new sections, major only if the brand direction itself changes).

---

## 1. Color

### Backgrounds

| Token | Value | Use |
|---|---|---|
| `--bg-canvas` | `#080726` | Primary dark surface (header, footer, dark sections) |
| `--bg-canvas-vivid` | `#0f0d8c` | Saturated blue variant, used for one high-energy section ("What we explore") |
| `--bg-raised` | `#eaeaea` | Light gray surface for sections that need contrast against canvas |
| `--bg-brand` | `#5a58db` | Periwinkle/purple. Secondary buttons, nav link chips |
| `--bg-accent` | `#ff383c` | Coral red. Primary CTA buttons |
| `--bg-white` | `#ffffff` | Page background default |

### Text

| Token | Value | Use |
|---|---|---|
| `--text-primary` | `#ffffff` | Text on dark backgrounds |
| `--text-reversed` | `#000000` | Text on light backgrounds (default body color) |
| `--text-subtle` | `#c1c0c0` | Footer body copy, secondary text on dark |
| `--text-muted` | `#8f8f8f` | Card excerpts, deemphasized text |

### Border / overlay

| Token | Value | Use |
|---|---|---|
| `--border-rule` | `#7a79db` | The dashed horizontal rule motif (see Components) |
| `--overlay-scrim` | `rgba(0, 0, 0, 0.2)` | Image scrim on the "Join" section |

### Brand gradient

```css
--gradient-brand: linear-gradient(90deg,
  #a173a9 2.4%, #df618f 24%, #f9a74d 45.2%, #87a571 75.5%, #008eaf 98.6%);
```

Five colors, purple through pink, orange, green, to teal. This is the same palette as the crown logomark. A second variant, `--gradient-brand-loop`, is a palindrome of the same five colors (start equals end) so it can tile and scroll with no visible seam, paired with `--gradient-brand-loop-tile: 100vw`. This powers the animated `.gradient-band` strip used as a section divider on the homepage. Treat the gradient as the brand's signature device, since it's the one element that visually ties the wordmark, the logomark, and the site together. Don't introduce a second gradient elsewhere without a real reason.

---

## 2. Typography

Three typefaces, each with a distinct, non-overlapping job:

| Font | Token | Role |
|---|---|---|
| **Space Mono** (700) | `--font-mono` | Display, heading-1, heading-2, all nav/button/label text. Always uppercase. This is the stencil-like wordmark treatment from the logo. |
| **Space Grotesk** (700) | `--font-heading` | heading-3, heading-4, card titles/meta. Uppercase on heading-4 and card meta, sentence case on heading-3. |
| **Inter** (400) | `--font-body` | All body copy at every size. Never uppercase. |

Uppercase is the default posture for anything that isn't body copy. This, combined with the mono display face, is what gives the brand its technical/systems-oriented feel as opposed to DID's editorial serif feel. Don't soften headings to sentence case without a specific reason, since it's load-bearing for the brand's voice.

### Scale

| Token | Size | Line height | Tracking |
|---|---|---|---|
| `--size-display` | 72px (60px mobile) | 72px (60px) | -3px |
| `--size-heading-1` | 48px | 48px | -1px |
| `--size-heading-2` | 36px | 36px | -1px |
| `--size-heading-3` | 24px | 32px | 0.5px |
| `--size-heading-4` | 20px | 24px | 0.5px |
| `--size-label-medium` | 16px | 1 (unitless) | 0.32px |
| `--size-body-large` | 20px | 28px | 0.5px |
| `--size-body-medium` | 16px | 24px | 0.5px |
| `--size-body-small` | 14px | 21px | 0.3px |

Note the tracking direction flip: display and heading-1/2 pull tight (negative tracking, mono face), while body and label text pushes open (positive tracking). That's consistent and deliberate, not a mistake, keep it that way in any new type styles.

---

## 3. Spacing, radius, motion

### Spacing scale

`--space-xs: 12px` · `--space-sm: 16px` · `--space-md: 24px` · `--space-lg: 36px` · `--space-xl: 48px` · `--space-xxl: 60px` · `--space-xxxl: 160px` · `--space-xxxxl: 200px`

The top two steps (160px, 200px) are section-level vertical rhythm, this is a spacious, generously-padded marketing site, not a dense tool. Use `--space-xxxl`/`--space-xxxxl` for section padding, everything below that for internal component spacing.

### Radius

`--radius-sm: 3px` · `--radius-md: 8px`

Sharp, not rounded. This is the opposite instinct from DID's pill-shaped chips and 16-20px card radii, and it's consistent with the mono/uppercase/technical typography. Don't borrow DID's rounder radius values here.

### Motion

`--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` · `--duration-fast: 150ms` (hover states) · `--duration-medium: 300ms` (menu transitions) · `--duration-slow: 6s` (the gradient band scroll)

---

## 4. Components

### Buttons (`.btn`)
Space Mono 700, uppercase, `--radius-sm` (3px, sharp), inline-flex with icon gap support. Two color variants: `.btn--brand` (periwinkle) and `.btn--accent` (coral, the primary CTA color). Hover/focus state is opacity-based (`opacity: 0.85`), not a color or elevation shift, unlike both the DID app (which darkens + lifts) and typical web conventions. Keep this consistent, it reads as a deliberate restraint choice given the loud gradient elsewhere.

### Navigation
Fixed header, `rgba(8, 7, 38, 0.92)` translucent canvas with `blur(8px)` backdrop filter, hidden by default and revealed on scroll-up (`translateY(-100%)` → `translateY(0)` via `.is-visible`). Nav links render as filled pill-shaped chips in `--bg-brand`, not plain text links, so the whole nav reads as a row of buttons. Below 900px this collapses into a hamburger-triggered full-screen mobile menu on `--bg-canvas`.

### Rule heading (`.rule-heading`)
A heading flanked by horizontal dashed lines in `--border-rule`, used above the events and ideas grids. This is a distinctive motif unique to this brand (nothing like it exists in DID), and combined with the dashed footer dividers, it's doing real work establishing a "technical schematic" feel. Reuse it anywhere a section needs a header treatment that isn't the eyebrow-plus-heading pattern.

### Cards
Two shapes, both driven by content type rather than a single generic card component:
- **Event card**: vertical stack, image (aspect-ratio locked) → meta → title → 3-line-clamped excerpt.
- **Idea card**: horizontal, fixed-size image + text block, 5-line-clamped excerpt, collapses to vertical under 640px.

Both use Space Grotesk for title/meta and Inter for the excerpt, following the type-scale role split above.

### Footer
`--bg-canvas` background, dashed rule dividers top and bottom, four-column link grid plus a brand column with social/community CTAs. Structurally similar in spirit to DID's "always locked, never touched" footer, but visually its own thing (dark canvas, dashed rules, mono tagline) rather than a shared component between brands.

### Gradient band
A thin (`--space-xs`, 12px) horizontal strip using the looping brand gradient, used as a section divider at the top and bottom of `<main>`. Motion detail is documented in full below, since it's the site's other animated brand element alongside the logo mark.

---

## 5. Logo & motion

Two animated brand elements, both built on the same five-stop `--gradient-brand`, both linear-eased. Together they're the clearest through-line back to the logomark and the single most distinctive, ownable device in the system.

### Gradient band

The scrolling divider strip (`.gradient-band`) used at the top and bottom of `<main>`. Animates via `background-position-x`, looping continuously over `--duration-slow` (6s), linear easing, and respects `prefers-reduced-motion` (animation disabled entirely, not just slowed). Uses `--gradient-brand-loop`, the palindrome variant of the brand gradient built specifically so the tile has no visible seam at the loop point, paired with `--gradient-brand-loop-tile: 100vw`.

### Logo mark

Two distinct logo assets, different composition, same underlying mark:

- **`logo-icon-animation.gif`** — small header/nav lockup, ~43×48px.
- **`ADL-logo-animation.gif`** — hero-scale lockup, 150×167px. Wordmark stacked directly on top of the mark rather than beside it.

### How the hero mark actually animates (from Figma, node `73:554`)

The crown/blob silhouette itself never moves or changes shape. What animates is a gradient-filled rectangle sitting *underneath* an SVG mask shaped like the crown, panning slowly behind the fixed silhouette. That's what reads as a slow internal color shift rather than a shape animation, worth preserving exactly if this ever gets rebuilt in code instead of shipped as a gif:

- **Mechanism:** `mask-image` (or `clip-path` equivalent) locks the crown silhouette in place; a larger gradient layer translates underneath it.
- **Easing: linear**, not eased in/out. This is deliberate, it gives the color shift a steady drift rather than a bounce, and matches the linear easing already used on `.gradient-band`'s scroll. Keep this consistent if the mark is ever rebuilt as CSS/JS rather than shipped as a gif.
- **Duration:** ~4.74s per cycle, infinite loop.
- **Keyframes:** four translate positions (0%, 23.26%, 49.7%, 75.4%, back to ~100%), with the end position close enough to the start that the loop reads as seamless rather than snapping.
- **Fill:** the same five-stop brand gradient, not a separate animation-specific palette.

### Wordmark treatment on the hero mark

Space Mono Bold, uppercase, white, `font-size: 27px`, `letter-spacing: 0.271px` (roughly matches `--tracking-label`). Arranged as three right-aligned stacked lines ("AI" / "Design" / "LA"), not a single line. Carries a soft drop shadow, `1.935px 2.903px 11.613px rgba(0,0,0,0.15)`, purely for legibility against the moving gradient underneath, not a stylistic choice to reuse elsewhere.

This wordmark treatment is specific to the hero lockup. The static site wordmark used in the header/footer (`.site-header__logo-text` etc.) is plain white text in a single row, no shadow, no stacking, sized at `22px`. Don't conflate the two, the hero version is a distinct, more elaborate composition reserved for the one place the mark is the hero of the layout.

**Confirmed against Figma (node `83:1854`):** the small header-scale `logo-icon-animation.gif` uses the identical mask, gradient, and motion spec as the hero mark, same 266×270 blob mask, same four-keyframe linear pan, same 4.74s loop. It's the bare mark with no wordmark layered on top. So there's really one animated asset, exported at two sizes/compositions, not two separate animations to maintain. If the motion spec ever changes, it should change in one place and propagate to both exports.

---

## 6. Minor gaps worth closing

The codebase is disciplined overall, nearly everything routes through a token, but a few hardcoded values slipped through:

- Logo wordmark text (`.site-header__logo-text`, `.mobile-menu__logo-text`, `.site-footer__brand-name`) repeats `font-size: 22px` in three separate places with no shared token. Worth a `--size-logo: 22px` token so it can't drift between the three usages.
- `.hero` uses `padding: 205px` and `gap: 10px`, both one-off values with no matching spacing token (closest is `--space-xxxxl` at 200px).
- `.hero__scrim`'s three-stop gradient and `.site-footer__tagline`'s `13px` are each used once and hardcoded rather than tokenized. Low priority since they're single-use, but flagging for completeness.

None of these are inconsistencies between files the way the DID system had (same token, different values across pages). They're just values that never got promoted to tokens because they're each used in exactly one place. Fine to leave as-is unless this system grows past its current single page.

---

## 7. What this project is

AI Design LA is its own project, unrelated to Dreaming in Design. It's the site for the AI Design LA Meetup (meetup.com/ai-design-la), a Los Angeles community for designers, researchers, and design engineers exploring AI's effect on design practice. Co-founded by Lance Shields, Noel Saw, and Crystal Ehrlich. Planned to live at aidesignla.org or aidesignla.com. Don't treat this design system as a variant, sibling, or eventual merge candidate with DID's. Different brand, different audience, different reason to exist.

---

## 8. Brand channels beyond the site

The website isn't the only surface this system needs to extend to. Current state:

| Channel | Status | Notes |
|---|---|---|
| Website | Live (`lanceshields69.github.io/AI-Design-LA`, moving to aidesignla.org/.com) | Source of truth for this doc |
| LinkedIn | Live: linkedin.com/company/ai-design-la | Not yet audited against this system, I can't fetch LinkedIn's page directly (they block automated access), so someone needs to eyeball the current cover image, logo, and post template against section 1-5 above and flag drift manually, the same kind of check that caught the color drift on the DID marketing site. |
| Substack | Not yet created | When it exists, cover art and profile image should pull from `--gradient-brand` and the logo mark treatment in section 5, not a fresh design pass. |
| Instagram | Not yet created | Same. Also worth deciding up front whether the animated gradient logo gets a static-frame fallback for profile-photo use, since Instagram doesn't support animated profile images. |

Recommendation: once LinkedIn is audited and Substack/Instagram exist, treat their profile imagery, cover art, and any templated post format as downstream consumers of this doc, not separate design decisions. The same instinct that caused the DID marketing site to drift from its app (each new page copied from whichever page was open, not from a shared source) is the exact failure mode to avoid here across channels.
