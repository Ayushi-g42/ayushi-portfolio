'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/resume'

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-accent-400 transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="text-xs font-mono text-text-muted"
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.08 + 0.2,
            ease: "easeOut",
          }}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Skills"
            title="My Technical Expertise"
            subtitle="4.5+ years of hands-on experience across the modern frontend ecosystem."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              variants={fadeUpVariant}
              className="card-glow p-6 rounded-3xl border border-dark-border bg-dark-surface hover:bg-dark-surface2 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-base font-semibold text-text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i + catIdx * 4} />
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
