import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((p, i) => {
          const spanClass =
            i === 0 ? 'lg:col-span-2' :
            i === 3 ? 'lg:col-span-2' : ''

          return (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={spanClass}
            >
              <ProjectCard project={p} tall={i === 0 || i === 3} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
