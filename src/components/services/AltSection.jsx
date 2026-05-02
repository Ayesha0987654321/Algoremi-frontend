import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// Visual panel — different emoji backgrounds
function Visual({ emoji, dark }) {
  return (
    <div
      className={`
        relative h-[360px] rounded-[20px] flex items-center justify-center
        text-[4.5rem] overflow-hidden border border-DEFAULT shadow-card
        ${dark ? 'bg-ink2' : 'bg-bg'}
      `}
    >
      {/* Radial accent glow behind emoji */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,102,255,0.07) 0%, transparent 70%)',
        }}
      />
      <span className="relative z-10 select-none">{emoji}</span>
    </div>
  )
}

export default function AltSection({
  tag,
  title,
  body,
  emoji,
  reverse = false,
  dark = false,
}) {
  return (
    <section className={`py-[80px] px-[5%] ${dark ? 'bg-bg' : 'bg-card'}`}>
      <div
        className={`
          max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2
          gap-20 items-center
          ${reverse ? 'lg:[direction:rtl]' : ''}
        `}
      >
        {/* Visual */}
        <FadeIn className={reverse ? '[direction:ltr]' : ''}>
          <Visual emoji={emoji} dark={dark} />
        </FadeIn>

        {/* Text */}
        <FadeIn
          delay={0.15}
          className={`flex flex-col ${reverse ? '[direction:ltr]' : ''}`}
        >
          <SectionTag>{tag}</SectionTag>
          <h3
            className="font-display text-[clamp(1.6rem,2.8vw,2rem)] font-extrabold
                       tracking-[-0.025em] leading-[1.2] text-ink mb-5"
          >
            {title}
          </h3>
          <p className="text-[0.9rem] text-muted leading-[1.78]">{body}</p>
        </FadeIn>
      </div>
    </section>
  )
}