import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  effectiveDate?: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  effectiveDate,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <main className="legal-page flex-1">
        <article className="legal-page__inner page-section">
          <header className="legal-page__header">
            <h1 className="legal-page__title">{title}</h1>
            {effectiveDate && (
              <p className="legal-page__meta">Effective Date: {effectiveDate}</p>
            )}
            {lastUpdated && (
              <p className="legal-page__meta">Last Updated on: {lastUpdated}</p>
            )}
          </header>
          <div className="legal-page__body">{children}</div>
        </article>
      </main>
      <Footer />
    </GridBackground>
  );
}
