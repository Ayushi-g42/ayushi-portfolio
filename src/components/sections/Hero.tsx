'use client'

import { motion, type Variants } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'
import { personal } from '@/data/resume'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      aria-label="Hero section"
    >
      {/* Background orbs — lighter in light mode */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="orb w-[600px] h-[600px] -top-40 -left-40 bg-accent-500/6 dark:bg-accent-500/10" style={{ animationDelay: '0s' }} />
        <div className="orb w-[400px] h-[400px] top-1/2 -right-20 bg-violet-500/5 dark:bg-violet-500/8" style={{ animationDelay: '3s' }} />
        <div className="orb w-[300px] h-[300px] bottom-20 left-1/3 bg-accent-500/4 dark:bg-accent-500/5" style={{ animationDelay: '5s' }} />

        {/* Grid */}
        <div className="absolute inset-0 opacity-100 hero-grid" />

        {/* Light mode top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent dark:from-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/5 dark:bg-accent-500/5 text-sm text-accent-500 dark:text-accent-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse-slow" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-slate-500 dark:text-text-muted text-lg mb-3 font-medium">
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight mb-4"
          >
            <span className="gradient-text">Ayushi</span>
            <br />
            <span className="text-slate-900 dark:text-white">Gothi</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl sm:text-2xl font-semibold text-slate-500 dark:text-text-muted">
              <span className="text-slate-800 dark:text-white">Senior Frontend Developer</span>
              <span className="mx-2 text-accent-500">·</span>
              <span>React.js · Next.js</span>
              <span className="mx-2 text-accent-500">·</span>
              <span>TypeScript</span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 dark:text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Senior Frontend Developer with <strong className="text-slate-800 dark:text-white font-semibold">5 years</strong> of expertise
            building scalable, high-performance React applications. Core Web Vitals optimizer,
            open-source NPM author, and mentor who levelled up{' '}
            <strong className="text-slate-800 dark:text-white font-semibold">5+ engineers</strong> serving{' '}
            <strong className="text-slate-800 dark:text-white font-semibold">100K+ users</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-2xl bg-accent-gradient text-white font-semibold text-sm shadow-glow-md flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={15} />
            </motion.button>

            <motion.a
              href={personal.resume}
              download={personal.resumeFileName}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-2xl border border-accent-500/30 dark:border-accent-500/30 text-slate-700 dark:text-text-primary bg-white dark:bg-transparent hover:border-accent-500 hover:bg-accent-500/5 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm dark:shadow-none"
            >
              <Download size={15} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-16">
            {[
              { href: personal.github, icon: <GithubIcon size={18} />, label: 'GitHub', id: 'hero-github' },
              { href: personal.linkedin, icon: <LinkedinIcon size={18} />, label: 'LinkedIn', id: 'hero-linkedin' },
              { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: 'Email', id: 'hero-email' },
            ].map(s => (
              <motion.a
                key={s.id}
                id={s.id}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-transparent shadow-sm dark:shadow-none flex items-center justify-center text-slate-500 dark:text-text-muted hover:text-accent-500 dark:hover:text-accent-400 hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl"
          >
            {[
              { value: '5+', label: 'Years Exp.' },
              { value: '100K+', label: 'Users Served' },
              { value: '40+', label: 'Components Built' },
              { value: '5+', label: 'Devs Mentored' },
            ].map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 p-4 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface/50 shadow-sm dark:shadow-none"
              >
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-slate-500 dark:text-text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-text-subtle hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          aria-label="Scroll to About"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.button>
      </div>
    </section>
  )
}
