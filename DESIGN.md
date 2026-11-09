# PressPoint GitHub Page · Design Specification

**Status: binding.** Any person or agent building the PressPoint GitHub page must follow this file exactly. Content comes from [`CONTENT.md`](CONTENT.md); **how it looks comes from here.** If something isn't covered here, choose the option closest to the PressPoint system itself, and add the decision to this file.

**Conformance target: WCAG 2.2 Level AA.** Every colour pairing below has a measured contrast ratio. Pairings not listed are **not allowed** until they are measured and added.

---

## 0 · Where this design comes from

This page is the public face of the PressPoint system, so it uses **the system's own design tokens**, not a new look. Every value below is copied from the production codebase:

| Source file (PressPoint repo) | What this spec takes from it |
|---|---|
| `resources/css/kiosk-tokens.css` | Brand colours, derived shades, semantic roles, shadows, radii, motion, spacing |
| `resources/css/kiosk-palette.css` | The kiosk's seven-colour accent palette |
| `resources/css/mobile-route.css` | The open-licence font pairing (Space Grotesk + JetBrains Mono) |
| `resources/fonts/` | The licensed font files and their OFL licences |

Two rules from the codebase carry over unchanged:

1. **Flat colour only. No gradients, ever**, for backgrounds, buttons, text or overlays. Depth comes from solid fills, rules and hard shadows. (Pattern images such as a dot grid are fine; colour ramps are not.)
2. **Consume semantic roles, not raw hex.** Stylesheets use `--surface`, `--ink`, `--accent` and so on. Raw brand hex values appear in exactly one place: the `:root` token block.

---

## 1 · Design concept: "The front page"

The page should read like **the front page of *The Gears***, the same editorial print language the kiosk uses:

- A **masthead** hero: a big display title between two thin rules, like a newspaper nameplate. The program and college sit in a small byline under the buttons, not as a label above the title.
- Sections divided by **ruled lines**, like newspaper columns, not floating cards with soft shadows.
- **Numbers set as headlines**: 98.21%, 290 and 4.83–5.00 appear huge in the display face.
- **Hard offset "press" shadows** on buttons and cards (`0 6px 0 0`), like ink stamped on paper. They push down when pressed.
- Sections open straight on their heading, set big in the display face. No slug, number or label above it (see §10).

What it must **not** look like: the reference AgeSense page (plain academic document), a SaaS landing page (gradients, glassmorphism, soft blurred shadows), or a generic Bootstrap template.

---

## 2 · Colour

### 2.1 Tokens (copy verbatim)

```css
:root {
  /* Layer 1 — brand constants (The Gears '26–'27). Only place these hexes appear. */
  --brand-maroon: #6b2516;
  --brand-gold:   #f4be27;
  --brand-cream:  #e9dac4;
  --brand-maroon-rgb: 107 37 22;
  --brand-gold-rgb:   244 190 39;
  --brand-cream-rgb:  233 218 196;

  /* Layer 2 — derived shades */
  --brand-maroon-lift: #82301d;  /* hover on maroon fills */
  --brand-maroon-dark: #4e1b10;  /* pressed; dark-theme raised */
  --brand-maroon-deep: #2f0f08;  /* dark-theme page ground */
  --brand-gold-lift:   #f7cf5c;  /* focus glow on dark */
  --brand-gold-dark:   #d9a412;  /* hover/pressed on gold */
  --brand-cream-light: #f4ece0;  /* raised paper */
  --brand-cream-dark:  #d5c2a5;  /* sunken wells, decorative rules */

  /* Layer 3 — neutrals + semantics */
  --n-white: #ffffff;
  --n-500:   #6b5e50;            /* quiet text neutral */
  --n-900:   #241009;            /* warm near-black — never pure #000 */
  --ok:      #1f6a24;            /* page-safe; the app's #2f7d32 is 4.37:1, too low */
  --warn:    #8a5200;            /* page-safe; the app's #b26a00 is 3.62:1, too low */
  --danger:  #b3261e;

  /* Kiosk accent palette — DECORATIVE FILLS ONLY (see 2.4) */
  --kiosk-amber:      #E89A1C;
  --kiosk-terracotta: #CC5A1F;
  --kiosk-crimson:    #B11E2A;
  --kiosk-maroon:     #4A1A12;
  --kiosk-espresso:   #1F0F0C;
  --kiosk-paper:      #F4EFE6;
  --kiosk-cream:      #EAE3D9;

  /* Layer 4 — semantic roles (the ONLY tokens components use) */
  --surface:             var(--brand-cream);
  --surface-raised:      var(--brand-cream-light);
  --surface-sunken:      var(--brand-cream-dark);
  --surface-brand:       var(--brand-maroon);
  --surface-brand-hover: var(--brand-maroon-lift);

  --ink:        var(--brand-maroon);
  --ink-strong: var(--n-900);
  --ink-muted:  rgb(var(--brand-maroon-rgb) / 0.80);  /* do NOT lower — see 2.2 */
  --ink-invert: var(--brand-cream);

  --rule:         rgb(var(--brand-maroon-rgb) / 0.20);  /* decorative only */
  --rule-strong:  rgb(var(--brand-maroon-rgb) / 0.45);  /* decorative only */
  --border-ui:    var(--brand-maroon);                  /* inputs, buttons, focusable edges */

  --accent:       var(--brand-gold);       /* a FILL colour */
  --accent-hover: var(--brand-gold-dark);
  --accent-ink:   var(--brand-maroon);     /* text sitting ON gold */
  --accent-text:  var(--brand-maroon);     /* "accent" as TEXT on cream — gold can't be text here */

  --focus-ring:   var(--brand-maroon);
  --focus-ring-on-brand: var(--brand-gold);

  --border-rule:  2px solid var(--ink);
  --shadow-press: 0 6px 0 0 var(--ink);
  --shadow-lift:  0 12px 28px rgb(var(--brand-maroon-rgb) / 0.18);
}
```

### 2.2 Approved text pairings (WCAG 1.4.3, AA = 4.5:1 normal, 3:1 large)

"Large" means at least 24 px regular or 18.66 px bold.

| Text | On | Ratio | Allowed for |
|---|---|---|---|
| `--ink` `#6b2516` | `--surface` `#e9dac4` | **8.04** | All text |
| `--ink` | `--surface-raised` `#f4ece0` | **9.43** | All text |
| `--ink` | `--surface-sunken` `#d5c2a5` | **6.36** | All text |
| `--ink` | white | **11.04** | All text |
| `--ink-strong` `#241009` | `--surface` | **13.26** | Long body copy |
| `--ink-strong` | `--surface-raised` | **15.54** | Long body copy |
| `--ink-muted` (maroon @ 80%) | `--surface` | **5.11** | Captions, meta, secondary text |
| `--ink-muted` | `--surface-raised` | **5.70** | Captions, meta, secondary text |
| `--n-500` `#6b5e50` | `--surface` | **4.58** | Secondary text (borderline; prefer `--ink-muted`) |
| `--ink-invert` `#e9dac4` | `--surface-brand` `#6b2516` | **8.04** | All text on maroon |
| `--brand-cream-light` | `--surface-brand` | **9.43** | All text on maroon |
| cream @ 80% on maroon | `--surface-brand` | **5.73** | Secondary text on maroon |
| `--brand-gold` `#f4be27` | `--surface-brand` | **6.44** | Gold text/links on maroon |
| `--ink-invert` | `--surface-brand-hover` `#82301d` | **6.40** | Hover state on maroon |
| `--accent-ink` `#6b2516` | `--accent` `#f4be27` | **6.44** | Text on gold buttons |
| `--accent-ink` | `--accent-hover` `#d9a412` | **4.88** | Gold button hover |
| `--ink-strong` | `--accent` | **10.62** | Text on gold (stronger) |
| `--kiosk-crimson` `#B11E2A` | `--surface` | **4.95** | Text, sparingly (labels, tags) |
| `--kiosk-paper` | `--kiosk-crimson` | **5.94** | Text on crimson fill |
| `--kiosk-espresso` | `--kiosk-amber` | **8.01** | Text on amber fill |
| `--kiosk-paper` | `--kiosk-espresso` | **16.20** | Text on espresso fill |
| `--ok` `#1f6a24` | `--surface-raised` | **5.70** | Success text |
| `--warn` `#8a5200` | `--surface-raised` | **5.45** | Warning text |
| `--danger` `#b3261e` | `--surface-raised` | **5.58** | Error text |

### 2.3 Forbidden pairings (these fail)

| Pairing | Ratio | Why it's tempting, and what to use instead |
|---|---|---|
| Gold `#f4be27` text on cream | **1.25** | "Brand accent text." Use `--accent-text` (maroon) instead; gold is a fill. |
| Gold-dark `#d9a412` text on cream | **1.65** | Same: never use gold text on a light background. |
| Amber `#E89A1C` text on cream | **1.69** | Use amber only as a fill with espresso text on it. |
| Terracotta `#CC5A1F` text on cream | **3.03** | Passes only for large text ≥ 24 px; prefer crimson. |
| Paper text on terracotta | **3.63** | Large text only; never body copy. |
| Maroon @ 34% or 45% as text | 1.84 / 2.29 | Those are rule colours. Use `--ink-muted`. |
| `#2f7d32` / `#b26a00` (the app's ok/warn) as text | 4.37 / 3.62 | Use the page-safe `--ok` / `--warn` above. |
| Cream-dark on cream | **1.26** | Decorative wells only, never text or a boundary. |

### 2.4 Non-text contrast (WCAG 1.4.11, AA = 3:1)

- **Input borders, button outlines, checkbox edges and focus rings** must be at least 3:1 against what's next to them. Use `--border-ui` (solid maroon, **8.04** on cream). `--rule-strong` measures only **2.29**, so it is **decorative only**.
- **Chart bars and diagram strokes** that carry meaning: maroon (8.04), crimson (4.95) or espresso. Amber and gold bars on cream need a 1px maroon outline.
- **Kiosk accent colours (amber, terracotta, crimson)** are for decorative fills: section tabs, milestone chips, stat-block backgrounds. Each carries text only in an approved pairing from 2.2.

### 2.5 Colour use rules

- Page background: `--surface` (cream). Raised panels: `--surface-raised`.
- The single saturated field is `--surface-brand` (maroon): the masthead band, the footer and primary-button fills. **At most two maroon bands per screen height**, the way the CMS uses it sparingly.
- Gold appears as **fills**: the primary call to action, highlight markers, the active nav underline. Never as text on cream.
- **Never rely on colour alone** (1.4.1). Pass/fail in results tables gets a text label or icon as well as colour; links in body text are underlined.

### 2.6 Dark mode (optional, only if fully built)

If a dark theme ships, it follows `prefers-color-scheme: dark` and redefines **only layer 4**:

| Role | Value | Measured against ground `#2f0f08` |
|---|---|---|
| `--surface` | `--brand-maroon-deep` `#2f0f08` | — |
| `--surface-raised` | `--brand-maroon-dark` `#4e1b10` | — |
| `--ink` | `--brand-cream-light` `#f4ece0` | **15.03** |
| `--ink-muted` | cream @ 80% | **8.49** |
| `--accent-text` | `--brand-gold` | **10.26** (gold *is* readable on dark) |
| `--focus-ring` | `--brand-gold-lift` `#f7cf5c` | **11.77** |
| `--border-ui` | cream @ 45% `#836a5d` | **3.51** |

Raised panels (`#4e1b10`) against the ground are only 1.25:1, so in dark mode **every panel needs a `--border-ui` edge**. Ship light mode only if the dark theme isn't fully tested.

---

## 3 · Typography

### 3.1 Families

The brand fonts **Moderniz** and **Gilroy** are commercial, and their **webfont licence is unconfirmed** (see `resources/fonts/README.md` in the system repo). A GitHub Page is public redistribution, so **they must not be uploaded or linked**. The page uses the system's own open-licence (SIL OFL 1.1) set instead, which is already in this folder:

| Role | Family | Stands in for | File |
|---|---|---|---|
| **Display** (masthead, section titles, big numbers) | **Archivo Black** | Moderniz / Gilroy Black | `assets/fonts/archivo-black-regular.woff2` |
| **Body and UI** | **Space Grotesk** (variable 300–700) | Gilroy Regular | `assets/fonts/space-grotesk-variable.woff2` |
| **File paths and code only** | **JetBrains Mono** (variable 400–800) | same as the system | `assets/fonts/jetbrains-mono-variable.woff2` |

Space Grotesk + JetBrains Mono is exactly the pairing PressPoint's mobile route page uses, so this is the system's own fallback, not an outside choice. Licence texts are in `assets/fonts/LICENSES/` and **must be published alongside the fonts** (an OFL requirement).

```css
@font-face {
  font-family: "Archivo Black";
  src: url("assets/fonts/archivo-black-regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Space Grotesk";
  src: url("assets/fonts/space-grotesk-variable.woff2") format("woff2");
  font-weight: 300 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "JetBrains Mono";
  src: url("assets/fonts/jetbrains-mono-variable.woff2") format("woff2");
  font-weight: 400 800; font-style: normal; font-display: swap;
}

:root {
  --font-display: "Archivo Black", "Arial Black", "Helvetica Neue", sans-serif;
  --font-body:    "Space Grotesk", "Segoe UI", system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}
```

Paths are **relative** (no leading `/`), so they work at `https://<user>.github.io/<repo>/`. In the actual stylesheet (`styles/tokens.css`) they are written as `../assets/fonts/...`, because CSS `url()` resolves from the stylesheet's own folder, not from the page. **No Google Fonts or other CDN links.** The system self-hosts everything, and so does this page.

### 3.2 Type scale

Fluid, based on the system's `--kiosk-text-*` scale. All sizes are in `rem`, so browser zoom and user font settings work (WCAG 1.4.4).

| Token | Value | Use | Family / weight |
|---|---|---|---|
| `--text-display` | `clamp(3.0rem, 1.9rem + 5.4vw, 7.0rem)`, capped at `13cqi` of the nameplate so it stays on one line | "PRESSPOINT" masthead | Display |
| `--text-3xl` | `clamp(2.5rem, 1.8rem + 3.2vw, 4.5rem)` | Headline figures (98.21%) | Display |
| `--text-2xl` | `clamp(2.0rem, 1.5rem + 2.2vw, 3.25rem)` | Section titles (h2) | Display |
| `--text-xl` | `clamp(1.5rem, 1.25rem + 1.2vw, 2.25rem)` | Subsection titles (h3) | Body 700 |
| `--text-lg` | `clamp(1.2rem, 1.05rem + 0.7vw, 1.5rem)` | Lead paragraphs, card titles | Body 500 |
| `--text-base` | `clamp(1.0rem, 0.95rem + 0.25vw, 1.125rem)` | Body copy (**never below 16 px**) | Body 400 |
| `--text-sm` | `0.875rem` | Captions, table cells | Body 400 |
| `--text-sm` for labels | `0.875rem`, sentence case, **no tracking, no uppercase** | Nav links (`0.9375rem`), captions, card roles, callout labels, table captions | Body 400 or 700 |

### 3.3 Typesetting rules

- Body `line-height: 1.6`; headings `1.05–1.15`; display numbers `1`.
- Measure: body paragraphs `max-width: 68ch`.
- Paragraph spacing ≥ 1.5× font size is achievable without breaking layout (1.4.12 text spacing): **no fixed heights on text containers**.
- Archivo Black is **display only**: headings and figures, never paragraphs, never below 24 px.
- Uppercase is for the **PRESSPOINT wordmark only** (nav, masthead, footer). Labels and headings are sentence or title case, untracked (§10).
- **Two weights only:** 400 and 700 (Archivo Black has its own single weight).
- Numbers in tables use `font-variant-numeric: tabular-nums`.
- Italics are reserved for publication names: *The Gears*.

---

## 4 · Layout and spacing

### 4.1 Spacing scale (from `--kiosk-s-*`)

```css
:root {
  --s-1: 4px;   --s-2: 8px;   --s-3: 16px;  --s-4: 24px;
  --s-5: 32px;  --s-6: 48px;  --s-7: 72px;  --s-8: 96px;
}
```

Use only these values for margin, padding and gaps.

### 4.2 Grid

- Content container: `max-width: 1200px`, side gutter `--s-3` (16 px) on phones, `--s-5` from 768 px up.
- A 12-column grid at ≥ 1024 px, 6 columns at 768 px, and 1 column below. **No horizontal scrolling at 320 px wide** (1.4.10 reflow); wide tables get their own `overflow-x: auto` wrapper with `tabindex="0"` and a label.
- Section vertical rhythm: `--s-8` between sections on desktop, `--s-7` on mobile.
- Each section opens with its h2, nothing above it. Sections are separated by a `--border-rule` line across the top.

### 4.3 Shape and depth

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `4px` | Tags, inputs, table chips |
| `--radius-md` | `12px` | Cards, images, buttons |
| `--radius-lg` | `20px` | Hero image frame only |
| `--border-rule` | `2px solid var(--ink)` | Section dividers, card edges |
| `--shadow-press` | `0 6px 0 0 var(--ink)` | Buttons and interactive cards (resting state) |
| `--shadow-lift` | `0 12px 28px rgb(107 37 22 / .18)` | Screenshot frames only |

The press interaction: on `:active`, `transform: translateY(4px)` and the shadow shrinks to `0 2px 0 0`.

---

## 5 · Components

### 5.1 Navigation bar
- Sticky, `--surface` background, a `--border-rule` bottom edge.
- Brand wordmark "PRESSPOINT" in Display at `1.5rem` (24 px, the display face's minimum from §3.3); links in the body face at `0.9375rem`, sentence case, weight 400, untracked.
- Active section: a 4 px gold underline **plus** `aria-current="true"`. Hover: underline.
- Below 768 px: collapses to a "Menu" button (`aria-expanded`, `aria-controls`). The menu opens as a full-width list with tap targets ≥ 44 px.
- The first focusable element is a **"Skip to content"** link, visible on focus.

### 5.2 Masthead hero
- A `--surface-brand` (maroon) band, `--ink-invert` text.
- Text before the buttons: the title, the full system title and the one-line summary, nothing else. The program and college go in a byline **under** the buttons, `--text-sm`, cream @ 80% (5.73:1), on two lines (no middle dots).
- Title in `--text-display` Display, cream, `line-height: 1.02`. Subtitle (the full system title) in Body 400, `--text-lg`.
- Thin cream rules above and below the title, like a newspaper nameplate.
- Buttons: primary **gold** (6.44:1), secondary **outlined cream** (2px cream border, 8.04:1).
- Headline figures strip below: 4–5 stats, number in `--text-3xl` Display gold on maroon (6.44:1), label in Body cream.
- Hero image (kiosk screenshot or photo) on the right at ≥ 1024 px, stacked below on mobile, in a `--radius-lg` frame.

### 5.3 Buttons
| Variant | Fill | Text | Border | Hover | Focus |
|---|---|---|---|---|---|
| Primary | `--accent` | `--accent-ink` (6.44) | 2px `--ink` | fill `--accent-hover` (4.88) | 3px `--focus-ring` outline, 3px offset |
| Secondary | transparent | `--ink` (8.04) | 2px `--ink` | fill `--surface-raised` | same |
| On maroon | `--accent` or cream outline | maroon / cream | 2px cream | as above | `--focus-ring-on-brand` (gold, 6.44) |

Minimum height 44 px and minimum width 44 px (target size; AA requires 24 px, and 44 px matches the kiosk's touch-first design). Labels are verbs: "Open the live system", not "Click here".

### 5.4 Cards (team, features, objectives)
- `--surface-raised`, `--border-rule`, `--radius-md`, padding `--s-4`.
- Clickable cards: `--shadow-press`, and the **whole card is one link** (no nested links), with the title as the link text.
- Team card: square photo (or initials disc in maroon with cream initials), name in Body 700, role in Body `--text-sm`, `--ink-muted`, sentence case.

### 5.5 Stat blocks (Results)
- A huge number in Display with tabular figures, a label below in Body, a source line in Body `--text-sm`.
- Each figure appears **once as a headline**: the hero stats row holds 98.21%, 290, 4.83–5.00, 6 and 12, so Results doesn't repeat them as stat cards (§10).
- Can sit on a kiosk accent fill: **crimson + paper text (5.94)** or **amber + espresso text (8.01)** or **espresso + paper (16.20)**. These echo the kiosk's coloured menu rows.

### 5.6 Tables
- Real `<table>` markup with `<caption>`, `<th scope="col">` and `<th scope="row">` where rows have headers.
- Header row: `--surface-brand` fill, `--ink-invert` text (8.04).
- Body rows: alternate `--surface-raised` and `--surface`. Text is `--ink-strong`.
- Pass/fail cells: text **and** a symbol ("✔ 100%", "✖ 70%"). Colour is never the only signal.

### 5.7 Figures and screenshots
- `<figure>` with a short `<figcaption>` naming what is shown, e.g. "Kiosk User Page". **No figure numbers** ("Figure 4.3") on the page; manuscript figure numbers belong only in `CONTENT.md` and in comments.
- `--radius-md`, a 2px `--ink` frame, `--shadow-lift`.
- Kiosk screenshots are portrait (768 × 1024): show them at most 420 px wide, never stretched. Dashboard screenshots are landscape.
- Every image has meaningful `alt` (see 7). Diagrams that hold data (architecture, Agile cycle) also get a short text description next to them.
- `loading="lazy"` on every image below the hero, with `width`/`height` attributes set to avoid layout shift.

### 5.8 Callouts
- Scope note or limitations: `--surface-sunken` fill, a 2px `--ink` border **all round** (no thick side stripe), `--radius-md`, and a bold sentence-case label ("Scope note").

### 5.9 Footer
- `--surface-brand` band, cream text, gold links (6.44), underlined.
- Institution, the "built for *The Gears*" line, © 2026 Bajao, Rebong, Sisante, and a font licence credit line.

---

## 6 · Motion

From the system's motion tokens:

```css
:root {
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur-fast: 160ms;  --dur-med: 280ms;  --dur-slow: 480ms;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
```

- Allowed: button press, hover colour changes, a section fading in **once** (≤ 480 ms, opacity + 20px translate).
- Not allowed: parallax, auto-playing carousels, anything that flashes more than 3 times a second (2.3.1), or looping animation.
- Any video embed must not autoplay with sound, and must have controls (1.4.2, 2.2.2).

---

## 7 · Accessibility checklist (WCAG 2.2 AA)

Every item must pass before the page ships.

**Perceivable**
- [ ] 1.1.1 Every `<img>` has `alt` describing what it *shows* ("Kiosk main menu with six module buttons"); purely decorative images have `alt=""`.
- [ ] 1.3.1 One `<h1>` (PressPoint); headings descend without skipping (h2 → h3). Landmarks: `<header>`, `<nav aria-label="Main">`, `<main id="content">`, `<footer>`. Lists use `<ul>`/`<ol>`; tables use `<th>` and `<caption>`.
- [ ] 1.3.2 DOM order matches visual order (the hero image may sit visually to the right, but comes after the text in the DOM).
- [ ] 1.4.1 No information is carried by colour alone.
- [ ] 1.4.3 / 1.4.11 Only pairings from 2.2 and 2.4 are used.
- [ ] 1.4.4 The page is usable at 200% zoom.
- [ ] 1.4.10 No horizontal scrolling at 320 CSS px (tables excepted, in their own scroll wrapper).
- [ ] 1.4.12 No clipping when the text-spacing bookmarklet is applied.
- [ ] 1.4.13 There are no hover-only tooltips; if one is added, it is dismissible with Esc and hoverable.

**Operable**
- [ ] 2.1.1 Everything works with the keyboard alone; the mobile menu opens with Enter/Space and closes with Esc.
- [ ] 2.4.1 The skip link works.
- [ ] 2.4.2 `<title>`: "PressPoint · Cloud-Based Interactive Kiosk for The Gears".
- [ ] 2.4.4 Link text makes sense on its own. External links say so ("Live system (opens in new tab)") if they open a new tab.
- [ ] 2.4.7 / 2.4.11 A focus indicator is always visible: `outline: 3px solid var(--focus-ring); outline-offset: 3px;`. **Never `outline: none`** without a replacement. The sticky nav must not cover a focused element (`scroll-padding-top` equal to the nav height).
- [ ] 2.5.8 Interactive targets are ≥ 24 × 24 px (this spec uses 44).

**Understandable**
- [ ] 3.1.1 `<html lang="en">`.
- [ ] 3.2.3 Navigation is identical on every page if there is more than one.

**Robust**
- [ ] 4.1.2 Custom controls carry correct roles and states (`aria-expanded` on the menu button). Prefer native elements: `<button>`, `<a>`, `<details>`.
- [ ] The HTML validates (no duplicate ids).

**Verify with:** Lighthouse Accessibility = 100, axe DevTools with 0 violations, keyboard-only walkthrough, and a 320 px viewport check.

---

## 8 · Implementation rules for the building agent

1. **Plain HTML + CSS** (`index.html`, `styles/`), plus a minimal script only for the mobile menu and active-nav highlighting. No framework, matching how PressPoint's own frontend is built. The page is `index.html` because GitHub Pages serves that file at the site root.
2. The token block in §2.1 goes in `styles/tokens.css` and loads first. Component CSS goes in `styles/` subfolders. The full layout is in §9.
3. **No external requests**: no font CDNs, icon CDNs or analytics. Icons are inline SVG with `aria-hidden="true"` when decorative.
4. **No gradients, no `backdrop-filter` glass, no blurred drop shadows** except `--shadow-lift` on screenshots.
5. All asset paths relative (`assets/...`, `images/...`), so the page works under a GitHub Pages project path.
6. Content and wording come from `CONTENT.md`. Don't invent facts, numbers or quotes.
7. If a needed pairing, size or component isn't in this file, **stop and add it here with its measured ratio** before using it.

---

## 9 · File organization and reusable components

### 9.1 Folder layout

Each reusable component lives in **one folder** that holds everything it needs: its CSS, a reference `.html` snippet with the canonical markup and, if it has behaviour, its JS.

```
presspoint-gears/
├── index.html                 the page (GitHub Pages serves it at the site root)
├── README.md                  what this repository and page are for
├── CONTENT.md                 content guide: what the page says
├── DESIGN.md                  this file: how the page looks
├── assets/fonts/              self-hosted OFL fonts + LICENSES/
├── images/                    screenshots and figures (see the CONTENT.md assets checklist)
└── styles/
    ├── tokens.css             §2–§6 tokens. Only file with raw hex values. Loads first.
    ├── base.css               reset, text, page layout, helpers (.container, .section, …)
    ├── buttons/
    │   ├── buttons.css        .button, .button-primary, .button-secondary, .is-pending
    │   └── buttons.html       copy-paste markup for every variant
    ├── navbar/
    │   ├── navbar.css         sticky bar, phone menu, active link
    │   ├── navbar.html        copy-paste markup (skip link + header)
    │   └── navbar.js          menu toggle, Esc to close, active-section highlight
    ├── footer/
    │   ├── footer.css         maroon footer band
    │   └── footer.html        copy-paste markup
    ├── content/
    │   ├── content.css        cards, tags, callouts, tables, figures, stats, steps, flow, pending
    │   └── content.html       copy-paste markup for each block
    └── sections/
        └── sections.css       layout used by ONE section only (masthead, team, links)
```

**Load order** (in `<head>`): `tokens.css` → `base.css` → `buttons` → `navbar` → `footer` → `content` → `sections`. Later files may use earlier ones, never the reverse.

**Where does new CSS go?**

| If the style is… | Put it in |
|---|---|
| a colour, size, space, radius or timing value | `tokens.css` (as a token) |
| used by many sections (a new kind of card, a badge) | `content/content.css`, plus a snippet in `content.html` |
| a new self-contained component (e.g. a lightbox) | a **new folder** `styles/<name>/` with `<name>.css` and `<name>.html` (and `<name>.js` if needed), linked in `<head>` before `sections.css` |
| only for one section | `sections/sections.css`, under that section's comment banner |

No `style="…"` attributes in `index.html`. Use a helper class (§9.3) or add one.

### 9.2 Reusing the navbar, footer and buttons

The page is plain static HTML with no build step, so a component is reused by **copying its snippet** from its folder:

1. Link the component's CSS (and JS, if any) in `<head>` in the load order above.
2. Copy the markup from `<name>.html` into the page.
3. Change only the **content** (link text, `href`s). Don't rename classes or `data-*` attributes.

The snippet file is the **master copy**. If you change the navbar or footer markup, change `navbar.html` / `footer.html` first, then paste it into every page that uses it. The `index.html` banner comments say which snippet each block came from.

Component notes:

- **Navbar**: add or remove a menu item by copying or deleting an `<li>`. `navbar.js` finds the links and the sections they point to on its own, so there is no list to keep in sync. Keep `data-navbar`, `data-navbar-toggle` and `data-navbar-menu`. Without JS the links stay visible and wrap; the "Menu" button only appears once JS runs.
- **Footer**: keep `surface-brand` on the `<footer>` (cream text, gold links) and keep the font licence credit line (OFL requirement).
- **Buttons**: a button that goes somewhere is an `<a class="button …">`; one that does something is a `<button class="button …">`. The same classes recolour themselves inside a maroon `.surface-brand` band, so there is no separate "on dark" class.

### 9.3 Class naming

Class names are **plain English, lowercase, joined by hyphens**, and start with the component they belong to. You should be able to guess what a class does from its name.

| Pattern | Meaning | Examples |
|---|---|---|
| `component` | the component itself | `.navbar`, `.button`, `.card`, `.figure` |
| `component-part` | a piece inside it | `.navbar-link`, `.card-title`, `.figure-caption`, `.stat-number` |
| `component-variant` | a different look of the same thing | `.button-primary`, `.stat-crimson`, `.figure-portrait` |
| `is-state` | a state, usually toggled by JS | `.is-open`, `.is-enhanced`, `.is-pending` |
| `layout-*` | arranges children, has no look of its own | `.layout-split` (2 columns ≥ 1024 px), `.layout-grid` (auto-wrapping tiles) |
| `space-*` | spacing helper | `.space-above-small` (16 px), `.space-above` (24 px), `.space-above-large` (32 px) |
| `surface-*` | a colour context that swaps the tokens inside it | `.surface-brand` (maroon band) |
| `data-*` attribute | a hook for JS; never style it | `data-navbar`, `data-navbar-toggle` |

Rules:

- No abbreviations (`.button`, not `.btn`; `.navbar-menu`, not `.nav-mnu`). Common acronyms in content are fine.
- No colour or pixel values in class names that describe content (`.stat-crimson` names a kiosk palette fill, which is allowed; `.red-text` or `.mt-24` are not).
- Section-only classes start with the section name: `.masthead-title`, `.team-card`, `.link-list`.
- Ids are only for anchors (`#about`), labels (`aria-labelledby`) and `aria-controls`. Never style by id.

### 9.4 Colour contexts

Components don't hard-code text colours. They read **context tokens** that `tokens.css` defines for cream pages and `.surface-brand` swaps for maroon bands:

| Context token | On cream (default) | Inside `.surface-brand` |
|---|---|---|
| `--text-color` | `--ink-strong` (13.26) | `--ink-invert` (8.04) |
| `--heading-color` | `--ink` (8.04) | `--ink-invert` (8.04) |
| `--muted-color` | `--ink-muted` (5.11) | cream @ 80% (5.73) |
| `--link-color` | `--ink` (8.04) | `--brand-gold` (6.44) |
| `--line-color` | `--ink` | `--ink-invert` |
| `--focus-ring` | maroon | gold (6.44) |

This is why a `.button-secondary` or a `.pending` box works on both backgrounds with the same class. Every value in this table is an approved pairing from §2.2.

### 9.5 Placeholders for content that isn't ready yet

The page ships with visible, clearly marked gaps instead of fake content. Two blocks handle this, both in `content/content.css`:

| Block | Use for | Looks like | Contrast |
|---|---|---|---|
| `.pending` | missing text, roles, numbers, links | dashed `--border-ui` box, bold sentence-case label ("To add") | `--ink-muted` on cream **5.11**; cream @ 80% on maroon **5.73** |
| `.figure-placeholder` | images not exported yet | dashed box on `--surface-sunken` showing the expected file path | `--ink` on sunken **6.36**; cream on maroon-lift **6.40** |
| `.button.is-pending` | a button whose link doesn't exist yet | dashed outline, no press shadow, "(coming soon)" | same as `.pending` |

`.is-pending` buttons are `<span>`s, not links, so they can't be clicked or tabbed to.

Every placeholder in `index.html` has an `<!-- EDIT: … -->` comment right above it saying what goes there and the exact markup to swap in. **To find every gap, search `index.html` for `EDIT:`.** When filling one:

- **Text:** replace the whole `<span class="pending">…</span>` with the real text.
- **Image:** put the file in `images/`, then replace the `<div class="figure-placeholder">…</div>` with
  `<div class="figure-frame"><img src="images/…" alt="…" width="…" height="…" loading="lazy"></div>`. Keep the `<figcaption>`. The hero image doesn't get `loading="lazy"`.
- **Button:** replace the `<span class="button … is-pending">` with `<a class="button button-secondary" href="…">Label</a>`.
- **Optional block you won't use:** delete it along with its `EDIT` comment.
- **Delete the `EDIT:` comment** once its gap is filled, so the search only shows what's left.

The page must not be published with any `.pending` or `.figure-placeholder` left, unless that gap is meant to stay visible.

---

## 10 · Hallmark rules (anti-"generated" checks)

This page was polished with the [Hallmark](https://github.com/Nutlope/hallmark) design skill (installed at `~/.claude/skills/hallmark`). Its rules sit **on top of** everything above. Where an older line in this file disagreed, it has been changed to match.

**Never on this page:**

| Rule | Don't | Do |
|---|---|---|
| No eyebrows (54) | a small label above a heading that only names it ("§ 07 — Methodology" over "Methodology") | open on the heading itself |
| No tracked caps (67) | small text in uppercase or letter-spaced past 0.03em: labels, nav, captions, tags, table captions | body face, a step smaller, sentence case, untracked |
| No mono as costume (64) | monospace on labels or meta | mono only for file paths and code |
| No dot-joined strings (63) | `A · B · C` in visible copy | commas, line breaks or separate lines |
| No emoji icons (30a) | ✔ or ✖ used as an icon in a heading | words, or an inline SVG (table pass/fail symbols beside their numbers are fine) |
| No echoes (69) | the same figure printed in four or more places | state each figure once as a headline; tables may repeat it as data |
| No side stripes (3) | a thick coloured border on one side of a box | a border all round, or none |
| No sideways scroll (34) | anything wider than the screen at 320px | `overflow-x: clip` on `html` and `body`; grid tracks as `minmax(0, 1fr)` |
| Labels never wrap (49) | a button or nav label breaking onto two lines | `white-space: nowrap`; shorten the label |

**Typesetting:** typographic apostrophes (’) in copy; `text-wrap: balance` on headings and `pretty` on paragraphs; tabular figures on big numbers; caps lockups at `line-height` 1.02 or more.

**Kept on purpose** (recorded in the stamp at the top of `styles/tokens.css`):
- **En dashes** in "LSPU – Sta. Cruz Campus" (the official name) and "4.83–5.00" (a range from the manuscript).
- **Copy length and section count.** The copy is the manuscript (`copy: verbatim`), so the word budget and the 12 sections are reported as notes, not fixed.

**Checking the page.** After any visual change, run the linter from the project folder. Render mode needs `puppeteer-core` and a Chrome or Chromium, passed in with `HALLMARK_PUPPETEER` and `CHROME_PATH`:

```bash
node ~/.claude/skills/hallmark/scripts/sloplint.mjs index.html --genre editorial --render --kept
```

It must report **0 FAIL**. Fix or waive every REFLEX in the stamp block, with a reason specific to this page. `.hallmark/compare.html` shows the page before and after the polish.
