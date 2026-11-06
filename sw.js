self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
    // A fetch listener is required by browsers to trigger the PWA install prompt
});