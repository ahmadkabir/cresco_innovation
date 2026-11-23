import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import ProjectsSection from '../components/sections/Projects'
import CallToAction from '../components/sections/CallToAction'

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        crumb="Projects"
        eyebrow="Projects"
        title={
          <>
            Selected engagements, <span className="text-brand-green">published with permission.</span>
          </>
        }
        description="We only showcase work that has been verified and approved by the client. As projects are documented, they will appear here with the category, scope and outcome."
      >
        <Button to="/contact" icon={<ArrowRight size={16} />}>
          Start a conversation
        </Button>
      </PageHeader>

      <ProjectsSection />
      <CallToAction />
    </>
  )
}
