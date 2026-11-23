import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const steps = [
  {
    title: 'Client Enquiry',
    text: 'You tell us what you need, where you are and any timeline you are working towards.',
  },
  {
    title: 'Requirements & Budget',
    text: 'We clarify specifications, quantities and budget so expectations are aligned from the start.',
  },
  {
    title: 'Research & Quotation',
    text: 'We identify suitable suppliers, compare options and prepare a clear, itemised quotation.',
  },
  {
    title: 'Client Approval',
    text: 'Nothing moves without your approval. Terms, timelines and payment details are confirmed in writing.',
  },
  {
    title: 'Procurement',
    text: 'Orders are placed, samples and quality checks arranged, and production or dispatch followed up.',
  },
  {
    title: 'Shipping & Delivery',
    text: 'Documentation and freight are coordinated, with progress updates until goods reach you.',
  },
  {
    title: 'Completion & Follow-up',
    text: 'We confirm delivery, address any outstanding items and remain available for future orders.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[linear-gradient(155deg,#08752E_0%,#06482F_45%,#05271C_100%)] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-brand-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full border border-white/10"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint/80">
              <span className="block h-px w-7 bg-brand-mint/50" aria-hidden="true" />
              How It Works
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
              A calm, transparent process from first enquiry to{' '}
              <span className="text-brand-mint">final delivery.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/65">
              Seven clear steps. You always know what stage your order is at, what has been agreed,
              and what happens next.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="light" icon={<ArrowRight size={16} />}>
                Start an enquiry
              </Button>
              <span className="text-[12px] text-white/50">No obligation to proceed.</span>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 hidden overflow-hidden rounded-3xl border border-white/10 lg:block">
              <img
                src="/images/ict.jpg"
                alt="ICT equipment prepared for institutional procurement"
                className="aspect-[16/9] w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <ol className="relative space-y-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pl-14 sm:pl-16">
              <Reveal delay={0.03 * index}>
                <div className="relative pb-8">
                  {index < steps.length - 1 && (
                    <span
                      className="absolute left-[-2.25rem] top-12 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-white/25 to-white/5 sm:left-[-2.625rem]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="absolute -left-14 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-[12px] font-bold text-brand-mint backdrop-blur sm:-left-16 sm:h-11 sm:w-11">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="rounded-2xl border border-transparent px-0 py-0 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:px-4 hover:py-3 sm:hover:px-5">
                    <h3 className="-mt-0.5 text-[15px] font-bold tracking-[-0.01em] text-white sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-white/60">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
