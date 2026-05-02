import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import ContactSidebar from '../components/contact/ContactSidebar'

export default function ContactPage() {
  return (
    <main className="bg-bg min-h-screen pt-[72px]">
      <div className="max-w-[860px] mx-auto px-6 py-10">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 max-w-[520px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase
                             text-muted">
              Get in touch
            </span>
          </div>

          <h1 className="font-display text-[28px] font-medium leading-[1.3]
                         text-ink mb-2.5">
            Let's talk about your project
          </h1>
          <p className="text-[14px] text-muted leading-[1.65]">
            No sales pitch. No account managers. You'll hear from an engineer
            within 24 hours — guaranteed.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8
                        items-start">
          {/* Form — left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar — right (moves above form on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-first md:order-last"
          >
            <ContactSidebar />
          </motion.div>
        </div>

      </div>
    </main>
  )
}