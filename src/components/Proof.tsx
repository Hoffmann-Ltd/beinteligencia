'use client'

import { Reveal, Eyebrow, HDisplay, DataFlow } from './UI'

export default function Proof() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head reveal">
          <Eyebrow>Embrace the Proof</Eyebrow>
          <HDisplay>We already have proof</HDisplay>
        </div>
        <div className="proof">
          <div className="proof__maya reveal">
            <div className="proof__maya__bg"></div>
            <div className="proof__maya__overlay"></div>
            <div className="proof__maya__content">
              <div className="proof__maya__label">An agent named</div>
              <div className="proof__maya__name">Maya Handfield</div>
              <p className="proof__maya__body">
                Live at ÁMBRA. Ingests invoices from email and sales reports from POS. Posts to ledger. Runs every morning. Zero human error. March and April data already flowing.
              </p>
              <div className="proof__maya__dataflow">
                <DataFlow items={['Gmail', 'Supabase', 'Ledger']} />
              </div>
            </div>
          </div>
          <div className="proof__quote reveal reveal--delay-2">
            <div className="proof__quote__label">Vasco, on seeing it</div>
            <div className="proof__quote__mark">&ldquo;</div>
            <div className="proof__quote__text">Love it. I wish my team was all in on this stuff.</div>
            <div className="proof__quote__attr">Vasco Borges · 10 April 2026</div>
          </div>
        </div>
      </div>
    </section>
  )
}