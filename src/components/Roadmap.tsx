'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Roadmap() {
  const phases = [
    { range: 'Months 1–2', name: 'Foundation', focus: 'Discover & structure', items: ['Data audit across properties', 'Centralize system access', 'Knowledge gathering', 'SOP template architecture', 'Analytics scoping', 'Asana rollout'] },
    { range: 'Months 3–4', name: 'Build', focus: 'Codify & deploy', items: ['AI-assisted SOP generation', 'Sales & KPI dashboard', 'CEO AI assistant live', 'Management AI training begins', 'Knowledge base v1 searchable'] },
    { range: 'Months 5–6', name: 'Refine', focus: 'Measure & plan', items: ['KPI adoption review', 'Gap analysis', 'SOP library v1 signed off', 'Phase 2: specialized agents', 'Group-replication playbook'] },
  ]

  return (
    <section className="py-[clamp(5rem,11vw,10rem)] bg-[var(--teal-mist)]">
      <div className="max-w-[1320px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <div className="max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">Roadmap</Eyebrow>
            <HDisplay>Six months to a working foundation</HDisplay>
          </div>
        </Reveal>

        <div className="relative pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="absolute top-16 left-[10%] right-[10%] h-px overflow-hidden">
            <div className="absolute inset-0 bg-[var(--teal)] scale-x-0 origin-left transition-transform duration-[1800ms] delay-[200ms]" />
          </div>

          {phases.map((phase, i) => (
            <div key={phase.name} className="relative pt-12">
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-white border border-[var(--mist)] flex items-center justify-center transition-all duration-400 opacity-0 translate-y-[-10px] group-hover:scale-[1.15] group-hover:bg-[var(--teal)] group-hover:border-[var(--teal)] group-hover:opacity-100`} style={{}}>
                <span className="text-[18px] font-light text-[var(--teal)] group-hover:text-white transition-colors">+</span>
              </div>
              <Reveal delay={0.4 + i * 0.6} className="text-center mb-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal)]">{phase.range}</span>
              </Reveal>
              <Reveal delay={0.4 + i * 0.6}>
                <h3 className="text-[28px] font-light uppercase tracking-[0.05em] text-[var(--ink)] text-center mb-2 leading-none">{phase.name}</h3>
              </Reveal>
              <Reveal delay={0.4 + i * 0.6}>
                <p className="font-[family-name:var(--serif)] italic text-[15px] font-light text-[var(--slate)] text-center mb-6">{phase.focus}</p>
              </Reveal>
              <ul className="pt-6 border-t border-[var(--mist)] flex flex-col gap-3">
                {phase.items.map((item) => (
                  <li key={item} className="text-[13px] text-[var(--graphite)] leading-[1.5] flex items-start gap-[0.65rem]">
                    <span className="text-[var(--teal)] font-light flex-shrink-0 mt-[-2px]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}