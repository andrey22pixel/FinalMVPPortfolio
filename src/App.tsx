import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Hero from './sections/Hero'
import Collage from './sections/Collage'
import Experience from './sections/Experience'
import SelectedWorks from './sections/SelectedWorks'
import Process from './sections/Process'
import Footer from './sections/Footer'
import { LazySection } from './components/Reveal'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <main className="flex min-h-dvh w-full flex-col items-center overflow-x-clip bg-white">
          <Hero />
          {/* Directly below the fold: tiles lazy-load natively via loading="lazy". */}
          <Collage />
          <LazySection minHeight={900}>
            <Experience />
          </LazySection>
          {/* Always mounted so the hero "Works" link can scroll to it. */}
          <SelectedWorks />
          <LazySection minHeight={1100}>
            <Process />
          </LazySection>
          <LazySection minHeight={700}>
            <Footer />
          </LazySection>
        </main>
      </MotionConfig>
    </LazyMotion>
  )
}
