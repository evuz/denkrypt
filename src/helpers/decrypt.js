import { str2ab, ab2str } from './arraybuffer.js'
import { derivedEncryptionSecretKey } from './derivedKey.js'
import { crypto } from './crypto.js'

export async function decrypt (encrypted) {
  const rawContent = new Uint8Array((str2ab(encrypted)))
  const iv = rawContent.slice(0, 16)
  const salt = rawContent.slice(16, 32)
  const content = rawContent.slice(32)
  const derivedKey = await derivedEncryptionSecretKey(salt)
  const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, derivedKey, content)
  return ab2str(decrypted)
}
