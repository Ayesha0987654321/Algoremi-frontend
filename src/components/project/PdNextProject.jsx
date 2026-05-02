import { useNavigate }  from 'react-router-dom'
import { getProject }   from '../../data/ProjectData'
import { motion }       from 'framer-motion'

export default function PdNextProject({ project: p }) {
  const nav  = useNavigate()
  const next = getProject(p.nextProject)
  if (!next) return null

  return (
    <section className="py-0 px-[5%] bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-t border-DEFAULT pt-12 pb-16">
          <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase
                        text-muted mb-6">
            Next Project
          </p>

          <motion.div
            onClick={() => nav(`/portfolio/${next.id}`)}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group flex items-center justify-between gap-6 cursor-pointer"
          >
            <div className="flex items-center gap-5">
              {/* Emoji blob */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center
                           text-2xl flex-shrink-0 border border-DEFAULT"
                style={{
                  background: `radial-gradient(ellipse at center, ${next.color} 0%, transparent 80%)`,
                }}
              >
                {next.emoji}
              </div>

              <div>
                <h3 className="font-display text-[1.5rem] sm:text-[2rem] font-extrabold
                               tracking-[-0.025em] text-ink group-hover:text-accent
                               transition-colors duration-200">
                  {next.title}
                </h3>
                <p className="text-[0.85rem] text-muted mt-0.5">{next.tagline}</p>
              </div>
            </div>

            <span className="text-[2rem] text-muted group-hover:text-accent
                             transition-all duration-200
                             group-hover:translate-x-1 group-hover:-translate-y-1
                             flex-shrink-0">
              ↗
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
