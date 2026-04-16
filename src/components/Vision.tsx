'use client'

import { Reveal, Eyebrow, ThinRule, HDisplay } from './UI'

export default function Vision() {
  return (
    <section className="section">
      <div className="container">
        <div className="vision">
          <div className="vision__left reveal">
            <Eyebrow className="mb-6">The Vision</Eyebrow>
            <HDisplay>An AI-first operating layer for Beach Enclave</HDisplay>
            <ThinRule />
            <p className="vision__para">
              BE Inteligência is not a product. It is an operational layer that sits across the group — codifying how BE runs, so every property, every department, every new hire inherits the same playbook. And then using AI to turn that playbook into action.
            </p>
            <div className="vision__brief">
              <div className="vision__brief__label">Direct from your brief</div>
              <p className="vision__brief__text">
                Sales &amp; marketing. CRM. Shopping the comp set. Repeat-guest recognition. Automated responses. Contracts.
              </p>
            </div>
          </div>
          <div className="vision__outcomes">
            <Reveal delay={0.1}>
              <div className="vision__outcome">
                <div className="vision__outcome__num">01</div>
                <div>
                  <h3 className="vision__outcome__title">Codify operations</h3>
                  <p className="vision__outcome__desc">Turn tacit knowledge into cross-referenced SOPs that survive turnover.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="vision__outcome">
                <div className="vision__outcome__num">02</div>
                <div>
                  <h3 className="vision__outcome__title">Surface insight</h3>
                  <p className="vision__outcome__desc">Real-time dashboards replace static reports and manual monthly roll-ups.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="vision__outcome">
                <div className="vision__outcome__num">03</div>
                <div>
                  <h3 className="vision__outcome__title">Elevate the team</h3>
                  <p className="vision__outcome__desc">Managers equipped with AI, not replaced by it — amplified judgment.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="vision__outcome">
                <div className="vision__outcome__num">04</div>
                <div>
                  <h3 className="vision__outcome__title">Accelerate decisions</h3>
                  <p className="vision__outcome__desc">CEO and department heads operate with an AI partner, not an inbox.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}