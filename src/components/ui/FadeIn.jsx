import { motion } from 'framer-motion'


const OFFSETS = {
  up:    (d) => ({ y:  d }),
  down:  (d) => ({ y: -d }),
  left:  (d) => ({ x:  d }),
  right: (d) => ({ x: -d }),
  none:  ()  => ({}),
}

export default function FadeIn({
  children,
  delay     = 0,
  duration  = 0.6,
  direction = 'up',
  distance  = 24,
  scale     = false,
  once      = true,
  amount    = 0.08,
  className = '',
}) {
  const offset = OFFSETS[direction]?.(distance) ?? {}

  const initial = {
    opacity: 0,
    ...offset,
    ...(scale ? { scale: 0.97 } : {}),
  }

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    ...(scale ? { scale: 1 } : {}),
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}