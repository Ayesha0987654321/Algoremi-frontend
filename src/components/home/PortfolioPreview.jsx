import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'
import FadeIn          from '../ui/FadeIn'
import SectionTag      from '../ui/SectionTag'
import { projects }    from '../../data/ProjectData'

// Show first 4 projects on home
const PREVIEW = projects.slice(0, 4)

function HomeProjectCard({ p, featured = false }) {
  const nav = useNavigate()

  return (
    <motion.div
      onClick={() => nav(`/portfolio/${p.id}`)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-DEFAULT bg-bg
                 overflow-hidden cursor-pointer h-full
                 hover:shadow-[0_24px_64px_rgba(11,15,26,0.10)]
                 transition-shadow duration-300 flex flex-col"
    >
      {/* Top accent */}
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

      {/* Emoji + blob area */}
      <div
        className={`relative flex items-center justify-center overflow-hidden flex-shrink-0
                    ${featured ? 'h-[220px]' : 'h-[140px]'}`}
        style={{
          background: `radial-gradient(ellipse at 40% 50%, ${p.color} 0%, transparent 68%)`,
        }}
      >
        <span className={`relative z-10 select-none ${featured ? 'text-[4rem]' : 'text-[3rem]'}`}>
          {p.emoji}
        </span>

        {/* Year */}
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg
                         text-[0.68rem] font-bold tracking-[0.06em]
                         bg-card/90 backdrop-blur-sm text-muted border border-DEFAULT">
          {p.year}
        </span>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center
                        bg-ink/[0.04] opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        text-[0.78rem] font-bold text-ink tracking-[0.08em]">
          VIEW CASE STUDY →
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 px-5 py-5 bg-card gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className={`font-display font-bold text-ink mb-1 leading-tight
                            ${featured ? 'text-[1.15rem]' : 'text-[0.95rem]'}`}>
              {p.title}
            </h3>
            <p className="text-[0.75rem] text-muted line-clamp-1 leading-[1.5]">
              {p.tagline}
            </p>
          </div>
          <span className="text-muted text-[1rem] flex-shrink-0 mt-0.5
                           transition-all duration-200
                           group-hover:text-accent
                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>

        {/* Key stat — featured shows bigger */}
        {p.stats?.[0] && (
          <div className="border-t border-DEFAULT pt-3">
            <p className={`font-display font-extrabold grad-text leading-none
                           ${featured ? 'text-[1.8rem]' : 'text-[1.4rem]'}`}>
              {p.stats[0].num}
            </p>
            <p className="text-[0.7rem] text-muted mt-0.5">{p.stats[0].label}</p>
          </div>
        )}

        {/* Tech chips — featured shows more */}
        {featured && p.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {p.tech.slice(0, 4).map((t) => (
              <span key={t}
                className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                           bg-bg2 text-muted border border-DEFAULT">
                {t}
              </span>
            ))}
            {p.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[0.68rem] font-semibold
                               bg-bg2 text-muted border border-DEFAULT">
                +{p.tech.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function PortfolioPreview() {
  const nav = useNavigate()

  return (
    <section className="py-[100px] px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row justify-between
                           items-start sm:items-center gap-4 mb-14">
          <div>
            <SectionTag>Portfolio</SectionTag>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold
                           tracking-[-0.03em] text-ink">
              Work That Speaks
            </h2>
            <p className="text-muted text-[0.9rem] mt-2 max-w-[460px] leading-[1.65]">
              Production systems that moved real numbers — not demos.
            </p>
          </div>
          <button
            onClick={() => nav('/portfolio')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-transparent border border-strong text-ink
                       text-sm font-semibold flex-shrink-0
                       transition-all duration-200 hover:border-ink hover:bg-ink/[0.04]"
          >
            View All Projects
          </button>
        </FadeIn>

        {/* Grid: featured spans left col (2 rows), right col has 3 smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-4 items-start">

          {/* Featured — tall left */}
          <FadeIn className="lg:row-span-3 h-full">
            <HomeProjectCard p={PREVIEW[0]} featured />
          </FadeIn>

          {/* 3 smaller cards on the right */}
          {PREVIEW.slice(1).map((p, i) => (
            <FadeIn key={p.id} delay={0.08 * (i + 1)}>
              <HomeProjectCard p={p} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
