import ProjectCard from './ProjectCard'
import FadeIn      from '../ui/FadeIn'



export default function ProjectGrid({ projects }) {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        lg:grid-rows-2
      "
    >
      {projects.map((p, i) => {
        // Desktop span rules matching original asymmetric layout
        const spanClass =
          i === 0 ? 'lg:col-span-2' :
          i === 3 ? 'lg:col-span-2' : ''

        return (
          <FadeIn key={p.id} delay={i * 0.07} className={spanClass}>
            <ProjectCard project={p} tall={i === 0 || i === 3} />
          </FadeIn>
        )
      })}
    </div>
  )
}