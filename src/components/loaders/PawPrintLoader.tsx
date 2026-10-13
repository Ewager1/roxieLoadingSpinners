import type { LoaderProps } from './types'
import shared from './Loader.module.css'
import styles from './PawPrintLoader.module.css'

function Paw() {
  return (
    <>
      <path d="M-10 6C-12 10-10 15-6 15C-3 15-2 13 0 13S3 15 6 15C10 15 12 10 10 6L5 0C2-4-2-4-5 0Z" />
      <ellipse cx="-11" cy="-3" rx="4" ry="5.5" transform="rotate(-28 -11 -3)" />
      <ellipse cx="-4" cy="-10" rx="4" ry="5.5" transform="rotate(-10 -4 -10)" />
      <ellipse cx="5" cy="-10" rx="4" ry="5.5" transform="rotate(10 5 -10)" />
      <ellipse cx="12" cy="-3" rx="4" ry="5.5" transform="rotate(28 12 -3)" />
    </>
  )
}

export function PawPrintLoader({ size = 64, className, label = 'Loading' }: LoaderProps) {
  return (
    <span
      className={[shared.root, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      role="status"
    >
      <svg className={shared.graphic} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <g transform="translate(21 73) rotate(-18)">
          <g className={`${styles.paw} ${styles.first}`}><Paw /></g>
        </g>
        <g transform="translate(50 48) rotate(12)">
          <g className={`${styles.paw} ${styles.second}`}><Paw /></g>
        </g>
        <g transform="translate(79 23) rotate(-18)">
          <g className={`${styles.paw} ${styles.third}`}><Paw /></g>
        </g>
      </svg>
      <span className={shared.label}>{label}</span>
    </span>
  )
}
