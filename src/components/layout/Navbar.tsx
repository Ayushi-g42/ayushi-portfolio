'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { useTheme } from 'next-themes'
import { navLinks } from '@/data/navigation'
import { personal } from '@/data/resume'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mounted, setMounted]           = useState(false)
  const { theme, setTheme }             = useTheme()

  useEffect(() => { setMounted(true) }, [])

  // Scroll detection for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 group"
            aria-label="Ayushi Gothi — Home"
          >
            <span className="w-9 h-9 rounded-xl bg-accent-gradient flex items-center justify-center text-white font-bold text-sm shadow-glow-sm">
              AG
            </span>
            <span className="hidden sm:block font-semibold text-text-primary dark:text-text-primary text-sm">
              Ayushi Gothi
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent-500/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-text-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface2 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}

            {/* Hire Me / Resume */}
            <motion.a
              href={personal.resume}
              download={personal.resumeFileName}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-gradient text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-shadow"
            >
              <Download size={14} />
              Resume
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-text-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface2 transition-colors"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 glass border-l border-slate-200 dark:border-dark-border flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-dark-border">
                <span className="font-semibold text-slate-900 dark:text-text-primary">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-text-muted hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex-1 p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const id = link.href.replace('#', '')
                  const isActive = activeSection === id
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(link.href)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all',
                        isActive
                          ? 'bg-accent-500/10 text-accent-500 dark:text-accent-400 border border-accent-500/20'
                          : 'text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface2'
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-500" />
                      )}
                    </motion.button>
                  )
                })}
              </nav>
              <div className="p-5 border-t border-slate-200 dark:border-dark-border">
                <a
                  href={personal.resume}
                  download={personal.resumeFileName}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent-gradient text-white text-sm font-semibold shadow-glow-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
