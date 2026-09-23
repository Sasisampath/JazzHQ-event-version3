import type { MetadataRoute } from "next";
import { getMarketplaceListings } from "@/features/marketplace/api/listingApi";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL || "https://www.jazzhq.ai";

function slugifyCategory(category?: string): string {
  if (!category || !category.trim()) return "";
  return category.toLowerCase().trim().replace(/\s+/g, "-");
}

function slugifyVendor(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/marketplace",
    "/events",
    "/about-us",
    "/for-partners",
    "/for-vendors",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  let dynamicListingEntries: MetadataRoute.Sitemap = [];

  try {
    const firstPage = await getMarketplaceListings({ page: 0, perPage: 100 });
    let allListings = [...(firstPage.data || [])];

    const totalItems = firstPage.totalItems || allListings.length;
    const perPage = firstPage.perPage || 100;
    const totalPages = Math.ceil(totalItems / perPage);

    if (totalPages > 1) {
      const pagePromises = [];
      for (let p = 1; p < totalPages; p++) {
        pagePromises.push(getMarketplaceListings({ page: p, perPage }));
      }
      const pageResults = await Promise.allSettled(pagePromises);
      pageResults.forEach((result) => {
        if (result.status === "fulfilled" && result.value.data) {
          allListings.push(...result.value.data);
        }
      });
    }

    dynamicListingEntries = allListings
      .map((listing) => {
        const category = listing.categories && listing.categories.length > 0 ? listing.categories[0] : "";
        const categorySlug = slugifyCategory(category);
        const vendorSlug = slugifyVendor(listing.name);

        if (!categorySlug || !vendorSlug) return null;

        return {
          url: `${BASE_URL}/${categorySlug}/${vendorSlug}`,
          lastModified: new Date(),
        };
      })
      .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
  } catch (error) {
    console.error("Failed to generate dynamic sitemap for marketplace listings:", error);
  }

  return [...staticEntries, ...dynamicListingEntries];
}

