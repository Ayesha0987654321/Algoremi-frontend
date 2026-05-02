import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// Three paragraphs — exact copy from original Algoremi HTML
const paragraphs = [
  "We watched a $40M Series B startup fail because their infrastructure couldn't handle 10x growth. The product was brilliant. The engineering wasn't. That's a solvable problem.",
  "Algoremi was built to be the firm we wished existed: one that combines deep technical execution with strategic thinking about where technology creates actual leverage in a business.",
  "Five years later, we've shipped over 50 projects across fintech, healthcare, logistics, and SaaS — with a client retention rate we're prouder of than any award.",
]

export default function StorySection() {
  return (
    <section className="py-[100px] px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2
                      gap-20 items-center">

        {/* Left — year + tag */}
        <FadeIn className="flex flex-col">
          {/* Giant year — decorative */}
          <p
            className="font-display text-[clamp(5rem,12vw,8rem)] font-extrabold
                       leading-none grad-text opacity-20 mb-[-1.5rem]
                       select-none pointer-events-none"
          >
            2019
          </p>

          <div>
            <SectionTag>Our Story</SectionTag>
          </div>

          {/* Visual card below the tag */}
          <div
            className="mt-8 rounded-2xl border border-DEFAULT bg-bg p-8
                       relative overflow-hidden"
          >
            {/* Subtle top accent */}
            <span
              className="absolute top-0 left-[20%] right-[20%] h-[2px]"
              style={{ background: 'var(--grad)' }}
            />

            {/* Three quick stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: '50+',  label: 'Projects'       },
                { num: '98%',  label: 'Retention'      },
                { num: '5 yrs',label: 'In Business'    },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span
                    className="font-display text-[1.8rem] font-extrabold
                               leading-none grad-text"
                  >
                    {s.num}
                  </span>
                  <span className="text-[0.75rem] text-muted">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-DEFAULT" />

            {/* Industries served */}
            <p className="text-[0.75rem] font-bold tracking-[0.08em]
                          uppercase text-muted mb-3">
              Industries Served
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fintech', 'Healthcare', 'Logistics', 'SaaS', 'MarTech', 'Supply Chain'].map((ind) => (
                <span
                  key={ind}
                  className="px-2.5 py-1 rounded-full text-[0.72rem]
                             border border-DEFAULT text-muted bg-card"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right — story text */}
        <FadeIn delay={0.15} className="flex flex-col gap-5">
          <h2
            className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold
                       tracking-[-0.03em] leading-[1.15] text-ink"
          >
            Started with One Brutal Observation
          </h2>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[0.9rem] text-muted leading-[1.8]"
            >
              {p}
            </p>
          ))}
        </FadeIn>

      </div>
    </section>
  )
}