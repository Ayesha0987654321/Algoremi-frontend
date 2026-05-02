import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'
import { useNavigate } from 'react-router-dom'

// 4 cards in 2x2 grid — each mirrors the right side message
const blocks = [
  {
    icon: '🧠',
    label: 'AI-Native Architecture',
    desc: 'Built into the foundation, not bolted on afterward.',
    accent: true,
  },
  {
    icon: '⚡',
    label: 'Zero-Downtime Scale',
    desc: 'From 0 to 10M requests — no degradation, no surprises.',
    accent: false,
  },
  {
    icon: '🔐',
    label: 'Security by Design',
    desc: 'SOC2-compliant infrastructure. Zero Trust, no exceptions.',
    accent: false,
  },
  {
    icon: '📊',
    label: 'Full Observability',
    desc: 'You see everything. No blind spots, no guessing when something breaks.',
    accent: false,
  },
]

const features = [
  'AI-native architecture from the ground up',
  'Sub-100ms latency SLA guaranteed',
  'Zero-downtime deployments, always',
  'Full observability into every system layer',
  'Dedicated engineering team, not ticket queues',
]

function SplitVisual() {
  const rows = [[blocks[0], blocks[1]], [blocks[2], blocks[3]]]

  return (
    <FadeIn className="flex flex-col gap-3 h-full justify-center">
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-3">
          {row.map((b, bi) => (
            <div
              key={bi}
              className={`
                flex flex-col gap-2 rounded-[10px] border p-5
                transition-shadow duration-300 hover:shadow-card cursor-default
                flex-1
                ${b.accent
                  ? 'border-accent/20 bg-accent/[0.04]'
                  : 'bg-card border-DEFAULT'}
              `}
            >
              <span className="text-[1.5rem] leading-none">{b.icon}</span>
              <span className="font-display text-[0.88rem] font-semibold text-ink">
                {b.label}
              </span>
              <span className="text-[0.78rem] text-muted leading-snug">
                {b.desc}
              </span>
            </div>
          ))}
        </div>
      ))}
    </FadeIn>
  )
}

export default function SplitSection() {
  const nav = useNavigate()

  return (
    <section className="bg-card py-[100px] px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left — 3 focused cards */}
        <SplitVisual />

        {/* Right — text (unchanged, it was already strong) */}
        <FadeIn delay={0.15} className="flex flex-col">
          <SectionTag>Why Algoremi</SectionTag>

          <h2
            className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold
                       tracking-[-0.03em] leading-[1.15] text-ink mb-5"
          >
            Infrastructure Built for Intelligent Scale
          </h2>

          <p className="text-[0.95rem] text-muted leading-[1.75] mb-4">
            Most companies bolt AI onto broken infrastructure. We design the
            foundation first — so intelligence amplifies performance instead of
            exposing weaknesses.
          </p>

          {/* Feature checklist */}
          <ul className="flex flex-col gap-2.5 my-6 list-none">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[0.875rem] text-ink2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center
                             flex-shrink-0 text-[0.7rem]
                             bg-accent-g/12 text-[#00956A]"
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => nav('/services')}
            className="inline-flex items-center gap-2 self-start px-7 py-3.5
                       rounded-xl bg-transparent border border-strong text-ink
                       text-sm font-semibold transition-all duration-200
                       hover:border-ink hover:bg-ink/[0.04]"
          >
            See Full Capabilities <span>→</span>
          </button>
        </FadeIn>

      </div>
    </section>
  )
}