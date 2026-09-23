/** Editorial content for the Sponsorship Options section. */

export const SPONSORSHIP_HEADING = "Three simple ways to own the conversation.";

export type SponsorshipOption = {
  id: string;
  name: string;
  branding: string;
  points: string[];
  /** Card surface + text colours. No gradients. */
  surface: string;
  ink: string;
  muted: string;
  rule: string;
};

export const SPONSORSHIP_OPTIONS: SponsorshipOption[] = [
  {
    id: "white-labelled",
    name: "White labelled",
    branding: "No JazzHQ branding",
    points: [
      "One sponsor owns the event narrative",
      "Audience built around sponsor ICP",
      "Workshop / demo / discussion framed around sponsor category",
      "Priority introductions and follow-up",
    ],
    surface: "#ffffff",
    ink: "#131315",
    muted: "#5b5b63",
    rule: "rgba(19,19,21,0.10)",
  },
  {
    id: "exclusive",
    name: "Exclusive",
    branding: "JazzHQ branded",
    points: [
      "One sponsor owns the event narrative",
      "Audience built around sponsor ICP",
      "Workshop / demo / discussion framed around sponsor category",
      "Priority introductions and follow-up",
    ],
    surface: "#ffe4e0",
    ink: "#131315",
    muted: "#6b4f4b",
    rule: "rgba(19,19,21,0.10)",
  },
  {
    id: "co-market",
    name: "Co-market",
    branding: "JazzHQ branded",
    points: [
      "Two complementary sponsors share room and cost",
      "Broader market conversation without competitor conflict",
      "Joint promotion and content distribution",
      "Shared attendee engagement",
    ],
    surface: "#e6e3ff",
    ink: "#131315",
    muted: "#55507a",
    rule: "rgba(19,19,21,0.10)",
  },
];

export const SPONSOR_CTA_LABEL = "Become a Sponsor";
