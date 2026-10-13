import type { LoaderProps } from './types'
import shared from './Loader.module.css'
import styles from './BouncingBoneLoader.module.css'

export function BouncingBoneLoader({ size = 64, className, label = 'Loading' }: LoaderProps) {
  return (
    <span
      className={[shared.root, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      role="status"
    >
      <svg className={shared.graphic} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <ellipse className={styles.shadow} cx="50" cy="83" rx="25" ry="3.5" fill="#cf9b46" />
        <g className={styles.bounce}>
          <g className={styles.bone}>
            <path d="M30 40H70C73 40 73 35 78 33C85 29 94 34 93 41C93 45 90 47 87 48C90 49 93 51 93 55C94 62 85 67 78 63C73 61 73 56 70 56H30C27 56 27 61 22 63C15 67 6 62 7 55C7 51 10 49 13 48C10 47 7 45 7 41C6 34 15 29 22 33C27 35 27 40 30 40Z" fill="#fff4d7" stroke="#cf9b46" strokeWidth="3" strokeLinejoin="round" />
            <path d="M34 45H66" stroke="#fffdf9" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>
      </svg>
      <span className={shared.label}>{label}</span>
    </span>
  )
}
