import { useState }      from 'react'
import { motion }        from 'framer-motion'
import PageHero          from '../components/shared/PageHero'
import FeaturedProject   from '../components/portfolio/FeaturedProject'
import ProjectGrid       from '../components/portfolio/ProjectGrid'
import CtaSection        from '../components/home/CtaSection'
import { projects, allServices } from '../data/ProjectData'

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const featured = projects.find((p) => p.featured)
  const rest     = projects.filter((p) => !p.featured)

  const filtered =
    active === 'All'
      ? rest
      : rest.filter((p) => p.services.includes(active))

  // Show featured only when All or when it matches the filter
  const showFeatured =
    active === 'All' || (featured && featured.services.includes(active))

  return (
    <main>
      <PageHero
        tag="Our Work"
        title="Projects That Changed How Companies Operate"
        subtitle="Each project is a case study in solving a real business problem — not
                  showcasing technology for its own sake."
      />

      {/* Service filter row */}
      <div className="sticky top-0 z-20 bg-bg/90 backdrop-blur-md
                      border-b border-DEFAULT">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {allServices.map((svc) => (
              <button
                key={svc}
                onClick={() => setActive(svc)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[0.8rem]
                            font-semibold transition-all duration-200 border
                            ${active === svc
                              ? 'bg-ink text-white border-ink'
                              : 'bg-transparent text-muted border-DEFAULT hover:border-ink hover:text-ink'
                            }`}
              >
                {svc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="px-[5%] pt-10 pb-24 bg-bg">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-5">

          {/* Featured — only visible when relevant */}
          {showFeatured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <FeaturedProject project={featured} />
            </motion.div>
          )}

          {/* Rest of projects — filtered */}
          {filtered.length > 0 ? (
            <ProjectGrid projects={filtered} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-muted text-lg">No projects in this category yet.</p>
            </motion.div>
          )}
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
