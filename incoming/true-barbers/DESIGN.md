---
name: True Barbers Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5b8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#998f83'
  outline-variant: '#4d463c'
  surface-tint: '#e0c298'
  primary: '#e2c399'
  on-primary: '#402d0f'
  primary-container: '#c5a880'
  on-primary-container: '#513d1d'
  inverse-primary: '#725b38'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#d1c5c1'
  on-tertiary: '#362f2c'
  tertiary-container: '#b5aaa6'
  on-tertiary-container: '#463f3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fedeb2'
  primary-fixed-dim: '#e0c298'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#584323'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ece0db'
  tertiary-fixed-dim: '#cfc4bf'
  on-tertiary-fixed: '#201a18'
  on-tertiary-fixed-variant: '#4d4542'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2.5rem
  margin: 2rem
  margin-sm: 1.25rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the atmosphere of a private Nairobi gentleman's club and grooming atelier. It merges high-touch African hospitality with time-honored artisanal barbering traditions. The aesthetic is reserved, masculine, and unapologetically luxurious—avoiding vintage clichés in favor of contemporary editorial prestige.

The visual direction centers on:
- **Atmospheric Depth:** Rich, velvety dark surfaces that absorb light, contrasted against warm ivory calligraphy and precise metallic brass accents.
- **Craftsmanship & Restraint:** Micro-fine borders, deliberate alignment, and generous spacing reminiscent of bespoke tailoring and fine leather goods.
- **Tactile Materiality:** High-end finishes evoking aged walnut, cold steel, and warm brushed brass.

## Colors

The palette is rooted in an uncompromising dark-mode presentation that balances low-sheen charcoals with glowing, refined metallic brass and tactile undertones.

- **Primary (`#C5A880`):** Brushed gold. Used for critical points of focus, key call-to-actions, active service highlights, and bespoke indicators.
- **Secondary (`#D4AF37`):** Warm antique brass. Reserved for interactive micro-states, hover highlights, elevated badges, and decorative accents.
- **Tertiary (`#2A2421`):** Dark walnut / espresso undertone. Provides warm tonal shifts across deep background layers and subtle section transitions.
- **Neutral (`#121212`):** Obsidian matte black. The foundational canvas surface, supported by charcoal steps (`#18181A`, `#222225`) for depth tiers.
- **Text & Support (`#F9F8F5`, `#EFECE6`, `#8E8B85`):** Warm ivory and soft cream handle high-contrast typography, while muted stone gray carries secondary metadata.

## Typography

The type system creates an editorial contrast between old-world sophistication and contemporary digital legibility.

- **Headings (Playfair Display):** Conveys the poise of luxury editorial publishing. It evokes craftsmanship, confidence, and bespoke bespoke heritage. Always set with tight negative letter tracking on large formats.
- **Body & Functional Labels (Inter):** Imparts clean, Swiss-style precision. Set with deliberate tracking on uppercase tags, category badges, and pricing tiers to complement the serif headline architecture.

## Layout & Spacing

A structured 12-column grid system anchors the layout, accommodating expansive negative space to emphasize exclusivity.

- **Desktop (1200px+):** 12 columns with 2.5rem (`gutter-lg`) spacing and 4rem (`margin-lg`) side canvas margins. Content is deliberately grouped into off-center, editorial compositions.
- **Tablet (768px - 1199px):** 8 columns with 1.5rem (`gutter`) spacing and 2rem (`margin`) margins.
- **Mobile (< 768px):** 4 columns with 1rem (`gutter-sm`) spacing and 1.25rem (`margin-sm`) margins. Dense data lists reflow to full-width card structures.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows; instead, it is articulated through tonal layering and micro-thin structural dividers.

- **Surface Tiers:**
  - `Base`: `#121212` (Main viewport background).
  - `Surface 1`: `#18181A` (Cards, service menus, panels).
  - `Surface 2`: `#222225` (Flyouts, modals, elevated drawers).
- **Outlines & Borders:** Single-pixel razor lines (`#2A2A2E` or translucent brass `rgba(197, 168, 128, 0.2)`) define structure without adding visual bulk.
- **Ambient Brass Glows:** Modals and highlighted booking slots emit an ultra-diffused, 40px-blur ambient amber-brass halo (`rgba(197, 168, 128, 0.06)`) beneath their base surfaces.

## Shapes

The design system enforces architectural sharpness (`0px` roundedness). Straight, clean lines across containers, inputs, buttons, and visual frames recall bespoke leather-bound goods, razor cases, and tailored craftsmanship. Rounded pills and soft radii are strictly avoided.

## Components

### Buttons
- **Primary:** Solid `#C5A880` background, `#121212` bold uppercase label (`label-lg`), 0px border radius, 14px vertical and 28px horizontal padding. On hover: shifts to `#D4AF37` with subtle inner brass brilliance.
- **Secondary / Ghost:** Transparent background with a 1px border in `rgba(197, 168, 128, 0.4)`. Text set in `#F9F8F5`. On hover: border transitions to 100% brass with a low-opacity fill (`rgba(197, 168, 128, 0.05)`).
- **Text Button:** Uppercase `label-md` with an active 1px underline situated 4px beneath the baseline, rendering in brass.

### Inputs & Select Fields
- Dark canvas fill (`#18181A`), 1px bottom border or all-around hairline border in `#2E2E33`.
- Placeholder text in `#8E8B85`.
- Active focus state: Hairline border transitions to solid `#C5A880`, with no outer focus ring.

### Cards & Service Tiers
- Grounded in `#18181A` with a 1px border in `#222225`.
- Padding ranges from `space-lg` to `space-xl`.
- Subtle hover state: 1px border illuminates to `rgba(197, 168, 128, 0.35)` accompanied by a minimal upward shift of 1px.

### Lists & Service Menus
- Editorial menu formatting: Service title in `headline-sm` (`#F9F8F5`), connected to pricing (`#C5A880`) via a micro-dotted leader or generous open horizontal track.
- Separated by hairline dividers (`rgba(255, 255, 255, 0.06)`).

### Chips & Badges
- Sharp, rectangular containers with 4px vertical by 10px horizontal padding.
- Neutral fill (`#222225`) with uppercase `label-sm` in `#EFECE6`.
- Curated VIP/Artisan indicators use translucent gold ground (`rgba(197, 168, 128, 0.12)`) with `#C5A880` borders and text.

### Checkboxes & Radio Selectors
- Custom square elements (18px × 18px), 1px border in `#3E3E44`.
- Checked state: `#C5A880` solid square interior or centered solid brass micro-square.

### Specialized Barber & Sanctuary Components
- **Barber Profile Card:** Vertical ratio container with duotone image grading, matte black backing, master craftsman title in uppercase brass `label-sm`, and quick-book CTA.
- **Time Slot Selector:** Crisp grid of square time-blocks with sharp edges. Booked slots receive `#141416` muted tone; open slots feature a `#222225` ground with ivory text. Selected slot: solid `#C5A880` with `#121212` text.