import { crypto } from './crypto.js'
import { getSecretKey } from './secretKey.js'

export async function derivedEncryptionSecretKey (salt) {
  const secretKey = await getSecretKey()
  return crypto.subtle.deriveKey(
    {
      salt,
      name: 'PBKDF2',
      iterations: 80000,
      hash: {
        name: 'SHA-512'
      }
    },
    secretKey,
    {
      name: 'AES-GCM',
      length: 256
    },
    false,
    ['encrypt', 'decrypt']
  )
}
