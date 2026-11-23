import { ArrowRight, Check } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import ServicesGrid from '../components/sections/Services'
import HowItWorks from '../components/sections/HowItWorks'
import CallToAction from '../components/sections/CallToAction'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="Our Services"
        title={
          <>
            Sourcing, procurement and <span className="text-brand-green">business solutions.</span>
          </>
        }
        description="Seven service areas covering the journey from identifying a supplier to receiving goods — plus the technology and advisory support that helps a business grow."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact" icon={<ArrowRight size={16} />}>
            Request a quote
          </Button>
          <Button href="#how-it-works" variant="secondary">
            See how it works
          </Button>
        </div>
      </PageHeader>

      <ServicesGrid />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">In detail</span>
              <h2 className="mt-4 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink">
                What each service includes.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Every engagement is scoped to your requirement. These are the practical elements we
                typically coordinate for clients.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
              <Reveal key={service.slug} delay={0.03 * (index % 3)}>
                <article
                  id={service.slug}
                  className="scroll-mt-28 rounded-3xl border border-ink/[0.07] bg-canvas p-6 transition duration-300 hover:border-brand-green/25 hover:bg-white hover:shadow-soft sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[auto_1fr_1fr] lg:gap-10">
                    <div className="flex items-center gap-4 lg:block">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-green/10 text-brand-deep">
                        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-bold tracking-[0.16em] text-muted lg:mt-4 lg:block">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[18px] font-bold leading-snug tracking-[-0.02em] text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <Button
                        to="/contact"
                        variant="ghost"
                        size="sm"
                        className="mt-4 -ml-4"
                        icon={<ArrowRight size={14} />}
                      >
                        Request this service
                      </Button>
                    </div>

                    <div>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-teal">
                        What we handle
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2.5">
                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-green">
                              <Check size={10} strokeWidth={3} aria-hidden="true" />
                            </span>
                            <span className="text-[12.5px] leading-snug text-ink/75">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <HowItWorks />
      <CallToAction />
    </>
  )
}
