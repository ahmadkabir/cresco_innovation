import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: Props) {
  const centered = align === 'center'

  return (
    <div
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? 'justify-center' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em] ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            tone === 'dark' ? 'text-white/70' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
