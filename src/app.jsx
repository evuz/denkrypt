/** @jsx j */
import { enableHooks, render, j, createElement } from '@evuz/joltik'

import { decrypt } from './helpers/decrypt.js'
import { encrypt } from './helpers/encrypt.js'
import { passwordScore } from './helpers/passwordScore.js'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Snippet } from './components/Snippet.jsx'
import { Progress } from './components/Progress.jsx'

import './styles'
import { percentToColor } from './helpers/percentToColor.js'

const inputs = {}

enableHooks()

render(<Button onClick={handleEncrypt}>Encrypt!</Button>, document.getElementById('buttons'))
render(<Button secondary onClick={handleDecrypt}>Decrypt!</Button>, document.getElementById('buttons'))
render(<Input area placeholder='Insert text' onChange={saveInput('content')}>Decrypt!</Input>, document.getElementById('input'))
render(<Input placeholder='Secret key' onChange={handleSecret} type='password'>Decrypt!</Input>, document.getElementById('secret-input'))
render(<Progress placeholder='Secret key' percent={0} onChange={saveInput('secret')} type='password'>Decrypt!</Progress>, document.getElementById('secret-progress'))

function handleSecret (value) {
  saveInput('secret')(value)
  updateProgress(value)
}

function updateProgress (value) {
  const score = passwordScore(value)
  const scorePercent = 100 / 6 * score
  const color = percentToColor(scorePercent)
  document.getElementById('secret-progress')
    .firstChild
    .replaceWith(
      createElement(
        <Progress percent={scorePercent} color={color}>Decrypt!</Progress>
      )
    )
}

function saveInput (key) {
  return function (value) {
    inputs[key] = value
  }
}

async function handleEncrypt () {
  const encryptedContent = window.btoa(await encrypt(inputs.content, inputs.secret))
  renderSnippetContent(encryptedContent)
}

async function handleDecrypt () {
  const decryptedContent = await decrypt(window.atob(inputs.content), inputs.secret)
  renderSnippetContent(decryptedContent)
}

function renderSnippetContent (text) {
  const mount = (el) => (
    document.getElementById('result').firstChild
      ? document.getElementById('result').firstChild.replaceWith(el)
      : document.getElementById('result').appendChild(el)
  )
  mount(createElement(<Snippet text={text} />))
}
