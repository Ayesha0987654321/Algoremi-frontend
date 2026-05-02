import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Home',      to: '/'          },
  { label: 'Services',  to: '/services'  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About',     to: '/about'     },
  { label: 'Contact',   to: '/contact'   },
]

export default function Navbar() {
  const { pathname }               = useLocation()
  const [scrolled,   setScrolled]  = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[1000] h-[72px] flex items-center
                    justify-between px-[5%] transition-all duration-300
                    ${scrolled
                      ? 'bg-[rgba(245,247,252,0.92)] backdrop-blur-xl border-b border-DEFAULT shadow-card'
                      : 'bg-[rgba(245,247,252,0.80)] backdrop-blur-xl border-b border-transparent'
                    }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-[1.4rem] font-extrabold tracking-tight
                     text-ink no-underline select-none"
        >
          Algo<span className="grad-text">remi</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              <Link
                to={link.to}
                className={`text-sm font-medium tracking-wide no-underline
                            transition-colors duration-200
                            ${isActive(link.to) ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {link.label}
              </Link>

              {/* Active dot indicator */}
              {isActive(link.to) && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2
                             w-1 h-1 rounded-full bg-accent"
                />
              )}
            </li>
          ))}

          {/* CTA */}
          <li>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-ink text-white text-sm font-semibold
                         no-underline transition-all duration-200
                         hover:opacity-85 hover:-translate-y-px"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="lg:hidden flex flex-col justify-center gap-[5px]
                     w-9 h-9 bg-transparent border-none cursor-pointer p-1"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-[22px] h-[2px] bg-ink rounded-sm origin-center"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-[22px] h-[2px] bg-ink rounded-sm"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-[22px] h-[2px] bg-ink rounded-sm origin-center"
          />
        </button>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        activePath={pathname}
      />
    </>
  )
}