/**
 * Company-wide content and contact configuration.
 *
 * Contact values are intentionally left blank because no official contact
 * details were supplied. Fill them in here and every page updates automatically.
 * Any blank field is shown as "Available on request" instead of a fabricated detail.
 */
export const company = {
  name: 'Cresco Innovation Limited',
  shortName: 'Cresco',
  tagline: 'Connecting You to Global Opportunities.',
  country: 'Nigeria',
  description:
    'A Nigerian company specialising in international sourcing, procurement, technology and business solutions — connecting individuals and organisations with reliable manufacturers and suppliers, particularly in China.',
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    /** Optional: a form endpoint (e.g. Formspree) that accepts JSON POSTs. */
    formEndpoint: '',
  },
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
  },
  ceo: {
    name: 'Bashir Salisu Nuhu',
    role: 'Chief Executive Officer',
    /** Add a portrait to /public/images and reference it here, e.g. '/images/ceo.jpg'. */
    photo: '',
  },
  logo: '/logo.png',
} as const

export const hasContact = (value: string) => value.trim().length > 0
