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
    description: 'Open-source React.js library enabling native mobile file sharing via the Web Share API — downloaded by developers worldwide.',
    longDescription:
      'Designed, developed, and published an open-source React.js library enabling native mobile file sharing via the Web Share API. Implemented Base64 → Blob → File conversion pipeline for efficient binary data handling across image, PDF, and media formats. Integrated the Navigator Web Share API with graceful fallback mechanisms for unsupported browsers. Authored comprehensive documentation, usage examples, and TypeScript type definitions for a developer-friendly API surface.',
    technologies: ['React.js', 'TypeScript', 'Web Share API', 'Blob API', 'Rollup', 'NPM'],
    tags: ['Open Source', 'NPM Package', 'Mobile', 'React', 'TypeScript'],
    npm: 'https://www.npmjs.com/package/react-mobile-share',
    github: 'https://github.com/Ayushi-g42',
    featured: true,
    highlight: '🌟 Published NPM Package',
  },
  {
    id: 'warely',
    title: 'Warely — Enterprise Web Platform',
    description: 'Large-scale enterprise platform with TypeScript strict mode, Firebase OTP Auth, and adaptive layouts across device form factors.',
    longDescription:
      'Architected and delivered a large-scale enterprise platform using TypeScript strict mode — improving code reliability, reducing runtime errors, and enabling safer refactoring across a 50K+ line codebase. Integrated Firebase Authentication with OTP-based mobile verification and multi-factor authentication. Ensured cross-browser compatibility and adaptive responsive layouts across 5 device form factors, reducing platform-specific defects by 40%.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Material UI', 'REST APIs'],
    tags: ['TypeScript', 'Firebase', 'Enterprise', 'Next.js'],
    featured: true,
    highlight: '🔒 Firebase OTP + MFA',
  },
  {
    id: 'payment-options',
    title: 'Payment Options — DASPOS',
    description: 'Internal payment management system with Vue.js + Node.js + Prisma, reducing redundant API calls by 35%.',
    longDescription:
      'Built a configurable internal payment management system using Vue.js and Vuex, enabling the operations team to manage multiple payment providers through a unified dashboard. Developed backend APIs using Node.js and Prisma for provider configuration and reporting. Implemented Vuex-based centralized state management with modular store design, optimizing data flow and reducing redundant API calls by 35%.',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'Prisma', 'Axios', 'Vuex', 'CSS Modules'],
    tags: ['Vue.js', 'Node.js', 'TypeScript', 'Full Stack'],
    featured: true,
    highlight: '⚡ 35% Fewer API Calls',
  },
]

export const projectTags = ['All', 'Open Source', 'NPM Package', 'TypeScript', 'Firebase', 'React', 'Next.js', 'Vue.js', 'Node.js']
