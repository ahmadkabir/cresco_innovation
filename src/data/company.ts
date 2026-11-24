/**
 * Company-wide content and contact configuration.
 *
 * This file is the single source of truth for contact details, social links
 * and leadership information. Any blank field is shown as "Available on
 * request" instead of a fabricated detail.
 */
export type PhoneLine = {
  value: string
  tel: string
  note: string
}

export const company = {
  name: 'Cresco Innovation Limited',
  shortName: 'Cresco',
  tagline: 'Connecting You to Global Opportunities.',
  country: 'Nigeria',
  description:
    'A Nigerian company specialising in international sourcing, procurement, technology and business solutions — connecting individuals and organisations with reliable manufacturers and suppliers, particularly in China.',
  contact: {
    /** Used for the WhatsApp chat links across the site. Digits only, with country code. */
    whatsapp: '+2348066061616',
    whatsappDisplay: '+234 806 606 1616',
    phones: [
      { value: '+234 806 606 1616', tel: '+2348066061616', note: 'Nigeria · WhatsApp' },
      { value: '+234 708 727 5335', tel: '+2347087275335', note: 'Nigeria' },
      { value: '+234 803 895 8418', tel: '+2348038958418', note: 'Nigeria' },
      { value: '+86 131 0762 9565', tel: '+8613107629565', note: 'China · WeChat & WhatsApp' },
    ] as PhoneLine[],
    email: '',
    address: 'No. 26 Gama C, Nassarawa Local Government, Kano State, Nigeria',
    /**
     * Mapped point for the Gama C quarters in Nassarawa LGA, Kano — the closest
     * geocoded location to the office address. Used for the embedded map and
     * the Google Maps directions links.
     */
    map: {
      lat: 12.0021529,
      lng: 8.5919749,
      zoom: 16,
    },
    /** Optional: a form endpoint (e.g. Formspree) that accepts JSON POSTs. */
    formEndpoint: '',
  },
  social: {
    linkedin: '',
    instagram: 'https://www.instagram.com/crescoinnovation',
    facebook: 'https://www.facebook.com/search/top?q=Cresco%20Innovation',
    x: '',
    tiktok: 'https://www.tiktok.com/@cresco.innovation',
  },
  ceo: {
    name: 'Bashir Salisu Nuhu',
    role: 'Chief Executive Officer',
    photo: '/images/ceo.jpg',
  },
  logo: '/logo.png',
} as const

export const hasContact = (value: string) => value.trim().length > 0
