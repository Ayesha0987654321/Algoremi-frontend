import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'

export default function ProjectCard({ project: p, tall = false }) {
  const nav = useNavigate()

  return (
    <motion.div
      onClick={() => nav(`/portfolio/${p.id}`)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-DEFAULT bg-bg
                 overflow-hidden cursor-pointer h-full
                 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image / emoji area */}
      <div
        className={`relative flex items-center justify-center text-5xl
                    overflow-hidden
                    ${tall ? 'h-[220px]' : 'h-[180px]'}`}
      >
        {/* Colour blob */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${p.color} 0%, transparent 70%)`,
          }}
        />

        <span className="relative z-10 select-none">{p.emoji}</span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-accent/[0.06] opacity-0 group-hover:opacity-100
                     transition-opacity duration-300
                     text-[0.78rem] font-bold text-accent tracking-[0.08em]"
        >
          VIEW PROJECT →
        </div>
      </div>

      {/* Info bar */}
      <div className="flex items-start justify-between px-6 py-5 bg-card">
        <div className="flex-1 min-w-0 pr-3">
          <h3 className="font-display text-[1rem] font-bold text-ink mb-1
                         truncate">
            {p.title}
          </h3>
          <p className="text-[0.75rem] text-muted">{p.cat}</p>
        </div>

        {/* Arrow */}
        <span
          className="text-muted text-[1rem] flex-shrink-0 mt-0.5
                     transition-all duration-200
                     group-hover:text-accent
                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </div>
    </motion.div>
  )
}