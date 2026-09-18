import type { Metadata } from "next";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  AboutNotepadSection,
  AboutTimelineSection,
} from "@/components/about/about-sections";
import { CtaSection } from "@/components/home/cta-section";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Meet the Team Building AI's Trusted Partner Marketplace",
  description:
    "JazzHQ was founded by former Freshworks leaders to fix broken AI discovery. Discover how the marketplace for vendors and partners began.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="flex-1">
        <AboutNotepadSection />
        <AboutTimelineSection />
        <CtaSection />
      </main>
      <Footer />
    </GridBackground>
  );
}
