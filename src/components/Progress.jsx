/** @jsx j */
import { j } from '@evuz/joltik'

export function Progress ({ percent = 50, color = 'default' }) {
  return (
    <div className='Progress__container'>
      <progress className={`Progress Progress--${color}`} max='100' value={percent} />
    </div>
  )
}
