import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

export default function PdOverview({ project: p }) {
  return (
    <section className="py-20 px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]
                      gap-16 items-start">

        {/* Left — text */}
        <FadeIn className="flex flex-col">
          <SectionTag>Project Overview</SectionTag>
          <h2 className="font-display text-[1.8rem] font-extrabold
                         tracking-[-0.025em] text-ink mb-5">
            The Challenge
          </h2>
          <p className="text-[0.925rem] text-muted leading-[1.8] mb-4">
            {p.description}
          </p>
          <p className="text-[0.925rem] text-muted leading-[1.8]">
            {p.description2}
          </p>
        </FadeIn>

        {/* Right — sidebar cards */}
        <FadeIn delay={0.15} className="flex flex-col gap-4 lg:pt-2">

          {/* Tech stack */}
          <div className="bg-bg border border-DEFAULT rounded-[14px] p-5">
            <h4 className="text-[0.78rem] font-bold tracking-[0.08em]
                           uppercase text-muted mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-card border border-strong rounded-lg
                             text-[0.75rem] font-medium text-ink2
                             hover:border-accent/30 hover:text-accent
                             hover:bg-accent/[0.04] transition-all duration-200
                             cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-bg border border-DEFAULT rounded-[14px] p-5">
            <h4 className="text-[0.78rem] font-bold tracking-[0.08em]
                           uppercase text-muted mb-4">
              Quick Stats
            </h4>
            <div className="flex flex-col divide-y divide-DEFAULT">
              {p.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-center py-2.5 text-[0.82rem]"
                >
                  <span className="text-muted">{s.label}</span>
                  <span className="font-display font-bold text-ink">{s.num}</span>
                </div>
              ))}
            </div>
          </div>

        </FadeIn>
      </div>
    </section>
  )
}