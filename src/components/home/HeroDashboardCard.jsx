import { motion } from 'framer-motion'

// ── Bar chart data ────────────────────────────────────────────────────────────
const bars = [
  { h: 45, delay: 0.1 }, { h: 72, delay: 0.2 }, { h: 55, delay: 0.3 },
  { h: 88, delay: 0.4 }, { h: 63, delay: 0.5 }, { h: 78, delay: 0.6 },
  { h: 92, delay: 0.7 },
]

const metrics = [
  { label: 'Conversion Rate',  val: '+24.8%' },
  { label: 'Avg. Response Time', val: '0.3s'  },
  { label: 'System Uptime',    val: '99.97%' },
]

// ── Floating badge ────────────────────────────────────────────────────────────
function FloatCard({ className, animY, duration, children }) {
  return (
    <motion.div
      animate={{ y: [0, animY, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute bg-card border border-strong rounded-xl
                  px-4 py-3 shadow-lg text-[0.78rem] whitespace-nowrap z-20
                  ${className}`}
    >
      {children}
    </motion.div>
  )
}

// ── Main dashboard card ───────────────────────────────────────────────────────
export default function HeroDashboardCard() {
  return (
    <div className="relative w-full max-w-[440px]">

      {/* Floating card — top right */}
      <FloatCard
        className="-top-5 -right-6 lg:-right-7"
        animY={-8}
        duration={4}
      >
        <p className="text-[0.7rem] text-muted mb-1">Monthly Revenue</p>
        <p className="font-display font-bold text-ink text-[1rem]">$2.4M</p>
        <span
          className="inline-block mt-1 px-2 py-0.5 rounded-full text-[0.68rem]
                     font-semibold bg-accent-g/10 text-[#00956A]"
        >
          ↑ 18% vs last month
        </span>
      </FloatCard>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0,  scale: 1    }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-card border border-strong rounded-[20px] p-8 shadow-lg overflow-hidden"
      >
        {/* Top gradient line */}
        <span
          className="absolute top-0 left-[20%] right-[20%] h-[2px] rounded-full"
          style={{ background: 'var(--grad)' }}
        />

        {/* Card header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-[10px] flex items-center justify-center text-base"
            style={{ background: 'var(--grad)' }}
          >
            📈
          </div>
          <div>
            <p className="font-display text-[0.95rem] font-bold text-ink leading-tight">
              Performance Dashboard
            </p>
            <p className="text-[0.74rem] text-muted">Q4 2024 · Real-time</p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-[6px] h-20 mb-5">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-[4px] relative overflow-hidden"
              style={{ height: `${bar.h}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.6,
                delay: bar.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              // transform origin at bottom
              style={{ height: `${bar.h}%`, transformOrigin: 'bottom' }}
            >
              {/* Base fill */}
              <div className="absolute inset-0 bg-bg2 rounded-t-[4px]" />
              {/* Gradient fill — fades in after bar grows */}
              <motion.div
                className="absolute inset-0 rounded-t-[4px]"
                style={{ background: 'var(--grad)', opacity: 0.85 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 0.4, delay: bar.delay + 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Metrics list */}
        <div className="flex flex-col divide-y divide-[rgba(11,15,26,0.07)]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between py-3 text-[0.82rem]"
            >
              <span className="text-muted">{m.label}</span>
              <span className="font-bold text-accent">{m.val}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating card — bottom left */}
      <FloatCard
        className="-bottom-4 -left-7 lg:-left-8"
        animY={6}
        duration={5}
      >
        <p className="text-[0.7rem] text-muted mb-1">AI Model Status</p>
        <p className="font-display font-bold text-ink text-[1rem]">Active</p>
        <span
          className="inline-block mt-1 px-2 py-0.5 rounded-full text-[0.68rem]
                     font-semibold bg-accent/10 text-accent"
        >
          ● 3 pipelines running
        </span>
      </FloatCard>

    </div>
  )
}