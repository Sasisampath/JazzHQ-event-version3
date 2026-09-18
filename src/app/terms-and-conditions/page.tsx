import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { TermsAndConditionsContent } from "@/components/legal/terms-and-conditions-content";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Terms and Conditions | JazzHQ",
  description: "Read the JazzHQ Terms of Use for the platform and services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell title="Terms & Conditions">
      <TermsAndConditionsContent />
    </LegalPageShell>
  );
}
