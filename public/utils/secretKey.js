import { str2ab } from './arraybuffer.js'

export function getSecretKey (secretKey) {
  secretKey = str2ab(secretKey)
  return window.crypto.subtle.importKey(
    'raw', // raw
    secretKey, // array buffer password
    {
      name: 'PBKDF2'
    }, // the algorithm you are using
    false, // whether the derived key is extractable
    ['deriveKey'] // limited to the option deriveKey
  )
}
