import { Cpu, Globe2, Landmark, PackageSearch } from 'lucide-react'
import Reveal from '../ui/Reveal'

const highlights = [
  {
    icon: Landmark,
    title: 'Nigerian Registered Company',
    description: 'A locally registered business, accountable to the clients it serves.',
  },
  {
    icon: Globe2,
    title: 'International Sourcing',
    description: 'Manufacturers and suppliers identified across global markets.',
  },
  {
    icon: PackageSearch,
    title: 'China-Focused Procurement',
    description: 'Hands-on buying support within China’s manufacturing hubs.',
  },
  {
    icon: Cpu,
    title: 'Business & Technology Solutions',
    description: 'Practical systems and digital support beyond procurement.',
  },
]

export default function TrustHighlights() {
  return (
    <section className="border-y border-ink/[0.06] bg-white">
      <div className="shell grid grid-cols-1 gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="flex items-start gap-4 px-1 py-7 sm:px-2 lg:border-r lg:border-ink/[0.06] lg:px-6 lg:last:border-r-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-green">
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[13.5px] font-bold leading-snug tracking-[-0.01em] text-ink">
                  {title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
