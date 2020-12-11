/* eslint-env serviceworker */
self.addEventListener('install', (event) =>
  event.waitUntil(installServiceWorker())
)

async function installServiceWorker () {
  log('Service Worker installation started ')

  const cache = await caches.open(getCacheName())

  return cache.addAll(['/'])
}

self.addEventListener('activate', () => activateSW())

async function activateSW () {
  log('Service Worker activated')

  const cacheKeys = await caches.keys()

  cacheKeys
    .filter((cacheKey) => cacheKey !== getCacheName())
    .forEach((cacheKey) => {
      caches.delete(cacheKey)
    })
}

self.addEventListener('fetch', (event) =>
  event.respondWith(cacheThenNetwork(event))
)

async function cacheThenNetwork (event) {
  const cache = await caches.open(getCacheName())

  const cachedResponse = await cache.match(event.request)

  if (cachedResponse) {
    log('Serving From Cache: ' + event.request.url)
    return cachedResponse
  }

  const networkResponse = await fetch(event.request)

  log('Calling network: ' + event.request.url)

  return networkResponse
}

// each logging line will be prepended with the service worker version
function log (message) {
  console.log(message)
}

function getCacheName () {
  return 'Denkrypt-app'
}
