import type { Metadata } from "next";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { TrustedByStrip } from "@/components/home/trusted-by-strip";
import { MarketplaceTabs } from "@/components/home/marketplace-tabs";
import { BackedBySection } from "@/components/home/backed-by-section";
import { TestimonialCarousel } from "@/components/shared/testimonial-carousel";
import { CtaSection } from "@/components/home/cta-section";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "AI Distribution Platform | JazzHQ",
  description:
    "JazzHQ connects AI vendors with 1,000+ certified resellers ready to sell, implement, and support your product. List free or become a partner today.",
  path: "/",
});

export default function HomePage() {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedByStrip />
        <MarketplaceTabs />
        <BackedBySection />
        <TestimonialCarousel />
        <CtaSection />
      </main>
      <Footer />
    </GridBackground>
  );
}
