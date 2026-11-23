import { ArrowRight, Check, Globe2, Plane } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const assurances = ['China procurement', 'International logistics', 'Technology solutions']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_8%_0%,#EFF8F0_0%,transparent_65%),radial-gradient(45%_55%_at_95%_15%,#E8F7F7_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="dot-grid pointer-events-none absolute right-0 top-24 hidden h-72 w-72 opacity-30 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full border border-brand-green/[0.08]"
        aria-hidden="true"
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-green/15 bg-white py-1.5 pl-2 pr-4 text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-deep shadow-soft">
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              </span>
              Nigerian registered · Global reach
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[clamp(2.3rem,4.15vw,3.65rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink">
              Connecting You to{' '}
              <span className="relative inline-block">
                <span className="text-brand-green">Global</span> Opportunities.
                <svg
                  viewBox="0 0 320 10"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2 w-full text-brand-teal/45"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7C60 2.5 140 1.5 318 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted sm:text-base">
              From international sourcing and procurement to innovative business and technology
              solutions, Cresco Innovation Limited connects individuals and businesses to
              opportunities that drive growth.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/services" size="lg" icon={<ArrowRight size={17} />}>
                Explore Our Services
              </Button>
              <Button to="/contact" size="lg" variant="secondary">
                Request a Quote
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.07] pt-6">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12.5px] font-semibold text-ink/70">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-soft text-brand-green">
                    <Check size={10} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={30} className="relative">
          <div
            className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-3xl border border-brand-teal/20 sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-full bg-brand-mint/70 blur-2xl sm:block"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-brand-soft shadow-lift">
            <img
              src="/images/hero-port.jpg"
              alt="International shipping containers and gantry cranes at a modern container port"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[10/11]"
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-ink/35 px-4 py-3.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white">
                  <Globe2 size={17} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12.5px] font-bold text-white">Supplier to delivery</p>
                  <p className="text-[11px] text-white/70">Sourcing · Freight · Follow-up</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-7 max-w-[190px] rounded-2xl border border-ink/[0.06] bg-white/95 p-3.5 shadow-soft backdrop-blur sm:-left-6 sm:top-10 sm:p-4">
            <div className="flex items-center gap-2 text-brand-teal">
              <Plane size={14} aria-hidden="true" />
              <span className="text-[9.5px] font-bold uppercase tracking-[0.15em]">Route</span>
            </div>
            <p className="mt-2 text-[12.5px] font-bold leading-snug text-ink">
              China <span className="text-brand-teal">→</span> Nigeria
            </p>
            <p className="mt-0.5 text-[10.5px] leading-snug text-muted">
              and other international markets
            </p>
          </div>

          <div className="absolute -right-2 bottom-24 hidden rounded-2xl border border-ink/[0.06] bg-white p-3.5 shadow-soft sm:block">
            <p className="text-[9.5px] font-bold uppercase tracking-[0.15em] text-muted">Focus</p>
            <p className="mt-1.5 text-[12.5px] font-bold text-ink">Vetted suppliers</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
