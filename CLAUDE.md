# CLAUDE.md — Obravio Website (Marketing)

## What This Is
Marketing/landing website for Obravio at obravio.com. Separate from the app (app.obravio.com) and estimating (estimate.obravio.com).

## Infrastructure
- **Repo:** ronald07alex89-afk/obravio-website
- **Deployed:** obravio.com (Vercel, auto-deploys on push to master)
- **Branch:** master (push directly, no PRs)
- **Vercel Project:** obravio-website (team: ronald07alex89-afks-projects)

## Tech Stack
React + TypeScript + Vite + Tailwind CSS v4

## Design System: Iron & Concrete
Industrial/rugged aesthetic inspired by construction jobsites. Designed with Google Stitch.
- **Fonts:** Space Grotesk (headlines), Inter (body)
- **Colors:** Navy #0d141d (bg), Red #C8102E (CTAs), Copper #B87333 (accents), Bronze #D4956B (highlights)
- **Border radius:** 0px everywhere (sharp edges = precision)
- **Cards:** Steel plate style (#19202a bg, inner shadows, corner rivets)
- **Buttons:** Forged red gradient with top highlight, copper-outlined secondary
- **Textures:** Concrete noise, blueprint dot-grid, safety stripes
- **Typography:** Uppercase labels, wide letter-spacing, metallic gradient text

## Key CSS Classes
- `.steel-plate` — raised steel card with inner shadow + metallic hover gloss
- `.rivet` / `.rivet-tl` / `.rivet-tr` / `.rivet-bl` / `.rivet-br` — corner rivet decorations
- `.safety-stripe` — 45-degree red hazard stripe divider
- `.btn-primary` — forged red CTA with gradient sheen
- `.btn-outline` — copper/bronze outlined button
- `.input-industrial` — sharp-edged input with copper bottom border
- `.text-metallic` — brushed steel gradient text
- `.text-copper` — copper/bronze gradient text
- `.font-headline` — Space Grotesk for headlines
- `.label-uppercase` — uppercase + tracked labels
- `.blueprint-grid` — dot-based grid pattern
- `.concrete-texture` — noise grain overlay

## Pages
- `/` — Landing page (Hero, Features, Built Different, Early Access, Footer)
- `/coming-soon` — Coming soon page with 3D floating steel plates grid

## Shared Backend
Uses the same Supabase project as Obravio Main (mhvgbquhfmcfrgwfrvmo):
- **waitlist table** — stores email signups (email, source, created_at)
- **waitlist-signup edge function** — saves to DB + emails info@rglegacy.net via Resend

## Git Config
git config user.name "Ronald Gutierrez"
git config user.email "ronald07alex89@gmail.com"

## Brand Image
Drop the Gemini-generated brand image as `/public/brand-hero.png` to display in the Built Different section. Gracefully hidden if not present.

## Workflow
- TypeCheck: `npx tsc -b`
- Build: `npx vite build`
- Dev: `npm run dev` (port 5180)
- Push: `git add -A && git commit -m "..." && git push origin master`

## Future Work
- Wire obravio.com domain (DNS: A record → 76.76.21.21, CNAME www → cname.vercel-dns.com)
- Terms of Service page (/terms) — required for Intuit QBO production keys
- Privacy Policy page (/privacy) — required for Intuit QBO production keys
- Connect waitlist form to actual email marketing (Instantly.ai or similar)
- Add Gemini brand image to Built Different section
- Explore Spline (spline.design) for true 3D embedded models
