import type { Metadata } from "next";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OnboardingFormPage } from "@/components/onboarding/onboarding-form-page";
import { APPLY_TO_JOIN_PAGE } from "@/data/onboarding";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Want AI Revenue? Become a JazzHQ Reseller Partner Now",
  description:
    "Add high-margin AI products to your agency's portfolio with JazzHQ. Access vetted vendors, sales battlecards, and training, then start earning today.",
  path: "/for-partners",
});

export default function ForPartnersPage() {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="onboarding-main flex-1">
        <OnboardingFormPage config={APPLY_TO_JOIN_PAGE} />
      </main>
      <Footer />
    </GridBackground>
  );
}
