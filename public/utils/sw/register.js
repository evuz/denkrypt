import { capabilities } from './capabilities'

export function registerServiceWorker () {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  if (!capabilities.sw) {
    return console.log('service worker not supported')
  }

  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(() => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err))
  })
}
