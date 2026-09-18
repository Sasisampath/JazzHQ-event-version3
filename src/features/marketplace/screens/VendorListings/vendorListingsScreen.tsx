import { Suspense } from "react";
import { MarketplaceHeader } from "@/layouts/MarketplaceHeader/marketplaceHeader";
import { getMarketplaceListings } from "@/features/marketplace/api/listingApi";
import type { PageResponse, MarketplaceListingSummary } from "@/features/marketplace/models/listingTypes";
import { VendorListingsClient } from "@/features/marketplace/screens/VendorListings/vendorListingsClient";
import { GridBackground } from "@/components/layout/grid-background";
import { TopBanner } from "@/components/layout/top-banner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type VendorListingsScreenProps = {
  searchParams: Promise<{
    keyword?: string;
    category?: string;
    page?: string;
  }>;
};

export async function VendorListingsScreen({ searchParams }: VendorListingsScreenProps) {
  const params = await searchParams;
  const keyword = params.keyword || "";
  const category = params.category || "all";
  let pageParam = params.page ? parseInt(params.page, 10) : 1;
  let page = isNaN(pageParam) || pageParam < 1 ? 0 : pageParam - 1;

  let result: PageResponse<MarketplaceListingSummary> = { data: [], totalItems: 0, page: 0, perPage: 12 };
  let errorMsg: string | undefined = undefined;

  try {
    result = await getMarketplaceListings({
      keyword: keyword || undefined,
      category: category !== "all" ? category : undefined,
      page,
      perPage: 12,
    });

    if (result.totalItems > 0 && result.data.length === 0 && page > 0) {
      page = 0;
      result = await getMarketplaceListings({
        keyword: keyword || undefined,
        category: category !== "all" ? category : undefined,
        page: 0,
        perPage: 12,
      });
    }
  } catch (err) {

    errorMsg = err instanceof Error ? err.message : "Failed to load listings";
  }

  return (
    <GridBackground>
      <TopBanner />
      <Header />
      <MarketplaceHeader activeSubNav="vendor-listings" />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 md:px-6 py-6 md:py-8">
        <Suspense fallback={<p className="text-sm text-[#6b7280]">Loading listings…</p>}>
          <VendorListingsClient
            initialListings={result.data}
            initialTotal={result.totalItems}
            initialPage={page}
            initialKeyword={keyword}
            initialCategory={category}
            initialError={errorMsg}
          />
        </Suspense>
      </main>
      <Footer />
    </GridBackground>
  );
}
