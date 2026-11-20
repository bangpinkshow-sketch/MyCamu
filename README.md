# myCampus — Bennett University replica

A mobile-first, installable PWA recreated from the three supplied myCamu screen recordings.

## Files
- `index.html` — application interface, styles, navigation and interactions
- `manifest.json` — PWA metadata
- `sw.js` — offline cache and update handling
- `icon-192.png`, `icon-512.png` — supplied app icons
- `profile-photo.jpg` — profile image cropped from the supplied reference recording

## Run locally
From this folder, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy
Upload all files in this folder to the root of a GitHub Pages repository. The app is configured to load `index.html`, the manifest, service worker, icons and profile image from the same folder.

## Notes
This is a front-end demonstration. Forms and actions that depend on the university's real backend (authentication, live attendance, official approvals, records, messaging, payments, etc.) are simulated locally and do not connect to Bennett University's systems. Do not enter real passwords or sensitive information.
