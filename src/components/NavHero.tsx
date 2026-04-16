'use client'

import { useState, useEffect } from 'react'
import { Eyebrow } from './UI'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav" className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <div className="nav__left">
          <span className="nav__menu">
            <span className="nav__menu__lines"><span></span><span></span><span></span></span>
            Menu
          </span>
          <div className="nav__divider"></div>
          <a href="tel:+16493442441" className="nav__phone">+1-649-344-2441</a>
        </div>
        <a href="#top" className="nav__logo">
          <span className="nav__logo__be">BE</span>
          <span className="nav__logo__sub">INTELIGÊNCIA</span>
        </a>
        <div className="nav__right">
          <a href="#next" className="nav__cta">Sign Off</a>
        </div>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className="hero__eyebrow eyebrow">A Concept for Beach Enclave · April 2026</div>
        <div className="hero__wordmark bordered-wordmark">
          <span className="hero__wordmark__be">BE</span>
          <span className="hero__wordmark__sub">Inteligência</span>
        </div>
        <p className="hero__tagline">Experience the Exceptional, Everywhere</p>
        <p className="hero__lede">Making Beach Enclave ready for the group era.</p>
      </div>
      <a href="#marquee" className="hero__scroll">Scroll</a>
    </section>
  )
}