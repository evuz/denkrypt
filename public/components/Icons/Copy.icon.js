import * as React from 'react'

export function CopyIcon ({ size = 1, color = 'currentColor' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      width={`${size}rem`}
      height={`${size}rem`}
      style={{
        msTransform: 'rotate(360deg)',
        WebkitTransform: 'rotate(360deg)'
      }}
      viewBox='0 0 24 24'
      transform='rotate(360)'
    >
      <g
        fill='none'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
        <path d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' />
      </g>
    </svg>
  )
}
