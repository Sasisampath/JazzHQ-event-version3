import type { Metadata } from "next";
import { CinematicHero } from "@/features/jazzclub/components/CinematicHero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Jazzclub Events | JazzHQ",
  description:
    "Curated AI GTM rooms for founders, operators and partners. Find the next Jazzclub room near you.",
  path: "/events",
});

/**
 * One cinematic viewport. The footer sits below only for site consistency;
 * there are no further landing-page sections.
 */
export default function EventsPage() {
  return <CinematicHero />;
}
