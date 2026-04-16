'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Eyebrow, BorderedWordmark } from './UI'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-[100] py-5 transition-all duration-400 ${scrolled ? '!bg-white/92 backdrop-blur-md !py-3 shadow-[0_1px_0_rgba(15,40,48,0.08)]' : 'bg-transparent'}`}
    >
      <div className="max-w-[1320px] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        <div className="flex items-center gap-6">
          <span className={`inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] cursor-pointer transition-colors duration-300 ${scrolled ? 'text-[var(--ink)]' : 'text-white'}`}>
            <span className="flex flex-col gap-1">
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[22px] h-px bg-current" />
            </span>
            Menu
          </span>
          <a href="tel:+16493442441" className={`hidden md:block text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${scrolled ? 'text-[var(--graphite)] opacity-90' : 'text-white opacity-90'}`}>
            +1-649-344-2441
          </a>
        </div>
        <a href="#top" className={`border p-2 px-3.5 text-center leading-none transition-all duration-300 ${scrolled ? 'border-[var(--teal)] text-[var(--teal)]' : 'border-white text-white'}`}>
          <span className="text-[14px] font-light tracking-[0.1em] block">BE</span>
          <span className="text-[8px] font-light tracking-[0.2em] block mt-0.5">INTELIGÊNCIA</span>
        </a>
        <div className="flex items-center justify-end gap-6">
          <a href="#next" className={`hidden md:inline-block px-[22px] py-2.5 border text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${scrolled ? 'border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[var(--teal-deep)]'}`}>
            Sign Off
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-[var(--teal-void)]">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="absolute inset-0 bg-cover bg-center[40%]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=2400&q=85&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,40,48,0.55)] via-[rgba(15,40,48,0.35)_40%] to-[rgba(15,40,48,0.7)], radial-gradient(ellipse_at_center,transparent_0%,rgba(15,40,48,0.4)_100%)]" />
      </motion.div>

      <div className="relative z-10 p-8 max-w-[1000px] w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="mb-12">
          <Eyebrow light>A Concept for Beach Enclave · April 2026</Eyebrow>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, borderColor: 'rgba(255,255,255,0)' }}
          transition={{ opacity: { duration: 1.4, delay: 0.9 }, borderColor: { duration: 1.8, delay: 0.9 } }}
        >
          <BorderedWordmark size="large" light />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mt-12 text-[clamp(1.125rem,1.75vw,1.5rem)] font-light uppercase tracking-[0.05em] leading-[1.4]"
        >
          Experience the Exceptional, Everywhere
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.7 }}
          className="mt-8 text-base max-w-[560px] mx-auto text-white/85"
        >
          Making Beach Enclave ready for the group era.
        </motion.p>
      </div>

      <motion.a
        href="#marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-medium text-white/70 z-10"
      >
        Scroll
        <span className="block w-px h-[60px] bg-white/50 mx-auto mt-4 origin-top animate-[scrollLine_2.4s_ease-in-out_infinite]" />
      </motion.a>
    </section>
  )
}
