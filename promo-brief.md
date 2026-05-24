# Pixelhive Studio — Cinematic Promo

This document covers three production paths for the Instagram promo:

1. **Option A** — How to record the HTML-rendered version (`promo.html`)
2. **Option B** — AI video tool prompts (Sora / Runway / Veo / Kling / Pika)
3. **Option C** — Full production brief + storyboard for a motion designer

Skim the section you actually need; ignore the others.

---

## Option A — Record the HTML promo

The file `promo.html` is a self-contained 40-second sequence that runs in any modern browser. You play it and screen-record it into an MP4.

### Recording setup (Windows)

**Tool: OBS Studio** (free, professional). Download at obsproject.com.

1. **Open `promo.html`** in Chrome. Press `F11` for fullscreen.
2. **In OBS:**
   - **Source → Add → Window Capture** → pick the Chrome window.
   - **Settings → Video:**
     - Base (Canvas) Resolution: `1080x1920`
     - Output (Scaled) Resolution: `1080x1920`
     - Common FPS: `60`
   - **Settings → Output:**
     - Output Mode: `Advanced`
     - Encoder: `x264` (or `NVENC` if you have an NVIDIA GPU)
     - Rate Control: `CRF`
     - CRF: `18` (visually lossless)
     - Format: `mp4`
3. **Start Recording** in OBS.
4. **Click the browser window** and **press `SPACE`** to start the animation. (The space-press delay gives the screen-recorder time to spin up.)
5. **Stop Recording** after ~42 seconds.
6. The MP4 is in your `Videos` folder.

### Alternative (no OBS): Windows Game Bar

Press `Win + G`, click the record button, switch to Chrome, press space. Less control, but works in a pinch.

### Recording tips

- **Hide the cursor.** In Chrome before pressing space, move the cursor to a corner so it's outside the visible frame.
- **Pre-warm fonts.** Refresh the page once before recording so Google Fonts are cached. The first run sometimes has a font-load flash.
- **Press `R` to restart** the animation if you want to redo a take.
- **Don't record at 4K from a 1080p screen.** Just record at 1080×1920. Instagram compresses to ~720p anyway.

### What to add in post (CapCut)

The HTML promo has no audio. Add in CapCut (free):
- **Soundtrack** — see recommended tracks below.
- **Subtle UI clicks** at scene transitions (CapCut has these built-in: "Tech / Whoosh / Glitch").
- **Bass hit** at the final "PIXEL·HIVE STUDIO" reveal.
- **Volume duck** the music slightly during voiceover if you record one.

### Recommended royalty-free tracks

Match the cinematic + modern + premium feel:

| Track | Source | Why |
|---|---|---|
| "Dreamer" — Wolf Cry | Epidemic Sound | Building cinematic synth, perfect arc for 40s |
| "Stockholm" — Tyler Birkett | Musicbed | Restrained electronic, intelligent |
| "Frontier" — Atlas Audio | Artlist | Wide, modern, opens big |
| "Inner Light" — Andreas Ericson | Epidemic Sound | Slow build with confident drop |

YouTube Audio Library free alternatives: search for "ambient cinematic" or "deep house atmospheric". Use anything tagged "no attribution required".

### Instagram upload settings

- Aspect ratio: 9:16 ✓ (already correct)
- Length: 40s ✓ (under the 60s Reel limit)
- Upload as **Reel** (not Story) for better reach.
- **Cover image**: use the final scene (PIXEL·HIVE STUDIO logo lockup) — bright, branded, instantly readable.
- **Caption opener**: "Most websites are slow. Ours aren't." or similar one-liner. Then the value prop.

---

## Option B — AI video tool prompts

If you want to experiment with Sora / Runway Gen-3 / Veo / Kling / Pika, the brief breaks into clips because these tools max out around 10 seconds per generation.

### Prompt 1 — Opening (Sora / Veo)

> Ultra-cinematic vertical 9:16 close-up of a single warm-golden glowing dot pulsing softly on a pure deep-black background. Volumetric light, subtle film grain. The dot slowly expands into a luminous golden hexagonal logo mark with intricate geometric pixel-shape inserts. Camera holds steady. Premium minimalist aesthetic, Apple-launch-film visual language, soft cinematic depth-of-field, slow dolly-in. 4K, 60fps, photoreal but minimalist. No text overlay. 5 seconds.

### Prompt 2 — Typography reveal (Runway Gen-3)

> 9:16 vertical typography animation. Three lines of massive sans-serif text appear on pure black background, one at a time, each rising up with subtle motion blur and elegant stagger: "Websites that load fast." "Look sharp." "And convert." Words "load fast", "sharp", and "convert" colored warm-golden #fbbf24 in italic, the rest in soft white. Cinematic premium feel, deep blacks, slight grain, no other elements. Type face: modern geometric sans serif similar to Space Grotesk. 6 seconds.

### Prompt 3 — Phone showcase (Kling / Pika)

> Cinematic 9:16 vertical shot of a sleek black smartphone tilted at a 3-degree angle, floating in deep black void with dramatic golden rim lighting. Camera slowly pushes in. On the phone screen, a dark premium website scrolls upward smoothly — modern typography with warm-gold accents, clean card-based layouts. Soft volumetric shadows, subtle film grain, photoreal product render. 4K, 60fps. 8 seconds.

### Prompt 4 — Workflow diagram (Runway / Sora)

> 9:16 vertical motion-graphics shot. Five circular nodes connected by glowing golden lines appear sequentially top-to-bottom on deep black background. Each node lights up as a glowing energy pulse travels from one to the next. Labels appear next to each node: "Discovery Call", "Wireframe & Design", "Hand Coding", "Testing & Optimization", "Launch". Behind the nodes, faint translucent code snippets float subtly. Cinematic, premium, technical-elegant aesthetic. 8 seconds.

### Prompt 5 — Closing logo (Pika)

> 9:16 vertical cinematic shot of a luminous golden hexagonal logo mark slowly rotating in deep black void. Beneath it, the words "PIXEL·HIVE STUDIO" appear in modern white sans-serif. Below: "Start your project. pixelhivestudio.in" in smaller text. Soft golden glow radiating from logo, subtle particles drifting upward, slight film grain, dramatic depth. Premium luxury tech brand aesthetic. 6 seconds.

### Workflow for Option B

1. Generate each clip in its respective tool (Runway is the most consistent at typography; Sora/Veo strongest for abstract beauty; Kling for camera moves).
2. Download all clips in 9:16 at the highest quality the tool offers.
3. Import to CapCut or Premiere Rush.
4. Stitch in order, crossfade 0.3s between clips.
5. Add soundtrack (see Option A's recommendations).
6. Export at 1080×1920 60fps.

**Expected total cost:** ₹800–₹2,500 in tool credits depending on iteration count.
**Expected time:** 2–3 hours from prompts to final MP4.
**Quality ceiling:** Decent. AI video at this length still has consistency issues — expect minor visual artifacts you'll learn to ignore.

---

## Option C — Production brief for a motion designer

Use this if you want studio-quality work and have ₹8,000–₹40,000 budget.

### Pitch the freelancer

> Hi — I'm Anish from Pixelhive Studio. I need a 40-second vertical Instagram promo (9:16, 1080×1920, 60fps, MP4). Premium cinematic style — think Apple keynote × Cuberto agency reel × modern dev studio portfolio. Black and warm-golden-yellow brand palette. I'll send the full storyboard and brief. Looking to pay ₹X for this. Can you do it within 7–10 days?

**Where to find them:** Fiverr (search "cinematic motion graphics Instagram"), Behance, Dribbble Pro (filter by motion designers in India for cheaper rates).

**Budget tiers:**
- ₹8,000–₹15,000 — solo motion designer in India, decent quality
- ₹15,000–₹25,000 — strong portfolio, will give you 2 revisions
- ₹30,000–₹50,000 — studio-level work, often with a small team
- Above ₹50,000 — overkill for IG, save it for client work showcases

### Full creative brief to hand them

#### Format
- 9:16 vertical, 1080 × 1920px (4K acceptable: 2160 × 3840)
- 60fps, ProRes or H.264, 35–45 seconds
- Audio: stereo, includes music + UI sounds + subtle bass hits at key moments

#### Brand
- **Name:** PIXEL·HIVE STUDIO
- **Positioning:** Hand-coded modern websites for businesses, non-profits, and creators
- **Locale:** Tamil Nadu, India
- **Domain:** pixelhivestudio.in

#### Color palette
- Background: `#000000` (deep black with subtle grain texture)
- Primary text: `#FFFFFF` (white)
- Accent: `#FBBF24` (warm gold) for primary brand color
- Highlight: `#FDE68A` (bright gold) for shimmer/sweep effects
- Deep: `#D97706` (amber) for shadows

#### Typography
- Display + headlines: **Space Grotesk**, weights 500 / 700 (italic when emphasized)
- UI / meta text: **JetBrains Mono**, weight 500 (uppercase, letter-spaced)
- Quotes / body: **Fraunces** italic, weight 400-500
- Body: **Inter**, weight 400-500

#### Mood
Confident. Modern. Calm. Intelligent. Not loud, not gimmicky. Restraint over noise. Picture a luxury watch ad more than a SaaS landing-page ad.

#### Scene-by-scene shot list

##### Scene 1 — Opening (0:00 – 0:06)

| Time | Action |
|---|---|
| 0:00 | Black screen. Letterbox bars slide in (cinematic frame). |
| 0:00–0:01 | Tiny gold dot fades in at center-upper. Pulses once. |
| 0:01–0:02 | Dot expands rapidly into Pixelhive hex logo mark (outline + 3 pixel squares). |
| 0:02–0:03 | "PIXEL·HIVE" wordmark + "STUDIO" subtitle fade in below logo. |
| 0:03–0:06 | Three headline lines rise into view, staggered 0.4s apart:<br/>• "Websites that **load fast.**"<br/>• "Look **sharp.**"<br/>• "And **convert.**" |

**Audio:** Deep cinematic bass swell on logo expand. Subtle "type" sound under each headline.

##### Scene 2 — Website Showcase (0:06 – 0:14)

| Time | Action |
|---|---|
| 0:06 | Scene 1 fades. Black hold for 0.1s. |
| 0:07 | Premium phone mockup slides in from right at -3° tilt, settles center. Dramatic gold rim light from upper-left. |
| 0:07–0:13 | Website content scrolls smoothly inside the phone (auto-scroll, no user interaction visible). Show: hero, work cards (Maram), process, pricing. |
| 0:07–0:09 | Callout text floats in upper-left: "Delivered in **2 weeks.**" — appears, holds 1.5s, fades. |
| 0:09–0:11 | Callout in bottom-right: "**Yours** forever." — appears, holds, fades. |
| 0:11–0:13 | Callout in bottom-left: "Hand-coded, **no templates.**" — appears, holds, fades. |

**Audio:** Soft mechanical scroll sound (very subtle), rising synth pad under the scene.

##### Scene 3 — How We Work (0:14 – 0:21)

| Time | Action |
|---|---|
| 0:14 | Phone exits. New scene background: black with very faint golden grid (5% opacity). |
| 0:14 | "/ Process" tag and "How we **work.**" title fade in at top. |
| 0:14–0:15 | Floating translucent code snippets fade in around the edges (HTML, CSS, GSAP). |
| 0:15–0:18 | Five workflow steps appear one by one in a vertical list, each with a brief gold border-glow on appearance:<br/>01 — Discovery call<br/>02 — Wireframe & Design<br/>03 — Hand coding<br/>04 — Testing & optimization<br/>05 — Launch |
| 0:18–0:21 | Hold. Subtle ambient particles drifting upward through frame. |

**Audio:** Distinct soft "click" or "type" sound as each step appears. Background pad continues.

##### Scene 4 — Premium Experience (0:21 – 0:28)

| Time | Action |
|---|---|
| 0:21 | Quick cut (no fade). Black background. |
| 0:21–0:22 | Massive italic gold word "**Fast.**" punches in from scale 1.3, scales to 1.0 with motion blur, holds. |
| 0:22–0:23 | "Fast." scales down and fades out. "Modern." cuts in (white, no italic). |
| 0:23–0:24 | "Modern." exits. "**Responsive.**" punches in (gold italic). |
| 0:24–0:25 | "Responsive." exits. "Built to **convert.**" appears (mixed). |
| 0:25–0:28 | "Built to convert." holds, subtle shimmer sweeps across "convert." |

**Audio:** Rhythmic bass hits on each word's appearance. Pace accelerates slightly through the sequence.

##### Scene 5 — Studio Identity (0:28 – 0:32)

| Time | Action |
|---|---|
| 0:28 | Background shifts: faint golden dotted grid fades in (suggests global reach). |
| 0:28 | Gold particles drift slowly upward through frame. |
| 0:28–0:29 | "/ Studio" tag fades in. |
| 0:29–0:30 | "Tamil **Nadu**, India" types in or fades in. |
| 0:30–0:31 | "Booking **2026**" fades in. |
| 0:31–0:32 | "Creative web **studio**" fades in. |

**Audio:** Soft ambient pad continues. Optional: very faint reverb-tail "click" as each line appears.

##### Scene 6 — Final (0:32 – 0:42)

| Time | Action |
|---|---|
| 0:32 | All previous content fades to black over 0.7s. |
| 0:33–0:36 | Massive typography reveals on black:<br/>"Your business deserves<br/>better than **templates.**"<br/>"templates" has the golden shimmer sweep. |
| 0:36 | Headline exits up + fades. |
| 0:36–0:37 | Soft golden glow rises from bottom of frame. |
| 0:37–0:38 | Logo lockup appears center: gold hex mark + "PIXEL·HIVE" wordmark side-by-side. |
| 0:38–0:39 | "Start your **project.**" fades in below logo. |
| 0:39–0:40 | "pixelhivestudio.in" appears in a thin gold pill border below. |
| 0:40–0:42 | Hold the final lockup. Slow fade to black. Letterbox bars retract. |

**Audio:** Music swells to peak, then slow tail fade-out. Final low bass hit on logo appearance, then silence.

#### Asset list to send the freelancer

- **Logo SVG:** Extract from `index.html` favicon — provide them with the hex mark with 3 inner squares.
- **Web font files:** They can download from Google Fonts (Space Grotesk, Inter, JetBrains Mono, Fraunces).
- **Brand colors:** As listed above.
- **Reference URL:** Send them to `pixelhivestudio.in` to see the live site's animations + aesthetic.
- **Reference videos:** Apple's "Designed by Apple" films, Cuberto's reel on cuberto.com, any "Awwwards Site of the Day" reel.

#### Revisions to ask for upfront

- 2 rounds of revisions included.
- Final deliverable: 1080×1920 MP4 + the source project file (After Effects .aep, Premiere .prproj, or DaVinci Resolve project).
- If they refuse to include source files, walk away. You want to be able to edit later.

---

## Quick decision tree

- **Tonight, free, hand-coded:** Option A. Open promo.html, press F11, press space, record with OBS.
- **This week, ₹0-₹2k, experimental:** Option B. Paste prompts into Runway/Sora, stitch in CapCut.
- **This month, ₹8k-₹40k, polished:** Option C. Hand the brief above to a Fiverr/Behance motion designer.

You can also start with A this week, get the IG presence going with the basic version, then commission C later for a polished v2.
