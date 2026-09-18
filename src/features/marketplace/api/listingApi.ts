import { apiFetch, ApiError } from "@/features/marketplace/api/apiClient";

import type {
  MarketplaceListingDetail,
  MarketplaceListingSummary,
  PageResponse,
  TemplateSummary,
} from "@/features/marketplace/models/listingTypes";

export async function getMarketplaceListings(params: {
  keyword?: string;
  category?: string;
  page?: number;
  perPage?: number;
}): Promise<PageResponse<MarketplaceListingSummary>> {
  const search = new URLSearchParams();
  if (params.keyword) search.set("keyword", params.keyword);
  if (params.category) search.set("category", params.category);
  search.set("page", String(params.page ?? 0));
  search.set("perPage", String(params.perPage ?? 12));

  return apiFetch<PageResponse<MarketplaceListingSummary>>(
    `/marketplace/listings?${search.toString()}`,
    { cache: "no-store" }
  );
}

export async function getMarketplaceListing(
  tenantSlug: string,
  listingId: string
): Promise<MarketplaceListingDetail> {
  return apiFetch<MarketplaceListingDetail>(
    `/marketplace/listings/${encodeURIComponent(tenantSlug)}/${encodeURIComponent(listingId)}`,
    { cache: "no-store" }
  );
}

export { ApiError };

export async function getMarketplaceTemplates(params: {
  keyword?: string;
  page?: number;
  perPage?: number;
}): Promise<PageResponse<TemplateSummary>> {
  const search = new URLSearchParams();
  if (params.keyword) search.set("keyword", params.keyword);
  search.set("page", String(params.page ?? 0));
  search.set("perPage", String(params.perPage ?? 12));

  return apiFetch<PageResponse<TemplateSummary>>(
    `/marketplace/templates?${search.toString()}`,
    { cache: "no-store" }
  );
}
