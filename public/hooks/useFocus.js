import { useState, useCallback } from 'preact/hooks'

export function useFocus () {
  const [isFocused, setFocus] = useState(false)

  const onFocus = useCallback(() => setFocus(true), [])
  const onBlur = useCallback(() => setFocus(false), [])

  return [isFocused, { onFocus, onBlur }]
}
