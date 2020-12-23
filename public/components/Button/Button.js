import { filterClassNames } from '../../utils/filterClassNames'

import styles from './Button.module.css'

export function Button ({
  onClick,
  children,
  color = 'primary',
  type = 'button',
  disabled = false
}) {
  const classNames = filterClassNames([styles.Button, styles[`is-${color}`]])

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames}
      onClick={!disabled && onClick}
    >
      {children}
    </button>
  )
}
