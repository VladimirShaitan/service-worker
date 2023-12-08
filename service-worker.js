self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('/data')) {
        event.respondWith(
            new Response('Це відповідь, змінена Service Worker!')
        );
    }
});
