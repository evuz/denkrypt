import { ethereum, sign } from '../utils/ethereum'

export function useMetamask () {
  return { isAvailable: Boolean(ethereum), sign }
}
