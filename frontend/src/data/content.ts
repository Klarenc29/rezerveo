import {
  BarChart3,
  BellRing,
  Boxes,
  Building2,
  CalendarDays,
  Cloud,
  Dumbbell,
  HeartPulse,
  Palette,
  Rocket,
  Scissors,
  Server,
  Settings2,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import type {
  BusinessTypeChip,
  DeploymentOption,
  FaqItem,
  Feature,
  NavLink,
  PricingPlan,
  Stat,
  Step,
  Testimonial,
} from "@/types";

/* ---------------------------- Brand ---------------------------- */
export const BRAND = {
  name: "Rezerveo",
  tagline: "Appointments, managed. Revenue, protected.",
  email: "info@rezerveo.al",
  domain: "rezerveo.al",
} as const;

/* -------------------------- Navigation ------------------------- */
export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/* ----------------------------- Hero ---------------------------- */
export const HERO = {
  headline: "Booking Platform for Service Businesses",
  subheadline: "Appointments, managed. Revenue, protected.",
  description:
    "Rezerveo is the all-in-one booking platform for barbershops, salons, physiotherapy clinics, and every appointment-driven business.",
  note: "Feature-based pricing. No per-user fees. Ever.",
  primaryCta: "Get a Free Demo",
  secondaryCta: "See Pricing",
  badges: [
    "No per-user fees",
    "On-premises install",
    "White-label ready",
    "30-min onboarding",
  ],
} as const;

export const STATS: Stat[] = [
  { value: "500+", label: "Businesses" },
  { value: "12k+", label: "Monthly Bookings" },
  { value: "99,9%", label: "Uptime" },
  { value: "<30 min", label: "Setup" },
];

export const BUSINESS_TYPES: BusinessTypeChip[] = [
  { label: "Barbershops", icon: Scissors },
  { label: "Hair Salons", icon: Sparkles },
  { label: "Physio Clinics", icon: HeartPulse },
  { label: "Nail & Beauty", icon: Palette },
  { label: "Fitness & PT", icon: Dumbbell },
  { label: "Multi-location", icon: Building2 },
];

/* --------------------------- Features -------------------------- */
export const FEATURES_HEADER = {
  title: "Everything your team needs",
  subtitle:
    "One platform to manage every appointment, every specialist, every service.",
} as const;

export const FEATURES: Feature[] = [
  {
    icon: CalendarDays,
    title: "Smart Calendar",
    points: [
      "Day, week, and month views per specialist",
      "Drag-and-drop rescheduling",
      "Real-time availability for clients",
    ],
  },
  {
    icon: Users,
    title: "Team Management",
    points: [
      "Unlimited specialists",
      "Define working hours and services",
      "Transfer bookings between staff",
    ],
  },
  {
    icon: Boxes,
    title: "Service Bundles",
    points: ["Grouped packages", "Custom pricing", "Per-specialist rules"],
  },
  {
    icon: BellRing,
    title: "Push Notifications",
    points: ["Instant alerts for booking events", "Notify staff and clients"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    points: ["Track bookings and revenue", "Peak hours", "No-show rates"],
  },
  {
    icon: Server,
    title: "Data Ownership",
    points: [
      "Deploy on your own server",
      "Full data sovereignty",
      "No third-party dependency",
    ],
  },
];

/* ------------------------- How it works ------------------------ */
export const HOW_IT_WORKS_HEADER = {
  title: "Live in three simple steps",
} as const;

export const STEPS: Step[] = [
  {
    index: 1,
    title: "Set Up Your Business",
    description:
      "Add your team, define your services, set working hours and pricing. Takes under 30 minutes.",
    icon: Settings2,
  },
  {
    index: 2,
    title: "Share Your Booking Page",
    description:
      "Send clients a link to your booking portal. They pick a service, choose a time, confirm — done.",
    icon: Share2,
  },
  {
    index: 3,
    title: "Manage & Grow",
    description:
      "View all bookings in real-time, handle transfers, track analytics, and focus on your craft.",
    icon: TrendingUp,
  },
];

/* ------------------------- Deployment -------------------------- */
export const DEPLOYMENT_HEADER = {
  title: "Your infrastructure or ours",
  subtitle: "Rezerveo runs wherever your business needs it.",
} as const;

export const DEPLOYMENT_OPTIONS: DeploymentOption[] = [
  {
    icon: Server,
    title: "Self-Hosted / On-Premises",
    description:
      "Install Rezerveo on your own server. Full data ownership, no third-party dependency.",
    features: [
      "Full data sovereignty",
      "One-time license fee",
      "Docker / VM deployment",
      "Compliance-friendly",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Hosted",
    description:
      "Fully managed by our team. SSL, automatic backups, and 99.9% uptime.",
    badge: "Managed",
    features: [
      "SSL included",
      "Automatic backups",
      "Auto-updates",
      "Scales automatically",
    ],
  },
  {
    icon: Palette,
    title: "White-Label Available",
    description: "Rebrand the platform with your logo, colors, and domain.",
    features: [
      "Your logo & colors",
      "Custom domain",
      "Resell as your own",
      "Agency-friendly",
    ],
  },
];

/* --------------------------- Pricing --------------------------- */
export const PRICING_HEADER = {
  title: "Simple, feature-based pricing",
  subtitle: "Pay for the plan, not the team. No per-user fees, ever.",
} as const;

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "€499",
    description: "Solo operators & small businesses",
    cta: "Get a Free Demo",
    features: [
      "Online booking portal",
      "Up to 3 specialists",
      "Up to 15 services",
      "Calendar view",
      "Email notifications",
      "Basic analytics",
    ],
  },
  {
    name: "Business",
    price: "€899",
    description: "Growing teams that need the full toolkit",
    cta: "Get a Free Demo",
    popular: true,
    features: [
      "Unlimited specialists",
      "Service bundles",
      "Booking transfers",
      "Push notifications",
      "Advanced analytics",
    ],
  },
  {
    name: "Pro",
    price: "€1,499",
    description: "For businesses that own their stack",
    cta: "Get a Free Demo",
    features: [
      "On-premises deployment",
      "White-label branding",
      "REST API access",
      "Multi-location support",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored deployments at scale",
    cta: "Contact Sales",
    features: [
      "Custom integrations",
      "CRM & payment gateways",
      "Dedicated onboarding",
      "Named account manager",
      "Custom SLA",
    ],
  },
];

export const PRICING_FOOTER =
  "All prices are one-time license fees for self-hosted deployment. Monthly cloud-hosted plans available on request.";

export const PRICING_PLAN_ICONS = [Rocket, Star, Building2, Sparkles] as const;

/* ------------------------ Testimonials ------------------------- */
export const TESTIMONIALS_HEADER = {
  title: "Loved by teams that live on their calendar",
  subtitle: "From single chairs to multi-location agencies.",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We replaced WhatsApp booking chaos in one afternoon. Staff sees their schedule instantly, clients book themselves — no-shows dropped by half.",
    name: "Arben M.",
    role: "Barber Studio",
    location: "Tirana",
  },
  {
    quote:
      "8 specialists, one flat fee. Most platforms charge per chair. Rezerveo charges per plan.",
    name: "Dr. Elisa P.",
    role: "Physiotherapy Center",
    location: "Shkodër",
  },
  {
    quote: "We white-label Rezerveo for 12 salon clients as our own product.",
    name: "M. Cela",
    role: "Digital Agency",
    location: "Albania",
  },
];

/* ----------------------------- FAQ ----------------------------- */
export const FAQ_HEADER = {
  title: "Questions, answered",
  subtitle: "Everything you need to know before your demo.",
} as const;

export const FAQS: FaqItem[] = [
  {
    question: "Do you charge per user or per chair?",
    answer:
      "Never. Rezerveo uses feature-based pricing — you pay for the plan, not the number of specialists. Add as many team members as you need without your bill changing.",
  },
  {
    question: "Can I run Rezerveo on my own server?",
    answer:
      "Yes. The Pro plan includes on-premises / self-hosted deployment via Docker or VM, giving you full data sovereignty with no third-party dependency.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are live in under 30 minutes — add your team, define services, set working hours and pricing, then share your booking link.",
  },
  {
    question: "Can I white-label the platform?",
    answer:
      "Absolutely. From the Pro plan up you can rebrand Rezerveo with your own logo, colors, and domain — agencies resell it as their own product.",
  },
  {
    question: "Who owns the data?",
    answer:
      "You do. With self-hosted deployment your data stays on your infrastructure. Cloud-hosted plans keep your data isolated with automatic backups and SSL.",
  },
  {
    question: "Is there a cloud-hosted option?",
    answer:
      "Yes. Alongside one-time self-hosted licenses, we offer fully managed cloud hosting with SSL, automatic backups, auto-updates and 99.9% uptime — monthly plans available on request.",
  },
];

/* -------------------------- Final CTA -------------------------- */
export const FINAL_CTA = {
  headline: "Ready to take control of your bookings?",
  subheadline: "Start with a free demo. See Rezerveo live in 20 minutes.",
  primaryCta: "Book a Free Demo",
  secondaryCta: "View Pricing",
} as const;

/* --------------------------- Contact --------------------------- */
export const CONTACT = {
  title: "Book your free demo",
  subtitle:
    "Tell us about your business and we'll show you Rezerveo live in 20 minutes. No commitment.",
} as const;

/* ---------------------------- Footer --------------------------- */
export const FOOTER_LINKS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Deployment", href: "#deployment" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

/* --------------------- Booking form options -------------------- */
export const BUSINESS_TYPE_OPTIONS = [
  "Barbershop",
  "Hair Salon",
  "Physiotherapy Clinic",
  "Nail & Beauty",
  "Fitness & Personal Training",
  "Multi-location Business",
  "Other",
] as const;

export const TEAM_SIZE_OPTIONS = [
  "1 (Solo)",
  "2-3",
  "4-10",
  "11-25",
  "25+",
] as const;
