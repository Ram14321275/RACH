# RACH Website — Build Prompt (v1 Draft)

Paste this whole prompt into your website-building tool of choice (Claude Code, v0, Cursor, etc.) to generate the first draft. It's written to produce something premium and specific, not a generic template.

---

## The Brief

Build a one-page marketing site for **RACH**, a solo-founder digital agency that builds, hosts, and maintains professional websites for local businesses in India (salons, clinics, small manufacturers to start). The site's job: make a local business owner, viewing on a phone, trust that RACH is a serious, premium operator worth paying — not a freelancer or a template mill.

**Tagline:** "Take Your Business Online."
**Core promise, stated as a sequence:** Build → Host → Connect → Manage.

Audience: non-technical local business owners, mostly viewing on mobile, price-aware but wanting to look professional to their own customers. They are not impressed by tech jargon — they're convinced by seeing a real, sharp result.

## Design Direction — Do Not Deviate Without Reason

**Concept:** RACH functions like a contractor for a business's digital storefront. The whole visual system should read as *precise, engineered, drafted* — like a well-made architectural plan set — not like a generic SaaS landing page. This is grounded in the actual brand promise (Build → Host → Connect → Manage is a literal construction sequence), so structural devices like a running progress line or registration marks are earned here, not decorative.

**Color tokens (use exactly these):**
- `--paper: #F2EEE1` — warm stone-white background (not cream, not pure white)
- `--ink: #1C1B17` — near-black warm ink for primary text
- `--ink-soft: #55503F` — secondary text
- `--brass: #B08D45` — primary accent (nameplate brass, used for key CTAs and the build-line marker)
- `--forest: #2F4A3C` — secondary accent (dividers, tags, secondary buttons)
- `--rust: #8C3B2E` — tertiary accent, reserved ONLY for the single strongest call-to-action on the page — do not overuse

**Typography:**
- Display/headline face: **Space Grotesk** — geometric, precise, technical character
- Body face: **IBM Plex Sans** — designed for technical/engineering clarity, pairs deliberately with the display face rather than defaulting to Inter
- Keep line lengths under ~80 characters for body copy
- Do NOT: put a single word in italic/bold/color inside a headline, use tracked-out ALL-CAPS labels above sections, or add unnecessary eyebrow labels

**Layout concept:**
- Asymmetric, left-aligned grid — not centered, not symmetric card grids
- A persistent thin vertical "build line" in brass runs down the page, with four marked points corresponding to Build / Host / Connect / Manage — this is the one place numbered/sequential markers are justified, because the content genuinely is a sequence
- Use drafting-style corner registration marks (small crosshair/bracket marks) at 2-3 key content blocks — sparingly, as a signature device, not on every section
- Sharp corners on structural blocks; only interactive elements (buttons, the demo phone mockup) get subtle rounding
- Avoid: identical rounded cards with the same soft drop-shadow repeated for every content block (the generic SaaS-card look)

**Motion:**
- One orchestrated moment only: on load, the hero's phone-mockup demo "drafts itself" in — like lines being drawn — rather than a generic fade-slide-up on every section
- No hover-lift-on-every-card effects; motion should answer something, not decorate everything

**Hero:**
- Open with the most characteristic thing in RACH's world: an actual phone-mockup showing a real (invented-but-realistic) salon website — not a generic headline + gradient + stock photo
- Headline should say what RACH does in plain language, not marketing fluff

**Sections needed (content, not prescriptive layout — use your judgment on order/treatment):**
1. Hero — phone mockup of a live demo site, headline, one-line value prop, primary CTA ("See a live demo" — not "Learn more" or an arrow-suffixed CTA)
2. The four-stage promise (Build / Host / Connect / Manage) — using the build-line device
3. Who RACH is for — salons, clinics, small manufacturers, with real specificity (not generic icons+labels)
4. Live demo showcase — placeholder for 2-3 demo site thumbnails (salon first)
5. Pricing — three tiers: START (₹4,999, domain-ready customers), BUSINESS (₹8,999), CUSTOM (₹15,000+) — plus RACH Care (₹999/month) as a distinct recurring-care callout, not just a fourth pricing card
6. How it works — the delivery workflow, stated simply (lead → content collection → build → preview → launch)
7. Contact / get started — direct, low-friction (WhatsApp click-to-chat should be prominent, since that's RACH's own stated channel)

**Copywriting rules:**
- Active voice, plain verbs, no filler ("Get your website built," not "Unlock your online presence")
- Speak to business outcomes, not tech ("Customers find you on Google," not "SEO-optimized architecture")
- No middle-dot separators, no em-dash-label constructions, no monospace data-label styling except if literally showing a technical measurement as part of the drafting motif

## Technical

- Next.js + TypeScript + Tailwind CSS
- Fully responsive, mobile-first (most viewers will be on phones)
- Visible keyboard focus states, respects reduced-motion preference
- Single page for v1 — no routing needed yet

## Output

Build a working first draft. After it's built, I'll review and we'll refine — don't over-polish copy on the first pass, focus on getting the structural/visual system right first.
