const version = "v1";

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;
  //get 
  if (request.method !== "GET") {
    return; 
  }

  //Buscar en cache
  event.respondWith(cacheResponse(request))

  //Actualizar el cache
  event.waitUntil(updateCache(request))
})

const precache = async () => {
  try {
    const cache = await caches.open(version);
    return cache.addAll([
      '/',
      './index.html',
      './assets/index.js',
      './assets/MediaPlayer.js',
      './assets/plugins/AutoPlay.js',
      './assets/plugins/AutoPause.js',
      './assets/index.css',
      './assets/BigBuckBunny.mp4',
    ])
  } catch (error) {
    console.log(error.message);
  }
}

const cacheResponse = async (request) => {
  try {
    const cache = await caches.open(version);
    const response = await cache.match(request)
    return response || fetch(request);
  } catch (error) {
    console.log(error.message);
  }
}

//Con esta funcion nos aseguramos de siempre devolver algo, si no esta en cache hacemos la peticion a fetch.
const updateCache = async (request) => {
  const cache = await caches.open(version)
  const response = await fetch(request)
  return response.status === 200 ? cache.put(request, response) : new Promise((resolve, reject) => resolve(':)'))
}