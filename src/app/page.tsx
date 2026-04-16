import Nav, { Hero } from '@/components/NavHero'
import Marquee from '@/components/Marquee'
import Proof from '@/components/Proof'
import Thesis from '@/components/Thesis'
import Vision from '@/components/Vision'
import Architecture from '@/components/Architecture'
import Pillars from '@/components/Pillars'
import Roadmap from '@/components/Roadmap'
import Commercial from '@/components/Commercial'
import NextSteps from '@/components/NextSteps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Proof />
      <Thesis />
      <Vision />
      <Architecture />
      <Pillars />
      <Roadmap />
      <Commercial />
      <NextSteps />
      <Footer />
    </main>
  )
}