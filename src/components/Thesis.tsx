'use client'

import { useRef } from 'react'
import { Reveal, Eyebrow, HDisplay } from '@/components/UI'

export default function Thesis() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center text-center overflow-hidden bg-[var(--teal-void)] text-white">
      <div className="absolute inset-0 opacity-10 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=80&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="relative z-10 w-full py-16">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] block mb-12">The Thesis</span>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-light text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[0.02em] uppercase mb-0">
            One hotel runs on heroes.<br />
            <em className="font-[family-name:var(--serif)] not-italic font-light text-[var(--teal-bright)] tracking-normal normal-case">A group runs on playbooks.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="max-w-[720px] mx-auto my-12 text-[16px] leading-[1.8] text-white/78">
            Beach Enclave is headed toward group operations. Resort groups scale on systems, not only on people. Today, BE's operational knowledge — the standards of service, the supplier relationships, the pricing instincts, the brand voice — lives inside individuals. When those people move on, it goes with them.
          </p>
        </Reveal>
        <Reveal delay={0.45} className="flex flex-wrap justify-center gap-10 mt-12 text-[12px] font-medium uppercase tracking-[0.2em]">
          {['Written standards', 'Shared knowledge', 'Clear signals', 'A brand that travels'].map((item) => (
            <span key={item} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--teal-bright)]" />
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}