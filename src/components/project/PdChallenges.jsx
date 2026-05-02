import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

export default function PdChallenges({ challenges }) {
  return (
    <section className="py-20 px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionTag>What We Were Up Against</SectionTag>
          <h2 className="font-display text-[2rem] font-extrabold
                         tracking-[-0.025em] text-ink mb-12">
            Key Challenges
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div
                className="group relative bg-card border border-DEFAULT
                           rounded-2xl p-7 overflow-hidden
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg
                           hover:border-strong"
              >
                {/* Top accent line — scales in on hover */}
                <span
                  className="absolute top-0 left-0 right-0 h-[2px]
                             origin-left scale-x-0 group-hover:scale-x-100
                             transition-transform duration-300"
                  style={{ background: 'var(--grad)' }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl bg-bg2 border border-DEFAULT
                             flex items-center justify-center text-[1.2rem]
                             mb-4"
                >
                  {c.icon}
                </div>

                <h4 className="font-display text-[0.95rem] font-bold
                               text-ink mb-2">
                  {c.title}
                </h4>
                <p className="text-[0.82rem] text-muted leading-[1.65]">
                  {c.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}