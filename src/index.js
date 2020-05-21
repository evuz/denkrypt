import { decrypt } from './helpers/decrypt.js'
import { encrypt } from './helpers/encrypt.js'

let encryptContent
document.getElementById('encrypt').addEventListener('click', async () => { encryptContent = await encrypt() })
document.getElementById('decrypt').addEventListener('click', async () => console.log(await decrypt(encryptContent)))
document.getElementById('show').addEventListener('click', () => console.log(encryptContent))
