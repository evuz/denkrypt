import { useState } from '@evuz/joltik'

export function useFocus () {
  const [isFocused, setFocus] = useState(false)
  function onFocus () {
    setFocus(true)
  }
  function onBlur () {
    setFocus(false)
  }
  return [isFocused, { onFocus, onBlur }]
}
