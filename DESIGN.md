# Design System: FreshKnowledge

> A curated design system for minimalist, clean, and fresh knowledge-driven websites.
> Synthesized from Readwise, Notion, Mintlify, Kinfolk, and Papier via brandmd extraction.
> Optimized for AI coding agents (Claude Code, Cursor, Gemini CLI, Google Stitch).

---

## 1. Visual Theme & Atmosphere

**Visual character:** Bright, airy, and serene; warm cream-white background with deep charcoal text and nature-inspired accent colors. The overall feeling is like reading a well-designed magazine in a sunlit room — calm, focused, and intellectually inviting.

**Design philosophy:**
- **Less is more.** Every element serves the content. No decorative noise.
- **Typography is the interface.** Clean hierarchy guides the reader effortlessly.
- **Breathing room.** Generous whitespace creates a sense of clarity and openness.
- **Warmth through subtlety.** Soft cream backgrounds and gentle accent colors avoid clinical coldness while maintaining professionalism.

**Density:** Moderate to low. Ample whitespace with purposeful spacing. Content is never cramped.

**Shape language:** Softly rounded, friendly, and approachable. Generous corner radii on interactive elements. Sharp edges reserved for editorial dividers.

**Depth:** Flat design with minimal, soft shadows. Surfaces are distinguished by color contrast rather than heavy elevation. When shadows are used, they are diffuse and subtle.

**Mood keywords:** editorial, serene, scholarly, approachable, uncluttered, warm-minimal

---

## 2. Color Palette & Roles

### Primary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Page Background | Warm White | `#FAFAF8` | Primary canvas for all pages. Softer than pure white to reduce eye strain. |
| Surface Elevated | Cream | `#F5F3EF` | Cards, panels, modals, secondary backgrounds. |
| Primary Text | Charcoal | `#1E1E1E` | Headlines, body text, primary content. Rich but softer than pure black. |
| Secondary Text | Slate | `#6B6B6B` | Captions, metadata, helper text, disabled states. |
| Muted Text | Ash | `#9E9E9E` | Placeholders, timestamps, very subtle labels. |

### Accent Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary Accent | Fresh Teal | `#0C8C5E` | Primary CTAs, active states, key highlights, success indicators. |
| Secondary Accent | Warm Sky | `#478CD0` | Links, secondary buttons, interactive elements, informational highlights. |
| Warm Accent | Soft Amber | `#FB9100` | Warnings, promotional tags, warm highlights, emphasis badges. |
| Tertiary Accent | Soft Coral | `#F77463` | Errors, destructive actions, alerts. |
| Decorative | Pale Mint | `#E8F5EE` | Subtle backgrounds for callout blocks, feature highlights, table stripes. |
| Decorative | Pale Sky | `#EDF4FC` | Info boxes, quote blocks, secondary callouts. |

### Dark Theme

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Dark Background | Deep Ink | `#121212` | Dark mode page background. |
| Dark Surface | Charcoal | `#1E1E1E` | Dark mode cards, panels. |
| Dark Text | Warm White | `#F5F3EF` | Primary text on dark backgrounds. |
| Dark Muted | Light Slate | `#A0A0A0` | Secondary text on dark backgrounds. |

---

## 3. Typography Rules

**Primary typeface:** `Inter` — Clean, highly legible, modern sans-serif. Use for body text, UI elements, and navigation.

**Secondary typeface:** `Crimson Pro` — Elegant serif with excellent readability. Use for headlines, display text, and editorial accents.

**Fallback stack:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for sans-serif; `Crimson Pro, Georgia, "Times New Roman", serif` for serif.

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Usage |
|-------|------|-------------|----------------|--------|-------|
| Display | 48px | 1.15 | -0.02em | 600 | Hero headlines, major page titles. Serif (Crimson Pro). |
| H1 | 36px | 1.2 | -0.015em | 600 | Page titles, article headings. Serif (Crimson Pro). |
| H2 | 28px | 1.25 | -0.01em | 600 | Section headings, major subsections. Serif (Crimson Pro). |
| H3 | 22px | 1.3 | -0.005em | 600 | Subsection headings, card titles. Sans-serif (Inter). |
| H4 | 18px | 1.35 | 0 | 600 | Minor headings, feature labels. Sans-serif (Inter). |
| Body Large | 18px | 1.6 | 0 | 400 | Lead paragraphs, featured content. Sans-serif (Inter). |
| Body | 16px | 1.6 | 0 | 400 | Standard body text, articles. Sans-serif (Inter). |
| Body Small | 14px | 1.5 | 0 | 400 | Secondary body, descriptions. Sans-serif (Inter). |
| Caption | 12px | 1.4 | 0.01em | 500 | Labels, metadata, timestamps, badges. Sans-serif (Inter). |
| Code | 14px | 1.5 | 0 | 400 | Inline code, code blocks. Monospace. |

### Typography Principles
- **Contrast through scale, not weight alone.** Headlines distinguished by size and serif vs. sans-serif pairing.
- **Comfortable reading.** Body line height generous (1.6) for long-form content.
- **Tight headlines.** Headings use slightly negative letter-spacing for editorial feel.
- **One serif, one sans.** Avoid mixing more than two font families.

---

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#0C8C5E` (Fresh Teal)
- Text: `#FFFFFF`
- Corner radius: 8px
- Padding: 10px 20px
- Font: 14px, weight 600
- Hover: Background darkens to `#0A7550`, subtle `translateY(-1px)` lift
- Active: Background `#095C42`
- Transition: `all 0.2s ease`

**Secondary Button**
- Background: `#EDF4FC` (Pale Sky)
- Text: `#478CD0` (Warm Sky)
- Corner radius: 8px
- Padding: 10px 20px
- Font: 14px, weight 600
- Hover: Background `#DCE8F7`
- Active: Background `#C9D9F0`

**Tertiary / Ghost Button**
- Background: transparent
- Text: `#1E1E1E`
- Border: 1px solid `#E5E5E5`
- Corner radius: 8px
- Padding: 10px 20px
- Hover: Background `#F5F3EF`

### Cards

**Standard Card**
- Background: `#FFFFFF`
- Border: 1px solid `#EFEFEF`
- Corner radius: 12px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.04)`
- Hover: Shadow deepens to `0 4px 12px rgba(0,0,0,0.06)`, subtle `translateY(-2px)`
- Transition: `box-shadow 0.2s ease, transform 0.2s ease`

**Feature Card (Elevated)**
- Background: `#FFFFFF`
- Corner radius: 16px
- Padding: 32px
- Shadow: `0 4px 20px rgba(0,0,0,0.05)`
- Border: none

**Compact Card**
- Background: `#F5F3EF`
- Corner radius: 8px
- Padding: 16px
- Shadow: none

### Inputs

**Text Input**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E5E5`
- Corner radius: 8px
- Padding: 10px 14px
- Font: 14px, weight 400
- Placeholder: `#9E9E9E`
- Focus: Border `#478CD0`, shadow `0 0 0 3px rgba(71, 140, 208, 0.15)`
- Transition: `border-color 0.2s ease, box-shadow 0.2s ease`

### Tags / Badges

- Background: `#E8F5EE` (Pale Mint) for default; `#EDF4FC` (Pale Sky) for info
- Text: `#0C8C5E` for default; `#478CD0` for info
- Corner radius: 9999px (pill)
- Padding: 4px 12px
- Font: 12px, weight 500

### Navigation

**Header**
- Background: `#FAFAF8` with `backdrop-filter: blur(12px)` when scrolled
- Border bottom: 1px solid `#EFEFEF` (when scrolled)
- Height: 64px
- Padding: 0 24px
- Links: 14px, weight 500, color `#6B6B6B`
- Active link: color `#1E1E1E`, font-weight 600
- Hover: color `#1E1E1E`

**Sidebar**
- Background: `#F5F3EF`
- Width: 260px
- Padding: 24px
- Active item: background `#FFFFFF`, border-radius 8px, color `#0C8C5E`
- Inactive item: color `#6B6B6B`, hover background `#FFFFFF80`

### Callout Blocks

**Info Callout**
- Background: `#EDF4FC`
- Border left: 3px solid `#478CD0`
- Padding: 16px 20px
- Border radius: 0 8px 8px 0
- Icon: Info circle in `#478CD0`

**Tip Callout**
- Background: `#E8F5EE`
- Border left: 3px solid `#0C8C5E`
- Padding: 16px 20px
- Border radius: 0 8px 8px 0
- Icon: Lightbulb in `#0C8C5E`

**Warning Callout**
- Background: `#FFF8E8`
- Border left: 3px solid `#FB9100`
- Padding: 16px 20px
- Border radius: 0 8px 8px 0
- Icon: Alert triangle in `#FB9100`

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro adjustments, icon gaps |
| `space-2` | 8px | Tight element spacing, inline padding |
| `space-3` | 12px | Small gaps, button padding vertical |
| `space-4` | 16px | Standard component padding, grid gaps |
| `space-5` | 24px | Card padding, section internal spacing |
| `space-6` | 32px | Medium section spacing |
| `space-7` | 48px | Large section gaps |
| `space-8` | 64px | Major section dividers |
| `space-9` | 96px | Page-level section breaks |
| `space-10` | 128px | Hero padding, major page divisions |

**Base unit:** 4px grid. All spacing values are multiples of 4px.

### Border Radii

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small tags, inline elements, code blocks |
| `radius-md` | 8px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Standard cards, panels, modals |
| `radius-xl` | 16px | Feature cards, large containers |
| `radius-full` | 9999px | Pills, badges, avatars |

### Grid System

- **Container max-width:** 1200px for content, centered with auto margins.
- **Content width:** 720px for single-column reading (optimal line length).
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Grid:** 12-column fluid grid with 24px gutters.
- **Page padding:** 24px on desktop, 16px on mobile.

### Whitespace Philosophy
- **Sections breathe.** Minimum 64px vertical spacing between major sections.
- **Content clusters.** Related elements use 16px-24px spacing. Unrelated sections use 64px-96px.
- **Reader comfort.** Line lengths capped at 65-75 characters for optimal readability.

---

## 6. Depth & Elevation

### Shadow System

| Level | Shadow | Usage |
|-------|--------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle borders, hover hints |
| `shadow-md` | `0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)` | Cards, dropdowns |
| `shadow-lg` | `0 4px 20px rgba(0,0,0,0.05)` | Modals, elevated panels, feature cards |
| `shadow-xl` | `0 8px 30px rgba(0,0,0,0.06)` | Floating elements, popovers |

### Surface Hierarchy

1. **Base Surface:** `#FAFAF8` — Page background
2. **Elevated Surface:** `#FFFFFF` — Cards, modals, floating panels
3. **Secondary Surface:** `#F5F3EF` — Sidebar, secondary panels, input backgrounds
4. **Tertiary Surface:** `#EFEFEF` — Dividers, borders, subtle separators

---

## 7. Responsive Behavior

### Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Mobile | < 640px | Single column, stacked layout, hamburger menu, 16px page padding |
| Tablet | 640px - 1024px | 2-column grids, sidebar collapsible, 24px page padding |
| Desktop | > 1024px | Full layout, sidebar visible, max-width container, 24px page padding |

### Touch Targets
- Minimum interactive element size: 44px x 44px on touch devices.
- Button padding increased on mobile for easier tapping.

### Typography Scaling
- Display: 48px → 36px → 28px (Desktop → Tablet → Mobile)
- H1: 36px → 28px → 24px
- H2: 28px → 24px → 20px
- Body: 16px → 16px → 16px (body stays consistent for readability)

---

## 8. Do's and Don'ts

### Do
- **Do** use the 4px spacing grid for all layout and component spacing.
- **Do** use `#FAFAF8` as the default page background for a warm, paper-like feel.
- **Do** use Crimson Pro for headlines and display text to create editorial warmth.
- **Do** use Inter for all body text, UI elements, and navigation for clarity.
- **Do** use `#0C8C5E` (Fresh Teal) for primary actions to create a natural, calming focal point.
- **Do** maintain generous line heights (1.5-1.6) for all body text.
- **Do** use whitespace to separate content sections rather than heavy dividers.
- **Do** use subtle shadows (`shadow-md` or below) for elevation rather than borders.
- **Do** ensure color contrast ratios meet WCAG AA standards (minimum 4.5:1 for body text).
- **Do** use pill-shaped badges and tags for labels, tags, and categories.

### Don't
- **Don't** use pure `#000000` black for text; use `#1E1E1E` Charcoal instead.
- **Don't** use pure `#FFFFFF` white for page backgrounds; use `#FAFAF8` Warm White instead.
- **Don't** introduce more than two font families (Inter + Crimson Pro).
- **Don't** use border-radius values outside the defined scale: 4px, 8px, 12px, 16px, 9999px.
- **Don't** use more than one accent color per component. Pick teal OR blue, not both.
- **Don't** use heavy drop shadows or dark shadows. Keep all shadows subtle and diffuse.
- **Don't** cram content. Maintain at least 64px between major sections.
- **Don't** use aggressive animations. Keep transitions subtle: 0.2s ease.
- **Don't** use all-caps for body text. Reserve uppercase for short labels and badges only.
- **Don't** use dark mode colors in light mode, or vice versa, without explicit theme switching.

---

## 9. Agent Prompt Guide

### Quick Reference

```
Build a clean, knowledge-focused UI with:
- Background: #FAFAF8 (warm white)
- Text: #1E1E1E (charcoal)
- Primary accent: #0C8C5E (fresh teal)
- Secondary accent: #478CD0 (warm sky)
- Fonts: Inter (sans-serif) + Crimson Pro (serif headings)
- Spacing: 4px base grid, generous whitespace
- Corners: 8px for buttons, 12px for cards, 9999px for pills
- Shadows: subtle and diffuse only (0 1px 3px rgba(0,0,0,0.04))
```

---

## 10. Sources & Attribution

This design system is a synthesis of the following brand design systems:

| Source | Character | What We Borrowed |
|--------|-----------|------------------|
| **Readwise** | Bright editorial, high contrast | Charter + Mulish font pairing, white canvas philosophy |
| **Notion** | Warm minimalism, soft surfaces | 4px spacing grid, warm cream backgrounds, card styling |
| **Mintlify** | Clean, green-accented, reading-optimized | Fresh teal color, Inter primary font, pale mint callouts |
| **Kinfolk** | Muted tones, elegant whitespace, serif fonts | Serif editorial headlines, magazine-like restraint |
| **Papier** | Soft creams, friendly rounded shapes | Warm cream palette, rounded friendly aesthetic |

---

*This DESIGN.md was synthesized for the Planetary Science Hub project. Drop it into your project root and AI coding agents will use it to generate consistent, clean, and knowledge-focused UI.*
