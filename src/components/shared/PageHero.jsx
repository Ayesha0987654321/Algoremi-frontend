import { motion } from 'framer-motion'
import SectionTag from '../ui/SectionTag'

export default function PageHero({ tag, title, subtitle }) {
  return (
    <section
      className="relative min-h-[50vh] flex items-center
                 pt-[140px] pb-20 px-[5%]
                 bg-card border-b border-DEFAULT overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionTag>{tag}</SectionTag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold
                     tracking-[-0.03em] leading-[1.1] text-ink
                     mb-5 max-w-[600px]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[1rem] text-muted max-w-[480px] leading-[1.72]"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}