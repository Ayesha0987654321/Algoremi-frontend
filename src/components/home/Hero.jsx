import { useNavigate } from 'react-router-dom'
import { motion }      from 'framer-motion'
import HeroDashboardCard from './HeroDashboardCard'
import FadeIn            from '../ui/FadeIn'
import SectionTag        from '../ui/SectionTag'

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

// ── Stat item ─────────────────────────────────────────────────────────────────
function Stat({ num, label, delay }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-1">
      <span
        className="font-display text-[1.9rem] font-extrabold leading-none grad-text"
      >
        {num}
      </span>
      <span className="text-[0.78rem] text-muted mt-1">{label}</span>
    </motion.div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const nav = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center pt-[120px] pb-20 px-[5%] overflow-hidden bg-bg">

      {/* ── Background radial glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 65% 35%, rgba(0,196,140,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 55% 50% at 20% 70%, rgba(0,102,255,0.09) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(11,15,26,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,15,26,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        }}
      />

      {/* ── Inner grid ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 xl:gap-20">

        {/* ── LEFT — copy ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                         border border-accent/25 bg-accent/6 text-accent
                         text-[0.75rem] font-semibold mb-7 w-fit"
            >
              <span className="text-[0.55rem]">◉</span>
              Software Engineering · AI · DevOps
            </div>
          </motion.div>

          {/* Headline */}
         <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold
                       leading-[1.08] tracking-[-0.035em] text-ink mb-6"
          >
            We Don't Build Software.<br />
            <em className="not-italic grad-text">We Build Leverage.</em><br />
          </motion.h1>
          
                    

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-[1.05rem] text-muted leading-[1.72] max-w-[420px] mb-9"
          >
           Algoremi engineers intelligent systems that cut costs, accelerate decisions, and scale without breaking.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <button
              onClick={() => nav('/services')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                         bg-ink text-white text-sm font-semibold
                         transition-all duration-200 hover:-translate-y-0.5
                         hover:shadow-[0_12px_32px_rgba(11,15,26,0.2)]"
            >
              Explore Services <span>→</span>
            </button>
            <button
              onClick={() => nav('/portfolio')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                         bg-transparent border border-strong text-ink text-sm font-semibold
                         transition-all duration-200 hover:border-ink hover:bg-ink/[0.04]"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-8 mt-12 pt-9 border-t border-strong"
          >
            <Stat num="50+" label="Projects Shipped"   />
            <Stat num="98%"  label="Client Retention"   />
            <Stat num="10+" label="Team Members" />
          </motion.div>
        </motion.div>

        {/* ── RIGHT — visual ── */}
        <FadeIn delay={0.25} className="relative flex justify-center items-center">
          <HeroDashboardCard />
        </FadeIn>

      </div>
    </section>
  )
}