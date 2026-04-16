'use client'

import { Reveal, Eyebrow, ThinRule, HDisplay } from './UI'

export default function Vision() {
  const outcomes = [
    { num: '01', title: 'Codify operations', desc: 'Turn tacit knowledge into cross-referenced SOPs that survive turnover.' },
    { num: '02', title: 'Surface insight', desc: 'Real-time dashboards replace static reports and manual monthly roll-ups.' },
    { num: '03', title: 'Elevate the team', desc: 'Managers equipped with AI, not replaced by it — amplified judgment.' },
    { num: '04', title: 'Accelerate decisions', desc: 'CEO and department heads operate with an AI partner, not an inbox.' },
  ]

  return (
    <section className="py-[var(--section-py)]">
      <div className="container">
        <div className="vision grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <div className="vision__left">
            <Reveal>
              <Eyebrow className="mb-6">The Vision</Eyebrow>
              <h2 className="h-display text-[clamp(2rem,4vw,3.5rem)] mb-8">An AI-first operating layer for Beach Enclave</h2>
              <ThinRule />
              <p className="vision__para text-[16px] leading-[1.85] text-[var(--graphite)] mb-10">
                BE Inteligência is not a product. It is an operational layer that sits across the group — codifying how BE runs, so every property, every department, every new hire inherits the same playbook. And then using AI to turn that playbook into action.
              </p>
              <div className="vision__brief bg-[var(--teal-void)] text-white p-8 relative overflow-hidden">
                <span className="vision__brief__label text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)] mb-4 inline-flex items-center gap-[10px]">
                  <span className="text-[14px] font-light">+</span> Direct from your brief
                </span>
                <p className="font-[var(--sans)] text-[17px] leading-[1.55] tracking-[0.01em] mt-4">
                  Sales &amp; marketing. CRM. Shopping the comp set. Repeat-guest recognition. Automated responses. Contracts.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="vision__outcomes flex flex-col gap-0">
            {outcomes.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.15} className="vision__outcome group grid grid-cols-[48px_1fr] gap-6 py-8 border-b border-[var(--mist)] hover:bg-[var(--teal-mist)] px-4 -mx-4 transition-colors duration-300">
                <div className="vision__outcome__num text-[14px] font-light text-[var(--teal)] tracking-[0.1em] pt-1">{item.num}</div>
                <div>
                  <h3 className="vision__outcome__title text-[18px] font-normal uppercase tracking-[0.1em] text-[var(--ink)] mb-2">{item.title}</h3>
                  <p className="vision__outcome__desc text-[14px] text-[var(--slate)] leading-[1.6]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .vision__outcome:first-child { padding-top: 0; }
        .vision__outcome:last-child { border-bottom: none; }
        @media (max-width: 900px) { .vision { grid-template-columns: 1fr; gap: 3rem; } }
      `}</style>
    </section>
  )
}