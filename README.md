# myCampus (Northwind University) – free PWA

## Put it online for free (needed for "Install app" on your phone)
GitHub Pages:
1. Create a free GitHub account → New repository (public), e.g. `mycampus`.
2. Upload all files in this folder (Add file → Upload files) → Commit.
3. Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / root → Save.
4. After ~1 minute your app is at `https://<your-username>.github.io/mycampus/`.

## Install on your phone
Open that link in Chrome on Android → ⋮ menu → "Add to Home screen" / "Install app".
It opens full-screen with its own icon and works offline.

## Updating it from your laptop
1. Edit `index.html`.
2. In `sw.js`, change `const VERSION = 'v1'` to `'v2'` (then v3, v4…).
3. Upload the changed files to GitHub again (or `git push`).
4. Close and reopen the app on your phone. It updates on its own.

## Test on your laptop first
In this folder run: `python -m http.server 8000`, then open http://localhost:8000
