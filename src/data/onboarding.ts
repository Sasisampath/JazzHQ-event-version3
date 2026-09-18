export type OnboardingHighlight = {
  before: string;
  highlight: string;
};

export type OnboardingFieldIcon =
  | "user"
  | "mail"
  | "building"
  | "link"
  | "globe"
  | "document";

export type OnboardingField = {
  id: string;
  label: string;
  type: "text" | "email" | "url" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  icon: OnboardingFieldIcon;
  options?: { value: string; label: string }[];
  half?: boolean;
};

export type OnboardingPageConfig = {
  slug: string;
  cardBackground: string;
  highlightColor: string;
  cardHeading: string;
  highlights: OnboardingHighlight[];
  formTitle: string;
  formSubtitle: string;
  videoId?: string;
  filloutId?: string;
  fields?: OnboardingField[];
  submitLabel?: string;
  submitClass?: string;
};

export const LIST_PRODUCT_PAGE: OnboardingPageConfig = {
  slug: "forvendors",
  cardBackground: "#ECEBFF",
  highlightColor: "#564EF0",
  cardHeading: "Introducing a new way to grow your AI product.",
  highlights: [
    {
      before: "Designed for AI companies launching their ",
      highlight: "first product or scaling globally.",
    },
    {
      before: "Finding your ",
      highlight: "first reseller or building a worldwide partner network.",
    },
    {
      before: "Expanding into ",
      highlight: "new markets through trusted agencies.",
    },
    {
      before: "Launching your ",
      highlight: "first partner program or optimizing an existing one.",
    },
  ],
  formTitle: "List Your AI Product",
  formSubtitle: "Get discovered by thousands of partner agencies next week.",
  filloutId: "iE9ufXCkRUus",
};

export const APPLY_TO_JOIN_PAGE: OnboardingPageConfig = {
  slug: "forpartners",
  cardBackground: "#FFDADB",
  highlightColor: "#E5484D",
  cardHeading: "Introducing a new way to grow your agency.",
  highlights: [
    {
      before: "Add new AI products to ",
      highlight: "your service portfolio.",
    },
    {
      before: "Generate recurring ",
      highlight: "revenue through trusted partnerships.",
    },
    {
      before: "Connect with ",
      highlight: "vetted AI vendors looking for implementation partners.",
    },
    {
      before: "Grow your business ",
      highlight: "without building products from scratch.",
    },
  ],
  formTitle: "Apply to Join Ecosystem",
  formSubtitle: "Add AI reseller revenue to your agency portfolio.",
  filloutId: "ah91Ye93Jrus",
};
