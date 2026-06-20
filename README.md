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
- [ ] **Images** — each module now uses a real, free-to-use photo from Unsplash (no attribution legally required, credited in the caption anyway). Swap to your own lab screenshots any time by replacing the `src` in each `<img>` tag.
- [ ] **Audio** — each module has a recap audio player pointed at a free royalty-free demo track (SoundHelix) so the player works out of the box. Swap the `<source src="...">` for your own recording — see "Adding real audio" below.
- [ ] **Contact form** — currently a static front-end demo (shows a success message but doesn't send anywhere). To receive real submissions, point the `<form>` at a service like [Formspree](https://formspree.io) or Netlify Forms.

## Adding real audio

The recap players currently use free SoundHelix demo tracks so they're playable immediately, but they're generic background music, not real lecture content. To swap in your own:

1. Record a short recap on your phone's voice memo app (60–90 seconds is plenty) and export it as an `.mp3`.
2. Drop the file into the site folder, e.g. `audio/module-1-recap.mp3`.
3. In `module-1.html` (and 2/3), find the `<source src="...">` line inside the `<audio>` tag and change it to your local path:
   ```html
   <source src="audio/module-1-recap.mp3" type="audio/mpeg">
   ```
4. Repeat for each module.

If you'd rather not record your own voice, free royalty-free narration tracks are available at [Pixabay Audio](https://pixabay.com/sound-effects/search/lecture/) and [Freesound](https://freesound.org) — check each track's license before using.

## Design notes

Monochrome, Vercel-inspired design system: hairline borders, Inter + JetBrains Mono type pairing, fixed header with blur-on-scroll, collapsible sidebar (off-canvas on mobile), and scroll-triggered fade-up animations (respects `prefers-reduced-motion`). Fully responsive down to mobile.
