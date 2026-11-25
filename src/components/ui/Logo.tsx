import { useId, useState } from 'react'
import { company } from '../../data/company'

type Props = {
  variant?: 'dark' | 'light'
  className?: string
  showWordmark?: boolean
}

/**
 * Renders the official logo from /public/logo.png (company.logo).
 * The artwork is a horizontal lockup on a transparent background; on dark
 * surfaces (footer) it still sits on a white plate so the green and teal
 * lettering keeps its contrast. If the file cannot load, an accurate
 * wordmark fallback keeps every layout branded.
 */
export default function Logo({ variant = 'dark', className = '', showWordmark = true }: Props) {
  const [imageFailed, setImageFailed] = useState(false)
  const gradientId = useId()
  const isLight = variant === 'light'

  if (!imageFailed) {
    const image = (
      <img
        src={company.logo}
        alt={company.name}
        className={`w-auto object-contain ${isLight ? 'h-14 sm:h-16' : 'h-12 sm:h-14'} ${className}`}
        onError={() => setImageFailed(true)}
        loading="eager"
      />
    )

    if (isLight) {
      return (
        <span className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-soft">{image}</span>
      )
    }

    return image
  }

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[13px] shadow-soft sm:h-11 sm:w-11">
        <svg viewBox="0 0 44 44" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#168B36" />
              <stop offset="1" stopColor="#159AA5" />
            </linearGradient>
          </defs>
          <rect width="44" height="44" rx="13" fill={`url(#${gradientId})`} />
          <text
            x="22"
            y="30.5"
            textAnchor="middle"
            fontFamily="Manrope, ui-sans-serif, sans-serif"
            fontSize="24"
            fontWeight="800"
            fill="#ffffff"
          >
            C
          </text>
        </svg>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-[17px] font-extrabold tracking-[-0.03em] ${
              isLight ? 'text-white' : 'text-ink'
            }`}
          >
            Cresco
          </span>
          <span
            className={`mt-1 text-[8.5px] font-bold uppercase tracking-[0.22em] ${
              isLight ? 'text-white/55' : 'text-muted'
            }`}
          >
            Innovation Limited
          </span>
        </span>
      )}
    </span>
  )
}
