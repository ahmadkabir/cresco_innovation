import {
  BadgeCheck,
  HeartHandshake,
  Network,
  Route,
  ShieldCheck,
  Tag,
} from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Reliable Sourcing',
    text: 'Suppliers are identified and checked against your specification before an order is placed.',
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    text: 'We compare options and negotiate with suppliers so your budget is used well.',
  },
  {
    icon: Network,
    title: 'International Connections',
    text: 'Direct access to manufacturers and suppliers in China and other international markets.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    text: 'Samples, specifications and pre-shipment checks agreed before goods leave the supplier.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    text: 'One point of contact, responsive updates and straight answers throughout the process.',
  },
  {
    icon: Route,
    title: 'End-to-End Support',
    text: 'From first enquiry to delivery and follow-up, the details are handled with you.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why Cresco"
            align="center"
            title={
              <>
                Why businesses choose <span className="text-brand-green">Cresco.</span>
              </>
            }
            description="Sourcing internationally is only valuable when it is done carefully. These are the standards we hold ourselves to on every engagement."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/[0.06] shadow-soft">
              <img
                src="/images/manufacturing.jpg"
                alt="Precision manufacturing equipment inside a modern production facility"
                className="aspect-[4/3.4] w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-center gap-2 text-brand-mint">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Our standard
                  </span>
                </div>
                <p className="mt-2 max-w-[280px] text-[15px] font-semibold leading-snug text-white">
                  Every engagement handled end to end, with the same care we would expect as a buyer.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-4 hidden rounded-2xl bg-brand-deep px-5 py-4 text-white shadow-lift sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-mint/80">
                Working principle
              </p>
              <p className="mt-1.5 text-[13px] font-semibold leading-snug">
                Clarity before commitment.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={0.04 * index}>
                <div className="group border-t border-ink/[0.08] pt-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                      <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <h3 className="text-[13.5px] font-bold tracking-[-0.01em] text-ink">{title}</h3>
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
