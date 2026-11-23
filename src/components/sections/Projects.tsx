import { ArrowRight, FolderKanban } from 'lucide-react'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projects'

const areas = [
  'Sourcing & procurement',
  'Machinery & vehicles',
  'ICT equipment',
  'Building materials',
  'Logistics support',
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title={
                <>
                  Work we have delivered, and work we can <span className="text-brand-green">deliver for you.</span>
                </>
              }
              description="We publish client work only where we have permission and verified detail. This showcase grows as engagements are documented."
            />
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <Button to="/projects" variant="secondary" icon={<ArrowRight size={16} />}>
              View projects
            </Button>
          </Reveal>
        </div>

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-12 sm:mt-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/[0.08] bg-canvas px-6 py-14 sm:px-12 sm:py-16">
              <div
                className="dot-grid pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]"
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-xl text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-brand-green/15 bg-white text-brand-green shadow-soft">
                  <FolderKanban size={24} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                  A project showcase is being prepared.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  Cresco’s completed engagements will be published here as they are documented.
                  In the meantime, we are glad to talk through the kind of work we take on and how
                  your requirement would be handled.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-ink/[0.08] bg-white px-3.5 py-1.5 text-[11.5px] font-semibold text-ink/70"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Button to="/contact" icon={<ArrowRight size={16} />}>
                    Discuss your requirements
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
