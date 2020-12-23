import { navigator } from '../utils/navigator'
import { useCallback } from 'preact/hooks'

import { share } from '../utils/share'
import { useLocation } from './useLocation'

export function useShare () {
  const [loc] = useLocation()

  const isAvailable = navigator && navigator.share
  const shareFn = useCallback((phrase) => {
    share(loc, phrase)
  }, [loc, share])

  return [shareFn, isAvailable]
}
