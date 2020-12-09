import styles from './Snippet.module.css'

import { CopyIcon } from '../Icons/Copy.icon'

export function Snippet ({ text }) {
  return (
    <div className={styles.Snippet}>
      {text}
      <button className={styles.copy}>
        <CopyIcon size={1.5} />
      </button>
    </div>
  )
}
