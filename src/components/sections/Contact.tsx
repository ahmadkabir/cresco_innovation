import { useState, type FormEvent } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from 'lucide-react'
import Reveal from '../ui/Reveal'
import { TikTokIcon } from '../ui/icons'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { company, hasContact } from '../../data/company'
import { services } from '../../data/services'

type FormValues = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

const socials = [
  { label: 'Instagram', href: company.social.instagram, Icon: Instagram },
  { label: 'TikTok', href: company.social.tiktok, Icon: TikTokIcon },
  { label: 'Facebook', href: company.social.facebook, Icon: Facebook },
].filter((social) => hasContact(social.href))

const whatsappLink = hasContact(company.contact.whatsapp)
  ? `https://wa.me/${company.contact.whatsapp.replace(/[^\d]/g, '')}`
  : ''

const mapPoint = `${company.contact.map.lat},${company.contact.map.lng}`
const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapPoint}`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapPoint}`
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapPoint}&z=${company.contact.map.zoom}&hl=en&output=embed`

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!emailPattern.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    const digits = values.phone.replace(/[^\d]/g, '')
    if (digits.length < 7) next.phone = 'Please enter a reachable phone number.'
    if (!values.service) next.service = 'Please select the service you need.'
    if (values.message.trim().length < 10)
      next.message = 'Please add a little more detail (at least 10 characters).'
    return next
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('sending')
    try {
      if (hasContact(company.contact.formEndpoint)) {
        const response = await fetch(company.contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!response.ok) throw new Error(`Submission failed: ${response.status}`)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700))
      }
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  const details = [
    {
      icon: Phone,
      label: 'Call us',
      note: 'Nigeria & China lines',
      lines: company.contact.phones.map((phone) => ({
        value: phone.value,
        note: phone.note,
        href: `tel:${phone.tel}`,
      })),
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      note: 'Quick questions and updates',
      lines: [
        {
          value: company.contact.whatsappDisplay,
          note: 'Nigeria · chat with our team',
          href: whatsappLink,
        },
      ],
    },
    {
      icon: Mail,
      label: 'Email',
      note: 'Send your requirement in writing',
      lines: [
        {
          value: hasContact(company.contact.email) ? company.contact.email : 'Available on request',
          note: '',
          href: hasContact(company.contact.email) ? `mailto:${company.contact.email}` : '',
        },
      ],
    },
    {
      icon: MapPin,
      label: 'Office',
      note: 'Meetings by appointment',
      lines: [
        {
          value: company.contact.address,
          note: 'Get directions in Google Maps',
          href: directionsUrl,
        },
      ],
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,#EFF8F0_0%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="shell relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Tell us what you need. We’ll take it <span className="text-brand-green">from there.</span>
                </>
              }
              description="Share your requirement, budget or timeline and our team will come back with practical next steps. No obligation, no pressure."
            />
          </Reveal>

          <div className="mt-9 grid gap-3.5 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, note, lines }, index) => (
              <Reveal key={label} delay={0.05 + index * 0.04}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/[0.07] bg-canvas p-5 transition duration-300 hover:border-brand-green/25 hover:bg-white hover:shadow-soft">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-brand-green shadow-[0_1px_2px_rgba(23,43,37,0.06)]">
                      <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted">
                      {label}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    {lines.map((line) => (
                      <div key={`${label}-${line.value}`}>
                        {line.href ? (
                          <a
                            href={line.href}
                            target={line.href.startsWith('http') ? '_blank' : undefined}
                            rel={line.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                            className="block break-words text-[13.5px] font-bold leading-snug text-ink transition hover:text-brand-deep"
                          >
                            {line.value}
                          </a>
                        ) : (
                          <p className="break-words text-[13.5px] font-bold leading-snug text-ink/80">
                            {line.value}
                          </p>
                        )}
                        {line.note && <p className="mt-0.5 text-[11px] text-muted">{line.note}</p>}
                      </div>
                    ))}
                  </div>

                  <p className="mt-auto pt-3 text-[11.5px] text-muted">{note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {socials.length > 0 && (
            <Reveal delay={0.2}>
              <div className="mt-7 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                  Follow
                </span>
                <span className="h-px w-6 bg-ink/10" aria-hidden="true" />
                <div className="flex gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${company.name} on ${label}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:border-brand-green/40 hover:bg-brand-soft hover:text-brand-deep"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.24}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-teal/15 bg-brand-mint/40 p-4">
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
              <p className="text-[12.5px] leading-relaxed text-ink/70">
                Cresco Innovation Limited is a Nigerian registered company serving clients locally
                and internationally. Enquiries are welcome from individuals, businesses and
                organisations.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-ink/[0.07] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-brand-green">
                  <CheckCircle2 size={26} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-ink">
                  Thank you — your enquiry is in.
                </h3>
                <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-muted">
                  We have received your details and will review them shortly. If your enquiry is
                  urgent, you are welcome to call or message us directly using the contact details
                  on this page.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setStatus('idle')}
                  icon={<Send size={15} />}
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                    Request a quote
                  </h3>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-deep">
                    Response within business hours
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] text-muted">
                  Fields marked with <span className="text-brand-red">*</span> are required.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full-name" className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Full name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={values.name}
                      onChange={(event) => update('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'full-name-error' : undefined}
                      className={`field ${errors.name ? 'field-error' : ''}`}
                    />
                    {errors.name && (
                      <p id="full-name-error" className="mt-1.5 text-[11.5px] font-medium text-brand-red">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Email address <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={values.email}
                      onChange={(event) => update('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`field ${errors.email ? 'field-error' : ''}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-[11.5px] font-medium text-brand-red">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Phone number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234 ..."
                      value={values.phone}
                      onChange={(event) => update('phone', event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`field ${errors.phone ? 'field-error' : ''}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-[11.5px] font-medium text-brand-red">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-[12px] font-semibold text-ink">
                      Service required <span className="text-brand-red">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={(event) => update('service', event.target.value)}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className={`field appearance-none pr-10 ${
                          errors.service ? 'field-error' : ''
                        } ${values.service ? 'text-ink' : 'text-muted/70'}`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="General enquiry">General enquiry</option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.service && (
                      <p id="service-error" className="mt-1.5 text-[11.5px] font-medium text-brand-red">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold text-ink">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us what you would like to source, your quantities, budget or timeline…"
                    value={values.message}
                    onChange={(event) => update('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`field resize-none ${errors.message ? 'field-error' : ''}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-[11.5px] font-medium text-brand-red">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand-red/20 bg-brand-red/5 p-3.5 text-[12px] text-brand-red"
                  >
                    <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <p>
                      Something went wrong while sending your enquiry. Please try again, or reach us
                      directly using the contact details listed.
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[230px] text-[11px] leading-relaxed text-muted">
                    Your details are used only to respond to this enquiry.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'sending'}
                    icon={<Send size={16} />}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <div className="shell relative mt-12 lg:mt-16">
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
              <div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-green">
                  Find us
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                  Visit our office in Kano
                </h3>
                <p className="mt-3 flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink/75">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand-green" aria-hidden="true" />
                  <span>{company.contact.address}</span>
                </p>
                <p className="mt-2.5 text-[12px] leading-relaxed text-muted">
                  Gama C quarters, Nassarawa Local Government Area. Turn-by-turn directions open
                  straight in Google Maps.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={directionsUrl} icon={<Navigation size={15} />}>
                    Get directions
                  </Button>
                  <Button
                    href={mapsPlaceUrl}
                    variant="secondary"
                    icon={<ArrowUpRight size={15} />}
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-ink/[0.07] bg-canvas">
                <iframe
                  title={`Google Map showing ${company.name} at ${company.contact.address}`}
                  src={mapEmbedUrl}
                  className="block h-[300px] w-full sm:h-[340px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
