// Offline-Cache für die App. Bei Änderungen an den Dateien VERSION erhöhen.
const VERSION = 'zyklus-v6';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  // cache: 'reload' holt frische Dateien statt evtl. veralteter aus dem Browser-Cache
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      // Nur eigene alte Caches löschen – die Migräne-App liegt unter derselben Adresse
      .then(keys => Promise.all(keys.filter(k => k.startsWith('zyklus-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Netz zuerst (damit Updates ankommen), bei fehlendem oder zu langsamem Netz aus dem Cache.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const fromCache = () => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html'));
  const network = fetch(e.request).then(res => {
    // Nur gültige Antworten speichern, damit eine Fehlerseite nie die Offline-Kopie ersetzt
    if (res.ok) {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {});
    }
    return res;
  });
  network.catch(() => {}); // Fehler wird unten behandelt
  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000));
  e.respondWith(
    Promise.race([network, timeout])
      .catch(() => fromCache().then(r => r || network))
  );
});
