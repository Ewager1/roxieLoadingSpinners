# Roxie reference artwork

`roxie-reference.jpg` is an unchanged copy of the user-supplied Roxie’s Pantry illustration screenshot (221 × 153 pixels). `roxie-clips.ts` contains SVG clipping outlines in that image’s coordinates, separating the portrait and original front paws from the screenshot background, accent marks, and logo. No facial features or paw details are redrawn.

`RoxiePeekLoader` animates the clipped portrait behind an edge and keeps the original paws anchored over it. Its reduced-motion pose shows the full portrait. Copy this assets folder along with the loader when reusing it; Vite resolves the imported image into the build.

The clipping paths depend on this image’s dimensions and crop. `artworkDimensions` in `roxie-clips.ts` supplies the same 221 × 153 rendering coordinates to both image layers. If the image’s framing changes, recheck the paths, viewport, edge placement, and animation coordinates together. The component’s `size` prop scales this coordinate system without changing the clipping paths.

The small JPEG source can look soft at large sizes, and JPEG edge pixels may retain a slight matte fringe. A higher-resolution original with transparency and identical framing can use the existing rendered dimensions and clipping coordinates.
