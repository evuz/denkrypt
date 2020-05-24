/** @jsx j */
import { j } from '@evuz/joltik'
import { filterClassNames } from '../helpers/filterClassNames'

export function Button ({ onClick, children, secondary = false }) {
  const classNames = filterClassNames({
    Button: true,
    'Button--secondary': secondary
  })
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}
