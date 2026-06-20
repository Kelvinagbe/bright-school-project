# Web Programming — Lab Manual Site

A self-guided information site covering the first three modules of the Web Programming lab manual: **HTML**, **CSS**, and **JavaScript**. Built as the Self Test assignment.

**Owner:** Your Name *(edit this — see Customize below)*
**Reg. No.:** 25/CO/CY/045
**Department:** Cybersecurity, Faculty of Computing

---

## Pages

| File | Page |
|---|---|
| `index.html` | Landing page — overview + links to all 3 modules |
| `module-1.html` | Module 01 — Introduction to HTML |
| `module-2.html` | Module 02 — CSS Styling & Layout |
| `module-3.html` | Module 03 — JavaScript Fundamentals |
| `contact.html` | Contact page — profile details + contact form |
| `styles.css` | Shared stylesheet (design system, sidebar, animations) |
| `script.js` | Shared behaviour (sidebar toggle, scroll reveal, form handling) |

Every page links to every other page through the top header and the slide-out sidebar, so navigation works from anywhere on the site.

## Run it locally

No build step or server required — it's plain HTML/CSS/JS.

1. Unzip the folder.
2. Double-click `index.html` to open it in your browser.

Or, for a local server (recommended so the audio player and fonts load cleanly):

```bash
cd web-programming-site
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy it (to share a live link with the class)

Any static host works — pick whichever is easiest:

- **Vercel** — `npx vercel` from inside the folder, or drag-and-drop the folder at vercel.com/new
- **Netlify** — drag-and-drop the folder at app.netlify.com/drop
- **GitHub Pages** — push the folder to a repo, then enable Pages in repo Settings

## Customize before sharing

- [ ] **Your name** — open `contact.html` and replace `Your Name` in the profile card (search for `<!-- replace with your full name -->`).
- [ ] **Reg. no. / department** — currently set to `25/CO/CY/045` / Cybersecurity across the header, sidebar, footer, and contact page. Find-and-replace if these change.
- [ ] **Images** — placeholder images load from `picsum.photos`. Swap the `src` in each `<img>` for your own lab screenshots.
- [ ] **Audio** — each module has a recap audio player pointed at sample tracks (SoundHelix). Swap the `<source src="...">` for your own recordings.
- [ ] **Contact form** — currently a static front-end demo (shows a success message but doesn't send anywhere). To receive real submissions, point the `<form>` at a service like [Formspree](https://formspree.io) or Netlify Forms.

## Design notes

Monochrome, Vercel-inspired design system: hairline borders, Inter + JetBrains Mono type pairing, fixed header with blur-on-scroll, collapsible sidebar (off-canvas on mobile), and scroll-triggered fade-up animations (respects `prefers-reduced-motion`). Fully responsive down to mobile.
