import {
  Building2,
  ClipboardCheck,
  Container,
  Cpu,
  Shirt,
  Ship,
  Truck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  outcomes: string[]
}

export const services: Service[] = [
  {
    slug: 'china-sourcing-procurement',
    title: 'China Sourcing & Procurement',
    short:
      'Vetted manufacturers and suppliers across China, identified, negotiated and managed on your behalf.',
    description:
      'We help you buy confidently from China. From finding the right manufacturer to confirming samples, agreeing pricing and following your order through to shipment, Cresco manages the process so your requirements are understood and your supplier is accountable.',
    icon: Container,
    outcomes: [
      'Supplier identification and verification',
      'Price negotiation and quotations',
      'Sample coordination and approval',
      'Order follow-up and pre-shipment checks',
    ],
  },
  {
    slug: 'factory-visit-supplier-verification',
    title: 'Factory Visit & Supplier Verification',
    short:
      'On-the-ground checks on factories and suppliers before you commit to an order.',
    description:
      'Before you place an order or send payment, Cresco can visit and assess the factory or supplier in person. We confirm that the business is real, that the manufacturer is who they claim to be, and that what they produce matches the quality and specification you have been promised.',
    icon: ClipboardCheck,
    outcomes: [
      'Factory visits and on-site assessments',
      'Supplier background checks and business verification',
      'Manufacturer identification and assessment',
      'Product quality assessment and inspection coordination',
    ],
  },
  {
    slug: 'vehicles-trucks-machinery',
    title: 'Vehicles, Trucks & Heavy Machinery',
    short:
      'Commercial vehicles, trucks and construction machinery sourced to specification and budget.',
    description:
      'Whether you are expanding a fleet, equipping a site or buying for resale, we source vehicles and machinery against clear specifications. We compare available options, confirm condition and configuration, and coordinate export and shipping details.',
    icon: Truck,
    outcomes: [
      'New and used vehicle sourcing',
      'Machinery specification matching',
      'Condition and configuration checks',
      'Export and shipping coordination',
    ],
  },
  {
    slug: 'electronics-ict-equipment',
    title: 'Electronics & ICT Equipment',
    short:
      'Laptops, networking hardware, components and office ICT equipment sourced accurately.',
    description:
      'Technology purchases need the right specification, genuine products and dependable delivery. We source electronics and ICT equipment for businesses, institutions and individuals, with attention to model accuracy, packaging and order quantities.',
    icon: Cpu,
    outcomes: [
      'Brand and model sourcing',
      'Bulk and institutional orders',
      'Packaging and warranty checks',
      'Delivery coordination',
    ],
  },
  {
    slug: 'building-materials-industrial-supplies',
    title: 'Building Materials & Industrial Supplies',
    short:
      'Materials and industrial consumables for construction, fit-out and manufacturing needs.',
    description:
      'We source building materials and industrial supplies for projects that depend on consistency and timelines. Cresco works from your specification, compares suppliers on quality and price, and consolidates orders for efficient shipping.',
    icon: Building2,
    outcomes: [
      'Specification-led material sourcing',
      'Supplier comparison and sampling',
      'Quality and quantity verification',
      'Consolidated shipping',
    ],
  },
  {
    slug: 'international-trade-logistics',
    title: 'International Trade & Logistics Support',
    short:
      'Documentation, freight and delivery coordination from supplier to destination.',
    description:
      'Goods only create value when they arrive. We support the trade and logistics side of your order — preparing and reviewing documentation, coordinating freight, consolidating shipments and keeping you informed as goods move.',
    icon: Ship,
    outcomes: [
      'Import and export documentation',
      'Freight and clearing coordination',
      'Shipment consolidation',
      'Tracking and progress updates',
    ],
  },
  {
    slug: 'fashion-apparel-accessories',
    title: 'Fashion, Apparel & Accessories',
    short:
      'Apparel, footwear and accessories for retail, corporate and personal orders.',
    description:
      'From fabric selection to finished goods, we source apparel and accessories for retailers, corporate uniforms and personal purchases. Samples and specifications are agreed before production, and quantities are consolidated for shipment.',
    icon: Shirt,
    outcomes: [
      'Fabric and sample review',
      'Custom branding and labelling',
      'Production follow-up',
      'Quantity consolidation',
    ],
  },
  {
    slug: 'business-technology-solutions',
    title: 'Business & Technology Solutions',
    short:
      'Practical advisory, digital tools and systems that help your business operate better.',
    description:
      'Beyond sourcing, Cresco supports businesses with practical technology and advisory work — from establishing a credible digital presence to improving how information, procurement and day-to-day operations are handled.',
    icon: Workflow,
    outcomes: [
      'Business and procurement advisory',
      'Websites and digital presence',
      'ICT equipment planning',
      'Workflow and process improvement',
    ],
  },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
