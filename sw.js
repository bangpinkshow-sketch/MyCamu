// Bump this version every time you change index.html so phones pick up the update.
const VERSION = 'v6';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;           // GitHub API, fonts: go straight to network
  // data.json: always try the network first, keep one offline copy
  if (url.pathname.endsWith('/data.json')) {
    e.respondWith(fetch(e.request, {cache: 'no-store'}).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put('./data.json', copy)); return res;
    }).catch(() => caches.match('./data.json')));
    return;
  }
  // everything else: network first (so your edits show up), cache as offline fallback
  e.respondWith(fetch(e.request).then(res => {
    const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return res;
  }).catch(() => caches.match(e.request)));
});
