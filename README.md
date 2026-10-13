# Roxie Loaders

Three small, reusable loading indicators inspired by [Roxie’s Pantry](https://roxiespantry.ethanwager.com). Built with React, TypeScript, Vite, SVG, CSS Modules, and native CSS animations. The preview compares all three with a shared size slider and light/dark surfaces.

## Run locally

Use Node.js 22.12+ (or a newer supported Node release) and npm.

```sh
npm install
npm run dev
```

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production output is in `dist/`. Dependencies are limited to the standard Vite React TypeScript starter, including its Oxlint configuration. No automated test suite is configured.

## Use the components

Copy the complete `src/components/loaders/` folder into a React project with CSS Modules support, then import from its barrel file:

```tsx
import { PawPrintLoader, BouncingBoneLoader, RoxiePeekLoader } from './components/loaders'

export function LoadingExamples() {
  return (
    <>
      <PawPrintLoader size={48} label="Loading products" />
      <BouncingBoneLoader size={32} label="Saving changes" />
      <RoxiePeekLoader size={96} className="my-loader" label="Getting things ready" />
    </>
  )
}
```

All three accept the same `LoaderProps`:

| Prop | Default | Purpose |
| --- | --- | --- |
| `size?: number` | `64` | Positive width and height in pixels; SVG scales proportionally. |
| `className?: string` | — | Additional class on the root element. |
| `label?: string` | `"Loading"` | Visually hidden loading status text. |

- **PawPrintLoader:** three paw prints pulse in sequence.
- **BouncingBoneLoader:** a bone bounces gently with squash/stretch and a shadow.
- **RoxiePeekLoader:** the original Roxie illustration peeks and tilts behind an edge, with her original paws anchored over it. SVG clipping paths separate the portrait and paws from the image background and logo.

Each reserves a square viewport, runs independently, exposes `role="status"`, and hides decorative SVGs from screen readers. Device reduced-motion preferences replace animation with a static pose. Styles and colors are component-local and work on light and dark backgrounds. Render a loader while work is pending and remove it when the operation finishes. Avoid multiple announcements for the same operation; the preview uses separate labels to distinguish its examples.

## Visual reference and limitations

The blue, cream, and gold palette is approximated from the live Roxie’s Pantry site. `RoxiePeekLoader` uses an unchanged, locally bundled screenshot of the original Roxie illustration. The small JPEG can look soft at large sizes and retain a slight background fringe; a higher-resolution original with transparency would improve those edges.

The clipping coordinates are calibrated to the current 221 × 153 image and its crop. Artwork dimensions and outlines are kept together in `src/components/loaders/assets/roxie-clips.ts`. Replacing or cropping the image requires checking the outlines, viewport, edge placement, and animation coordinates against the new artwork. A higher-resolution version with identical framing can retain the existing rendered dimensions and coordinates. Changing the component’s `size` prop scales the entire loader and needs no coordinate changes. Copy the assets folder with the component when reusing it.
