import type { Metadata } from "next";
import { CalendarSection } from "@/features/jazzclub/components/CalendarSection";
import { CinematicHero } from "@/features/jazzclub/components/CinematicHero";
import { EventsSection } from "@/features/jazzclub/components/EventsSection";
import { JazzclubTestimonials } from "@/features/jazzclub/components/JazzclubTestimonials";
import { PartnersSection } from "@/features/jazzclub/components/PartnersSection";
import { SponsorContact } from "@/features/jazzclub/components/SponsorContact";
import { SponsorshipOptions } from "@/features/jazzclub/components/SponsorshipOptions";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "JazzClub Events | JazzHQ",
  description:
    "Curated AI GTM rooms for founders, operators and partners. Attend the next JazzClub room, or sponsor one.",
  path: "/events",
});

/** One page: attend a room, or sponsor one. */
export default function EventsPage() {
  return (
    <>
      <CinematicHero />
      <EventsSection />
      <SponsorshipOptions />
      <CalendarSection />
      <JazzclubTestimonials />
      <PartnersSection />
      <SponsorContact />
    </>
  );
}
