import type { Metadata } from "next";
import Image from "next/image";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PillButton } from "@/components/ui/pill-button";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Page Not Found | JazzHQ",
  description: "The page you are looking for could not be found.",
  path: "/404",
  indexable: false,
});

export default function NotFound() {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="not-found-page flex-1">
        <div className="not-found-page__inner page-section">
          <div className="not-found-page__copy">
            <h1 className="not-found-page__title">Oops!</h1>
            <p className="not-found-page__subtitle">You are lost</p>
          </div>

          <div className="not-found-page__illustration">
            <Image
              src="/assets/not-found/404-illustration.svg"
              alt="404 error illustration of a lost character"
              width={654}
              height={400}
              priority
              className="not-found-page__404-text"
            />
          </div>

          <PillButton href="/" className="not-found-page__cta">
            Go Home
          </PillButton>
        </div>
      </main>
      <Footer />
    </GridBackground>
  );
}
