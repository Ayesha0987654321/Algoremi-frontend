import PageHero       from '../components/shared/PageHero'
import FeaturedProject from '../components/portfolio/FeaturedProject'
import ProjectGrid    from '../components/portfolio/ProjectGrid'
import CtaSection     from '../components/home/CtaSection'
import { projects }   from '../data/projectData'

export default function PortfolioPage() {
  const featured = projects.find((p) => p.featured)
  const rest     = projects.filter((p) => !p.featured)

  return (
    <main>
      <PageHero
        tag="Our Work"
        title="Projects That Changed How Companies Operate"
        subtitle="Each project is a case study in solving a real business problem — not
                  showcasing technology for its own sake."
      />

      <section className="px-[5%] pt-16 pb-24 bg-bg">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-5">
          <FeaturedProject project={featured} />
          <ProjectGrid    projects={rest}     />
        </div>
      </section>

      <CtaSection
        heading="See a Problem You Recognise?"
        body="Every project started with a single conversation. Let's have yours — no
              commitment, no pitch deck, just an honest scoping call."
        ctaLabel="Start a Conversation"
        ctaTo="/contact"
        single
      />
    </main>
  )
}