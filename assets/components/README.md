# FloatingAvatar — portable React component

Premium floating avatar widget for Pixelhive Studio. Built to match the same design intent as the vanilla version that ships in `index.html`, but as a drop-in React component for future projects.

## Stack
- **React 18+**
- **Framer Motion** (`npm i framer-motion`) — handles spring physics, magnetic follow, blink/smile timing
- **Tailwind CSS** — styling (the component uses Tailwind utility classes inline)

## Install
```bash
npm i framer-motion
```

Tailwind must be set up in your project. The component uses arbitrary values like `bg-[radial-gradient(...)]` and `shadow-[...]` so no Tailwind config changes needed.

## Usage
```jsx
import FloatingAvatar from './FloatingAvatar';

function App() {
  return (
    <>
      {/* … rest of your site … */}
      <FloatingAvatar
        phone="919360345471"
        message="Hi Pixelhive, I'd like to discuss a project."
      />
    </>
  );
}
```

## Props
| Prop | Type | Default | Notes |
|---|---|---|---|
| `phone` | string | `"919360345471"` | Phone number with country code (no `+`, no spaces) |
| `message` | string | `"Hi Pixelhive, I'd like to discuss a project."` | Auto-encoded into the wa.me URL |
| `size` | number | `148` | Diameter in px. Matches vanilla version. |
| `className` | string | `""` | Additional Tailwind classes appended to the container |

## Design intent (same as vanilla)
- **Not a chatbot.** Not an AI assistant. Not a logo button.
- A custom character with personality:
  - Two blinking eyes (left + right, slightly staggered)
  - A breathing smile that opens wider on hover
  - A pixel antenna that bobs above the head (callback to the Pixelhive logo mark)
- Cinematic motion:
  - Spring entry from bottom-right on mount
  - Idle vertical float (paused on hover)
  - Occasional head tilt every 6-12s (the character "looks around")
  - Magnetic cursor follow on desktop (Framer Motion springs)
  - Click ripple expanding from click point
  - Glow pulse + ping ring ambient
- Brand-aligned palette: gold gradient bg, navy avatar, deeper amber on hover
- Tiny green WhatsApp badge in corner so destination is unambiguous

## Accessibility
- `aria-label="Let's talk on WhatsApp"`
- All animations respect `prefers-reduced-motion: reduce` via `useReducedMotion()`
- Decorative SVG marked `aria-hidden`

## Performance notes
- One spring per axis for magnetic follow (Framer's `useSpring` is GPU-accelerated)
- Idle float on a child element so it doesn't fight the magnetic transform on the parent
- All transforms run on the compositor (no layout thrashing)
- Bundle impact: ~20KB gzipped (Framer Motion subset)

## What this does NOT do (intentionally)
- No WebGL — kept lean
- No particles — visual noise
- No grain texture — adds ~5KB for marginal benefit; skip unless you specifically want it
- No tooltip on hover — the rotating text + icon already communicate the action

## Migrating from vanilla
If you're moving the rest of the site to React, the vanilla SVG in `index.html` (`.float-wa` element + its CSS + the `// FLOAT-WA` JS block) can all be deleted in favor of dropping `<FloatingAvatar />` once.
