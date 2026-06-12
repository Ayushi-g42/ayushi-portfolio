'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personal } from '@/data/resume'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons'

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    id: 'contact-email',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'ayushi-gothi-a739a91a2',
    href: personal.linkedin,
    id: 'contact-linkedin',
  },
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: '@ayushigothi',
    href: personal.github,
    id: 'contact-github',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Noida, Uttar Pradesh',
    href: undefined,
    id: 'contact-location',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section bg-dark-surface/30">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            subtitle="I'm currently open to new opportunities. Let's build something great."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left: CTA card */}
          <ScrollReveal direction="left">
            <div className="p-8 rounded-3xl border border-accent-500/20 bg-gradient-to-br from-accent-500/5 to-violet-500/5 flex flex-col gap-6 h-full">
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="text-sm font-semibold text-emerald-400">Available for opportunities</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Looking for a Senior Frontend Developer?
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  I bring 4.5+ years of React expertise, a track record of measurable performance
                  improvements, and leadership experience mentoring engineering teams. If you&apos;re
                  looking for someone who can both ship production-ready code and elevate your team
                  — let&apos;s talk.
                </p>
              </div>

              {/* Contact items */}
              <div className="flex flex-col gap-3">
                {contactItems.map(item => (
                  <div key={item.id} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center text-accent-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-text-subtle">{item.label}</div>
                      {item.href ? (
                        <a
                          id={item.id}
                          href={item.href}
                          target={item.href.startsWith('mailto') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-text-primary hover:text-accent-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-text-primary">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                id="contact-hire-btn"
                href={`mailto:${personal.email}?subject=Frontend Developer Opportunity`}
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="mt-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-accent-gradient text-white font-semibold text-sm shadow-glow-md"
              >
                Send me an email
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Right: social + NPM card */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-5">
              {/* Open source callout */}
              <div className="p-6 rounded-3xl border border-dark-border bg-dark-surface flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400">
                    📦
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary">react-mobile-share</div>
                    <div className="text-xs text-text-muted">Published NPM Package</div>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Check out my open-source NPM package that enables native mobile file sharing
                  using the Web Share API — a real differentiator in my portfolio.
                </p>
                <a
                  href="https://npm.io/package/react-mobile-sharet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                >
                  View on NPM
                  <ArrowRight size={12} />
                </a>
              </div>

              {/* Response time card */}
              <div className="p-6 rounded-3xl border border-dark-border bg-dark-surface">
                <div className="text-lg mb-2">⚡</div>
                <div className="text-sm font-semibold text-text-primary mb-1">Quick Response</div>
                <p className="text-xs text-text-muted">
                  I typically respond within 24 hours. For urgent opportunities, feel free to
                  reach out directly via LinkedIn.
                </p>
              </div>

              {/* What I'm looking for */}
              <div className="p-6 rounded-3xl border border-dark-border bg-dark-surface">
                <div className="text-sm font-semibold text-text-primary mb-3">What I&apos;m Looking For</div>
                <ul className="flex flex-col gap-2">
                  {[
                    'Senior / Lead Frontend Engineer roles',
                    'React.js 18 or Next.js 14 focused teams',
                    'Products with real user scale & impact',
                    'Collaborative, growth-oriented culture',
                    'Teams that value engineering standards',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
