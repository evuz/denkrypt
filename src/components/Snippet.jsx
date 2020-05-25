/** @jsx j */
import { j } from '@evuz/joltik'
import { Icon } from './Icon'
import { copyToClipboard } from '../helpers/copyClipboard'

export function Snippet ({ text }) {
  return (
    <div className='Snippet'>
      {text}
      <button className='Snippet__copy' onClick={() => copyToClipboard(text)}><Icon name='copy' /></button>
    </div>
  )
}
