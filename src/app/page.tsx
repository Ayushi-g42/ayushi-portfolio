import { Hero }         from '@/components/sections/Hero'
import { About }        from '@/components/sections/About'
import { Skills }       from '@/components/sections/Skills'
import { Experience }   from '@/components/sections/Experience'
import { Projects }     from '@/components/sections/Projects'
import { TechStack }    from '@/components/sections/TechStack'
import { Achievements } from '@/components/sections/Achievements'
import { Contact }      from '@/components/sections/Contact'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechStack />
      <Achievements />
      <Contact />
    </>
  )
}
