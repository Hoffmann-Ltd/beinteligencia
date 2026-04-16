'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export { motion, useScroll, useTransform }

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, className = '' }: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.15'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div ref={ref} style={{ y, opacity }} transition={{ duration: 0.9, ease: easing, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <span className={`eyebrow ${light ? 'eyebrow--light' : ''} ${className}`}>
      {children}
    </span>
  )
}

export function HDisplay({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return <h2 className={`h-display ${light ? 'h-display--light' : ''} ${className}`}>{children}</h2>
}

export function ThinRule({ center = false, light = false }: { center?: boolean; light?: boolean }) {
  return <span className={`thin-rule ${center ? 'thin-rule--center' : ''} ${light ? 'thin-rule--light' : ''}`} />
}

export function PlusIcon() {
  return (
    <svg className="plus-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="10" cy="10" r="9" />
      <path d="M10 6v8M6 10h8" strokeWidth="1" />
    </svg>
  )
}

export function DataFlow({ items }: { items: string[] }) {
  return (
    <div className="dataflow">
      <span className="dataflow__dot"></span>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4">
          <span>{item}</span>
          {i < items.length - 1 && <span className="dataflow__line"></span>}
        </span>
      ))}
      <span className="dataflow__dot"></span>
    </div>
  )
}