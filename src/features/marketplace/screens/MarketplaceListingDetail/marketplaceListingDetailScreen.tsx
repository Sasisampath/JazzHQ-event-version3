import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MarketplaceHeader } from "@/layouts/MarketplaceHeader/marketplaceHeader";
import { MarketplaceListingDetail } from "@/features/marketplace/components/MarketplaceListingDetail/marketplaceListingDetail";
import { ApiError } from "@/features/marketplace/api/apiClient";
import { getMarketplaceListing } from "@/features/marketplace/api/listingApi";
import { normalizeListing } from "@/features/marketplace/helper/listingHelper";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  canonicalUrl,
  DEFAULT_OG_IMAGE,
  INDEXABLE_ROBOTS,
  NOINDEX_ROBOTS,
  pageAlternates,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

type MarketplaceListingDetailScreenProps = {
  params: Promise<{
    tenant: string;
    listingId: string;
  }>;
  canonicalPath?: string;
};

export async function generateListingDetailMetadata({
  params,
  canonicalPath,
}: MarketplaceListingDetailScreenProps): Promise<Metadata> {
  const { tenant, listingId } = await params;

  try {
    const listing = normalizeListing(await getMarketplaceListing(tenant, listingId));
    const title = `${listing.name}${listing.tagline ? ` — ${listing.tagline}` : ""} | JAZZ·HQ`;
    const description =
      listing.description?.trim() || listing.tagline?.trim() || undefined;
    const image = listing.logoUrl || DEFAULT_OG_IMAGE;
    const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    const url = canonicalPath ? canonicalUrl(canonicalPath) : undefined;

    return {
      title,
      description,
      ...(canonicalPath
        ? {
            alternates: pageAlternates(canonicalPath),
          }
        : {}),
      robots: INDEXABLE_ROBOTS,
      openGraph: {
        type: "website",
        locale: "en_US",
        siteName: SITE_NAME,
        title,
        ...(description ? { description } : {}),
        ...(url ? { url } : {}),
        images: [{ url: ogImage, alt: listing.name }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        ...(description ? { description } : {}),
        images: [ogImage],
      },
    };
  } catch {
    return {
      title: "Listing not found | JAZZ·HQ",
      description: "This marketplace listing could not be found.",
      robots: NOINDEX_ROBOTS,
    };
  }
}

export async function MarketplaceListingDetailScreen({ params }: MarketplaceListingDetailScreenProps) {
  const { tenant, listingId } = await params;

  let listing;
  try {
    listing = normalizeListing(await getMarketplaceListing(tenant, listingId));
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <MarketplaceHeader activeSubNav="vendor-listings" />
      <main className="flex-1">
        <MarketplaceListingDetail
          key={`${listing.tenantSlug}-${listing.id}`}
          listing={listing}
        />
      </main>
      <Footer />
    </GridBackground>
  );
}
