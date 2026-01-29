self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Required to make the app "installable"
  e.respondWith(fetch(e.request));
});
