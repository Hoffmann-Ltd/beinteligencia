export default function Marquee() {
  const items = ['Codify', 'Centralize', 'Automate', 'Analyze', 'Replicate', 'Elevate']
  return (
    <div id="marquee" className="marquee">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item">
            {item}<span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
