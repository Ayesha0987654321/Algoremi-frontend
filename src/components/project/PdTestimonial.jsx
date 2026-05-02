import FadeIn from '../ui/FadeIn'

export default function PdTestimonial({ project: p }) {
  return (
    <section className="py-20 px-[5%] bg-bg">
      <FadeIn className="max-w-[900px] mx-auto text-center">

        {/* Quote mark */}
        <span
          className="block text-[3rem] leading-none mb-6
                     font-display font-bold text-accent opacity-20"
        >
          "
        </span>

        {/* Quote */}
        <blockquote
          className="font-display text-[clamp(1.1rem,2.2vw,1.35rem)]
                     leading-[1.65] text-ink2 italic font-medium mb-10"
        >
          {p.quote}
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 justify-center">
          {/* Avatar circle */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center
                       text-xl border-2 border-card shadow-card"
            style={{ background: 'var(--grad)' }}
          >
            👤
          </div>

          <div className="text-left">
            <p className="text-[0.9rem] font-bold text-ink">{p.quoteName}</p>
            <p className="text-[0.78rem] text-muted">{p.quoteRole}</p>
          </div>
        </div>

      </FadeIn>
    </section>
  )
}