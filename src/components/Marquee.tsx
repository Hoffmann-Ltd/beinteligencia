export default function Marquee() {
  const items = ['Codify', 'Centralize', 'Automate', 'Analyze', 'Replicate', 'Elevate']
  return (
    <div id="marquee" className="bg-[var(--teal-void)] text-white/65 py-5 overflow-hidden whitespace-nowrap border-b border-white/[0.08]">
      <div className="marquee__track inline-flex animate-[marquee_40s_linear_infinite] gap-12 pr-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item text-[11px] font-medium uppercase tracking-[0.3em] flex items-center gap-3">
            {item}<span className="text-[var(--teal-bright)] text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}