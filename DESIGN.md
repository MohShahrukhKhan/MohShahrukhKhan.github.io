# Design System — Moh Shahrukh Khan Portfolio

## Design Rationale

**Subject:** Java Backend Engineer — production systems, Spring Boot, PostgreSQL, API design.
**Audience:** Senior engineering hiring managers and backend tech leads evaluating depth vs. breadth.
**Page job:** Convince in under 30s that this engineer ships real systems that handle real load.
**Signature element:** A "system pulse" visual — live-like metrics counter in the hero that cycles through key backend performance deltas.

**Risk taken:** No profile photo, no "hello world" friendliness, no generic developer tools section. The hero is an engineering thesis, not a greeting card.

---

## Color System

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-base` | `#07080c` | Page background — deepest layer |
| `--bg-surface` | `#0e0f14` | Card / section background |
| `--bg-elevated` | `#15161c` | Elevated surface (hover states) |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Default borders |
| `--border-accent` | `rgba(129,140,248,0.25)` | Focused / hover borders |
| `--text-primary` | `#f1f5f9` | Body text |
| `--text-secondary` | `#94a3b8` | Supporting text |
| `--text-tertiary` | `#475569` | Captions / meta |
| `--accent` | `#818cf8` | Primary accent (indigo) |
| `--accent-hover` | `#6366f1` | Accent hover |
| `--accent-subtle` | `rgba(129,140,248,0.1)` | Accent backgrounds |
| `--amber` | `#f59e0b` | Metrics / data emphasis |
| `--emerald` | `#34d399` | Positive deltas / status |
| `--surface-glass` | `rgba(14,15,20,0.75)` | Glass surfaces |

### Design notes

- Near-black is slightly blue-tinted (#07080c vs pure #000) to avoid flatness
- Indigo accent (#818cf8) chosen over generic blue for distinction
- Amber used sparingly for numerical data, never for UI chrome
- No white cards — all surfaces stay dark, hierarchy created via opacity and border
- Glass elements use subtle backdrop-blur but keep opacity high enough for readability

---

## Typography System

### Typefaces

| Role | Face | Weight | Size Scale |
|------|------|--------|------------|
| Display / Hero | Cabinet Grotesk | 800 (extrabold) | 64 / 80 / 120 / 160 |
| Heading | Cabinet Grotesk | 700 (bold) | 20 / 24 / 30 / 36 / 48 |
| Body | Manrope | 300 / 400 / 500 | 14 / 16 / 18 |
| Technical / Data | JetBrains Mono | 400 / 500 | 10 / 11 / 12 / 14 |

### Type scale

```
text-caption:   11px/1.4  Mono    — meta, timestamps, labels
text-small:     13px/1.5  Manrope — secondary info
text-body:      15px/1.6  Manrope — paragraphs
text-lead:      17px/1.6  Manrope — intro / summary text
text-h4:        21px/1.3  Cabinet — small headings
text-h3:        26px/1.2  Cabinet — section sub-headings
text-h2:        34px/1.15 Cabinet — major section titles
text-h1:        48px/1.1  Cabinet — page section hero
text-display:   72px/0.95 Cabinet — hero name
text-mega:      120px/0.9 Cabinet — footer / large typography
```

### Treatment

- Display text uses `letter-spacing: -0.03em` for tightness
- Body text uses `letter-spacing: 0.01em` for readability at small sizes
- Mono text for anything technical: metrics, code, file paths, keyboard shortcuts
- No paragraph exceeds ~65ch for readability
- Gradient text only on the hero name — nowhere else

---

## Layout System

### Grid

1050px max-width content, 7-column grid on desktop, 4-column tablet, 2-column mobile.

```
Desktop:  ┌──┬──┬──┬──┬──┬──┬──┐
Tablet:   ┌──┬──┬──┬──┐
Mobile:   ┌──┬──┐
```

All sections use consistent `py-28 lg:py-40` vertical rhythm.

### Section ordering (narrative flow)

1. **Hero** — Thesis statement + system pulse metrics
2. **About** — Compact, 2-sentence "who I am" + core pillars
3. **Experience** — MobiOffice as the deep narrative (not a bullet list, a story)
4. **Case Studies** — Three enterprise systems with architecture, challenges, impact
5. **Performance** — Quantified optimization results (keep chart)
6. **Skills** — Tabs + marquee (keep but refine)
7. **System Design** — Keep but lighter treatment, 2-column
8. **Contact** — Keep with form

Removed sections: GitHub Activity (no one checks this), Testimonials (placeholder content hurts credibility), AI Workflow (consolidated into Experience narrative)

### Spacing

- Consistent horizontal padding: `px-6 lg:px-10` (max-w-7xl wrapper)
- Section gap: 28 (py-28 = 7rem) mobile, 40 (py-40 = 10rem) desktop
- Card padding: `p-6 lg:p-8`
- Grid gaps: 4 (1rem) for tight grids, 6 (1.5rem) for loose grids

---

## Animation System

### Principles

1. **Subtle** — Never animate something just because you can. Every animation serves comprehension.
2. **Fast** — 300-600ms. No lingering transitions.
3. **Staggered** — Elements in grids stagger by 50-80ms per item.
4. **Reduced motion respected** — `@media (prefers-reduced-motion)` disables all non-essential motion.

### Timing

| Type | Duration | Easing | Trigger |
|------|----------|--------|---------|
| Fade in | 600ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Scroll into view |
| Stagger item | 500ms | Same | Scroll, per-item delay |
| Hover lift | 250ms | `ease-out` | Hover |
| Glass transition | 300ms | `ease-out` | Nav scroll |
| Marquee | 40s linear | `linear` | Autoplay |
| Counter | 2s per number | `ease-out` | Scroll into view |

### What moves

- Section headings fade up on scroll (once)
- Cards stagger in by row
- Buttons have subtle lift on hover (`-translate-y-0.5`)
- Navbar glass transition on scroll
- Background grain is static (never animated)
- Hero big text does NOT animate on scroll (stays static for performance)

### What does NOT move

- Background elements (no parallax, no particle effects)
- Text gradients (no animated shimmer on text)
- Loaders / spinners (minimal, only on form submit)

---

## Component System

### Component inventory

| Component | Pattern | Notes |
|-----------|---------|-------|
| Navbar | Fixed, glass on scroll, 3-dot mobile menu | No hamburger animation — just simple open/close |
| Hero | Static layout, animated CTA arrow | No particle background — replaced with grid pattern + subtle grain |
| SectionHeading | Kicker (mono, small) + H2 + optional p | Kicker uses amber accent color, not blue |
| PillarCard | Icon + title + desc | Used in About section |
| ExperienceTimeline | Vertical timeline, glass cards | Single company focus with expandable detail |
| CaseStudyCard | Image + content grid | Architecture + challenges + impact in three columns |
| MetricCard | Label + big number + delta + note | Used in Performance section |
| SkillTabs | Category buttons + animated grid | Preserved from current |
| ContactForm | Two-column layout, channels + form | Preserved pattern, refined spacing |
| Footer | Large typography + links + copyright | Preserved |

### Border radius

```
cards:          rounded-2xl (16px)
buttons:        rounded-full (9999px)
badges/tags:    rounded-md (6px)
icons:          rounded-xl (12px)
section images: rounded-2xl (16px)
```

### Button variants

| Variant | Style |
|---------|-------|
| Primary | `bg-accent text-black hover:bg-accent-hover` |
| Secondary (glass) | `bg-surface border border-border-subtle hover:border-border-accent` |
| Ghost | `text-text-secondary hover:text-text-primary` |
| CTA arrow | Primary + `→` arrow icon on right |

---

## Writing / Copy Tone

- Active voice, technical but not academic
- Metrics come first: "Cut report time 87% from 38s to 5s"
- No fluff adjectives ("robust", "scalable", "cutting-edge")
- Every sentence answers "so what?" for a hiring manager
- Section headings are declarative, not cute

---

## File Structure (post-refactor)

```
frontend/src/
├── index.css          # Design tokens + utilities + keyframes
├── main.jsx           # Entry
├── App.jsx            # Router + section order
├── lib/
│   └── portfolioData.js   # All content
└── components/
    ├── portfolio/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Experience.jsx
    │   ├── CaseStudies.jsx
    │   ├── Performance.jsx
    │   ├── Skills.jsx
    │   ├── SystemDesign.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── SectionHeading.jsx
    │   └── SectionDivider.jsx   # NEW — subtle visual separators between sections
    └── ui/
        ├── input.jsx
        └── textarea.jsx
```
