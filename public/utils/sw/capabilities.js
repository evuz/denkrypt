import { navigator } from '../navigator'

export const capabilities = {
  sw: navigator && 'serviceWorker' in navigator
}
