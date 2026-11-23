import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

type Props = {
  index: number
  title: string
  description: string
  icon: LucideIcon
  slug?: string
  featured?: boolean
}

export default function ServiceCard({
  index,
  title,
  description,
  icon: Icon,
  slug,
  featured = false,
}: Props) {
  const href = slug ? `/services#${slug}` : '/contact'

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition duration-500 sm:p-8 ${
        featured
          ? 'border-transparent bg-ink text-white shadow-lift hover:-translate-y-1'
          : 'border-ink/[0.07] bg-white shadow-soft hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-lift'
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full transition duration-700 group-hover:scale-125 ${
          featured ? 'bg-brand-teal/20' : 'bg-brand-soft'
        }`}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl transition duration-500 ${
            featured
              ? 'bg-white/10 text-brand-mint'
              : 'bg-brand-soft text-brand-green group-hover:bg-brand-green group-hover:text-white'
          }`}
        >
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span
          className={`text-[11px] font-bold tracking-[0.16em] ${
            featured ? 'text-white/35' : 'text-ink/25'
          }`}
        >
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <h3
        className={`relative mt-6 text-[19px] font-bold leading-snug tracking-[-0.02em] ${
          featured ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h3>
      <p
        className={`relative mt-3 flex-1 text-[14px] leading-relaxed ${
          featured ? 'text-white/65' : 'text-muted'
        }`}
      >
        {description}
      </p>

      <Link
        to={href}
        className={`relative mt-7 inline-flex items-center gap-1.5 text-[13px] font-semibold transition ${
          featured
            ? 'text-brand-mint hover:text-white'
            : 'text-brand-deep hover:text-brand-teal'
        }`}
      >
        <span>Learn more</span>
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
      </Link>
    </article>
  )
}
