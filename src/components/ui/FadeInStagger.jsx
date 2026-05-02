import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: (stagger = 0.08) => ({
    transition: { staggerChildren: stagger },
  }),
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/**
 * FadeInStagger — wraps a list and staggers each direct child
 *
 * Props:
 *   stagger   {number}  — delay between children in seconds  (default 0.08)
 *   once      {boolean} — animate only once                  (default true)
 *   amount    {number}  — viewport threshold                 (default 0.08)
 *   className {string}
 */
export function FadeInStagger({
  children,
  stagger   = 0.08,
  once      = true,
  amount    = 0.08,
  className = '',
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeInItem — child of FadeInStagger
 * Inherits animation from parent — no props needed.
 */
export function FadeInItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}