let __cacheName = 'SERVICE_WORKER_CACHE_VERSION';

self.addEventListener('install', function(event) {
    console.log('Service Worker install..');
    event.waitUntil(
        caches
        .open(__cacheName)
        .then(function(cache) {
            return cache.addAll(`
                ./
                css/fonts.css
                css/style.css
                img/mk5-logo_matreshka.svg
                img/mk5-logo_text.svg
                img/logos/shooju.png
                img/logos/habrahabr.svg
                img/logos/browserstack.svg
                img/liqpay-donate-button.png
                fonts/Material-Design-Icons.ttf
                fonts/Roboto-Regular.ttf
                fonts/Roboto-Bold.ttf
                fonts/Roboto-Light.ttf
                js/app.js
                icons/favicon.ico
          `.trim().split(/\s+/));
        })
        .then(() => {
            return caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (__cacheName !== cacheName) {
                            return caches.delete(cacheName);
                        }
                    })
                )
            })
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request, { cacheName: __cacheName }).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
