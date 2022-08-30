var cacheName = "magenishCacheV1";
self.addEventListener("install", (event) => {
  async function buildCache() {
    const cache = await caches.open(cacheName);
    return cache.addAll(["/EwaDS.js"]);
  }
  console.log("V1 insssstallssssing…");
  event.waitUntil(buildCache());
});

self.addEventListener("fetch", (event) => {
  async function cachedFetch(event) {
    const cache = await caches.open(cacheName);
    let response = await cache.match(event.request);
    if (response) {
      response.headers.set("X-ServiceWorker", "Value-true");
      return response;
    }
    response = await fetch(event.request);
    return response;
  }
  event.respondWith(cachedFetch(event));
});
