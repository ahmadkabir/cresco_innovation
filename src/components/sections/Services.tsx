import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-brand-mint/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title={
                <>
                  Everything you need between an idea and{' '}
                  <span className="text-brand-green">a delivered order.</span>
                </>
              }
              description="Seven focused service areas, built around real procurement, trade and technology needs — delivered with clear communication at every stage."
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <Button to="/services" variant="secondary" icon={<ArrowRight size={16} />}>
              All services
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 0.06}>
              <ServiceCard
                index={index + 1}
                title={service.title}
                description={service.short}
                icon={service.icon}
                slug={service.slug}
                featured={index === services.length - 1}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[13px] text-muted">
            Have a requirement that doesn’t fit neatly into one category?{' '}
            <Link
              to="/contact"
              className="font-semibold text-brand-deep underline decoration-brand-teal/40 decoration-2 underline-offset-4 transition hover:text-brand-teal"
            >
              Tell us what you need
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
