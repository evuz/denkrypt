import { copyToClipboard } from '../../utils/copyClipboard'
import { CopyIcon } from '../Icons/Copy.icon'

import styles from './Snippet.module.css'

export function Snippet ({ text }) {
  return (
    <div className={styles.Snippet}>
      {text}
      <button className={styles.copy} onClick={() => copyToClipboard(text)}>
        <CopyIcon size={1.5} />
      </button>
    </div>
  )
}
