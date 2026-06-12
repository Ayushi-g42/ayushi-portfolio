// ============================================================
// Ayushi Gothi — Portfolio Data (typed)
// ============================================================

export const personal = {
  name: 'Ayushi Gothi',
  firstName: 'Ayushi',
  title: 'Frontend Developer',
  tagline: 'UI Specialist',
  location: 'Noida, Uttar Pradesh',
  email: 'ayushigothi012@gmail.com',
  phone: '+91 8959482829',
  linkedin: 'https://www.linkedin.com/in/ayushi-gothi-a739a91a2',
  github: 'https://github.com/ayushigothi',
  resume: '/resume.pdf',
  bio: `UI Specialist with 4.5+ years of expertise building scalable, high-performance React applications.
I'm passionate about creating pixel-perfect interfaces that serve real users at scale — from 100K+ MAU platforms to open-source NPM packages.`,
  shortBio: 'Building fast, scalable, and accessible React applications that users love.',
  yearsOfExperience: 4.5,
  projectsDelivered: 3,
  usersServed: '100K+',
  teamMentored: 5,
  roles: [
    'Frontend Developer',
    'React.js Specialist',
    'UI Architect',
    'Performance Engineer',
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
    role: 'SDE2 – Frontend',
    period: 'Jan 2024 – Present',
    startDate: 'January 2024',
    endDate: null,
    current: true,
    location: 'Noida, UP',
    description:
      'Architecting scalable React.js 18 and Next.js applications, leading frontend excellence and mentoring junior engineers.',
    achievements: [
      'Reduced page load time by 25% through lazy loading, code splitting, and rendering optimization',
      'Boosted application efficiency by 35% using useMemo/useCallback memoization and dynamic code splitting',
      'Improved overall user experience by 50% through accessibility and usability enhancements',
      'Mentored 5+ junior frontend developers through code reviews, pair programming, and bi-weekly workshops',
      'Increased team velocity by 30% by defining TypeScript-first standards and ESLint/Prettier configurations',
      'Owned end-to-end delivery of 3+ live applications from requirements through CI/CD to post-release monitoring',
    ],
    technologies: ['React.js 18', 'Next.js', 'TypeScript', 'Core Web Vitals', 'CI/CD', 'ESLint'],
  },
  {
    id: 'encoresky',
    company: 'Encoresky Technology Pvt. Ltd',
    role: 'SDE1 – Frontend',
    period: 'Jul 2021 – Dec 2023',
    startDate: 'July 2021',
    endDate: 'December 2023',
    current: false,
    location: 'Remote',
    description:
      'Engineered robust, maintainable UI modules for high-traffic products serving 100K+ monthly active users.',
    achievements: [
      'Maintained and enhanced high-traffic web products serving 100K+ monthly active users',
      'Increased user engagement and retention by 15% through core feature revamp',
      'Built Higher Order Components (HOCs) to improve code reusability and reduce redundancy',
      'Implemented REST APIs with Redux Toolkit for efficient state management and streamlined data flow',
    ],
    technologies: ['React.js', 'Material UI', 'Redux Toolkit', 'REST APIs', 'JavaScript ES6+'],
  },
]

export interface Skill {
  name: string
  level: number
  category: string
}

export const skillCategories = [
  {
    title: 'Core Frontend',
    icon: '⚛️',
    skills: [
      { name: 'React.js 18', level: 95 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Next.js', level: 85 },
      { name: 'Responsive Design', level: 92 },
    ],
  },
  {
    title: 'State & Data',
    icon: '🗄️',
    skills: [
      { name: 'Redux Toolkit', level: 87 },
      { name: 'Redux Persist', level: 75 },
      { name: 'REST APIs / Axios', level: 85 },
      { name: 'Firebase', level: 75 },
    ],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    skills: [
      { name: 'Material UI', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Styled Components', level: 78 },
      { name: 'CSS Animations', level: 82 },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'VS Code / Cursor', level: 95 },
      { name: 'Jira', level: 80 },
      { name: 'Node.js (Basics)', level: 60 },
    ],
  },
]

export const techStack = [
  { name: 'React',        icon: '⚛️',  color: '#61DAFB', category: 'core' },
  { name: 'TypeScript',   icon: 'TS',  color: '#3178C6', category: 'core' },
  { name: 'Next.js',      icon: '▲',   color: '#FFFFFF', category: 'core' },
  { name: 'JavaScript',   icon: 'JS',  color: '#F7DF1E', category: 'core' },
  { name: 'Redux',        icon: '🔮',  color: '#764ABC', category: 'state' },
  { name: 'Tailwind',     icon: '🌊',  color: '#06B6D4', category: 'styling' },
  { name: 'Material UI',  icon: '📦',  color: '#0081CB', category: 'styling' },
  { name: 'Node.js',      icon: '🟢',  color: '#339933', category: 'backend' },
  { name: 'Firebase',     icon: '🔥',  color: '#FFCA28', category: 'backend' },
  { name: 'Git',          icon: '🌿',  color: '#F05032', category: 'tools' },
  { name: 'VS Code',      icon: '💻',  color: '#007ACC', category: 'tools' },
  { name: 'Jira',         icon: '📋',  color: '#0052CC', category: 'tools' },
]

export const achievements = [
  {
    icon: '⚡',
    value: '25%',
    label: 'Faster Load Times',
    description: 'Reduced page load time through lazy loading & code splitting',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: '🚀',
    value: '35%',
    label: 'App Efficiency Boost',
    description: 'Improved performance via memoization & dynamic imports',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: '✨',
    value: '50%',
    label: 'UX Improvement',
    description: 'Enhanced accessibility and overall user experience',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📈',
    value: '30%',
    label: 'Team Velocity',
    description: 'Increased team speed with TypeScript standards & tooling',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '👥',
    value: '5+',
    label: 'Devs Mentored',
    description: 'Pair programming, code reviews & bi-weekly workshops',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: '🌐',
    value: '100K+',
    label: 'Monthly Users',
    description: 'Maintained high-traffic products at Encoresky',
    color: 'from-emerald-500 to-teal-500',
  },
]

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'Vellore Institute of Technology, Bhopal',
  period: 'July 2019 – June 2021',
}
