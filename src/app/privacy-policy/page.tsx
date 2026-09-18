import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Get in Touch with JazzHQ - Curated SaaS and AI Marketplace",
  description:
    "Learn how JazzHQ collects, uses, and protects your personal data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      effectiveDate="10th July 2023"
      lastUpdated="15th Jan 2026"
    >
      <PrivacyPolicyContent />
    </LegalPageShell>
  );
}
