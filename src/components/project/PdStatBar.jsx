export default function PdStatsBar({ stats }) {
  return (
    <div className="bg-ink">
      <div
        className="max-w-[1200px] mx-auto px-[5%]
                   grid grid-cols-2 lg:grid-cols-4
                   divide-x divide-white/[0.08]"
      >
        {stats.map((s) => (
          <div key={s.label} className="px-8 py-7">
            <p
              className="font-display text-[2rem] font-extrabold
                         grad-text mb-1 leading-none"
            >
              {s.num}
            </p>
            <p className="text-[0.78rem] text-white/40 leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}