'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { techStack } from '@/data/resume'

export function TechStack() {
  return (
    <section id="tech-stack" className="section bg-dark-surface/30">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Tech Stack"
            title="Tools I Work With"
            subtitle="The technologies I use daily to build fast, reliable frontend products."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techStack.map(tech => (
            <motion.div
              key={tech.name}
              variants={fadeUpVariant}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-dark-border bg-dark-surface hover:border-accent-500/30 hover:bg-dark-surface2 transition-all cursor-default"
            >
              <span
                className="text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-xl text-lg"
                style={{ background: `${tech.color}15`, color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Divider text */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-xs text-text-subtle mt-10 font-mono">
            Always learning · Always building
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
