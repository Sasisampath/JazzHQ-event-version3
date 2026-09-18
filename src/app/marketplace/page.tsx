import type { Metadata } from "next";
import { VendorListingsScreen } from "@/features/marketplace/screens/VendorListings/vendorListingsScreen";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Marketplace | JAZZ·HQ",
  description:
    "Discover vendors with active partner programs on the JAZZ·HQ marketplace.",
  path: "/marketplace",
});

type PageProps = {
  searchParams: Promise<{
    keyword?: string;
    category?: string;
    page?: string;
  }>;
};

export default function MarketplacePage({ searchParams }: PageProps) {
  return <VendorListingsScreen searchParams={searchParams} />;
}
