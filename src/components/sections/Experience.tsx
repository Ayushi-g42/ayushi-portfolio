'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/resume'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="section bg-white dark:bg-dark-bg">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Experience"
            title="My Work Journey"
            subtitle="From SDE1 building 100K+ user products to SDE2 architecting and mentoring at scale."
          />
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-violet-500 to-transparent" aria-hidden="true" />

          <StaggerContainer className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <motion.div key={exp.id} variants={fadeUpVariant} className="flex gap-6 relative">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center z-10 relative shadow-glow-sm ${
                    exp.current
                      ? 'bg-accent-gradient'
                      : 'bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border'
                  }`}>
                    <span className="text-lg">{idx === 0 ? '🚀' : '⚡'}</span>
                  </div>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-dark-bg animate-pulse-slow" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 card-glow p-6 rounded-3xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-dark-surface2 shadow-sm dark:shadow-none transition-all group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-text-primary">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-400/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-accent-500 dark:text-accent-400 font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-text-muted">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-text-subtle">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-text-muted leading-relaxed mb-5">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-text-muted">
                        <CheckCircle2 size={15} className="text-accent-500 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="accent" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
