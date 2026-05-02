import { useParams, useNavigate } from 'react-router-dom'
import { getProject }             from '../data/projectData'
import PdHero        from '../components/project/PdHero'
import PdStatsBar    from '../components/project/PdStatsBar'
import PdOverview    from '../components/project/PdOverview'
import PdChallenges  from '../components/project/PdChallenges'
import PdProcess     from '../components/project/PdProcess'
import PdResults     from '../components/project/PdResults'
import PdTestimonial from '../components/project/PdTestimonial'
import PdNextProject from '../components/project/PdNextProject'

export default function ProjectDetailPage() {
  const { id }  = useParams()
  const nav     = useNavigate()
  const project = getProject(id)

  // Unknown id — bounce back
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-bg">
        <p className="font-display text-2xl font-bold text-ink">Project not found.</p>
        <button
          onClick={() => nav('/portfolio')}
          className="px-6 py-3 rounded-xl bg-ink text-white text-sm font-semibold
                     hover:opacity-85 transition-opacity"
        >
          ← Back to Portfolio
        </button>
      </div>
    )
  }

  return (
    <main className="bg-bg">
      <PdHero        project={project} />
      <PdStatsBar    stats={project.stats} />
      <PdOverview    project={project} />
      <PdChallenges  challenges={project.challenges} />
      <PdProcess     steps={project.steps} />
      <PdResults     results={project.results} />
      <PdTestimonial project={project} />
      <PdNextProject project={project} />

      {/* Bottom action row */}
      <div className="px-[5%] py-12 bg-bg flex flex-wrap items-center
                      justify-center gap-3">
        <button
          onClick={() => nav('/portfolio')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                     bg-transparent border border-strong text-ink text-sm font-semibold
                     transition-all duration-200 hover:border-ink hover:bg-ink/[0.04]"
        >
          ← All Projects
        </button>
        <button
          onClick={() => nav('/contact')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                     bg-accent text-white text-sm font-semibold
                     transition-all duration-200 hover:-translate-y-0.5
                     hover:shadow-[0_12px_32px_rgba(0,102,255,0.3)]"
        >
          Start a Similar Project →
        </button>
      </div>
    </main>
  )
}