'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

export { motion, useScroll, useTransform }

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: {
  children: ReactNode; delay?: number; className?: string; direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.15'] })
  const y = useTransform(scrollYProgress, [0, 1], direction === 'down' ? [-30, 0] : [30, 0])
  const x = useTransform(scrollYProgress, [0, 1], direction === 'left' ? [30, 0] : direction === 'right' ? [-30, 0] : [0, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y: (direction === 'up' || direction === 'down') ? y : x, opacity }}
      transition={{ duration: 0.9, ease: easing, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] ${light ? 'text-[var(--teal-bright)]' : 'text-[var(--teal)]'} ${className}`}>
      <span className="w-8 h-px bg-current opacity-60" />
      {children}
    </span>
  )
}

export function ThinRule({ center = false, light = false }: { center?: boolean; light?: boolean }) {
  return (
    <span className={`block w-[60px] h-px bg-[var(--teal)] ${center ? 'mx-auto' : ''} my-8 ${light ? '!bg-white/40' : ''}`} />
  )
}

export function HDisplay({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <h2 className={`font-light uppercase tracking-[0.05em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] ${light ? 'text-white' : 'text-[var(--ink)]'} font-[var(--sans)] ${className}`}>
      {children}
    </h2>
  )
}

export function Btn({ children, href, light = false, filled = false }: {
  children: ReactNode; href?: string; light?: boolean; filled?: boolean
}) {
  const base = `inline-flex items-center gap-3 px-8 py-4 border text-[12px] font-medium uppercase tracking-[0.2em] cursor-pointer relative overflow-hidden transition-all duration-300 font-[var(--sans)]`
  const style = light
    ? 'border-white text-white hover:bg-white hover:text-[var(--teal-deep)]'
    : filled
      ? 'bg-[var(--teal)] text-white border-[var(--teal)] hover:bg-[var(--teal-dark)] hover:text-white'
      : 'border-[var(--teal)] text-[var(--teal)] hover:text-white'

  if (href) {
    return <a href={href} className={`${base} ${style}`}>{children}</a>
  }
  return <button className={`${base} ${style}`}>{children}</button>
}

export function PlusIcon() {
  return (
    <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="10" cy="10" r="9" />
      <path d="M10 6v8M6 10h8" strokeWidth="1" />
    </svg>
  )
}

export function BorderedWordmark({ size = 'default', light = false }: {
  size?: 'small' | 'default' | 'large'; light?: boolean
}) {
  const beSize = size === 'small' ? 'text-[clamp(1.5rem,3vw,2rem)]' : size === 'large' ? 'text-[clamp(2.5rem,7vw,5rem)]' : 'text-[clamp(2rem,5vw,3.5rem)]'
  const subSize = size === 'small' ? 'text-[clamp(0.75rem,1.2vw,1rem)]' : size === 'large' ? 'text-[clamp(1rem,2.2vw,1.75rem)]' : 'text-[clamp(1rem,2vw,1.5rem)]'

  return (
    <span className={`inline-block border border-current p-[1rem_2.5rem] text-center font-light leading-none ${size === 'large' ? 'p-[2rem_3.5rem]' : ''} ${light ? 'border-white/90' : ''}`}>
      <span className={`${beSize} block tracking-[0.12em]`}>BE</span>
      <span className={`${subSize} block tracking-[0.15em] uppercase mt-2 opacity-90`}>Inteligência</span>
    </span>
  )
}

export function SectionHead({ eyebrow, title, lede, dark = false }: {
  eyebrow?: string; title: string; lede?: string; dark?: boolean
}) {
  return (
    <div className="max-w-[900px] mx-auto mb-16 text-center">
      {eyebrow && <Eyebrow light={dark} className="mb-6">{eyebrow}</Eyebrow>}
      <HDisplay light={dark}>{title}</HDisplay>
      {lede && <p className={`max-w-[640px] mx-auto mt-6 text-base ${dark ? 'text-white/75' : 'text-[var(--slate)]'}`}>{lede}</p>}
    </div>
  )
}

export function DataFlow({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-white/55">
      <span className="w-2 h-2 rounded-full bg-[var(--teal-bright)] animate-pulse flex-shrink-0 shadow-[0_0_12px_var(--teal-bright)]" />
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4">
          <span>{item}</span>
          {i < items.length - 1 && (
            <span className="flex-1 h-px min-w-[40px] bg-gradient-to-r from-[var(--teal-bright)] to-transparent relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-[var(--teal-bright)] after:to-transparent after:animate-[flow_2.5s_linear_infinite]" />
          )}
        </span>
      ))}
      <span className="w-2 h-2 rounded-full bg-[var(--teal-bright)] animate-pulse flex-shrink-0 shadow-[0_0_12px_var(--teal-bright)]" />
    </div>
  )
}