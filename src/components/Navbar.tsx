import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.0, 0.0, 0.2, 1] }}
        className={`fixed top-0 w-full z-50 h-16 transition-shadow duration-300 ${
          scrolled ? 'glass-nav shadow-[0_1px_0_rgba(45,52,50,0.08),0_4px_24px_rgba(45,52,50,0.06)]' : 'glass-nav'
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 h-full">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
            <motion.img
              src="/logo.png"
              alt="Craxnet"
              className="h-8 w-auto object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              whileHover={{ scale: 1.05 }}
            />
            <span className="font-headline text-xl font-bold text-on-surface">CraxNet ERP</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg font-label text-sm font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-on-surface/60 hover:text-on-surface hover:bg-surface-container-low'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-primary-container/50 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px' }}
                >
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 4px 16px rgba(85,98,84,0.3)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/get-started')}
              className="hidden sm:flex items-center gap-1.5 bg-atrium-gradient text-on-primary px-5 py-2 rounded-lg font-label font-semibold text-sm shadow-md overflow-hidden relative"
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="material-symbols-outlined"
                  style={{ fontSize: '22px' }}
                >
                  {menuOpen ? 'close' : 'menu'}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-on-surface/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-16 left-0 right-0 z-50 glass-nav border-b border-outline-variant/10 px-4 py-4 flex flex-col gap-1 shadow-xl"
            >
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl font-label text-base font-medium transition-all ${
                        isActive ? 'text-primary bg-primary-container/50' : 'text-on-surface/70 hover:text-on-surface hover:bg-surface-container-low'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                onClick={() => { navigate('/get-started'); setMenuOpen(false) }}
                className="mt-2 bg-atrium-gradient text-on-primary px-6 py-3 rounded-xl font-label font-semibold text-sm hover:opacity-90 transition-all text-center"
              >
                Get Started Free
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
