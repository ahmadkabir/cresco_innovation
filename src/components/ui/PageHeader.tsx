import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: string
  crumb: string
  children?: ReactNode
}

export default function PageHeader({ eyebrow, title, description, crumb, children }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-ink/[0.06] bg-white pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_85%_0%,#E8F7F7_0%,transparent_60%),radial-gradient(50%_70%_at_0%_100%,#EFF8F0_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="dot-grid pointer-events-none absolute -right-10 top-10 h-64 w-64 opacity-[0.35]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-muted">
          <Link to="/" className="transition hover:text-brand-deep">
            Home
          </Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span className="text-ink" aria-current="page">
            {crumb}
          </span>
        </nav>

        <span className="eyebrow mt-8">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  )
}
