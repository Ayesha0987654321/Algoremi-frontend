import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const bgColors = {
  'rgba(0,102,255,0.18)':  'rgba(0,102,255,0.07)',
  'rgba(0,196,140,0.18)':  'rgba(0,196,140,0.07)',
  'rgba(255,59,48,0.18)':  'rgba(255,59,48,0.06)',
  'rgba(0,102,255,0.14)':  'rgba(0,102,255,0.05)',
  'rgba(0,196,140,0.14)':  'rgba(0,196,140,0.05)',
  'rgba(255,59,48,0.14)':  'rgba(255,59,48,0.05)',
}

export default function PdHero({ project: p }) {
  const nav   = useNavigate()
  const bgTint = bgColors[p.color] ?? 'rgba(0,102,255,0.05)'

  return (
    <section
      className="relative min-h-[70vh] flex items-end
                 pt-[140px] pb-20 px-[5%] overflow-hidden"
      style={{ background: bgTint }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(11,15,26,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,15,26,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Big background emoji */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute right-[-2vw]
                   top-1/2 -translate-y-1/2 text-[28vw] leading-none opacity-[0.04]
                   z-0"
      >
        {p.emoji}
      </div>

      {/* Bottom fade to bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to top, var(--bg) 0%, transparent 55%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full">

        {/* Back button */}
        <motion.button
          {...fadeUp(0)}
          onClick={() => nav('/portfolio')}
          className="inline-flex items-center gap-2 text-[0.8rem] font-semibold
                     text-muted bg-transparent border-none cursor-pointer
                     font-body mb-8 hover:text-ink transition-colors duration-200
                     p-0"
        >
          ← Back to Portfolio
        </motion.button>

        {/* Tags */}
        <motion.div {...fadeUp(0.06)} className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t, i) => (
            <span
              key={t}
              className={`px-3.5 py-1 rounded-full text-[0.72rem] font-bold
                          tracking-[0.04em] border backdrop-blur-sm
                          ${i === 0
                            ? 'bg-accent text-white border-accent'
                            : 'bg-white/70 text-muted border-DEFAULT'
                          }`}
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.12)}
          className="font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold
                     tracking-[-0.035em] leading-[1.08] text-ink
                     mb-5 max-w-[720px]"
        >
          {p.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.18)}
          className="text-[1.1rem] text-muted leading-[1.7]
                     max-w-[560px] mb-9"
        >
          {p.tagline}
        </motion.p>

        {/* Meta row */}
        <motion.div
          {...fadeUp(0.24)}
          className="flex flex-wrap gap-10"
        >
          {[
            { label: 'Year',     val: p.year     },
            { label: 'Duration', val: p.duration },
            { label: 'Team',     val: p.team     },
            { label: 'Industry', val: p.industry },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[0.7rem] font-bold tracking-[0.1em]
                             uppercase text-muted mb-1">
                {m.label}
              </p>
              <p className="text-[0.95rem] font-semibold text-ink">{m.val}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}