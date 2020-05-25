/** @jsx j */
import { j } from '@evuz/joltik'

export function Icon ({ name }) {
  return (
    <img className='Icon' src={`public/feather/${name}.svg`} />
  )
}
