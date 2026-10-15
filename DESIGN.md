---
name: Aurebesh Command
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#859398'
  outline-variant: '#3c494e'
  surface-tint: '#3cd7ff'
  primary: '#a8e8ff'
  on-primary: '#003642'
  primary-container: '#00d4ff'
  on-primary-container: '#00586b'
  inverse-primary: '#00677e'
  secondary: '#ffc56a'
  on-secondary: '#442c00'
  secondary-container: '#efa500'
  on-secondary-container: '#5f3f00'
  tertiary: '#ffd5d0'
  on-tertiary: '#690005'
  tertiary-container: '#ffaea5'
  on-tertiary-container: '#a4000e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#3cd7ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#ffba44'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  unit: 4px
  gutter: 24px
  margin: 40px
  container-max: 1200px
---

## Brand & Style

This design system is engineered to evoke the high-tech, tactical atmosphere of a galactic command center. It balances the rugged functionality of starship interfaces with the ethereal elegance of holographic displays. The target audience is high-tier technical recruiters and CTOs who value precision, modern full-stack architecture, and a distinct creative identity.

The aesthetic utilizes **Glassmorphism** and **High-Contrast** elements to create a sense of depth within a digital "void." The interface should feel like a physical Heads-Up Display (HUD) projected into space—functional, immersive, and highly responsive. Visual interest is driven by cinematic motion: starfield parallax, flickering scanning lines (CRT-style), and pulsating energy borders that signify active data streams.

## Colors

The palette is anchored in **Deep Black (#0a0a0f)**, serving as the infinite vacuum of space. This provides the ultimate contrast for the glowing interactive elements.

- **Lightsaber Blue (#00d4ff):** The primary action color. It represents "Light Side" stability and serves as the main color for links, primary buttons, and successful states.
- **Coruscant Gold (#f0a500):** Used for high-value information, hierarchy markers, and "Gold Standard" technical skills. It adds a layer of prestige and warmth to an otherwise cold interface.
- **Holographic White (#e8f4ff):** This is the primary text color, typically used at 85-90% opacity to mimic a semi-transparent projection.
- **Sith Red (#ff2d2d):** Reserved exclusively for destructive actions, critical system errors, or subtle "Easter Egg" hover states that hint at the power of the dark side.

## Typography

The typography strategy focuses on the contrast between "Human" readability and "Machine" data visualization.

**Headings & Labels:** We use **Space Grotesk**. Its geometric, technical construction perfectly mimics HUD readouts. For headlines, tight letter spacing creates a bold, authoritative impact. For labels and small tech-readouts, wide letter spacing (0.2em) and uppercase styling evoke the look of a targeting computer.

**Body Copy:** **Inter** provides a necessary neutral ground. It ensures that complex project descriptions and technical resumes remain highly legible against the dark, high-contrast background. Body text should maintain a generous line height (1.6) to prevent eye strain during long reading sessions.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model to simulate a desktop terminal or cockpit view. The layout is structured on a 12-column grid within a 1200px container.

A strict 4px baseline rhythm is enforced to maintain a "technical blueprint" feel. Vertical spacing between sections should be expansive (80px - 120px) to allow the starfield background to breathe, reinforcing the sense of vastness. Components should utilize internal padding in multiples of 8px to ensure mathematical alignment across the interface.

## Elevation & Depth

In this design system, depth is not achieved through shadows, but through **light and transparency**. 

1.  **Backdrop Blurs:** High-level containers (cards, modals) use a 10-15px background blur with a 5% white tint to create a "frosted glass" holographic effect.
2.  **Inner Glows:** Instead of drop shadows, active elements feature a 1-2px inner glow in Lightsaber Blue.
3.  **Layered Planes:** Elements further "back" in the Z-space are darker and more transparent; elements in the foreground are brighter and more opaque.
4.  **Scanning Lines:** A global overlay of subtle, 1px horizontal lines at 3% opacity creates a persistent sense of screen-based hardware.

## Shapes

The shape language is **Sharp (0)**. To reflect the industrial design of Star Wars starships and imperial architecture, we avoid rounded corners.

Every border and container should have hard 90-degree angles. To add sophistication without rounding, use "clipped corners" (45-degree chamfers) on primary buttons and cards to give them a manufactured, aeronautic feel. Border widths should be kept thin (1px) to maintain a precise, high-tech aesthetic.

## Components

- **Buttons:** Sharp-edged boxes with a 1px solid border. The "Primary" button features a Lightsaber Blue glow that pulses slowly. On hover, the button fills with a 20% blue tint and triggers a subtle "beep" or "flicker" animation.
- **Data Cards:** Containers with 10% opacity white background and 1px borders. Top-right corners should include a "serial number" or technical ID (e.g., `REF-0822`) in small Space Grotesk caps.
- **Input Fields:** Bottom-border only fields in Lightsaber Blue. When focused, a faint scanning line moves from top to bottom once.
- **Holographic Chips:** Used for tech stacks (e.g., React, Node.js). These are semi-transparent with a persistent "flicker" animation (opacity jittering between 0.8 and 1.0).
- **Pulse Indicators:** Small circular dots next to "Available for Hire" status that pulse with a soft Coruscant Gold aura.
- **Scanning Progress Bars:** Thin lines that fill with a "segment" pattern rather than a solid fill, resembling classic loading bars from 1970s sci-fi displays.