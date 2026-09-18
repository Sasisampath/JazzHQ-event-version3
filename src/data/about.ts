export const ABOUT_FOUNDERS = [
  {
    name: "Krish Ramachandran",
    role: "FOUNDER AND CEO OF JAZZHQ",
    image: "/assets/about/founders/krish.svg",
  },
  {
    name: "Vijayraj",
    role: "CO-FOUNDER AND CTO",
    image: "/assets/about/founders/vijayraj.svg",
  },
] as const;

export const ABOUT_PAPER_FRAME = "/assets/about/paper-frame.svg";

export type AboutTimelineColor = "red" | "blue" | "green";

export type AboutTimelineItem = {
  date: string;
  title: string;
  description: string;
  color?: AboutTimelineColor;
  image: string;
  imageFit?: "cover" | "contain";
};

export const ABOUT_TIMELINE: AboutTimelineItem[] = [
  {
    date: "July 2023",
    title: "The Idea Takes Shape",
    description:
      "JazzHQ began with a simple belief: AI products will need trusted humans to sell, implement, and support them.",
    color: "red",
    image: "/assets/about/timeline/idea-takes-shape.webp",
    imageFit: "contain",
  },
  {
    date: "Jan 2024",
    title: "Partner Advisory Goes Live",
    description:
      "We started working with AI-first and SaaS companies to help them design partner programs, recruit partners, and build repeatable go-to-market playbooks.",
    image: "/assets/about/timeline/partner-advisory.webp",
  },
  {
    date: "July 2024",
    title: "From Services To System",
    description:
      "After working with multiple vendors and partner teams, we saw the same problem repeat: partner discovery, onboarding, enablement, and co-selling were still being run through spreadsheets, calls, and scattered tools.",
    color: "blue",
    image: "/assets/about/timeline/services-to-system.webp",
  },
  {
    date: "Jan 2025",
    title: "JazzHQ Starts Becoming A Platform",
    description:
      "We began building the Partner OS: An AI-native platform to help vendors manage partner onboarding, training, content, lead sharing, and partner operations in one place.",
    image: "/assets/about/timeline/platform.jpg",
  },
  {
    date: "July 2025",
    title: "The Partner Network Expands",
    description:
      "JazzHQ started building a global ecosystem of consultants, agencies, and channel partners who want to add AI products and services to their portfolio.",
    color: "green",
    image: "/assets/about/timeline/partner-network.webp",
  },
  {
    date: "Jan 2026",
    title: "Marketplace Vision Comes Together",
    description:
      "We brought vendors, partners, templates, training, and partner operations into one connected marketplace experience.",
    image: "/assets/about/timeline/marketplace-vision.webp",
  },
  {
    date: "July 2026",
    title: "The AI Partner Marketplace Goes Live",
    description:
      "JazzHQ launches as the marketplace where AI companies and trusted partners come together to create, sell, deploy, and grow AI revenue.",
    color: "red",
    image: "/assets/about/timeline/marketplace-live.webp",
  },
];

export const ABOUT_JOURNEY_TITLE = "Our journey so far";

export const ABOUT_JOURNEY_SUBTITLE =
  "How we built the AI Reselling infrastructure from scratch.";

export const ABOUT_TIMELINE_HERO_IMAGE =
  "/assets/about/timeline/team-hero.webp";
