'use client'

import { Reveal, Eyebrow, HDisplay } from './UI'

export default function Pillars() {
  const pillars = [
    {
      num: '01',
      title: 'SOPs & Knowledge Base',
      desc: "A cohesive, cross-referenced library of standard operating procedures spanning every department. AI drafts and structures; humans validate. The knowledge no longer lives in anyone's head.",
      icon: <svg className="pillar__icon w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M4 4 L4 20 L12 17 L20 20 L20 4 L12 7 L4 4 M12 7 L12 17"/></svg>,
    },
    {
      num: '02',
      title: 'Data & Analytics',
      desc: 'Sales, KPIs, and cost dashboards modeled on the Maya approach. Clean data, automated ingestion, live visibility. Surfaces the metrics that matter per department.',
      icon: <svg className="pillar__icon w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M3 20 L3 4 M3 20 L21 20 M7 16 L11 10 L15 13 L21 5"/><circle cx="21" cy="5" r="1.5"/></svg>,
    },
    {
      num: '03',
      title: 'Management AI Training',
      desc: 'Hands-on enablement for the management team to use AI tools in daily work — forecasting, analysis, drafting, research. Adoption is the real deliverable here.',
      icon: <svg className="pillar__icon w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><circle cx="9" cy="8" r="3"/><path d="M3 20 C3 16 5 14 9 14 C13 14 15 16 15 20"/><path d="M15 5 L21 5 L21 13 M15 9 L19 9"/></svg>,
    },
    {
      num: '04',
      title: 'CEO AI Assistant',
      desc: 'A personal agent for you — connected to email and Asana. Breaks concepts into tasks, tracks completion, drafts comms, and pulls intelligence from the knowledge base on demand.',
      icon: <svg className="pillar__icon w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><rect x="5" y="7" width="14" height="12" rx="2"/><path d="M9 3 L9 7 M15 3 L15 7 M8 12 L10 12 M14 12 L16 12 M9 16 L15 16"/></svg>,
    },
  ]

  return (
    <section className="py-[var(--section-py)]">
      <div className="container">
        <Reveal>
          <div className="section__head max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">The Pilot</Eyebrow>
            <HDisplay>Four pillars for the first six months</HDisplay>
          </div>
        </Reveal>

        <div className="pillars grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 0.15} className="pillar group border border-[var(--mist)] p-10 bg-white relative overflow-hidden transition-all duration-400 cursor-pointer hover:border-[var(--teal)] hover:-translate-y-1">
              <span className="pillar__top-line absolute top-0 left-0 right-0 h-px bg-[var(--teal)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-1" />
              <div className="pillar__header flex items-center justify-between mb-8">
                <span className="pillar__num text-[42px] font-light text-[var(--teal)] tracking-[0.05em] leading-none">{pillar.num}</span>
                <span className="text-[var(--teal)]">{pillar.icon}</span>
              </div>
              <h3 className="pillar__title text-[20px] font-normal uppercase tracking-[0.08em] text-[var(--ink)] mb-5 leading-[1.3]">{pillar.title}</h3>
              <p className="pillar__desc text-[14px] text-[var(--slate)] leading-[1.75]">{pillar.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .pillars { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}