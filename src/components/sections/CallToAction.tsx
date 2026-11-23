import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { company, hasContact } from '../../data/company'

export default function CallToAction() {
  const whatsappLink = hasContact(company.contact.whatsapp)
    ? `https://wa.me/${company.contact.whatsapp.replace(/[^\d]/g, '')}`
    : ''

  return (
    <section className="relative px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#08752E_0%,#0F8340_45%,#159AA5_130%)] px-6 py-14 text-white shadow-lift sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16">
            <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/15"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 right-24 h-64 w-64 rounded-full bg-brand-mint/10 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(60%_60%_at_70%_50%,rgba(232,247,247,0.18),transparent_70%)] lg:block"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint/80">
                  Ready when you are
                </span>
                <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.6vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.035em]">
                  Let’s make your next business opportunity a reality.
                </h2>
                <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/75">
                  Whether you need international sourcing, procurement assistance, machinery,
                  technology services or business solutions, Cresco Innovation Limited is ready to
                  help.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Button to="/contact" variant="light" size="lg" icon={<ArrowRight size={17} />}>
                  Get Started
                </Button>
                <Button
                  href={whatsappLink || undefined}
                  to={whatsappLink ? undefined : '/contact'}
                  variant="ghost"
                  size="lg"
                  className="border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  icon={<MessageCircle size={17} />}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
