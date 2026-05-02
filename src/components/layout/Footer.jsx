import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// ── Data ──────────────────────────────────────────────────────────────────────

const footerLinks = {
  Services: [
    { label: 'AI Integration',      to: '/services' },
    { label: 'Data Analytics',      to: '/services' },
    { label: 'Cloud Infrastructure',to: '/services' },
    { label: 'Automation',          to: '/services' },
    { label: 'Security',            to: '/services' },
  ],
  Company: [
    { label: 'About',     to: '/about'     },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers',   to: null         },
    { label: 'Blog',      to: null         },
  ],
  Contact: [
    { label: 'Get in Touch',       to: '/contact' },
    { label: 'reach@algoremi.com', to: null, isEmail: true },
    { label: '+92 336 0044220',    to: null, isPhone: true },
  ],
}

// Social icons as inline SVG so there's zero external dependency
const socials = [
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

// ── Social button ─────────────────────────────────────────────────────────────
function SocialBtn({ href, label, icon }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center
                 bg-white/5 border border-white/8 text-white/40 cursor-pointer
                 transition-colors duration-200
                 hover:bg-accent/15 hover:border-accent/30 hover:text-white
                 no-underline"
    >
      {icon}
    </motion.a>
  )
}

// ── Footer link ───────────────────────────────────────────────────────────────
function FooterLink({ label, to, isEmail, isPhone }) {
  const base =
    'text-[0.85rem] text-white/45 no-underline transition-colors duration-200 hover:text-white w-fit'

  if (to) {
    return (
      <Link to={to} className={base}>
        {label}
      </Link>
    )
  }
  if (isEmail) {
    return (
      <a href={`mailto:${label}`} className={base}>
        {label}
      </a>
    )
  }
  if (isPhone) {
    return (
      <a href={`tel:${label.replace(/\s/g, '')}`} className={base}>
        {label}
      </a>
    )
  }
  // Coming-soon links (Careers, Blog)
  return (
    <span className={`${base} cursor-default opacity-50`}>{label}</span>
  )
}

// ── Main Footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-ink2 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-[5%]">

        {/* ── Top grid ── */}
        <div
          className="grid gap-10 py-14
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-[1.5fr_1fr_1fr_1fr]
                     border-b border-white/[0.07]"
        >

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="font-display text-[1.3rem] font-extrabold tracking-tight
                         text-white bg-transparent border-none cursor-pointer
                         text-left w-fit p-0"
            >
              Algo<span className="grad-text">remi</span>
            </button>

            <p className="text-[0.82rem] text-white/40 leading-[1.65] max-w-[220px]">
              Intelligent systems for modern businesses. Built to scale, designed to last.
            </p>

            {/* Social buttons */}
            <div className="flex gap-3 mt-1">
              {socials.map((s) => (
                <SocialBtn key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h5
                className="text-[0.78rem] font-bold tracking-[0.08em] uppercase
                           text-white/35"
              >
                {heading}
              </h5>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between
                        gap-4 py-7">
          <p className="text-[0.78rem] text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Algoremi. All rights reserved.
          </p>

          {/* Mini legal links */}
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <span
                key={item}
                className="text-[0.75rem] text-white/25 cursor-pointer
                           hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}