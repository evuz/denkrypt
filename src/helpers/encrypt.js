import { crypto } from './crypto.js'
import { derivedEncryptionSecretKey } from './derivedKey.js'
import { ab2str, str2ab } from './arraybuffer.js'

export async function encrypt () {
  const content = 'HelloWorld'
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(16))
  const derivedKey = await derivedEncryptionSecretKey(salt)
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, derivedKey, str2ab(content))
  return ab2str([iv, salt, new Uint8Array(encrypted)])
}
