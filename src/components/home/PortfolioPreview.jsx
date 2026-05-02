import { useNavigate } from 'react-router-dom'
import FadeIn           from '../ui/FadeIn'
import SectionTag       from '../ui/SectionTag'

const projects = [
  {
    id:      'fincore',
    emoji:   '🏗️',
    title:   'FinCore AI Platform',
    cat:     'Fintech · AI Integration · Cloud',
    color:   'rgba(0,102,255,0.18)',
    featured: true,
  },
  {
    id:    'greenops',
    emoji: '🌿',
    title: 'GreenOps Dashboard',
    cat:   'SaaS · Analytics',
    color: 'rgba(0,196,140,0.18)',
  },
  {
    id:    'launchkit',
    emoji: '🚀',
    title: 'LaunchKit Automation',
    cat:   'B2B · Automation',
    color: 'rgba(255,59,48,0.18)',
  },
]

function ProjectCard({ project, className = '' }) {
  const nav = useNavigate()

  return (
    <div
      onClick={() => nav(`/portfolio/${project.id}`)}
      className={`
        group relative rounded-2xl border border-DEFAULT bg-bg
        overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
        ${className}
      `}
    >
      {/* Image area */}
      <div
        className={`relative flex items-center justify-center text-5xl
                    ${project.featured ? 'h-[280px]' : 'h-[140px]'}`}
      >
        {/* Colour blob */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${project.color} 0%, transparent 70%)`,
          }}
        />
        <span className="relative z-10">{project.emoji}</span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-accent/[0.06] opacity-0 group-hover:opacity-100
                     transition-opacity duration-300
                     text-[0.82rem] font-bold text-accent tracking-[0.08em]"
        >
          VIEW PROJECT →
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between px-6 py-5 bg-card">
        <div>
          <h3 className="font-display text-[1rem] font-bold text-ink mb-1">
            {project.title}
          </h3>
          <p className="text-[0.75rem] text-muted">{project.cat}</p>
        </div>
        <span
          className="text-muted text-[1rem] transition-all duration-200
                     group-hover:text-accent group-hover:translate-x-0.5
                     group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </div>
    </div>
  )
}

export default function PortfolioPreview() {
  const nav = useNavigate()

  return (
    <section className="py-[100px] px-[5%] bg-card">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-14">
          <div>
            <SectionTag>Portfolio</SectionTag>
            <h2
              className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold
                         tracking-[-0.03em] text-ink"
            >
              Work That Speaks
            </h2>
          </div>
          <button
            onClick={() => nav('/portfolio')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       bg-transparent border border-strong text-ink
                       text-sm font-semibold flex-shrink-0
                       transition-all duration-200 hover:border-ink hover:bg-ink/[0.04]"
          >
            View All Projects
          </button>
        </FadeIn>

        {/* Grid: featured spans 2 rows on the left, two small on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4">

          {/* Featured */}
          <FadeIn>
            <ProjectCard project={projects[0]} className="lg:row-span-2 h-full" />
          </FadeIn>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {projects.slice(1).map((p, i) => (
              <FadeIn key={p.id} delay={0.1 * (i + 1)}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}