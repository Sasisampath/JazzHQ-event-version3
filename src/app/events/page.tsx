import type { Metadata } from "next";
import { CalendarSection } from "@/features/jazzclub/components/CalendarSection";
import { CinematicHero } from "@/features/jazzclub/components/CinematicHero";
import { JazzclubTestimonials } from "@/features/jazzclub/components/JazzclubTestimonials";
import { SponsorshipOptions } from "@/features/jazzclub/components/SponsorshipOptions";
import { VideoTestimonials } from "@/features/jazzclub/components/VideoTestimonials";
import { WhoSponsors } from "@/features/jazzclub/components/WhoSponsors";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "JazzClub Events | JazzHQ",
  description:
    "Curated AI GTM rooms for founders, operators and partners. See who sponsors JazzClub, how sponsorship works and where JazzClub is heading in 2027.",
  path: "/events",
});

/** The JazzClub story page. The catalogue lives at /events/explore. */
export default function EventsPage() {
  return (
    <>
      <CinematicHero />
      <VideoTestimonials />
      <WhoSponsors />
      <SponsorshipOptions />
      <CalendarSection />
      <JazzclubTestimonials />
    </>
  );
}
