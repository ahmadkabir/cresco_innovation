import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import CompanyOverview from '../components/sections/CompanyOverview'
import TrustHighlights from '../components/sections/TrustHighlights'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import CEOMessage from '../components/sections/CEOMessage'
import CallToAction from '../components/sections/CallToAction'

export default function About() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        eyebrow="About Cresco"
        title={
          <>
            A Nigerian company built for <span className="text-brand-green">international trade.</span>
          </>
        }
        description="Cresco Innovation Limited connects individuals, businesses and organisations with reliable manufacturers, suppliers and opportunities abroad — with the care and accountability of a local partner."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/services" icon={<ArrowRight size={16} />}>
            Explore our services
          </Button>
          <Button to="/contact" variant="secondary">
            Talk to our team
          </Button>
        </div>
      </PageHeader>

      <CompanyOverview />
      <TrustHighlights />
      <WhyChooseUs />
      <HowItWorks />
      <CEOMessage />
      <CallToAction />
    </>
  )
}
