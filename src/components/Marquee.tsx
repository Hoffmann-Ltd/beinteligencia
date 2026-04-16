export default function Marquee() {
  const items = ['Codify', 'Centralize', 'Automate', 'Analyze', 'Replicate', 'Elevate']
  return (
    <div id="marquee" className="bg-[var(--teal-void)] text-white/65 py-5 overflow-hidden whitespace-nowrap border-b border-white/[0.08]">
      <div className="inline-flex animate-[marquee_40s_linear_infinite] gap-12 pr-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em]">
            {item}<span className="text-[var(--teal-bright)] text-[10px]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes scrollLine{0%,100%{transform:scaleY(1);opacity:0.6}50%{transform:scaleY(0.4);opacity:1}}@keyframes flow{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes pulse{0%,100%{opacity:0.4;transform:scale(1)}50%{opacity:1;transform:scale(1.4);box-shadow:0 0 12px var(--teal-bright)}}`}</style>
    </div>
  )
}
