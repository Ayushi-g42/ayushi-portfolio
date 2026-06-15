// ============================================================
// Ayushi Gothi — Portfolio Data (typed) — Updated v2
// ============================================================

export const personal = {
  name: 'Ayushi Gothi',
  firstName: 'Ayushi',
  title: 'Senior Frontend Developer',
  tagline: 'React.js · Next.js · TypeScript',
  location: 'Noida, Uttar Pradesh',
  email: 'ayushigothi012@gmail.com',
  phone: '+91 8959482829',
  linkedin: 'https://www.linkedin.com/in/ayushi-gothi-a739a91a2',
  github: 'https://github.com/Ayushi-g42',
  portfolio: 'https://ayushi-portfolio.vercel.app',
  resume: '/static/Ayushi_Gothi_Frontend_Developer.pdf',
  resumeFileName: 'Ayushi_Gothi_Frontend_Developer.pdf',
  bio: `Senior Frontend Developer with 5 years of experience building scalable, high-performance web applications using React.js 18, Next.js 14, and TypeScript. Proven expertise in Core Web Vitals optimization, reusable component architecture, and end-to-end product delivery. Mentored 5+ developers, defined team-wide engineering standards, and published an open-source NPM package.`,
  shortBio: 'Building fast, scalable, and accessible React applications that serve 100K+ users.',
  yearsOfExperience: 5,
  projectsDelivered: 3,
  usersServed: '100K+',
  teamMentored: 5,
  roles: [
    'Senior Frontend Developer',
    'React.js Specialist',
    'UI Architect',
    'Performance Engineer',
    'Open Source Contributor',
  ],
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  startDate: string
  endDate: string | null
  current: boolean
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: WorkExperience[] = [
  {
    id: 'unlink',
    company: 'Unlink Technology Pvt. Ltd',
    role: 'SDE2 – Senior Frontend Developer',
    period: 'Jan 2024 – Present',
    startDate: 'January 2024',
    endDate: null,
    current: true,
    location: 'Noida, UP',
    description:
      'Architecting and delivering production-grade React.js 18 and Next.js 14 applications, leading frontend excellence, accessibility standards, and engineering mentorship.',
    achievements: [
      'Architected and delivered 3+ production applications using React.js 18 and Next.js 14 (SSR/SSG), reducing page load time by 25% and improving Core Web Vitals from "Needs Improvement" to "Good"',
      'Eliminated 60% unnecessary re-renders using React.memo, useMemo, and useCallback — reducing Time-to-Interactive by 35% and improving Lighthouse score by 29 points',
      'Implemented WCAG 2.1 AA accessibility standards (semantic HTML, ARIA labels, keyboard navigation), reducing accessibility issues by 40%',
      'Built and maintained a shared component library of 40+ reusable UI components adopted across 3 product teams, reducing duplicate UI code by 45% and cutting PR review cycle time from 3 days to 1 day',
      'Mentored 5 junior developers through code reviews, pair programming, and tech workshops; 2 mentees promoted to SDE2 within 12 months',
      'Collaborated in Agile/Scrum sprints with product managers, UX designers, and QA engineers, consistently delivering features on schedule with minimal post-release defects',
    ],
    technologies: ['React.js 18', 'Next.js 14', 'TypeScript', 'Core Web Vitals', 'WCAG 2.1', 'CI/CD', 'Agile/Scrum'],
  },
  {
    id: 'encoresky',
    company: 'Encoresky Technology Pvt. Ltd',
    role: 'SDE1 – Frontend Developer',
    period: 'Jul 2021 – Dec 2023',
    startDate: 'July 2021',
    endDate: 'December 2023',
    current: false,
    location: 'Indore, MP',
    description:
      'Maintained and enhanced a high-traffic SaaS platform serving 100K+ monthly active users, shipping 8 major feature releases with zero critical production incidents.',
    achievements: [
      'Maintained a high-traffic SaaS platform serving 100K+ monthly active users, shipping 8 major feature releases over 2 years with zero critical production incidents attributed to frontend changes',
      'Revamped 4 core product features using React.js and Material UI, improving user engagement and retention by 15%',
      'Engineered 15+ reusable UI components (data tables, form wizards, modals) using HOC and compound patterns — reducing UI dev time by 25% per sprint',
      'Integrated 20+ REST API endpoints using Axios and Redux Toolkit (RTK Query) with request caching, error boundaries, and Redux Persist — reducing API-related failures by 50%',
      'Delivered cross-browser compatible, responsive UI across Chrome, Firefox, Safari, and Edge, reducing browser-specific bug reports by 35%',
      'Participated actively in Agile sprint cycles — sprint planning, technical estimation, daily standups, and retrospectives — consistently delivering committed story points on time',
    ],
    technologies: ['React.js', 'Material UI', 'Redux Toolkit', 'RTK Query', 'Axios', 'REST APIs', 'JavaScript ES6+'],
  },
]

export const skillCategories = [
  {
    title: 'Core Frontend',
    icon: '⚛️',
    skills: [
      { name: 'React.js 18', level: 96 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js 14', level: 88 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 93 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'State Management',
    icon: '🗄️',
    skills: [
      { name: 'Redux Toolkit', level: 88 },
      { name: 'RTK Query', level: 82 },
      { name: 'Redux Persist', level: 78 },
      { name: 'React Context API', level: 85 },
    ],
  },
  {
    title: 'Performance & Quality',
    icon: '🚀',
    skills: [
      { name: 'Core Web Vitals', level: 88 },
      { name: 'Lazy Loading / Code Splitting', level: 90 },
      { name: 'Jest / RTL', level: 78 },
      { name: 'WCAG 2.1 Accessibility', level: 82 },
    ],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    skills: [
      { name: 'Material UI (MUI)', level: 88 },
      { name: 'Tailwind CSS', level: 83 },
      { name: 'Styled Components', level: 80 },
      { name: 'Responsive Design', level: 93 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: '🔌',
    skills: [
      { name: 'REST API Integration', level: 88 },
      { name: 'Node.js / Express.js', level: 65 },
      { name: 'GraphQL', level: 68 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'GitHub Actions (CI/CD)', level: 75 },
      { name: 'Webpack / Vite', level: 78 },
      { name: 'Figma Collaboration', level: 80 },
    ],
  },
]

export const techStack = [
  { name: 'React', icon: '⚛️', color: '#61DAFB', category: 'core' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6', category: 'core' },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF', category: 'core' },
  { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', category: 'core' },
  { name: 'Vue.js', icon: '💚', color: '#42B883', category: 'core' },
  { name: 'Redux', icon: '🔮', color: '#764ABC', category: 'state' },
  { name: 'Tailwind', icon: '🌊', color: '#06B6D4', category: 'styling' },
  { name: 'Material UI', icon: '📦', color: '#0081CB', category: 'styling' },
  { name: 'Jest', icon: '🧪', color: '#C21325', category: 'testing' },
  { name: 'GraphQL', icon: '◈', color: '#E10098', category: 'backend' },
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'backend' },
  { name: 'Firebase', icon: '🔥', color: '#FFCA28', category: 'backend' },
  { name: 'Git', icon: '🌿', color: '#F05032', category: 'tools' },
  { name: 'Vite', icon: '⚡', color: '#646CFF', category: 'tools' },
  { name: 'Figma', icon: '🎨', color: '#F24E1E', category: 'tools' },
  { name: 'Vercel', icon: '▲', color: '#FFFFFF', category: 'tools' },
]

export const achievements = [
  {
    icon: '⚡',
    value: '60%',
    label: 'Re-renders Eliminated',
    description: 'Using React.memo, useMemo, useCallback — reducing Time-to-Interactive by 35%',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: '🚀',
    value: '+29pts',
    label: 'Lighthouse Score',
    description: 'Improved performance score by 29 points through systematic optimization',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: '♿',
    value: '40%',
    label: 'Accessibility Improved',
    description: 'WCAG 2.1 AA standards — semantic HTML, ARIA labels, keyboard navigation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🧩',
    value: '40+',
    label: 'Component Library',
    description: 'Shared UI components adopted by 3 product teams, cutting PR review from 3 days → 1 day',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '👥',
    value: '5+',
    label: 'Devs Mentored',
    description: '2 mentees promoted to SDE2 within 12 months of coaching',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: '🌐',
    value: '100K+',
    label: 'Monthly Users',
    description: '8 major feature releases with zero critical production incidents',
    color: 'from-emerald-500 to-teal-500',
  },
]

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'Vellore Institute of Technology (VIT), Bhopal',
  period: 'July 2019 – June 2021',
}
