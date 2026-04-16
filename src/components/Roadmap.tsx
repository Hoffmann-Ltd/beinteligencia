'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal, Eyebrow, HDisplay } from './UI'

function RoadmapTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const phases = [
    { range: 'Months 1–2', name: 'Foundation', focus: 'Discover & structure', items: ['Data audit across properties', 'Centralize system access', 'Knowledge gathering', 'SOP template architecture', 'Analytics scoping', 'Asana rollout'] },
    { range: 'Months 3–4', name: 'Build', focus: 'Codify & deploy', items: ['AI-assisted SOP generation', 'Sales & KPI dashboard', 'CEO AI assistant live', 'Management AI training begins', 'Knowledge base v1 searchable'] },
    { range: 'Months 5–6', name: 'Refine', focus: 'Measure & plan', items: ['KPI adoption review', 'Gap analysis', 'SOP library v1 signed off', 'Phase 2: specialized agents', 'Group-replication playbook'] },
  ]

  return (
    <div ref={ref} id="roadmap" className={`roadmap ${visible ? 'is-visible' : ''}`}>
      <div className="roadmap__spine"></div>

      <div className="roadmap__timeline">
        {phases.map((phase, i) => (
          <div key={phase.name} className="roadmap__phase">
            <div className={`roadmap__node roadmap__node--${i + 1}`}></div>
            <Reveal delay={0.4 + i * 0.6}>
              <span className="roadmap__range">{phase.range}</span>
            </Reveal>
            <Reveal delay={0.4 + i * 0.6}>
              <h3 className="roadmap__name">{phase.name}</h3>
            </Reveal>
            <Reveal delay={0.4 + i * 0.6}>
              <p className="roadmap__focus">{phase.focus}</p>
            </Reveal>
            <ul className="roadmap__items">
              {phase.items.map((item) => (
                <li key={item} className="roadmap__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Roadmap() {
  return (
    <section className="section section--wash">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <Eyebrow className="mb-6">Roadmap</Eyebrow>
            <HDisplay>Six months to a working foundation</HDisplay>
          </div>
        </Reveal>
        <RoadmapTimeline />
      </div>
    </section>
  )
}
