# Embers — Premium Fine Dining Restaurant Website

A production-ready, one-page restaurant website built with React + Vite, Tailwind CSS,
GSAP, Framer Motion, Lenis smooth scroll, and Swiper.js.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (dark luxury theme)
- GSAP + ScrollTrigger (text reveals, parallax)
- Framer Motion (micro-interactions, page/section transitions)
- Lenis (buttery smooth scrolling, synced to GSAP ticker)
- Swiper.js (dish slider, testimonials)
- react-datepicker (reservation form)
- react-icons

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/       All section + shared UI components
    ui/             shadcn/ui-style primitives (Button, Input, Field)
  data/             Static content (dishes, menu, chefs, gallery, testimonials, instagram)
  hooks/            useLenis — smooth scroll + GSAP ScrollTrigger sync
  lib/              cn() class merge utility
  App.jsx           Composes the full one-page layout
  index.css         Tailwind layers + theme tokens + component classes
public/
  videos/           Drop hero-food.mp4 here (see README inside)
  favicon.svg
```

## Before shipping to production
1. Replace all Unsplash placeholder image URLs in `src/data/*.js` and components
   with your own licensed photography.
2. Add `public/videos/hero-food.mp4` — a short looping cinematic food/interior reel.
3. Wire `Reservation.jsx` and `Footer.jsx` (newsletter) forms to a real backend/API.
4. Update contact details, opening hours, and social links.
5. Add `public/og-image.jpg` (1200x630) for social sharing previews.
