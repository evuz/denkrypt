import { useCallback, useState } from 'preact/hooks'
import { encoded, decoded } from '../utils/base64'
import { encrypt } from '../utils/encrypt'
import { decrypt } from '../utils/decrypt'

export function useEncode () {
  const [text, setText] = useState(null)

  const enc = useCallback((code, secret) => {
    encrypt(code, secret).then((v) => {
      const text = encoded(v)
      setText(text)
    })
  }, [])

  const dec = useCallback((code, secret) => {
    console.log({ code, secret })
    decrypt(decoded(code), secret).then((v) => {
      setText(v)
    }).catch(err => console.log(err))
  }, [])

  return { text, encrypt: enc, decrypt: dec }
}
