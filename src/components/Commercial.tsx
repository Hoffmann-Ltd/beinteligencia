'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Commercial() {
  return (
    <section className="commercial-section">
      <div className="container">
        <Reveal>
          <div className="section__head mb-16 text-center">
            <Eyebrow className="mb-6">Commercial Model</Eyebrow>
            <HDisplay>Part-time partnership · Long-term engagement</HDisplay>
          </div>
        </Reveal>

        <div className="commercial-cards grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Reveal className="price-card price-card--primary" delay={0}>
            <div className="price-card__content">
              <span className="price-card__label">+ Primary</span>
              <h3 className="price-card__title">Monthly Retainer</h3>
              <div className="price-card__price">
                <span className="price-card__amount">$3,000</span>
                <span className="price-card__unit">/ month</span>
              </div>
              <div className="price-card__rule" />
              <p className="price-card__body">
                Strategic consulting, architecture, integrations, team training, ongoing maintenance of delivered systems, and unlimited access across the engagement.
              </p>
            </div>
          </Reveal>

          <Reveal className="price-card price-card--secondary" delay={0.2}>
            <span className="price-card__label">Secondary</span>
            <h3 className="price-card__title">Out-of-Scope Day Rate</h3>
            <div className="price-card__price">
              <span className="price-card__amount">$250–$300</span>
              <span className="price-card__unit">/ day</span>
            </div>
            <div className="price-card__rule" />
            <p className="price-card__body">
              Applied only to defined project work beyond retainer scope — a net-new specialized agent build, a full property SOP rollout. Quoted in advance.
            </p>
          </Reveal>
        </div>

        <div className="commercial-notes grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[var(--mist)]">
          <Reveal delay={0.1} className="text-center">
            <span className="commercial-note__label">Remote-first</span>
            <p className="commercial-note__body">Flexible delivery; cross-pollination from other TCI operations is a feature.</p>
          </Reveal>
          <Reveal delay={0.2} className="text-center">
            <span className="commercial-note__label">6-month pilot</span>
            <p className="commercial-note__body">Review at month 6 against roadmap deliverables; extend, adjust, or step back.</p>
          </Reveal>
          <Reveal delay={0.3} className="text-center">
            <span className="commercial-note__label">Maya stays separate</span>
            <p className="commercial-note__body">ÁMBRA bookkeeping agent continues under LBBC at $300/month. Distinct engagement.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}