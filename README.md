# NORTHFORM Development

Fictional premium construction / architectural development studio — cinematic
single-page experience plus a project case page. Built for design/front-end
practice (all metrics and projects are demo content).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- GSAP ScrollTrigger — pinned scenes, scrubbed transitions, horizontal rail
- Lenis — smooth scrolling (wired into ScrollTrigger)
- Motion (`motion/react`) — microinteractions, nav, cursor, entrances

## Pages

- `/` — 9 scenes: hero → manifesto → featured project → horizontal project
  rail → materials → sticky process → featured development (video) →
  numbers → closing contact + footer
- `/projects/north-residence` — project case page
- `/attribution` — Pexels photo/video credits

## Develop

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy (Cloudflare Pages)

Framework preset: **Next.js**. Build command `npm run build`.
For full SSR on Cloudflare use the
[OpenNext Cloudflare adapter](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/);
for static hosting run `next build` and serve the prerendered output.

## Assets

Local Pexels campaign in `public/images` (14 photos) and `public/video`
(2 × 720p MP4). Credits in `/attribution` and `src/lib/assets.ts`.
