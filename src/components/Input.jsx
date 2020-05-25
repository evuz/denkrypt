/** @jsx j */
import { j } from '@evuz/joltik'
import { filterClassNames } from '../helpers/filterClassNames'
import { useFocus } from '../hooks/useFocus'

export function Input ({ onChange, placeholder, type = 'text', area = false }) {
  const [isFocused, bind] = useFocus()
  const containerClassNames = filterClassNames({
    Input__container: true,
    'Input__container--focused': isFocused
  })

  function handleChange (e) {
    if (!onChange) {
      return
    }
    onChange(e.target.value)
  }

  return (
    <div className={containerClassNames}>
      <div className='Input__wrapper'>
        {area ? <textarea type={type} onInput={handleChange} placeholder={placeholder} {...bind} className='Input' /> : <input type={type} onInput={handleChange} placeholder={placeholder} {...bind} className='Input' />}
      </div>
    </div>
  )
}
