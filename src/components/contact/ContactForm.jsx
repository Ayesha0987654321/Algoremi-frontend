import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const serviceOptions = [
  'AI Integration',
  'Data Architecture',
  'Cloud Infrastructure',
  'Workflow Automation',
  'Security & Compliance',
  'Not sure yet',
]

const validators = {
  firstName: (v) => v.trim().length < 2  ? 'First name is required'          : '',
  lastName:  (v) => v.trim().length < 2  ? 'Last name is required'           : '',
  email:     (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
                                         ? 'Enter a valid email'             : '',
  company:   (v) => v.trim().length < 2  ? 'Company name is required'        : '',
  service:   (v) => !v                   ? 'Please select a service'         : '',
  message:   (v) => v.trim().length < 20 ? 'Minimum 20 characters'           : '',
}

const INITIAL = {
  firstName: '', lastName: '', email: '',
  company: '', service: '', message: '',
}

// ── Shared input class ────────────────────────────────────────────────────────
function cls(error, touched) {
  const base = `
    w-full px-3 py-[9px] rounded-lg text-[13px] font-body text-ink
    bg-bg2 outline-none transition-all duration-150
    placeholder:text-bg3
  `
  if (touched && error)
    return base + ' border border-[#E24B4A]/60 shadow-[0_0_0_3px_rgba(226,75,74,0.08)]'
  return base + ' border border-DEFAULT focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,102,255,0.08)]'
}

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, error, touched, required, children }) {
  return (
    <div className="flex flex-col gap-[5px] mb-[14px]">
      <label className="text-[12px] font-medium text-muted tracking-[0.02em]">
        {label}
        {required && <span className="text-[#E24B4A] ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {touched && error && (
          <motion.p
            key="err"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{    opacity: 0, height: 0      }}
            transition={{ duration: 0.15 }}
            className="text-[11px] text-[#E24B4A] overflow-hidden"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({ onReset }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 px-7 flex flex-col items-center text-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 220, damping: 16 }}
        className="w-12 h-12 rounded-full bg-[#E1F5EE] flex items-center
                   justify-center text-[20px] text-[#0F6E56]"
      >
        ✓
      </motion.div>
      <div>
        <h3 className="text-[18px] font-medium text-ink mb-1.5">
          Message sent
        </h3>
        <p className="text-[13px] text-muted max-w-[260px] leading-[1.6] mx-auto">
          We'll get back to you within 24 hours. Check your inbox — and spam
          just in case.
        </p>
      </div>
      <button
        onClick={onReset}
        className="text-[12px] text-muted bg-transparent border-none
                   cursor-pointer underline underline-offset-2
                   hover:text-ink transition-colors duration-150"
      >
        Send another message →
      </button>
    </motion.div>
  )
}

// ── Spinner ───────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <span
      className="inline-block w-[14px] h-[14px] rounded-full border-2
                 border-white/30 border-t-white animate-spin"
    />
  )
}

// ── Main form ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [values,    setValues]    = useState(INITIAL)
  const [errors,    setErrors]    = useState({})
  const [touched,   setTouched]   = useState({})
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateField = (name, value) =>
    validators[name]?.(value) ?? ''

  const validateAll = () =>
    Object.fromEntries(
      Object.keys(validators).map((k) => [k, validateField(k, values[k])])
    )

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name])
      setErrors((er) => ({ ...er, [name]: validateField(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      Object.keys(INITIAL).map((k) => [k, true])
    )
    setTouched(allTouched)
    const allErrors = validateAll()
    setErrors(allErrors)
    if (Object.values(allErrors).some(Boolean)) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setValues(INITIAL)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  // Custom select chevron
  const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23637191' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`

  return (
    <div className="bg-card border border-DEFAULT rounded-xl overflow-hidden">

      {/* Thin top gradient line */}
      <div
        className="h-[2px] w-[60%] mx-auto"
        style={{ background: 'linear-gradient(90deg, #1D9E75, #378ADD)' }}
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <SuccessScreen key="success" onReset={handleReset} />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="p-7"
          >
            <p className="text-[15px] font-medium text-ink mb-5">
              Tell us what you're building
            </p>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="First name"
                error={errors.firstName}
                touched={touched.firstName}
                required
              >
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John"
                  className={cls(errors.firstName, touched.firstName)}
                />
              </Field>

              <Field
                label="Last name"
                error={errors.lastName}
                touched={touched.lastName}
                required
              >
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Smith"
                  className={cls(errors.lastName, touched.lastName)}
                />
              </Field>
            </div>

            {/* Email */}
            <Field
              label="Work email"
              error={errors.email}
              touched={touched.email}
              required
            >
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john@company.com"
                className={cls(errors.email, touched.email)}
              />
            </Field>

            {/* Company */}
            <Field
              label="Company"
              error={errors.company}
              touched={touched.company}
              required
            >
              <input
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Company Inc."
                className={cls(errors.company, touched.company)}
              />
            </Field>

            {/* Service */}
            <Field
              label="Service interest"
              error={errors.service}
              touched={touched.service}
              required
            >
              <select
                name="service"
                value={values.service}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  backgroundImage: chevron,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px',
                }}
                className={`${cls(errors.service, touched.service)}
                            cursor-pointer appearance-none`}
              >
                <option value="" disabled>Select a service…</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </Field>

            {/* Message */}
            <Field
              label="What are you trying to solve?"
              error={errors.message}
              touched={touched.message}
              required
            >
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="The more specific you are, the better we can respond…"
                rows={4}
                className={`${cls(errors.message, touched.message)}
                            resize-y min-h-[96px] leading-[1.5]`}
              />
            </Field>

            {/* Char counter */}
            <p className="text-[11px] text-muted text-right -mt-3 mb-3">
              {values.message.trim().length} / 20 min
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-[11px] rounded-lg bg-ink text-white
                         text-[13px] font-medium flex items-center
                         justify-center gap-1.5
                         transition-all duration-150
                         hover:opacity-85 hover:-translate-y-px
                         active:scale-[0.99]
                         disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:translate-y-0"
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{    opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <Spinner /> Sending…
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{    opacity: 0 }}
                  >
                    Send message →
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <p className="text-[11px] text-muted text-center mt-3">
              No spam. Your information stays with us.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}