import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to: string) => {
    if (to.includes('#')) {
      return location.pathname === '/' && location.hash === `#${to.split('#')[1]}`
    }
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-ink/[0.06] bg-white/90 shadow-[0_1px_24px_rgba(23,43,37,0.06)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-4 sm:h-[84px]">
        <Link to="/" aria-label="Cresco Innovation Limited — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const active = isActive(link.to)
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-200 ${
                  active ? 'text-brand-deep' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-brand-green transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contact" size="sm" icon={<ArrowRight size={15} />}>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink transition hover:border-brand-green/40 hover:text-brand-deep lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[calc(100vh-74px)] overflow-y-auto border-t border-ink/[0.06] bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex flex-col gap-1 py-5">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition ${
                      isActive(link.to)
                        ? 'bg-brand-soft text-brand-deep'
                        : 'text-ink/80 hover:bg-canvas'
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-muted/60" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-ink/[0.06] pt-4">
                <Button to="/contact" className="w-full" icon={<ArrowRight size={16} />}>
                  Get a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
