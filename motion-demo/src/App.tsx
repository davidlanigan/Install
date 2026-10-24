import { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import './App.css'

const initialItems = ['Websites', 'Branding', 'SEO', 'Print']

function App() {
  const [showCard, setShowCard] = useState(true)
  const [items, setItems] = useState(initialItems)

  const shuffle = () => setItems((current) => [...current].sort(() => Math.random() - 0.5))

  return (
    // reducedMotion="user" turns movement off when the visitor asks for reduced motion
    <MotionConfig reducedMotion="user">
      <main className="demo">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          Motion demo
        </motion.h1>

        <section>
          <h2>Press feedback</h2>
          <motion.button
            className="button"
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            Press me
          </motion.button>
        </section>

        <section>
          <h2>Enter and exit</h2>
          <button className="button" onClick={() => setShowCard((v) => !v)}>
            {showCard ? 'Hide card' : 'Show card'}
          </button>
          <AnimatePresence initial={false}>
            {showCard && (
              <motion.div
                key="card"
                className="card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.15, ease: 'easeOut' } }}
              >
                This card fades in and out.
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section>
          <h2>Layout animation</h2>
          <button className="button" onClick={shuffle}>
            Shuffle
          </button>
          <ul className="list">
            {items.map((item) => (
              <motion.li key={item} layout transition={{ type: 'spring', duration: 0.3, bounce: 0 }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
    </MotionConfig>
  )
}

export default App
