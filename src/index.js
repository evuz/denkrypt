import { decrypt } from './helpers/decrypt.js'
import { encrypt } from './helpers/encrypt.js'

import './styles'

let encryptContent
document.getElementById('encrypt').addEventListener('click', async () => {
  encryptContent = window.btoa(await encrypt())
  console.log(encryptContent)
})
document.getElementById('decrypt').addEventListener('click', async () => console.log(await decrypt(window.atob(encryptContent))))
document.getElementById('show').addEventListener('click', () => console.log(encryptContent))
