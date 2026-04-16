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
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[100] py-[1.25rem] transition-all duration-400 ${scrolled ? 'bg-[rgba(255,255,255,0.92)] backdrop-blur-md py-3 shadow-[0_1px_0_rgba(15,40,48,0.08)]' : 'bg-transparent'}`}
    >
      <div className="container nav__inner">
        <div className="flex items-center gap-6">
          <span className={`inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] cursor-pointer transition-colors duration-300 ${scrolled ? 'text-[var(--ink)]' : 'text-white'}`}>
            <span className="flex flex-col gap-[3px]">
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[22px] h-px bg-current" />
              <span className="block w-[22px] h-px bg-current" />
            </span>
            Menu
          </span>
          <div className={`nav__divider w-px h-[14px] transition-colors duration-300 ${scrolled ? 'bg-[rgba(15,40,48,0.25)]' : 'bg-[rgba(255,255,255,0.3)]'}`} />
          <a href="tel:+16493442441" className={`hidden md:block text-[11px] font-medium tracking-[0.15em] transition-colors duration-300 ${scrolled ? 'text-[var(--graphite)]' : 'text-white'} opacity-90`}>
            +1-649-344-2441
          </a>
        </div>
        <a href="#top" className={`border p-[8px_14px] text-center leading-none transition-all duration-300 ${scrolled ? 'border-[var(--teal)] text-[var(--teal)]' : 'border-white text-white'}`}>
          <span className="text-[14px] font-light tracking-[0.1em] block">BE</span>
          <span className="text-[8px] font-light tracking-[0.2em] block mt-[2px]">INTELIGÊNCIA</span>
        </a>
        <div className="flex items-center justify-end gap-6">
          <a href="#next" className={`px-[22px] py-[10px] border text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer ${scrolled ? 'border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[var(--teal-deep)]'}`}>
            Sign Off
          </a>
        </div>
      </div>
      <style>{`
        .nav__inner { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 2rem; }
        @media (max-width: 900px) { .nav__phone { display: none; } .nav__divider { display: none; } }
      `}</style>
    </nav>
  )
}

export function Hero() {
  const ref = useRef(null)

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-[var(--teal-void)]">
      <div className="absolute inset-0 will-change-transform" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=2400&q=85&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center 40%', transform: 'scale(1.08)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,40,48,0.55) 0%, rgba(15,40,48,0.35) 40%, rgba(15,40,48,0.7) 100%), radial-gradient(ellipse at center, rgba(15,40,48,0) 0%, rgba(15,40,48,0.4) 100%)' }} />

      <div className="relative z-10 p-8 max-w-[1000px] w-full">
        <div className="hero__eyebrow mb-12 opacity-0" style={{ animation: 'fadeIn 1200ms var(--ease) 600ms forwards' }}>
          <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white">
            <span className="w-8 h-px bg-white opacity-60" />
            A Concept for Beach Enclave · April 2026
          </span>
        </div>
        <div className="hero__wordmark inline-block text-white opacity-0" style={{ animation: 'fadeIn 1400ms var(--ease) 900ms forwards, borderDraw 1800ms var(--ease) 900ms forwards', borderColor: 'rgba(255,255,255,0)' }}>
          <BorderedWordmark size="large" light />
        </div>
        <p className="hero__tagline mt-12 text-[clamp(1.125rem,1.75vw,1.5rem)] font-light uppercase tracking-[0.05em] leading-[1.4] opacity-0" style={{ animation: 'fadeIn 1400ms var(--ease) 1400ms forwards' }}>
          Experience the Exceptional, Everywhere
        </p>
        <p className="hero__lede mt-8 text-base max-w-[560px] mx-auto text-white/85 opacity-0" style={{ animation: 'fadeIn 1400ms var(--ease) 1700ms forwards' }}>
          Making Beach Enclave ready for the group era.
        </p>
      </div>

      <a href="#marquee" className="hero__scroll absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-medium text-white/70 z-10 opacity-0" style={{ animation: 'fadeIn 1400ms var(--ease) 2000ms forwards' }}>
        Scroll
        <span className="block w-px h-[60px] bg-white/50 mx-auto mt-4" style={{ animation: 'scrollLine 2.4s ease-in-out infinite', transformOrigin: 'top' }} />
      </a>
    </section>
  )
}