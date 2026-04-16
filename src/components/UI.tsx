'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

export { useRef }

/* ---------- ONE-TIME INTERSECTION REVEAL (matches original) ---------- */
export function Reveal({ children, delay = 0, className = '' }: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay * 1000}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/* ---------- REUSABLE UI PRIMITIVES ---------- */
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
        <span key={i} className="dataflow__segment">
          <span>{item}</span>
          {i < items.length - 1 && <span className="dataflow__line"></span>}
        </span>
      ))}
      <span className="dataflow__dot"></span>
    </div>
  )
}
