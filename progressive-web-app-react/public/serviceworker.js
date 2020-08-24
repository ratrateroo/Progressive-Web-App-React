const CASHE_NAME = "version-1";
const urlsToCashe = ['index.html', 'offline.html'];

const self = this;

//Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CASHE_NAME)
            .then((cashe) => {
                console.log('Opened cashe');
                
                return cashe.addAll(urlsToCashe);
            })
    )
});


//Listen for requests
self.addEventListener('fetch', (event) => {

});

//Activate the Service Worker
self.addEventListener('activate', (event) => {

});