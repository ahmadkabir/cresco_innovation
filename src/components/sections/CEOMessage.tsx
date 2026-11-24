import { Quote } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { company, hasContact } from '../../data/company'

export default function CEOMessage() {
  const { ceo } = company
  const initials = ceo.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 3)

  return (
    <section id="ceo-message" className="relative overflow-hidden bg-canvas py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_10%_20%,#E8F7F7_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="shell relative grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[340px] lg:mx-0">
          <div
            className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-brand-teal/25"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#08752E_0%,#159AA5_130%)] shadow-lift">
            <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
            {hasContact(ceo.photo) ? (
              <img
                src={ceo.photo}
                alt={`${ceo.name}, ${ceo.role} of ${company.name}`}
                className="w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center px-6 text-center">
                <span className="grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-white/10 font-serif text-3xl text-white backdrop-blur">
                  {initials}
                </span>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint/80">
                  {company.shortName} Leadership
                </p>
                <p className="mt-2 max-w-[200px] text-[12px] leading-relaxed text-white/60">
                  A portrait of our CEO will be published here.
                </p>
              </div>
            )}
            <div className="relative border-t border-white/10 px-6 py-5">
              <p className="text-[15px] font-bold text-white">{ceo.name}</p>
              <p className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-mint/80">
                {ceo.role}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">A message from our CEO</span>
            <Quote size={34} className="mt-6 text-brand-teal/25" aria-hidden="true" />
            <blockquote className="mt-2">
              <p className="font-serif text-[clamp(1.35rem,2.8vw,2rem)] italic leading-[1.32] tracking-[-0.015em] text-ink">
                “Our promise is simple: to bring the same care, clarity and persistence to your
                order that we would want for our own business.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 space-y-4 text-[14.5px] leading-[1.8] text-muted">
              <p>
                Welcome, and thank you for taking the time to learn about Cresco Innovation
                Limited. We started this company because we saw how much opportunity was being lost
                between Nigeria and the world’s manufacturing centres — not for lack of demand, but
                for lack of dependable support on the ground.
              </p>
              <p>
                Our role is to close that gap. We listen carefully, source honestly, negotiate on
                your behalf and stay with your order until it reaches you. Whether you are importing
                machinery, equipping a facility, or looking for technology that helps your business
                run better, you should not have to navigate it alone.
              </p>
              <p>
                My vision is for Cresco to be known for doing things properly: transparent pricing,
                verified suppliers, clear communication and long-term relationships built on
                results. If that is the kind of partner you are looking for, we would be glad to
                hear from you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.08] pt-6">
              <div>
                <p className="text-[14px] font-bold text-ink">{ceo.name}</p>
                <p className="text-[11.5px] uppercase tracking-[0.14em] text-muted">
                  {ceo.role}, {company.name}
                </p>
              </div>
              <span className="hidden h-8 w-px bg-ink/10 sm:block" aria-hidden="true" />
              <p className="font-serif text-[15px] italic text-brand-deep">
                Growth, delivered with integrity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
