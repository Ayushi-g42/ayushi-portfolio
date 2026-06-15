'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, GraduationCap, Code2 } from 'lucide-react'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personal, education } from '@/data/resume'

const highlights = [
  { icon: <Briefcase size={18} />, label: 'Current Role', value: 'SDE2 @ Unlink Technology' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Noida, Uttar Pradesh' },
  { icon: <GraduationCap size={18} />, label: 'Education', value: 'MCA — VIT Bhopal' },
  { icon: <Code2 size={18} />, label: 'Speciality', value: 'React.js · Next.js · TypeScript' },
]

export function About() {
  return (
    <section id="about" className="section bg-white dark:bg-dark-bg">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="About"
            title="Who I Am"
            subtitle="A Senior Frontend Developer who turns complex requirements into clean, performant, accessible products."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Avatar + floating badges */}
          <ScrollReveal direction="left">
            <div className="relative flex flex-col items-center lg:items-start">
              {/* Avatar */}
              <div className="relative w-48 h-48 mb-8">
                <div className="w-full h-full rounded-3xl bg-accent-gradient flex items-center justify-center text-white text-6xl font-black shadow-glow-md">
                  AG
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass border border-slate-200 dark:border-accent-500/20 text-xs font-semibold text-accent-500 dark:text-accent-400 shadow-sm dark:shadow-none"
                >
                  5 Years
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl glass border border-slate-200 dark:border-accent-500/20 text-xs font-semibold text-accent-500 dark:text-accent-400 shadow-sm dark:shadow-none"
                >
                  React Expert
                </motion.div>
              </div>

              {/* Highlight cards */}
              <StaggerContainer className="grid grid-cols-2 gap-3 w-full">
                {highlights.map(h => (
                  <motion.div
                    key={h.label}
                    variants={fadeUpVariant}
                    className="p-3 rounded-2xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm dark:shadow-none hover:border-accent-500/30 dark:hover:border-accent-500/30 transition-colors group"
                  >
                    <div className="text-accent-500 dark:text-accent-400 mb-1.5 group-hover:scale-110 transition-transform w-fit">
                      {h.icon}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-text-subtle mb-0.5">{h.label}</div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-text-primary leading-tight">{h.value}</div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Right — Bio */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="space-y-4 text-slate-600 dark:text-text-muted leading-relaxed">
                <p>
                  I&apos;m a <span className="text-slate-900 dark:text-white font-semibold">Senior Frontend Developer</span> with
                  5 years of experience building high-performance, scalable web applications using
                  React.js 18, Next.js 14, and TypeScript. I specialize in{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">Core Web Vitals optimization</span>,
                  reusable component architecture, and end-to-end product delivery.
                </p>
                <p>
                  At <span className="text-accent-500 dark:text-accent-400 font-semibold">Unlink Technology</span>, I architect
                  production applications, built a shared component library of{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">40+ UI components</span> adopted across 3 product
                  teams, improved Lighthouse score by{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">29 points</span>, and eliminated{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">60% unnecessary re-renders</span>.
                  I also implemented WCAG 2.1 AA accessibility standards reducing issues by 40%.
                </p>
                <p>
                  I published{' '}
                  <span className="text-accent-500 dark:text-accent-400 font-semibold">react-mobile-share</span> — an open-source
                  NPM library enabling native mobile file sharing via the Web Share API, complete with
                  TypeScript types and comprehensive documentation. Downloaded by developers worldwide.
                </p>
                <p>
                  I&apos;m passionate about engineering excellence — mentoring teams, defining standards,
                  and shipping features that make a measurable difference. 2 of my mentees were promoted
                  to SDE2 within 12 months.
                </p>
              </div>

              {/* Education card */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-dark-border bg-slate-50 dark:bg-dark-surface shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 dark:text-accent-400 flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-text-primary">{education.degree}</div>
                    <div className="text-xs text-slate-500 dark:text-text-muted">{education.institution}</div>
                    <div className="text-xs text-accent-500 dark:text-accent-400 mt-0.5">{education.period}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
