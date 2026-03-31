// ─── Shared Framer Motion variants ───────────────────────────────────────────
// Premium easing curves
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  springGentle: { type: 'spring', stiffness: 180, damping: 28 },
  out: [0.0, 0.0, 0.2, 1] as const,
}

// Fade up — used for section reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.out },
  },
}

// Fade in — simple opacity
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: ease.smooth } },
}

// Stagger container
export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: ease.out } },
}

// Slide in from right
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: ease.out } },
}

// Scale up
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: ease.out } },
}

// Card hover
export const cardHover = {
  rest: { y: 0, boxShadow: '0 2px 12px rgba(45,52,50,0.06)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 48px rgba(45,52,50,0.14)',
    transition: { duration: 0.25, ease: ease.smooth },
  },
}

// Float animation (infinite)
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Float slow (for phone mockup)
export const floatSlow = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
  },
}

// Page transition
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.out } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: ease.smooth } },
}

// Number counter helper
export const countUp = (target: number, duration = 1500) => {
  return { target, duration }
}
