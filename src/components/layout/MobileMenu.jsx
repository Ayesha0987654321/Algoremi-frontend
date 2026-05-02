import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ isOpen, onClose, navLinks, activePath }) {
  const isActive = (to) =>
    to === '/' ? activePath === '/' : activePath.startsWith(to)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-ink/20 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[72px] inset-x-0 z-[999] bg-card
                       border-b border-strong shadow-lg lg:hidden
                       max-h-[calc(100dvh-72px)] overflow-y-auto"
          >
            <div className="px-[5%] py-5 flex flex-col gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={onClose}
                  className={`py-3 border-b border-DEFAULT text-base font-medium
                              no-underline block transition-colors duration-150
                              ${isActive(link.to) ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                onClick={onClose}
                className="mt-4 flex items-center justify-center gap-2
                           px-5 py-3.5 rounded-xl bg-ink text-white
                           text-sm font-semibold no-underline
                           hover:opacity-90 transition-opacity"
              >
                Get Started →
              </Link>

              <p className="text-center text-xs text-muted mt-3 pb-2">
                reach@algoremi.com · +92 336 0044220
              </p>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}