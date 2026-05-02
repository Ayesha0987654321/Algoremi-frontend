import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'
import { useNavigate } from 'react-router-dom'

export default function StatementSection() {
  const nav = useNavigate()

  return (
    <section className="relative bg-ink py-[100px] px-[5%] overflow-hidden">

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2
                   w-[800px] h-[400px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,196,140,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <FadeIn className="flex justify-center mb-5">
          <SectionTag light>Our Belief</SectionTag>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold
                       tracking-[-0.04em] leading-[1.1] text-white mb-8"
          >
            Most companies are running on{' '}
            <em className="not-italic grad-text">
              infrastructure<br />built for yesterday.
            </em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[1.1rem] text-white/55 leading-[1.7] max-w-[580px] mx-auto mb-10">
            The gap between where you are and where you need to be isn't a people
            problem. It's an architecture problem. We solve it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => nav('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-accent text-white text-sm font-semibold
                       transition-all duration-200 hover:-translate-y-0.5
                       hover:shadow-[0_12px_32px_rgba(0,102,255,0.35)]"
          >
            Start a Conversation
          </button>
          <button
            onClick={() => nav('/about')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       text-white text-sm font-semibold
                       border border-white/15 bg-white/8
                       transition-all duration-200 hover:bg-white/14"
          >
            About Algoremi
          </button>
        </FadeIn>
      </div>
    </section>
  )
}