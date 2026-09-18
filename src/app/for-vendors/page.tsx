import type { Metadata } from "next";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OnboardingFormPage } from "@/components/onboarding/onboarding-form-page";
import { LIST_PRODUCT_PAGE } from "@/data/onboarding";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "List Your AI Product in the JazzHQ Partner Marketplace",
  description:
    "List your AI product on JazzHQ and reach thousands of consultants, agencies, and resellers actively hunting for new tools to sell. Get discovered today.",
  path: "/for-vendors",
});

export default function ForVendorsPage() {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="onboarding-main flex-1">
        <OnboardingFormPage config={LIST_PRODUCT_PAGE} />
      </main>
      <Footer />
    </GridBackground>
  );
}
