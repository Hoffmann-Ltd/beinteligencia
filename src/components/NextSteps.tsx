'use client'

import { Reveal, Eyebrow, HDisplay, PlusIcon } from './UI'

export default function NextSteps() {
  const steps = [
    { num: '01', title: 'Your sign-off', desc: 'Approve the 6-month pilot scope and commercial model.' },
    { num: '02', title: 'Key introductions', desc: 'Tanithca, Sophia, the new S&M lead, and HR — the people closest to the operational knowledge we need to codify.' },
    { num: '03', title: 'Asana setup', desc: "I'll provision the workspace and onboard you. Your first task lands there from the orchestrator, not from me." },
    { num: '04', title: 'Knowledge-base session', desc: 'First working session focused on properties, org, contacts, standards, supplier relationships.' },
    { num: '05', title: 'Agreement signed', desc: 'Short-form engagement letter. Pilot starts inside two weeks of sign-off.' },
  ]

  return (
    <section id="next" className="relative overflow-hidden bg-[var(--teal-void)] text-white py-[var(--section-py)]">
      <div className="next__bg absolute inset-0 opacity-10 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2000&q=80&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="next__content relative z-10">
        <div className="container">
          <Reveal>
            <div className="section__head max-w-[900px] mx-auto mb-16 text-center">
              <Eyebrow light className="mb-6">Next Steps</Eyebrow>
              <HDisplay light>Kick-off within two weeks</HDisplay>
            </div>
          </Reveal>

          <div className="next__steps flex flex-col max-w-[960px] mx-auto">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15} className="next__step group grid grid-cols-[60px_1fr_2fr] gap-8 py-8 border-b border-white/12 hover:px-4 hover:bg-white/3 transition-all duration-400 items-baseline">
                <span className="next__step__num text-[22px] font-light text-[var(--teal-bright)] tracking-[0.05em]">{step.num}</span>
                <span className="next__step__title text-[17px] font-normal uppercase tracking-[0.12em] text-white">{step.title}</span>
                <span className="next__step__desc text-[14px] text-white/70 leading-[1.65]">{step.desc}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-wrap gap-4 justify-center items-center">
            <a href="https://wa.me/16493442441?text=Vasco%2C%20I%27m%20good%20to%20proceed%20with%20BE%20Intelig%C3%AAncia%20%E2%80%94%20let%27s%20kick%20off." className="btn btn--light">
              <PlusIcon /> Sign off via WhatsApp
            </a>
            <a href="mailto:daniel@hoffmanntci.com?subject=BE%20Intelig%C3%AAncia" className="next__cta-secondary text-[11px] uppercase tracking-[0.2em] font-medium text-white/75 hover:text-white px-4 py-3 transition-colors duration-200 inline-flex items-center gap-2">
              <PlusIcon /> Email Daniel
            </a>
            <a href="/deck.pdf" download className="next__cta-secondary text-[11px] uppercase tracking-[0.2em] font-medium text-white/75 hover:text-white px-4 py-3 transition-colors duration-200 inline-flex items-center gap-2">
              <PlusIcon /> Download deck (PDF)
            </a>
          </Reveal>
        </div>
      </div>
      <style>{`
        .btn { display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; border: 1px solid var(--teal); background: transparent; color: var(--teal); font-family: var(--sans); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; cursor: pointer; transition: all 300ms var(--ease); position: relative; overflow: hidden; }
        .btn--light { border-color: white; color: white; }
        .btn--light:hover { color: var(--teal-deep); background: white; }
        @media (max-width: 700px) { .next__step { grid-template-columns: 50px 1fr; gap: 1rem; } .next__step__desc { grid-column: 1 / -1; margin-left: 66px; } }
      `}</style>
    </section>
  )
}