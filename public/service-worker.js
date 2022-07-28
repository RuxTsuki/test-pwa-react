let CACHE_NAME = 'pwa-test';
let urlsToCache = ['/'];


self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })
    )
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then((cache) => {
            if (cache) {
                return cache;
            }
            return fetch(event.request);
        })
    )
});


self.addEventListener("activate", event => {
    let cacheWhiteList = ['pwa-test'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})






