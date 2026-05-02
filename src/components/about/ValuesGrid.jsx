import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// Exact values from original Algoremi HTML
const values = [
  {
    icon:  '⚡',
    title: 'Speed Without Recklessness',
    body:  "We move fast because we design carefully. Speed and quality aren't opposites — poor design makes them feel that way.",
  },
  {
    icon:  '🎯',
    title: 'Outcomes Over Outputs',
    body:  'Lines of code, number of features — these are metrics of activity. We measure ourselves by the business results we deliver.',
  },
  {
    icon:  '🔍',
    title: 'Radical Honesty',
    body:  "We'll tell you when you don't need us yet. We'll tell you when the approach is wrong. Trust is more valuable than any single contract.",
  },
]

export default function ValuesGrid() {
  return (
    <section className="py-[80px] px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <FadeIn className="mb-12">
          <SectionTag>What Drives Us</SectionTag>
          <h2
            className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold
                       tracking-[-0.03em] text-ink"
          >
            Our Core Values
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div
                className="group flex flex-col gap-4 p-7 rounded-2xl bg-card
                           border border-DEFAULT shadow-card
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-accent/20
                           hover:shadow-lg"
              >
                {/* Icon */}
                <span className="text-[1.9rem] leading-none">{v.icon}</span>

                {/* Gradient divider — appears on hover */}
                <div
                  className="h-[2px] w-10 rounded-full transition-all duration-300
                             group-hover:w-full"
                  style={{ background: 'var(--grad)' }}
                />

                <h4
                  className="font-display text-[1rem] font-bold text-ink"
                >
                  {v.title}
                </h4>

                <p className="text-[0.82rem] text-muted leading-[1.65]">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}