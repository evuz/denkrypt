import { useState, useCallback } from 'preact/hooks'

import { ethereum, sign as signEth } from '../utils/ethereum'

const MetamaskState = {
  Loading: 0,
  Connected: 1,
  Disconnected: 2
}

export function useMetamask () {
  const [state, setState] = useState(MetamaskState.Disconnected)

  const sign = useCallback(async (phrase) => {
    setState(MetamaskState.Loading)
    const pass = await signEth(phrase)
    setState(MetamaskState.Connected)
    return pass
  }, [])

  const isLoading = state === MetamaskState.Loading
  const isConnected = state === MetamaskState.Connected
  const isDisconnected = state === MetamaskState.Disconnected

  return {
    isAvailable: Boolean(ethereum),
    isLoading,
    isConnected,
    isDisconnected,
    sign,
    state
  }
}
