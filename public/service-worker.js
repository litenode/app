const VERSION = 1;

self.addEventListener('install', (event) => {
    console.debug('Inside the install handler:', VERSION);
});

self.addEventListener('activate', (event) => {
    console.debug('Inside the activate handler:', VERSION);
});

self.addEventListener('fetch', (event) => {
    console.debug('Inside the fetch handler:', VERSION);
});
