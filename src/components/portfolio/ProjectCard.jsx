import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'

export default function ProjectCard({ project: p, tall = false }) {
  const nav = useNavigate()

  return (
    <motion.div
      onClick={() => nav(`/portfolio/${p.id}`)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-DEFAULT bg-bg
                 overflow-hidden cursor-pointer h-full
                 hover:shadow-[0_20px_60px_rgba(11,15,26,0.10)]
                 transition-shadow duration-300 flex flex-col"
    >
      {/* Coloured top accent line */}
      <div
        className="h-[3px] w-full flex-shrink-0"
        style={{
          background: p.color.includes('0,102,255')
            ? 'var(--accent)'
            : p.color.includes('0,196,140')
            ? 'var(--accent-g)'
            : 'var(--accent-r)',
        }}
      />

      {/* Image / emoji area */}
      <div
        className={`relative flex items-center justify-center text-[3.5rem]
                    overflow-hidden flex-shrink-0
                    ${tall ? 'h-[200px]' : 'h-[160px]'}`}
      >
        {/* Colour blob */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 40% 50%, ${p.color} 0%, transparent 70%)`,
          }}
        />

        <span className="relative z-10 select-none">{p.emoji}</span>

        {/* Year badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-lg
                     text-[0.68rem] font-bold tracking-[0.06em]
                     bg-card/90 backdrop-blur-sm text-muted border border-DEFAULT"
        >
          {p.year}
        </span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-ink/[0.04] opacity-0 group-hover:opacity-100
                     transition-opacity duration-300
                     text-[0.78rem] font-bold text-ink tracking-[0.08em]"
        >
          VIEW CASE STUDY →
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-5 py-5 bg-card gap-3">

        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-[1rem] font-bold text-ink mb-1 leading-tight">
              {p.title}
            </h3>
            <p className="text-[0.75rem] text-muted leading-[1.5] line-clamp-1">
              {p.tagline}
            </p>
          </div>
          <span
            className="text-muted text-[1rem] flex-shrink-0 mt-0.5
                       transition-all duration-200
                       group-hover:text-accent
                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </div>

        {/* Key stat */}
        {p.stats?.[0] && (
          <div className="border-t border-DEFAULT pt-3">
            <p className="font-display text-[1.5rem] font-extrabold grad-text leading-none">
              {p.stats[0].num}
            </p>
            <p className="text-[0.7rem] text-muted mt-0.5">{p.stats[0].label}</p>
          </div>
        )}

        {/* Tech chips */}
        {p.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {p.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                           bg-bg2 text-muted border border-DEFAULT"
              >
                {t}
              </span>
            ))}
            {p.tech.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                               bg-bg2 text-muted border border-DEFAULT">
                +{p.tech.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
