# DESIGN.md — FYNUX Design System & Brand Identity

This document defines the visual direction, design tokens, typography, component standards, and aesthetic parameters for FYNUX.

## 1. Brand Identity & Personality
- **Name**: FYNUX
- **Tagline**: Web Development & Systems Engineering
- **Personality**: High-precision engineering, authoritative, clean, transparent, crafted.
- **Anti-Slop Alignment**:
  - No generic blue-to-purple glowing AI spheres or generic neon palettes.
  - No em dashes (`—`) in user-facing copy (anti-slop R-02).
  - No fake stats or fictitious testimonials (anti-slop R-17, R-18, R-36).
  - Every interactive button and form must work with real interactive feedback.
  - Full keyboard accessibility and WCAG AA color contrast.

## 2. Color Palette
- **Canvas / Surfaces**:
  - Primary Light: `#ffffff`
  - Secondary Light Surface: `#f8fafc` (Slate 50)
  - Border Subtlety: `#e2e8f0` (Slate 200)
  - Deep High-Contrast Surface: `#0f172a` (Slate 900)
- **Brand Accent**:
  - Primary Action / Link: `#2563eb` (Blue 600)
  - Primary Action Hover: `#1d4ed8` (Blue 700)
  - Active Indicator / Status: `#059669` (Emerald 600)
- **Text Contrast**:
  - Headings / Primary: `#0f172a` (Slate 900) — contrast ratio > 15:1 against white
  - Body Text: `#334155` (Slate 700) — contrast ratio > 7:1 against white
  - Muted Metadata: `#64748b` (Slate 500) — contrast ratio > 4.5:1 against white

## 3. Typography
- **Headings & Body**: Geist Sans with variable optical sizing.
- **Code & Tech Specs**: Geist Mono.
- **Hierarchy**:
  - H1: 3.5rem - 4.5rem (56px - 72px), font-bold, tracking-tight, leading-[1.1]
  - H2: 2.25rem - 3rem (36px - 48px), font-bold, tracking-tight
  - H3: 1.5rem (24px), font-semibold
  - Body Large: 1.125rem (18px), leading-relaxed
  - Body Regular: 1rem (16px), leading-relaxed
  - Small / Micro: 0.875rem (14px) and 0.75rem (12px)

## 4. Dials
- **ENERGY**: 2 / 3 (confident, deliberate, authoritative)
- **RHYTHM**: 3 / 3 (varied section structures, avoiding monotonous identical card grids)
- **MOTION**: 2 / 3 (purposeful spring animations, respecting `prefers-reduced-motion`)

## 5. Component Standards
- **Buttons**:
  - Minimum tap target: 44px x 44px on mobile (R-03).
  - Focus indicator: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2` (R-32).
- **Navigation**:
  - Mobile menu with `Escape` key support, focus containment, and animated drawer.
- **Forms**:
  - Real client-side & server-side validation with instant visual feedback and accessible error messages.
