import { filterClassNames } from '../../utils/filterClassNames'
import { useFocus } from '../../hooks/useFocus'

import styles from './Input.module.css'

export function Input ({
  onChange,
  placeholder,
  value = '',
  type = 'text',
  area = false
}) {
  const [isFocused, bind] = useFocus()
  const containerClassNames = filterClassNames({
    [styles.container]: true,
    [styles['is-focused']]: isFocused
  })

  function handleChange (e) {
    if (!onChange) return

    onChange(e.target.value)
  }

  const InputTag = area ? 'textarea' : 'input'

  return (
    <div className={containerClassNames}>
      <div className={styles.wrapper}>
        <InputTag
          value={value}
          className={styles.Input}
          type={type}
          onInput={handleChange}
          placeholder={placeholder}
          {...bind}
        />
      </div>
    </div>
  )
}
