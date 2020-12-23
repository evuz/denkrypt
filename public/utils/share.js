import { navigator } from './navigator'

export function share (url, phrase) {
  if (!navigator || !navigator.share) {
    return
  }

  navigator.share({
    url: `${url}?phrase=${phrase}`,
    title: 'Share your phrase'
  })
}
