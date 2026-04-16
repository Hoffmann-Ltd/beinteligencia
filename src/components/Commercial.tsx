'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Commercial() {
  return (
    <section className="py-[var(--section-py)]">
      <div className="container">
        <Reveal>
          <div className="section__head max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">Commercial Model</Eyebrow>
            <HDisplay>Part-time partnership · Long-term engagement</HDisplay>
          </div>
        </Reveal>

        <div className="commercial grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Reveal className="price-card price-card--primary relative overflow-hidden p-12 bg-[var(--teal-void)] text-white">
            <div className="price-card__bg absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80&auto=format&fit=crop')" }} />
            <div className="price-card__content relative z-10">
              <span className="price-card__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-4 inline-flex items-center gap-[10px]">
                <span className="text-[14px] font-light">+</span> Primary
              </span>
              <h3 className="price-card__title text-[22px] font-light uppercase tracking-[0.08em] text-white mb-6">Monthly Retainer</h3>
              <div className="price-card__price flex items-baseline gap-3 mb-6">
                <span className="price-card__amount text-[clamp(3rem,5vw,4.5rem)] font-light text-[var(--teal-bright)] tracking-[-0.02em] leading-none">$3,000</span>
                <span className="price-card__unit text-[16px] font-light text-white/60">/ month</span>
              </div>
              <div className="price-card__rule w-10 h-px bg-[rgba(107,165,185,0.4)] mb-6" />
              <p className="price-card__body text-[14px] text-white/78 leading-[1.7]">
                Strategic consulting, architecture, integrations, team training, ongoing maintenance of delivered systems, and unlimited access across the engagement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="price-card price-card--secondary p-12 border border-[var(--mist)] bg-white">
            <span className="price-card__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] mb-4 inline-flex items-center gap-[10px]">Secondary</span>
            <h3 className="price-card__title text-[22px] font-light uppercase tracking-[0.08em] text-[var(--ink)] mb-6">Out-of-Scope Day Rate</h3>
            <div className="price-card__price flex items-baseline gap-3 mb-6">
              <span className="price-card__amount text-[clamp(3rem,5vw,4.5rem)] font-light text-[var(--ink)] tracking-[-0.02em] leading-none">$250–$300</span>
              <span className="price-card__unit text-[16px] font-light text-[var(--slate)]">/ day</span>
            </div>
            <div className="price-card__rule w-10 h-px bg-[var(--teal)] mb-6" />
            <p className="price-card__body text-[14px] text-[var(--slate)] leading-[1.7]">
              Applied only to defined project work beyond retainer scope — a net-new specialized agent build, a full property SOP rollout. Quoted in advance.
            </p>
          </Reveal>
        </div>

        <div className="commercial-notes grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[var(--mist)]">
          <Reveal delay={0.1} className="text-center">
            <span className="commercial-note__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] mb-3 block">Remote-first</span>
            <p className="commercial-note__body text-[13px] text-[var(--slate)] leading-[1.65]">Flexible delivery; cross-pollination from other TCI operations is a feature.</p>
          </Reveal>
          <Reveal delay={0.2} className="text-center">
            <span className="commercial-note__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] mb-3 block">6-month pilot</span>
            <p className="commercial-note__body text-[13px] text-[var(--slate)] leading-[1.65]">Review at month 6 against roadmap deliverables; extend, adjust, or step back.</p>
          </Reveal>
          <Reveal delay={0.3} className="text-center">
            <span className="commercial-note__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] mb-3 block">Maya stays separate</span>
            <p className="commercial-note__body text-[13px] text-[var(--slate)] leading-[1.65]">ÁMBRA bookkeeping agent continues under LBBC at $300/month. Distinct engagement.</p>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .commercial, .commercial-notes { grid-template-columns: 1fr; } .commercial-notes { gap: 2rem; } }
      `}</style>
    </section>
  )
}