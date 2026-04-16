'use client'

import { Reveal, Eyebrow, HDisplay } from '@/components/UI'

export default function Architecture() {
  return (
    <section className="py-[clamp(5rem,11vw,10rem)] bg-[var(--teal-mist)]">
      <div className="max-w-[1320px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <Reveal>
          <div className="max-w-[900px] mx-auto mb-16 text-center">
            <Eyebrow className="mb-6">Architecture</Eyebrow>
            <HDisplay>One orchestrator · Three pillars · Many sources</HDisplay>
          </div>
        </Reveal>

        <Reveal className="max-w-[1100px] mx-auto">
          <div className="overflow-x-auto -mx-4 px-4 [&_text]:font-['Montserrat',sans-serif]">
            <svg viewBox="0 0 1000 620" className="w-[820px] min-w-[820px] mx-auto" xmlns="http://www.w3.org/2000/svg" aria-label="BE Inteligência architecture diagram">
              <style>{`
                .draw-path{stroke-dasharray:900;stroke-dashoffset:900;transition:stroke-dashoffset 1600ms cubic-bezier(0.16,1,0.3,1);transition-delay:300ms}
                .is-visible .draw-path{stroke-dashoffset:0}
                .arch-node{opacity:0;transform:translateY(10px);transition:opacity 800ms cubic-bezier(0.16,1,0.3,1),transform 800ms cubic-bezier(0.16,1,0.3,1)}
                .is-visible .arch-node{opacity:1;transform:translateY(0)}
                .is-visible .arch-node-1{transition-delay:100ms}
                .is-visible .arch-node-2{transition-delay:500ms}
                .is-visible .arch-node-3{transition-delay:900ms}
                .is-visible .arch-node-4{transition-delay:1000ms}
                .is-visible .arch-node-5{transition-delay:1100ms}
                .hub-node{animation:hubPulse 4s ease-in-out infinite;transform-origin:center}
                .hub-node-1{animation-delay:1.8s}.hub-node-2{animation-delay:2.8s}.hub-node-3{animation-delay:3.8s}.hub-node-4{animation-delay:4.8s}
                @keyframes hubPulse{0%,65%,100%{fill-opacity:0}20%,45%{fill-opacity:1}}
                .svg-label{letter-spacing:3px}
              `}</style>

              <g className="arch-node arch-node-1">
                <rect x="300" y="20" width="400" height="100" fill="white" stroke="#4A7E92" strokeWidth="1.5"/>
                <g transform="translate(330,50)" fill="none" stroke="#4A7E92" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M4 22 L7 8 L12 16 L16 6 L20 16 L25 8 L28 22 Z"/>
                  <line x1="2" y1="26" x2="30" y2="26" strokeWidth="2"/>
                  <circle cx="7" cy="8" r="1.4" fill="#4A7E92"/>
                  <circle cx="16" cy="6" r="1.4" fill="#4A7E92"/>
                  <circle cx="25" cy="8" r="1.4" fill="#4A7E92"/>
                </g>
                <text x="380" y="58" className="svg-label" fill="#4A7E92" fontSize="11" fontWeight="500">LEADERSHIP</text>
                <text x="380" y="88" fill="#2B3842" fontSize="13" fontWeight="300">Plain-English tasking via WhatsApp &amp; email</text>
              </g>

              <line x1="500" y1="120" x2="500" y2="180" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <line x1="500" y1="330" x2="500" y2="380" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <line x1="170" y1="380" x2="830" y2="380" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <line x1="170" y1="380" x2="170" y2="430" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <line x1="500" y1="380" x2="500" y2="430" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <line x1="830" y1="380" x2="830" y2="430" stroke="#4A7E92" strokeWidth="1" className="draw-path"/>
              <circle cx="170" cy="380" r="2.5" fill="#4A7E92"/>
              <circle cx="500" cy="380" r="2.5" fill="#4A7E92"/>
              <circle cx="830" cy="380" r="2.5" fill="#4A7E92"/>

              <g className="arch-node arch-node-2">
                <rect x="230" y="180" width="540" height="150" fill="#0F2830"/>
                <g transform="translate(480,196)" fill="none" stroke="#6BA5B9" strokeWidth="1.5">
                  <line x1="17" y1="17" x2="9" y2="11" strokeWidth="1" opacity="0.55"/>
                  <line x1="23" y1="17" x2="31" y2="11" strokeWidth="1" opacity="0.55"/>
                  <line x1="17" y1="23" x2="9" y2="29" strokeWidth="1" opacity="0.55"/>
                  <line x1="23" y1="23" x2="31" y2="29" strokeWidth="1" opacity="0.55"/>
                  <circle cx="20" cy="20" r="5" fill="#6BA5B9"/>
                  <circle cx="6" cy="8" r="3" fill="#6BA5B9" fillOpacity="0" className="hub-node hub-node-1"/>
                  <circle cx="34" cy="8" r="3" fill="#6BA5B9" fillOpacity="0" className="hub-node hub-node-2"/>
                  <circle cx="34" cy="32" r="3" fill="#6BA5B9" fillOpacity="0" className="hub-node hub-node-3"/>
                  <circle cx="6" cy="32" r="3" fill="#6BA5B9" fillOpacity="0" className="hub-node hub-node-4"/>
                </g>
                <text x="500" y="270" textAnchor="middle" className="svg-label" fill="#6BA5B9" fontSize="11" fontWeight="500">CEO ORCHESTRATOR AGENT</text>
                <text x="500" y="295" textAnchor="middle" fill="white" fontSize="13" fontWeight="300">Breaks high-level goals into actionable tasks</text>
                <text x="500" y="315" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="12" fontWeight="300">Routes to humans and specialist agents</text>
              </g>

              <g className="arch-node arch-node-3">
                <rect x="60" y="430" width="220" height="170" fill="white" stroke="#D1D5DB"/>
                <rect x="60" y="430" width="3" height="170" fill="#4A7E92"/>
                <g transform="translate(150,448)" fill="none" stroke="#4A7E92" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M4 10 L4 32 L20 28 L36 32 L36 10 L20 14 Z"/>
                  <line x1="20" y1="14" x2="20" y2="28"/>
                  <line x1="8" y1="18" x2="16" y2="20" strokeWidth="1"/>
                  <line x1="8" y1="22" x2="16" y2="24" strokeWidth="1"/>
                  <line x1="24" y1="20" x2="32" y2="18" strokeWidth="1"/>
                  <line x1="24" y1="24" x2="32" y2="22" strokeWidth="1"/>
                </g>
                <text x="170" y="520" textAnchor="middle" className="svg-label" fill="#4A7E92" fontSize="10" fontWeight="500">KNOWLEDGE BASE</text>
                <text x="170" y="552" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">SOPs, property details,</text>
                <text x="170" y="572" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">contacts, brand standards</text>
              </g>

              <g className="arch-node arch-node-4">
                <rect x="390" y="430" width="220" height="170" fill="white" stroke="#D1D5DB"/>
                <rect x="390" y="430" width="3" height="170" fill="#4A7E92"/>
                <g transform="translate(480,448)" fill="none" stroke="#4A7E92" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M4 34 L4 6"/>
                  <path d="M4 34 L36 34"/>
                  <path d="M8 28 L14 20 L22 24 L32 10"/>
                  <circle cx="8" cy="28" r="1.5" fill="#4A7E92"/>
                  <circle cx="14" cy="20" r="1.5" fill="#4A7E92"/>
                  <circle cx="22" cy="24" r="1.5" fill="#4A7E92"/>
                  <circle cx="32" cy="10" r="2.2" fill="#4A7E92"/>
                </g>
                <text x="500" y="520" textAnchor="middle" className="svg-label" fill="#4A7E92" fontSize="10" fontWeight="500">ANALYTICS LAYER</text>
                <text x="500" y="552" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">Sales, KPIs, F&amp;B cost,</text>
                <text x="500" y="572" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">finance dashboards</text>
              </g>

              <g className="arch-node arch-node-5">
                <rect x="720" y="430" width="220" height="170" fill="white" stroke="#D1D5DB"/>
                <rect x="720" y="430" width="3" height="170" fill="#4A7E92"/>
                <g transform="translate(810,448)" fill="none" stroke="#4A7E92" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                  <rect x="8" y="4" width="24" height="32" rx="1.5"/>
                  <rect x="14" y="2" width="12" height="5" rx="1" fill="#4A7E92"/>
                  <path d="M12 14 L14 16 L18 12"/>
                  <line x1="21" y1="15" x2="29" y2="15" strokeWidth="1"/>
                  <path d="M12 22 L14 24 L18 20"/>
                  <line x1="21" y1="23" x2="29" y2="23" strokeWidth="1"/>
                  <rect x="12" y="28" width="5" height="5" fill="none" strokeWidth="1.2"/>
                  <line x1="21" y1="31" x2="29" y2="31" strokeWidth="1"/>
                </g>
                <text x="830" y="520" textAnchor="middle" className="svg-label" fill="#4A7E92" fontSize="10" fontWeight="500">TASK SYSTEM</text>
                <text x="830" y="552" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">Asana — assignment</text>
                <text x="830" y="572" textAnchor="middle" fill="#0F1922" fontSize="12" fontWeight="300">across humans + agents</text>
              </g>
            </svg>
          </div>

          <div className="mt-12 p-6 bg-[var(--teal-void)] text-white flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--teal-bright)]">Data sources</span>
            <span className="text-[13px] text-white/85 tracking-[0.05em]">QuickBooks · Silverware POS · Email · OpenTable · Opera PMS · Database · CRM · Excel · TripAdvisor · Google</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}