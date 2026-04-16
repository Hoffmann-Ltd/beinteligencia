'use client'

import { Reveal, Eyebrow, HDisplay, Btn, PlusIcon } from './UI'

export default function NextSteps() {
  const steps = [
    { num: '01', title: 'Your sign-off', desc: 'Approve the 6-month pilot scope and commercial model.' },
    { num: '02', title: 'Key introductions', desc: 'Tanithca, Sophia, the new S&M lead, and HR — the people closest to the operational knowledge we need to codify.' },
    { num: '03', title: 'Asana setup', desc: "I'll provision the workspace and onboard you. Your first task lands there from the orchestrator, not from me." },
    { num: '04', title: 'Knowledge-base session', desc: 'First working session focused on properties, org, contacts, standards, supplier relationships.' },
    { num: '05', title: 'Agreement signed', desc: 'Short-form engagement letter. Pilot starts inside two weeks of sign-off.' },
  ]

  return (
    <section id="next" className="relative overflow-hidden bg-[var(--teal-void)] text-white py-[clamp(5rem,11vw,10rem)]">
      <div className="absolute inset-0 opacity-10 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2000&q=80&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10">
        <div className="max-w-[1320px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
          <Reveal>
            <div className="max-w-[900px] mx-auto mb-16 text-center">
              <Eyebrow light className="mb-6">Next Steps</Eyebrow>
              <HDisplay light>Kick-off within two weeks</HDisplay>
            </div>
          </Reveal>

          <div className="max-w-[960px] mx-auto">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.15} className="group grid grid-cols-[60px_1fr_2fr] gap-8 py-8 border-b border-white/12 hover:px-4 hover:bg-white/3 transition-all duration-400 items-baseline">
                <span className="text-[22px] font-light text-[var(--teal-bright)] tracking-[0.05em]">{step.num}</span>
                <span className="text-[17px] font-normal uppercase tracking-[0.12em] text-white">{step.title}</span>
                <span className="text-[14px] text-white/70 leading-[1.65]">{step.desc}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://wa.me/16493442441?text=Vasco%2C%20I%27m%20good%20to%20proceed%20with%20BE%20Intelig%C3%AAncia%20%E2%80%94%20let%27s%20kick%20off."
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white text-[12px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--teal-deep)] transition-all duration-300"
            >
              <PlusIcon /> Sign off via WhatsApp
            </a>
            <a href="mailto:daniel@hoffmanntci.com?subject=BE%20Intelig%C3%AAncia" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/75 hover:text-white px-4 py-3 transition-colors duration-200">
              <PlusIcon /> Email Daniel
            </a>
            <a href="/deck.pdf" download className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/75 hover:text-white px-4 py-3 transition-colors duration-200">
              <PlusIcon /> Download deck (PDF)
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}