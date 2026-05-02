import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

export default function PdResults({ results }) {
  return (
    <section className="relative py-20 px-[5%] bg-ink overflow-hidden">

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[400px]"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,196,140,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionTag light>Impact</SectionTag>
          <h2 className="font-display text-[2rem] font-extrabold
                         tracking-[-0.025em] text-white mb-12">
            The Outcomes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((r, i) => (
            <FadeIn key={r.label} delay={i * 0.08}>
              <div
                className="bg-white/[0.04] border border-white/[0.08]
                           rounded-2xl p-7
                           transition-all duration-300
                           hover:bg-white/[0.07] hover:border-white/[0.14]"
              >
                <span className="text-[1.5rem] block mb-3">{r.icon}</span>
                <p className="font-display text-[2.2rem] font-extrabold
                               grad-text mb-1.5 leading-none">
                  {r.val}
                </p>
                <p className="text-[0.85rem] text-white/50 leading-[1.55]">
                  {r.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}