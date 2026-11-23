import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import ScrollManager from './components/layout/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/Services'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function NotFound() {
  return (
    <section className="bg-canvas px-5 pb-24 pt-40 text-center sm:pt-48">
      <span className="eyebrow justify-center">404</span>
      <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
        This page could not be found.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-[14.5px] text-muted">
        The link may be outdated or mistyped. Let’s get you back to something useful.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
      >
        Back to home
      </Link>
    </section>
  )
}

export default function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-deep focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          id="main-content"
          className="flex-1"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </div>
  )
}
