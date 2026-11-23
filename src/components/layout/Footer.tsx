import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import Logo from '../ui/Logo'
import { company, hasContact } from '../../data/company'
import { services } from '../../data/services'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: company.social.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: company.social.instagram, Icon: Instagram },
  { label: 'Facebook', href: company.social.facebook, Icon: Facebook },
  { label: 'X', href: company.social.x, Icon: Twitter },
].filter((social) => hasContact(social.href))

const whatsappLink = hasContact(company.contact.whatsapp)
  ? `https://wa.me/${company.contact.whatsapp.replace(/[^\d]/g, '')}`
  : ''

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(165deg,#08752E_0%,#063322_55%,#05271C_100%)] text-white">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-relaxed text-white/65">
              International sourcing, procurement and technology solutions for individuals and
              businesses — with a particular focus on reliable supply from China.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-2.5">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${company.name} on ${label}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-brand-mint/50 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-mint/70">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-70"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-mint/70">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-[13.5px] leading-snug text-white/65 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand-mint transition hover:text-white"
                >
                  All services
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-mint/70">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[13.5px] text-white/65">
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-brand-mint/70" aria-hidden="true" />
                {hasContact(company.contact.phone) ? (
                  <a href={`tel:${company.contact.phone}`} className="transition hover:text-white">
                    {company.contact.phone}
                  </a>
                ) : (
                  <span>Phone available on request</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-brand-mint/70" aria-hidden="true" />
                {hasContact(company.contact.email) ? (
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="break-all transition hover:text-white"
                  >
                    {company.contact.email}
                  </a>
                ) : (
                  <span>Email available on request</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-mint/70" aria-hidden="true" />
                {hasContact(company.contact.address) ? (
                  <span>{company.contact.address}</span>
                ) : (
                  <span>Office address available on request</span>
                )}
              </li>
            </ul>

            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-brand-mint/50 hover:text-white"
              >
                Chat on WhatsApp
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="flex items-start gap-2 sm:items-center">
            <span
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal sm:mt-0"
              aria-hidden="true"
            />
            <span>A Nigerian registered company · Sourcing from China and beyond</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
