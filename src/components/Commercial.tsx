'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Commercial() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <Eyebrow className="mb-6">Commercial Model</Eyebrow>
            <HDisplay>Part-time partnership · Long-term engagement</HDisplay>
          </div>
        </Reveal>

        <div className="commercial">
          <Reveal className="price-card price-card--primary" delay={0}>
            <div className="price-card__bg"></div>
            <div className="price-card__content">
              <div className="price-card__label">Primary</div>
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
            <div className="price-card__content">
              <div className="price-card__label">Secondary</div>
              <h3 className="price-card__title">Out-of-Scope Day Rate</h3>
              <div className="price-card__price">
                <span className="price-card__amount">$250–$300</span>
                <span className="price-card__unit">/ day</span>
              </div>
              <div className="price-card__rule" />
              <p className="price-card__body">
                Applied only to defined project work beyond retainer scope — a net-new specialized agent build, a full property SOP rollout. Quoted in advance.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="commercial-notes">
          <Reveal delay={0.1}>
            <span className="commercial-note__label">Remote-first</span>
            <p className="commercial-note__body">Flexible delivery; cross-pollination from other TCI operations is a feature.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="commercial-note__label">6-month pilot</span>
            <p className="commercial-note__body">Review at month 6 against roadmap deliverables; extend, adjust, or step back.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <span className="commercial-note__label">Maya stays separate</span>
            <p className="commercial-note__body">ÁMBRA bookkeeping agent continues under LBBC at $300/month. Distinct engagement.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
