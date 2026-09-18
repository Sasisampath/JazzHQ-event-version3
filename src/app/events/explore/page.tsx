import type { Metadata } from "next";
import { EventExplorer } from "@/features/jazzclub/components/EventExplorer";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Pick your event | Jazzclub by JazzHQ",
  description:
    "Find the next Jazzclub room near you. Curated AI GTM rooms for founders, operators and partners.",
  path: "/events/explore",
});

export default function EventsExplorePage() {
  return <EventExplorer />;
}
