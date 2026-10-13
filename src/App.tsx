import { useState } from 'react'
import { PawPrintLoader, BouncingBoneLoader, RoxiePeekLoader } from './components/loaders'
import styles from './App.module.css'

const loaders = [
  {
    name: 'PawPrintLoader',
    title: 'Paw prints',
    description: 'One paw at a time. A friendly rhythm for everyday waits.',
    Component: PawPrintLoader,
    tag: 'Staggered pulse',
  },
  {
    name: 'BouncingBoneLoader',
    title: 'Bouncing bone',
    description: 'A little bounce, a soft landing. Made for small moments.',
    Component: BouncingBoneLoader,
    tag: 'Bounce & stretch',
  },
  {
    name: 'RoxiePeekLoader',
    title: 'Roxie peek',
    description: 'A familiar face checking in while things get ready.',
    Component: RoxiePeekLoader,
    tag: 'Peek & tilt',
  },
]

function App() {
  const [size, setSize] = useState(64)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.brandMark}>
            <ellipse cx="16" cy="23" rx="8" ry="6" />
            <ellipse cx="6" cy="14" rx="3" ry="4" transform="rotate(-25 6 14)" />
            <ellipse cx="12" cy="7" rx="3" ry="4" />
            <ellipse cx="21" cy="7" rx="3" ry="4" />
            <ellipse cx="27" cy="14" rx="3" ry="4" transform="rotate(25 27 14)" />
          </svg>
          <span>
            Roxie’s Pantry <span className={styles.brandDivider}>/</span> Motion collection
          </span>
        </div>
        <span className={styles.edition}>THREE LITTLE WAYS TO WAIT</span>
      </header>

      <section className={styles.intro} aria-labelledby="page-title">
        <p className={styles.eyebrow}>A LITTLE JOY IN THE WAIT</p>
        <h1 id="page-title">Roxie Loaders<span className={styles.period}>.</span></h1>
        <p className={styles.lead}>
          Playful loading animations inspired by Roxie’s Pantry.
          <br className={styles.desktopBreak} /> Small companions for the moments in between.
        </p>
      </section>

      <section className={styles.collection} aria-label="Loader previews">
        <div className={styles.toolbar}>
          <div className={styles.sizeControl}>
            <label htmlFor="loader-size">Loader size</label>
            <input
              id="loader-size"
              type="range"
              min="32"
              max="160"
              step="8"
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
            />
            <output htmlFor="loader-size" className={styles.sizeValue}>
              {size}<span>px</span>
            </output>
          </div>
          <div className={styles.surfaceControl}>
            <span id="surface-label">Preview surface</span>
            <div className={styles.themeToggle} role="group" aria-labelledby="surface-label">
              <button type="button" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
                <span className={styles.lightDot} aria-hidden="true" />Light
              </button>
              <button type="button" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
                <span className={styles.darkDot} aria-hidden="true" />Dark
              </button>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {loaders.map(({ name, title, description, Component, tag }, index) => (
            <article key={name} className={styles.card}>
              <div className={`${styles.stage} ${theme === 'dark' ? styles.darkStage : ''}`}>
                <span className={styles.cardNumber} aria-hidden="true">0{index + 1}</span>
                <Component size={size} label={`${title}: loading`} />
                <span className={styles.motionTag}>{tag}</span>
              </div>
              <div className={styles.cardInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
                <code>{name}</code>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.hint}>
          <span aria-hidden="true">✦</span> These companions respect your device’s reduced motion preference.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>Made for Roxie’s Pantry. Ready for your next React project.</p>
        <span>SVG <span aria-hidden="true">·</span> CSS motion <span aria-hidden="true">·</span> React + TypeScript</span>
      </footer>
    </main>
  )
}

export default App
