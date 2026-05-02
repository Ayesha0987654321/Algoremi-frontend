import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'
import FadeIn          from '../ui/FadeIn'

export default function FeaturedProject({ project: p }) {
  const nav = useNavigate()

  return (
    <FadeIn>
      <motion.div
        onClick={() => nav(`/portfolio/${p.id}`)}
        whileHover={{ scale: 1.008 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative h-[500px] rounded-[20px] bg-bg2 border border-DEFAULT
                   overflow-hidden cursor-pointer"
      >
        {/* Background emoji + colour blob */}
        <div className="absolute inset-0 flex items-center justify-center
                        text-[6rem] text-ink/[0.07] select-none pointer-events-none
                        font-sans">
          {p.emoji}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${p.color}, rgba(0,196,140,0.06))`,
          }}
        />

        {/* Bottom fade + content */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-10"
          style={{
            background:
              'linear-gradient(to top, rgba(245,247,252,0.98) 0%, transparent 60%)',
          }}
        >
          {/* Featured pill */}
          <span
            className="inline-block self-start px-3 py-1 rounded-full text-[0.72rem]
                       font-bold bg-accent text-white mb-4"
          >
            Featured
          </span>

          <h2
            className="font-display text-[clamp(1.6rem,3vw,2rem)] font-extrabold
                       tracking-[-0.025em] text-ink mb-2.5 max-w-[560px]"
          >
            {p.title} — {p.tagline}
          </h2>

          <p className="text-[0.875rem] text-muted max-w-[520px] leading-[1.65] line-clamp-2">
            {p.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 mt-5">
            {[
              { label: 'Industry', val: p.industry },
              { label: 'Duration', val: p.duration },
              { label: 'Year',     val: p.year     },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[0.68rem] font-bold tracking-[0.08em]
                               uppercase text-muted mb-0.5">
                  {m.label}
                </p>
                <p className="text-[0.85rem] font-semibold text-ink">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hover CTA overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-accent/[0.04] opacity-0 group-hover:opacity-100
                     transition-opacity duration-300
                     text-[0.85rem] font-bold text-accent tracking-[0.06em]"
        >
          VIEW FULL CASE STUDY →
        </div>
      </motion.div>
    </FadeIn>
  )
}