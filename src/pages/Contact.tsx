import PageHeader from '../components/ui/PageHeader'
import ContactSection from '../components/sections/Contact'
import CallToAction from '../components/sections/CallToAction'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title={
          <>
            Let’s talk about your <span className="text-brand-green">next order.</span>
          </>
        }
        description="Whether your requirement is clear or still taking shape, tell us what you have in mind. We will help you work out the right approach."
      />

      <ContactSection />
      <CallToAction />
    </>
  )
}
