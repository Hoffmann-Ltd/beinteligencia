'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Roadmap() {
  const phases = [
    { range: 'Months 1–2', name: 'Foundation', focus: 'Discover & structure', items: ['Data audit across properties', 'Centralize system access', 'Knowledge gathering', 'SOP template architecture', 'Analytics scoping', 'Asana rollout'] },
    { range: 'Months 3–4', name: 'Build', focus: 'Codify & deploy', items: ['AI-assisted SOP generation', 'Sales & KPI dashboard', 'CEO AI assistant live', 'Management AI training begins', 'Knowledge base v1 searchable'] },
    { range: 'Months 5–6', name: 'Refine', focus: 'Measure & plan', items: ['KPI adoption review', 'Gap analysis', 'SOP library v1 signed off', 'Phase 2: specialized agents', 'Group-replication playbook'] },
  ]

  return (
    <section className="py-[var(--section-py)] bg-[var(--teal-mist)]">
      <div className="container">
        <Reveal>
          <div className="section__head max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">Roadmap</Eyebrow>
            <HDisplay>Six months to a working foundation</HDisplay>
          </div>
        </Reveal>

        <div className="roadmap relative pt-16">
          <div className="roadmap__spine absolute top-16 left-[10%] right-[10%] h-px bg-[var(--mist)] overflow-hidden">
            <span className="roadmap__spine-fill absolute inset-0 bg-[var(--teal)] scale-x-0 origin-left transition-transform duration-[1800ms] delay-[200ms]" />
          </div>

          <div className="roadmap__timeline grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <div key={phase.name} className="roadmap__phase relative pt-12">
                <div className="roadmap__node absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-white border border-[var(--mist)] flex items-center justify-center transition-all duration-400 opacity-0 translate-y-[-10px] group-hover:scale-[1.15] group-hover:bg-[var(--teal)] group-hover:border-[var(--teal)] group-hover:opacity-100"
                     style={{}}>
                  <span className="text-[18px] font-light text-[var(--teal)] group-hover:text-white transition-colors">+</span>
                </div>
                <Reveal delay={0.4 + i * 0.6}>
                  <span className="roadmap__range text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)] block text-center mb-3">{phase.range}</span>
                </Reveal>
                <Reveal delay={0.4 + i * 0.6}>
                  <h3 className="roadmap__name text-[28px] font-light uppercase tracking-[0.05em] text-[var(--ink)] text-center mb-2 leading-none">{phase.name}</h3>
                </Reveal>
                <Reveal delay={0.4 + i * 0.6}>
                  <p className="roadmap__focus font-[family-name:var(--serif)] italic text-[15px] font-light text-[var(--slate)] text-center mb-6">{phase.focus}</p>
                </Reveal>
                <ul className="roadmap__items pt-6 border-t border-[var(--mist)] flex flex-col gap-3">
                  {phase.items.map((item) => (
                    <li key={item} className="roadmap__item text-[13px] text-[var(--graphite)] leading-[1.5] flex items-start gap-[0.65rem]">
                      <span className="text-[var(--teal)] font-light flex-shrink-0 -mt-px">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .roadmap__node { }
        @media (max-width: 900px) { .roadmap__timeline { grid-template-columns: 1fr; gap: 3rem; padding-top: 2rem; } .roadmap__spine { display: none; } .roadmap__phase { padding-top: 2rem; } .roadmap__node { top: 0; } }
      `}</style>
    </section>
  )
}