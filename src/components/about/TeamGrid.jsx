import FadeIn     from '../ui/FadeIn'
import SectionTag from '../ui/SectionTag'

// Exact team data from original Algoremi HTML
const team = [
  {
    name:    'Ahmad Founder',
    role:    'Founder & CEO',
    bio:     'Visionary engineer behind Algoremi. Built the company on the belief that great infrastructure is the difference between a good idea and a great company.',
    emoji:   '👤',
    big:     true,
    gradient:'linear-gradient(135deg, #00C48C 0%, #0066FF 100%)',
  },
  {
    name:    'Lead Engineer',
    role:    'CTO',
    bio:    "Distributed systems expert. Builds infra that doesn't wake you up at 3am.",
    emoji:   '👤',
    big:     false,
    gradient:'linear-gradient(135deg, #0066FF 0%, #8B5CF6 100%)',
  },
  {
    name:    'AI Specialist',
    role:    'Head of AI',
    bio:     'Turns AI research into production. Ships models that actually work in the real world.',
    emoji:   '👤',
    big:     false,
    gradient:'linear-gradient(135deg, #00C48C 0%, #0066FF 100%)',
  },
]

function TeamCard({ member, delay }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div
        className="group flex flex-col rounded-2xl bg-bg border border-DEFAULT
                   overflow-hidden h-full
                   transition-all duration-300
                   hover:-translate-y-1 hover:shadow-lg hover:border-strong"
      >
        {/* Avatar area */}
        <div
          className={`relative flex items-center justify-center overflow-hidden
                      ${member.big ? 'h-[280px]' : 'h-[200px]'}`}
          style={{ background: member.gradient }}
        >
          {/* Subtle grid overlay on avatar */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Emoji avatar */}
          <span
            className={`relative z-10 select-none
                        ${member.big ? 'text-[4rem]' : 'text-[3rem]'}`}
          >
            {member.emoji}
          </span>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16"
            style={{
              background: 'linear-gradient(to top, var(--bg), transparent)',
            }}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 p-6 flex-1">
          <h4 className="font-display text-[1rem] font-bold text-ink">
            {member.name}
          </h4>
          <p className="text-[0.78rem] font-semibold text-accent">
            {member.role}
          </p>
          <p className="text-[0.8rem] text-muted leading-[1.6] mt-1">
            {member.bio}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function TeamGrid() {
  return (
    <section className="py-[100px] px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <FadeIn className="mb-12">
          <SectionTag>The Team</SectionTag>
          <h2
            className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold
                       tracking-[-0.03em] text-ink"
          >
            People Behind the Work
          </h2>
        </FadeIn>

        {/* Grid — big card left, two smaller cards right */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]
                     gap-4 items-start"
        >
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  )
}