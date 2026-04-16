'use client'

import { Reveal } from '@/components/UI'

export default function Thesis() {
  return (
    <section className="thesis">
      <div className="thesis__bg"></div>
      <div className="thesis__content">
        <div className="container">
          <Reveal>
            <div className="thesis__kicker">The Thesis</div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="thesis__statement">
              One hotel runs on heroes.<br />
              <em>A group runs on playbooks.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="thesis__para">
              Beach Enclave is headed toward group operations. Resort groups scale on systems, not only on people. Today, BE's operational knowledge — the standards of service, the supplier relationships, the pricing instincts, the brand voice — lives inside individuals. When those people move on, it goes with them.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="thesis__outcomes">
              <span className="thesis__outcome"><span className="thesis__outcome__dot"></span>Written standards</span>
              <span className="thesis__outcome"><span className="thesis__outcome__dot"></span>Shared knowledge</span>
              <span className="thesis__outcome"><span className="thesis__outcome__dot"></span>Clear signals</span>
              <span className="thesis__outcome"><span className="thesis__outcome__dot"></span>A brand that travels</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}