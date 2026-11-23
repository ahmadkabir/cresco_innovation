import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'light' | 'dark' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-green text-white shadow-soft hover:bg-brand-deep hover:shadow-lift hover:-translate-y-0.5',
  secondary:
    'bg-white text-ink ring-1 ring-inset ring-ink/10 hover:ring-brand-green/40 hover:text-brand-deep hover:-translate-y-0.5',
  light:
    'bg-white text-brand-deep hover:bg-brand-mint hover:-translate-y-0.5 shadow-soft',
  dark: 'bg-ink text-white hover:bg-ink/90 hover:-translate-y-0.5',
  ghost:
    'text-ink hover:text-brand-deep hover:bg-brand-soft/70',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
}

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: ReactNode
}

type ButtonProps = BaseProps & {
  to?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  )
}
