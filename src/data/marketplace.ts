export type MarketplaceRole = "vendor" | "partner";

export type MarketplaceIconName =
  | "search"
  | "robot"
  | "eye"
  | "rocket"
  | "megaphone"
  | "ai"
  | "upload"
  | "users"
  | "templates"
  | "handshake"
  | "package"
  | "grid"
  | "percent"
  | "launchFast"
  | "shield"
  | "video"
  | "monitor"
  | "headset";

export type MarketplacePanel = {
  id: string;
  label: string;
  navIcon: MarketplaceIconName;
  badge: string;
  title: string;
  description: string;
  image: string;
};

export type MarketplaceConfig = {
  role: MarketplaceRole;
  tabLabel: string;
  cta: string;
  panels: MarketplacePanel[];
};

export const MARKETPLACE_CONFIG: Record<MarketplaceRole, MarketplaceConfig> = {
  vendor: {
    role: "vendor",
    tabLabel: "I'm a Vendor",
    cta: "List Your Product",
    panels: [
      {
        id: "listing",
        label: "List for Free",
        navIcon: "search",
        badge: "PROGRAM OVERVIEW",
        title: "List for Free",
        description:
          "Put your product in front of thousands of consultants, agencies, and channel partners across 30+ countries actively looking for AI tools to sell, implement, and support. Get recommended. Get leads",
        image: "/assets/marketplace/vendor/listing.svg",
      },
      {
        id: "ai",
        label: "Manage and enable with AI",
        navIcon: "robot",
        badge: "PROGRAM OVERVIEW",
        title: "Manage and enable with AI",
        description:
          "Offer AI Partner Assistants to onboard, train, and activate partners. Cut out the busy work and keep humans in the loop only for strategic check-ins and key decisions.",
        image: "/assets/marketplace/vendor/ai-management.svg",
      },
      {
        id: "activation",
        label: "On-demand Activation",
        navIcon: "rocket",
        badge: "PROGRAM OVERVIEW",
        title: "On-demand Activation",
        description:
          "Step on the gas for partner recruitment and activation. Run sponsored events, co-hosted roadshows, and GEO expansion programs with our global empanelled team of event marketers, partner managers, and specialists.",
        image: "/assets/marketplace/vendor/activation.svg",
      },
    ],
  },
  partner: {
    role: "partner",
    tabLabel: "I'm a Partner",
    cta: "Become a Partner",
    panels: [
      {
        id: "discover",
        label: "Discover AI products to monetize",
        navIcon: "search",
        badge: "PROGRAM OVERVIEW",
        title: "Discover AI products to monetize",
        description:
          "Put your product in front of thousands of consultants, agencies, and channel partners across 30+ countries actively looking for AI tools to sell, implement, and support. Get recommended. Get leads",
        image: "/assets/marketplace/partner/discover.svg",
      },
      {
        id: "saas",
        label: "Build your own SaaS offering",
        navIcon: "package",
        badge: "PROGRAM OVERVIEW",
        title: "Build your own SaaS offering",
        description:
          "Use ready-to-launch AI and SaaS templates to package your expertise into products, services, and repeatable revenue streams.",
        image: "/assets/marketplace/partner/saas-offering.svg",
      },
      {
        id: "partnerships",
        label: "The only Learning Center you need",
        navIcon: "handshake",
        badge: "PROGRAM OVERVIEW",
        title: "The only Learning Center you need",
        description:
          "Everything you need to learn, sell, and stay current on AI in one place — with exclusive vendor-led courses, certifications, playbooks, and AMA sessions co-created with leading AI companies.",
        image: "/assets/marketplace/partner/learning-center.svg",
      },
    ],
  },
};
