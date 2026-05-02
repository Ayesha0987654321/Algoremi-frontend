// Infinite scrolling dark strip between Hero and Split section

const items = [
  'AI Integration',
  'Cloud Architecture',
  'Data Intelligence',
  'Workflow Automation',
  'Security & Compliance',
  'Product Strategy',
  'ML Pipeline Design',
  'API Development',
]

// Duplicate so the loop is seamless
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="bg-ink overflow-hidden py-[22px]">
      <div
        className="flex gap-14 w-max"
        style={{
          animation: 'marquee-scroll 22s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 text-[0.82rem] text-white/50
                       font-medium whitespace-nowrap font-body"
          >
            <span className="text-accent-g text-[0.5rem]">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}