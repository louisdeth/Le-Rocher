self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.open("rocher-cache-v1").then((cache) =>
      cache.match(e.request).then((res) => {
        return (
          res ||
          fetch(e.request).then((response) => {
            cache.put(e.request, response.clone());
            return response;
          })
        );
      })
    )
  );
});
