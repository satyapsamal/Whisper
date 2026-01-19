// Minimal Service Worker for PWA eligibility
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Fetch handler required for PWA "installability"
self.addEventListener('fetch', (event) => {
    // No caching logic as requested
    return;
});