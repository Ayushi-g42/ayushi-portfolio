'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const directionMap = {
    up:    { y: 30,  x: 0  },
    down:  { y: -30, x: 0  },
    left:  { x: 40,  y: 0  },
    right: { x: -40, y: 0  },
    none:  { x: 0,   y: 0  },
  }

  const initial = { opacity: 0, ...directionMap[direction] }
  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const staggerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// Stagger container for child animations
export function StaggerContainer({
  children,
  className = '',
  stagger = 0.1,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants: Variants = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeUpVariant: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
