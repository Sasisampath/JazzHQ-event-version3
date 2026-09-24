/** Editorial content for the Sponsorship section. */

export const SPONSORSHIP_HEADING = "Three simple ways to own the conversation.";

export type SponsorshipOption = {
  id: string;
  name: string;
  branding: string;
  points: string[];
  /** Figma card surface. */
  tone: "white" | "lilac" | "dark";
  /** Figma bullet tick colour. */
  tick: string;
  /** Archive photograph for the card's image slot. */
  image: string;
  imageAlt: string;
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
    tone: "white",
    tick: "#14ae5d",
    image: "/assets/jazzclub/cinematic/room-05.webp",
    imageAlt: "Speakers leading a JazzClub room discussion",
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
    tone: "lilac",
    tick: "#564ef0",
    image: "/assets/jazzclub/cinematic/room-06.webp",
    imageAlt: "An attendee speaking at a JazzClub evening",
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
    tone: "dark",
    tick: "#fe4c4c",
    image: "/assets/jazzclub/cinematic/room-03.webp",
    imageAlt: "Partners together at a JazzClub gathering",
  },
];

export const SPONSOR_CTA_LABEL = "Become a Sponsor";
