'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal, StaggerContainer, fadeUpVariant } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { projects, projectTags } from '@/data/projects'
import { ArrowUpRight, ExternalLink, Package } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'

export function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag))

  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Projects"
            title="Featured Work"
            subtitle="Production applications, open-source packages, and real-world solutions."
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects">
            {projectTags.map(tag => (
              <motion.button
                key={tag}
                role="tab"
                aria-selected={activeTag === tag}
                onClick={() => setActiveTag(tag)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-accent-gradient text-white shadow-glow-sm'
                    : 'border border-dark-border text-text-muted hover:border-accent-500/30 hover:text-text-primary'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="card-glow group relative flex flex-col p-6 rounded-3xl border border-dark-border bg-dark-surface hover:bg-dark-surface2 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Highlight badge */}
                {project.highlight && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent-400 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full">
                      {project.highlight}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-accent-gradient flex items-center justify-center mb-5 shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                  <Package size={22} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-text-primary mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map(tech => (
                    <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                  {project.npm && (
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on NPM`}
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-400 transition-colors font-medium"
                    >
                      <ExternalLink size={13} />
                      NPM
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-400 transition-colors font-medium"
                    >
                      <GithubIcon size={13} />
                      GitHub
                    </a>
                  )}
                  <span className="ml-auto text-xs text-text-subtle flex items-center gap-1 group-hover:text-accent-400 transition-colors">
                    View details
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
