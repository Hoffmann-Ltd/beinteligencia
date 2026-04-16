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
    <section id="next" className="section next">
      <div className="next__bg" />
      <div className="next__content">
        <div className="container">
          <Reveal>
            <div className="section__head">
              <Eyebrow light className="mb-6">Next Steps</Eyebrow>
              <HDisplay light>Kick-off within two weeks</HDisplay>
            </div>
          </Reveal>

          <div className="next__steps">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15} className="next__step">
                <span className="next__step__num">{step.num}</span>
                <span className="next__step__title">{step.title}</span>
                <span className="next__step__desc">{step.desc}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="next__cta">
            <a href="https://wa.me/16493442441?text=Vasco%2C%20I%27m%20good%20to%20proceed%20with%20BE%20Intelig%C3%AAncia%20%E2%80%94%20let%27s%20kick%20off." className="btn btn--light">
              <PlusIcon /> Sign off via WhatsApp
            </a>
            <a href="mailto:daniel@hoffmanntci.com?subject=BE%20Intelig%C3%AAncia" className="next__cta-secondary">
              <PlusIcon /> Email Daniel
            </a>
            <a href="/deck.pdf" download className="next__cta-secondary">
              <PlusIcon /> Download deck (PDF)
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
