import {
  generateListingDetailMetadata,
  MarketplaceListingDetailScreen,
} from "@/features/marketplace/screens/MarketplaceListingDetail/marketplaceListingDetailScreen";
import { getMarketplaceListings } from "@/features/marketplace/api/listingApi";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    category: string;
    vendor: string;
  }>;
};

async function mapParams(params: PageProps["params"]) {
  const { category, vendor } = await params;

  // Dynamically resolve the ID by scanning the listings for the slugified vendor name
  try {
    const res = await getMarketplaceListings({ perPage: 100 });
    const match = res.data.find((l) => {
      const vendorSlug = l.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return vendorSlug === vendor.toLowerCase();
    });
    if (match) {
      return { tenant: match.tenantSlug, listingId: String(match.id) };
    }
  } catch (e) {
    console.error("Failed to lookup listing ID for vendor:", vendor, e);
  }

  // Fallback if not found (will likely trigger a 404 in the detail fetch)
  return { tenant: vendor, listingId: "0" };
}

export async function generateMetadata({ params }: PageProps) {
  const { category, vendor } = await params;
  const mappedParams = Promise.resolve(await mapParams(params));
  return generateListingDetailMetadata({
    params: mappedParams,
    canonicalPath: `/${category}/${vendor}`,
  });
}

export default async function MarketplaceListingPage({ params }: PageProps) {
  const mappedParams = Promise.resolve(await mapParams(params));
  return <MarketplaceListingDetailScreen params={mappedParams} />;
}
