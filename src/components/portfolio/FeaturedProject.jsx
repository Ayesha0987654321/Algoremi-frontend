import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'
import FadeIn          from '../ui/FadeIn'

export default function FeaturedProject({ project: p }) {
  const nav = useNavigate()

  return (
    <FadeIn>
      <motion.div
        onClick={() => nav(`/portfolio/${p.id}`)}
        whileHover={{ scale: 1.006 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative h-[520px] rounded-[20px] bg-bg2 border border-DEFAULT
                   overflow-hidden cursor-pointer"
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'var(--accent)' }}
        />

        {/* Background emoji */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute right-[-2vw]
                     top-1/2 -translate-y-1/2 text-[28vw] leading-none opacity-[0.04] z-0"
        >
          {p.emoji}
        </div>

        {/* Colour wash */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${p.color}, rgba(0,196,140,0.06))`,
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-10"
          style={{
            background: 'linear-gradient(to top, rgba(245,247,252,0.98) 0%, transparent 55%)',
          }}
        >
          {/* Featured pill */}
          <span className="inline-block self-start px-3 py-1 rounded-full text-[0.72rem]
                           font-bold bg-accent text-white mb-4">
            ★ Featured
          </span>

          <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold
                         tracking-[-0.025em] text-ink mb-2 max-w-[560px]">
            {p.title}
          </h2>

          <p className="text-[0.85rem] text-muted max-w-[480px] leading-[1.65]
                        line-clamp-2 mb-5">
            {p.tagline} — {p.description.slice(0, 90)}…
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-5">
            {p.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-[1.4rem] font-extrabold grad-text leading-none">
                  {s.num}
                </p>
                <p className="text-[0.68rem] text-muted mt-0.5 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Meta + tech row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {[
              { label: 'Industry', val: p.industry },
              { label: 'Duration', val: p.duration },
              { label: 'Year',     val: p.year     },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-muted mb-0.5">
                  {m.label}
                </p>
                <p className="text-[0.82rem] font-semibold text-ink">{m.val}</p>
              </div>
            ))}

            <div className="flex flex-wrap gap-1.5 ml-auto">
              {p.tech.slice(0, 4).map((t) => (
                <span key={t}
                  className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                             bg-card/80 backdrop-blur-sm text-muted border border-DEFAULT">
                  {t}
                </span>
              ))}
              {p.tech.length > 4 && (
                <span className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                                 bg-card/80 backdrop-blur-sm text-muted border border-DEFAULT">
                  +{p.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center
                        bg-accent/[0.03] opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        text-[0.85rem] font-bold text-accent tracking-[0.06em]">
          VIEW FULL CASE STUDY →
        </div>
      </motion.div>
    </FadeIn>
  )
}
