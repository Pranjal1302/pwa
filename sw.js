//install servie worker
self.addEventListener('install', evt => {
    console.log('Installing Service Worker ...', evt)
});

//activate service worker
self.addEventListener('activate', evt => {
    console.log('Activating Service Worker ...', evt)
});

//fetch event
self.addEventListener('fetch', evt => {
    console.log('Fetching Service Worker ...', evt)
});