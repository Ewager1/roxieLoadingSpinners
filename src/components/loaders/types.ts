export interface LoaderProps {
  /** Width and height of the loader viewport, in pixels. Defaults to 64. */
  size?: number
  /** Additional class applied to the fixed-size root element. */
  className?: string
  /** Text announced by assistive technology. Defaults to "Loading". */
  label?: string
}
