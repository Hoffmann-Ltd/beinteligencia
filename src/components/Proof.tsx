'use client'

import { Reveal, Eyebrow, DataFlow, HDisplay } from './UI'

export default function Proof() {
  return (
    <section className="py-[var(--section-py)]">
      <div className="container">
        <Reveal>
          <div className="section__head max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">Embrace the Proof</Eyebrow>
            <HDisplay>We already have proof</HDisplay>
          </div>
        </Reveal>

        <div className="proof grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal className="proof__maya relative overflow-hidden min-h-[480px] bg-[var(--teal-void)] text-white p-[3.5rem]">
            <div className="proof__maya__bg absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80&auto=format&fit=crop')" }} />
            <div className="proof__maya__overlay absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--teal-void) 0%, rgba(15,40,48,0.85) 60%, rgba(15,40,48,0.4) 100%)' }} />

            <div className="proof__maya__content relative z-10 flex flex-col h-full">
              <span className="proof__maya__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-4">An agent named</span>
              <h3 className="proof__maya__name text-[clamp(1.75rem,3vw,2.5rem)] font-light uppercase tracking-[0.05em] leading-[1.1] mb-8">Maya Handfield</h3>
              <p className="proof__maya__body text-[15px] leading-[1.8] text-white/82 max-w-[420px]">
                Live at ÁMBRA. Ingests invoices from email and sales reports from POS. Posts to ledger. Runs every morning. Zero human error. March and April data already flowing.
              </p>
              <div className="proof__maya__dataflow mt-auto pt-10">
                <DataFlow items={['Gmail', 'Supabase', 'Ledger']} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="proof__quote p-[3.5rem] bg-white flex flex-col justify-center border border-[var(--mist)] relative">
            <span className="proof__quote__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] mb-6">Vasco, on seeing it</span>
            <span className="proof__quote__mark font-[family-name:var(--serif)] text-[120px] text-[var(--teal)] leading-[0.5] mb-4 h-[50px]">&ldquo;</span>
            <p className="proof__quote__text text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-snug text-[var(--ink)] tracking-[-0.01em] mb-8">
              Love it. I wish my team was all in on this stuff.
            </p>
            <span className="proof__quote__attr text-[11px] uppercase tracking-[0.25em] font-medium text-[var(--slate)]">
              Vasco Borges · 10 April 2026
            </span>
          </Reveal>
        </div>
      </div>
      <style>{`
        .proof { gap: 4rem; align-items: stretch; }
        @media (max-width: 900px) { .proof { grid-template-columns: 1fr; gap: 0; } .proof__maya, .proof__quote { padding: 2.5rem; } }
      `}</style>
    </section>
  )
}