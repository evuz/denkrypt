import { location } from '../utils/location'

export function useLocation () {
  if (!location) return []

  const { origin, pathname } = location
  const loc = `${origin}${pathname}`
  return [loc]
}
