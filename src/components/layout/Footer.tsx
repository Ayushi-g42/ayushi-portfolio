'use client'

import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { personal } from '@/data/resume'
import { navLinks } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border bg-dark-surface/50 backdrop-blur-sm">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-text-primary">Ayushi Gothi</span>
            <span className="text-xs text-text-muted">Frontend Developer · React Specialist</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-text-muted hover:text-accent-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: personal.github,   icon: <GithubIcon size={16} />,   label: 'GitHub' },
              { href: personal.linkedin, icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: <Mail size={16} />, label: 'Email' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-8 h-8 rounded-lg border border-dark-border flex items-center justify-center text-text-muted hover:text-accent-400 hover:border-accent-500/40 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border/50 text-center">
          <p className="text-xs text-text-subtle flex items-center justify-center gap-1">
            © {year} Ayushi Gothi · Designed &amp; Built with
            <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" />
            using Next.js &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
