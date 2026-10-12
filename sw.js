const C = "foyer-v1";
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(["./", "index.html"]))));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});