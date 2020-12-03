import { filterClassNames } from '../../utils/filterClassNames'

import styles from './Progress.module.css'

function percentToColor (percent) {
  if (percent > 75) {
    return 'success'
  } else if (percent > 50) {
    return 'secondary'
  } else if (percent > 25) {
    return 'warning'
  }
  return 'error'
}

export function Progress ({ percent = 50, color }) {
  color = color || percentToColor(percent)
  const progressClassnames = filterClassNames([
    styles.Progress,
    styles[`is-${color}`]
  ])

  return (
    <div className={styles.container}>
      <progress className={progressClassnames} max='100' value={percent} />
    </div>
  )
}
