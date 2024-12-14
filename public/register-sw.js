if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.debug('Service Worker registered with scope:', registration.scope);
        })
    });
}
