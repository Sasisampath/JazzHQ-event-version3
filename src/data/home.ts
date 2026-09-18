export const LOGO_MARQUEE_DURATION = "36s";

export type LogoItem = {
  name: string;
  src: string;
};

export const TRUSTED_BY_LOGOS: LogoItem[] = [
  {
    name: "SurveySparrow",
    src: "/assets/logos/surveysparrow.png",
  },
  {
    name: "Monday.com",
    src: "/assets/logos/monday.svg",
  },
  {
    name: "WATI",
    src: "/assets/logos/wati.svg",
  },
  {
    name: "SeamlessHR",
    src: "/assets/logos/seamlesshr.svg",
  },
  {
    name: "SuperOps",
    src: "/assets/logos/superops.svg",
  },
  {
    name: "Rocketlane",
    src: "/assets/logos/rocketlane.svg",
  },
  {
    name: "ElevenLabs",
    src: "/assets/logos/elevenlabs.svg",
  },
  {
    name: "HubSpot",
    src: "/assets/logos/hubspot-trusted.svg",
  },
];

export const ADVISORS = [
  {
    name: "Shan Krishnasamy",
    role: "Prev. Co-founder & CTO, Freshworks",
    photo: "/assets/backed-by/advisor-shan.webp",
  },
  {
    name: "Sidharth Malik",
    role: "Advisory Board Member WestBridge Capital;\nPrev. CEO, Clevertap; CRO, Freshworks;\nMD, Akamai Technologies",
    photo: "/assets/backed-by/advisor-sidharth.png",
  },
  {
    name: "Shihab Muhammed",
    role: "Founder & CEO, SurveySparrow;\nPrev. Emp #1 & Co-founder - Freshservice",
    photo: "/assets/backed-by/advisor-shihab.webp",
  },
];

export const FOUNDING_LOGOS: LogoItem[] = [
  {
    name: "ElevenLabs",
    src: "/assets/logos/elevenlabs.svg",
  },
  {
    name: "Intercom",
    src: "/assets/logos/intercom.svg",
  },
  {
    name: "EY",
    src: "/assets/logos/ey.svg",
  },
  {
    name: "plum",
    src: "/assets/logos/plum.svg",
  },
  {
    name: "Klarna",
    src: "/assets/logos/klarna.svg",
  },
  {
    name: "Microsoft",
    src: "/assets/logos/microsoft.svg",
  },
  {
    name: "Zoho",
    src: "/assets/logos/zoho.svg",
  },
  {
    name: "talabat",
    src: "/assets/logos/talabat.svg",
  },
  {
    name: "coupang",
    src: "/assets/logos/coupang.svg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The evening has been fantastic, lots of lived experiences from people. Loved working with the Jazz HQ team towards curating this event and executing today wonderfully.",
    name: "Shashidhar Bellur",
    company: "HubSpot",
    logo: "/assets/logos/hubspot.svg",
    panel: "/assets/testimonials/shashidhar-bellur.webp",
    photoPanelBg: "#564EF0",
    quoteBg: "#ECEBFF",
    showHeart: true,
    heartBadge: "/assets/testimonials/heart-badge-shashidhar.webp",
  },
  {
    quote:
      "I'm really proud of the partnership we've built with JazzHQ and I look forward to working with them in the future.",
    name: "Chhavi Porwal",
    company: "monday.com",
    logo: "/assets/testimonials/logo-monday.svg",
    panel: "/assets/testimonials/chhavi-porwal.webp",
    quoteBg: "#D4FFE8",
    photoPanelBg: "#14AE5D",
    showHeart: true,
    heartBadge: "/assets/testimonials/heart-badge-chhavi.webp",
  },
  {
    quote:
      "With JazzHQ, we were able to find the right partners, engage deeply with them and double revenue within a year.",
    name: "Seun Obatuyi",
    company: "SeamlessHR",
    logo: "/assets/testimonials/logo-seamlesshr.svg",
    panel: "/assets/testimonials/seun-obatuyi.webp",
    photoPanelBg: "#E5484D",
    quoteBg: "#FFEAEA",
    showHeart: true,
    heartBadge: "/assets/testimonials/heart-badge-seun-white.webp",
  },
] as const;
