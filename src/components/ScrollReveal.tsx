'use client'

import { useEffect, ReactNode } from 'react'

export function ScrollRevealProvider({ children }: { children: ReactNode }) {
  useScrollAnimation()
  return <>{children}</>
}

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    // Observe elements that need the .is-visible class for CSS animations
    document.querySelectorAll('.roadmap, .arch-diagram-wrap').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
