import { filterClassNames } from '../../utils/filterClassNames'

import styles from './Button.module.css'

export function Button ({ onClick, children, secondary = false, type = 'button' }) {
  const classNames = filterClassNames({
    [styles.Button]: true,
    [styles['is-secondary']]: secondary
  })
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}
