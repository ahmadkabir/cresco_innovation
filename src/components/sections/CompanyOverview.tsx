import { Compass, Eye, HeartHandshake, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: Compass,
    title: 'Our mission',
    text: 'To make international sourcing straightforward and dependable for Nigerian individuals and businesses, by connecting them with trusted suppliers and practical solutions.',
  },
  {
    icon: Eye,
    title: 'Our vision',
    text: 'To be a reference point for ethical, well-managed trade and business solutions between Africa and global markets.',
  },
]

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Clear pricing, honest updates and no surprises.' },
  { icon: HeartHandshake, title: 'Service', text: 'We treat every client’s order as if it were our own.' },
  { icon: Leaf, title: 'Sustainability', text: 'Durable choices and responsible sourcing over quick wins.' },
  { icon: Sparkles, title: 'Innovation', text: 'Better tools and better processes, wherever we can improve.' },
]

export default function CompanyOverview() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[520px] lg:max-w-none">
            <div
              className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-tl-4xl border-l-2 border-t-2 border-brand-teal/25 sm:block"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-brand-soft shadow-soft">
              <img
                src="/images/about-team.jpg"
                alt="Cresco team reviewing an international sourcing quotation with a client"
                className="aspect-[4/3.2] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block lg:-right-6">
              <img
                src="/images/machinery.jpg"
                alt="Heavy machinery prepared for export"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -left-3 bottom-8 max-w-[210px] rounded-2xl border border-ink/[0.06] bg-white/95 p-4 shadow-soft backdrop-blur sm:-left-8 sm:bottom-16">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-brand-teal">
                One partner
              </p>
              <p className="mt-1.5 text-[12.5px] font-semibold leading-snug text-ink">
                Sourcing, procurement and delivery support in one place.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="About Cresco"
              title={
                <>
                  Your trusted partner in global sourcing &amp;{' '}
                  <span className="text-brand-green">business solutions.</span>
                </>
              }
              description="Cresco Innovation Limited is a Nigerian company specialising in international sourcing, procurement, technology and business solutions. We connect individuals, businesses and organisations with reliable manufacturers, suppliers and international opportunities — particularly in China."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              Our work sits between your requirement and your supplier: understanding exactly what
              you need, identifying dependable manufacturers, agreeing terms and following the order
              through shipping and delivery. For clients who need more than procurement, we also
              support the systems and technology that keep a business running well.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={0.12 + index * 0.05}>
                <div className="h-full rounded-2xl border border-ink/[0.07] bg-canvas p-5 transition duration-300 hover:border-brand-green/25 hover:bg-white hover:shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-green/10 text-brand-deep">
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3.5 text-[13.5px] font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                Core values
              </p>
              <div className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-2.5">
                    <Icon size={15} className="mt-0.5 shrink-0 text-brand-teal" aria-hidden="true" />
                    <p className="text-[12.5px] leading-snug text-muted">
                      <span className="font-bold text-ink">{title}.</span> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="secondary" icon={<span aria-hidden="true">→</span>}>
                Learn More
              </Button>
              <Link to="/services" className="link-arrow">
                View our services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
