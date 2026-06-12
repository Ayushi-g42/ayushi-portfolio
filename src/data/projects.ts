export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  tags: string[]
  github?: string
  live?: string
  npm?: string
  featured: boolean
  highlight?: string
}

export const projects: Project[] = [
  {
    id: 'react-mobile-share',
    title: 'react-mobile-share',
    description: 'Open-source NPM package enabling seamless native file sharing on mobile devices.',
    longDescription:
      'A lightweight, zero-dependency React hook that wraps the Web Share API to enable native mobile sharing. Converts Base64 data to Blob/File formats for fast processing and leverages the Navigator Share API for native mobile data transfer. Published on NPM and actively maintained.',
    technologies: ['React', 'TypeScript', 'Web Share API', 'Blob API'],
    tags: ['Open Source', 'NPM Package', 'Mobile', 'React'],
    npm: 'https://npm.io/package/react-mobile-sharet',
    github: 'https://github.com/ayushigothi',
    featured: true,
    highlight: '🌟 Published NPM Package',
  },
  {
    id: 'warely',
    title: 'Warely',
    description: 'Large-scale TypeScript platform with Firebase Auth and cross-browser adaptive layouts.',
    longDescription:
      'A scalable enterprise-grade platform built with TypeScript to ensure maintainability at scale. Features Firebase Authentication with OTP-based mobile verification for secure onboarding, and adaptive layouts that work seamlessly across all major browsers and device sizes.',
    technologies: ['React', 'TypeScript', 'Firebase', 'OTP Auth', 'Responsive Design'],
    tags: ['TypeScript', 'Firebase', 'Enterprise', 'React'],
    featured: true,
    highlight: '🔒 Firebase OTP Auth',
  },
  {
    id: 'payment-options',
    title: 'Payment Options',
    description: 'Configurable React.js payment UI with 35% better interface responsiveness.',
    longDescription:
      'A highly configurable and extensible React.js payment solution with a well-structured UI architecture. Utilized Axios with optimized request handling for API calls. Achieved a 35% gain in interface responsiveness by implementing state caching and eliminating redundant re-renders.',
    technologies: ['React', 'Axios', 'JavaScript', 'State Management', 'CSS'],
    tags: ['React', 'JavaScript', 'API Integration', 'Performance'],
    featured: true,
    highlight: '⚡ 35% Faster UI',
  },
]

export const projectTags = ['All', 'Open Source', 'TypeScript', 'Firebase', 'React', 'Performance', 'NPM Package']
