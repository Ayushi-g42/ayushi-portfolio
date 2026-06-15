'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { achievements } from '@/data/resume'

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Impact"
            title="Numbers That Matter"
            subtitle="Measurable results from 5 years of building and optimizing at scale."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map(item => (
            <motion.div
              key={item.label}
              variants={fadeUpVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-glow group relative p-6 rounded-3xl border border-dark-border bg-dark-surface overflow-hidden transition-all"
            >
              {/* Gradient glow */}
              <div
                className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent leading-none mb-1`}>
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-text-primary">{item.label}</div>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
