
import { useNavigate } from 'react-router-dom'
import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

export default function CtaSection({
  heading       = 'Ready to Move at a Different Speed?',
  body          = "Whether you're scaling infrastructure, launching AI, or rebuilding from scratch — let's scope it in a single call. No commitment, no pitch deck.",
  ctaLabel      = 'Book a Strategy Call',
  ctaTo         = '/contact',
  single        = false,
  secondaryLabel= 'See Case Studies',
  secondaryTo   = '/portfolio',
}) {
  const nav = useNavigate()

  return (
    <section className="relative py-[100px] px-[5%] bg-bg overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2
                   -translate-x-1/2 w-[600px] h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,102,255,0.06) 0%, transparent 65%)',
        }}
      />

      <FadeIn className="relative z-10 max-w-[720px] mx-auto">
        <div className="relative bg-card border border-strong rounded-[24px]
                        px-8 sm:px-12 py-16 overflow-hidden shadow-lg text-center">
          <span
            className="absolute top-0 left-[15%] right-[15%] h-[2px]"
            style={{ background: 'var(--grad)' }}
          />

          <div className="flex justify-center mb-2">
            <SectionTag>Let's Build</SectionTag>
          </div>

          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold
                         tracking-[-0.03em] text-ink mb-4">
            {heading}
          </h2>

          <p className="text-[1rem] text-muted leading-[1.65]
                        max-w-[480px] mx-auto mb-9">
            {body}
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => nav(ctaTo)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-ink text-white text-sm font-semibold
                         transition-all duration-200 hover:-translate-y-0.5
                         hover:shadow-[0_12px_32px_rgba(11,15,26,0.2)]"
            >
              {ctaLabel} <span>→</span>
            </button>

            {!single && (
              <button
                onClick={() => nav(secondaryTo)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                           bg-transparent border border-strong text-ink
                           text-sm font-semibold transition-all duration-200
                           hover:border-ink hover:bg-ink/[0.04]"
              >
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}