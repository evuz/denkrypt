/* eslint-env serviceworker */
const APP_NAME = '{{name}}'
const VERSION = '{{version}}'
const ASSETS = '{{assets}}'

self.addEventListener('install', (event) =>
  event.waitUntil(installServiceWorker())
)

async function installServiceWorker () {
  const cache = await caches.open(getCacheName())

  return cache.addAll(ASSETS)
}

self.addEventListener('activate', () => activateSW())

async function activateSW () {
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
    return cachedResponse
  }

  return fetch(event.request)
}

function getCacheName () {
  return `${VERSION}-${APP_NAME}`
}
