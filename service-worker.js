\// Minimal Service Worker for PWA eligibility
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Fetch handler required for PWA "installability"
// Note: GitHub Pages requires a valid response even for a "no-op" fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Minimal fallback to prevent the install prompt from being blocked
            return new Response('Offline');
        })
    );
});
