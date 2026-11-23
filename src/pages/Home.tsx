import Hero from '../components/sections/Hero'
import TrustHighlights from '../components/sections/TrustHighlights'
import CompanyOverview from '../components/sections/CompanyOverview'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import Projects from '../components/sections/Projects'
import CEOMessage from '../components/sections/CEOMessage'
import CallToAction from '../components/sections/CallToAction'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <CompanyOverview />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Projects />
      <CEOMessage />
      <CallToAction />
      <Contact />
    </>
  )
}
