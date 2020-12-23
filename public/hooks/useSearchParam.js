import { location } from '../utils/location'

function searchParamsToObject (params = '') {
  if (params[0] === '?') {
    params = params.slice(1)
  }

  const pairs = params.split('&')
  const searchParams = {}

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i]
    const [key, value = ''] = pair.split('=')
    searchParams[key] = value
  }

  return searchParams
}

export function useSearchParam () {
  const qs = (location && location.search) || ''
  const searchParams = searchParamsToObject(qs)

  return searchParams
}
