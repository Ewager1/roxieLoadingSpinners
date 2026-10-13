import { useId } from 'react'
import type { LoaderProps } from './types'
import roxieArtwork from './assets/roxie-reference.jpg'
import { artworkDimensions, portraitOutline, pawsOutline } from './assets/roxie-clips'
import shared from './Loader.module.css'
import styles from './RoxiePeekLoader.module.css'

export function RoxiePeekLoader({ size = 64, className, label = 'Loading' }: LoaderProps) {
  // Each instance needs its own clip IDs when multiple loaders share a page.
  const id = useId()
  const portraitId = `${id}-portrait`
  const pawsId = `${id}-paws`

  return (
    <span
      className={[shared.root, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size }}
      role="status"
    >
      <svg className={shared.graphic} viewBox="40 0 150 150" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={portraitId} clipPathUnits="userSpaceOnUse">
            <path d={portraitOutline} />
          </clipPath>
          <clipPath id={pawsId} clipPathUnits="userSpaceOnUse">
            <path d={pawsOutline} />
          </clipPath>
        </defs>

        {/* This viewport hides the original portrait as it lowers behind the edge. */}
        <svg x="40" y="0" width="150" height="137" viewBox="40 0 150 137" overflow="hidden">
          <g className={styles.peek}>
            <g className={styles.portrait}>
              <image
                href={roxieArtwork}
                width={artworkDimensions.width}
                height={artworkDimensions.height}
                clipPath={`url(#${portraitId})`}
              />
            </g>
          </g>
        </svg>

        <rect x="47" y="137" width="135" height="12" rx="5" fill="#355f9b" stroke="#dce9f5" strokeWidth="1.5" />
        <path d="M57 144H172" stroke="#6586b2" strokeWidth="1.5" strokeLinecap="round" />

        {/* Original paws stay anchored to the edge while the portrait moves. */}
        <image
          href={roxieArtwork}
          width={artworkDimensions.width}
          height={artworkDimensions.height}
          clipPath={`url(#${pawsId})`}
        />
      </svg>
      <span className={shared.label}>{label}</span>
    </span>
  )
}
