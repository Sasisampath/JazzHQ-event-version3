"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORY_OPTIONS, CategoryFilterPills } from "@/features/marketplace/components/CategoryFilterPills/categoryFilterPills";
import { VendorListingCard } from "@/features/marketplace/components/VendorListingCard/vendorListingCard";
import { VendorListingsHero } from "@/features/marketplace/components/VendorListingsHero/vendorListingsHero";
import { getMarketplaceListings } from "@/features/marketplace/api/listingApi";
import type { MarketplaceListingSummary } from "@/features/marketplace/models/listingTypes";

const PER_PAGE = 12;

type VendorListingsClientProps = {
  initialListings: MarketplaceListingSummary[];
  initialTotal: number;
  initialPage?: number;
  initialKeyword: string;
  initialCategory: string;
  initialError?: string;
};



function buildQueryString(keyword: string, category: string, page: number) {
  const params = new URLSearchParams();
  if (keyword.trim()) params.set("keyword", keyword.trim());
  if (category && category !== "all") params.set("category", category);
  if (page > 0) params.set("page", String(page + 1));
  return params.toString();
}



const MemoizedVendorListingsHero = React.memo(VendorListingsHero);

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  perPage: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
};

function Pagination({ currentPage, totalItems, perPage, onPageChange, isLoading }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / perPage);
  if (totalPages <= 1) return null;

  const from = totalItems === 0 ? 0 : currentPage * perPage + 1;
  const to = Math.min((currentPage + 1) * perPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      pages.push(0);
      if (currentPage > 2) pages.push("ellipsis-1");

      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages - 2, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push("ellipsis-2");
      pages.push(totalPages - 1);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e5e7eb] pt-6 pb-2">
      <p className="text-sm text-[#4b5563]">
        Showing <span className="font-semibold text-[#111827]">{from}</span> to{" "}
        <span className="font-semibold text-[#111827]">{to}</span> of{" "}
        <span className="font-semibold text-[#111827]">{totalItems}</span> listings
      </p>

      <div className="flex items-center space-x-1.5 sm:space-x-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0 || isLoading}
          className="inline-flex items-center justify-center rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm font-medium text-[#374151] shadow-xs hover:bg-[#f9fafb] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Previous page"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-1">
          {pageNumbers.map((p, idx) => {
            if (typeof p === "string") {
              return (
                <span key={`${p}-${idx}`} className="px-2 py-1 text-sm text-[#9ca3af]">
                  …
                </span>
              );
            }

            const isCurrent = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                disabled={isLoading}
                aria-current={isCurrent ? "page" : undefined}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer ${isCurrent
                    ? "bg-[#0f172a] text-white shadow-xs"
                    : "border border-[#d1d5db] bg-white text-[#374151] hover:bg-[#f9fafb]"
                  }`}
              >
                {p + 1}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1 || isLoading}
          className="inline-flex items-center justify-center rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm font-medium text-[#374151] shadow-xs hover:bg-[#f9fafb] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

type ResultsSectionProps = {
  listings: MarketplaceListingSummary[];
  totalItems: number;
  currentPage: number;
  isLoading: boolean;
  category: string;
  error?: string;
  onCategoryChange: (category: string) => void;
  onPageChange: (page: number) => void;
};

const VendorListingsResultsSection = React.memo(function VendorListingsResultsSection({
  listings,
  totalItems,
  currentPage,
  isLoading,
  category,
  error,
  onCategoryChange,
  onPageChange,
}: ResultsSectionProps) {
  const resultsContent = error ? (
    <div className="flex min-h-[400px] md:min-h-[640px] flex-col items-center justify-center rounded-xl border border-dashed border-[#fca5a5] bg-[#fef2f2] px-4 py-12 md:px-6 md:py-16 text-center">
      <p className="text-base font-medium text-[#991b1b]">Failed to load vendor listings</p>
      <p className="mt-2 text-sm text-[#b91c1c] max-w-[500px]">{error}</p>
    </div>
  ) : listings.length ? (
    <>
      <div className="grid auto-rows-fr gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-8">
        {listings.map((listing) => (
          <VendorListingCard key={`${listing.tenantSlug}-${listing.id}`} listing={listing} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        perPage={PER_PAGE}
        onPageChange={onPageChange}
        isLoading={isLoading}
      />
    </>
  ) : (
    <div className="flex min-h-[400px] md:min-h-[640px] flex-col items-center justify-center rounded-xl border border-dashed border-[#d1d5db] bg-[#f9fafb] px-4 py-12 md:px-6 md:py-16 text-center">
      <p className="text-base font-medium text-[#111827]">No vendor listings match your filters</p>
      <p className="mt-2 text-sm text-[#6b7280]">Try a different search term or category.</p>
    </div>
  );

  return (
    <>
      <CategoryFilterPills value={category} onChange={onCategoryChange} />

      <p className="h-5 text-sm leading-5 text-[#6b7280]">
        {isLoading ? (
          <span className="inline-block h-4 w-28 animate-pulse rounded bg-[#e5e7eb]" aria-hidden="true" />
        ) : (
          <span>{totalItems} programs found</span>
        )}
      </p>

      <div
        id="vendor-listings-grid"
        className="relative min-h-[640px] scroll-mt-6 md:scroll-mt-10"
        aria-busy={isLoading}
      >
        <div className={`min-h-full ${isLoading ? "pointer-events-none opacity-60 transition-opacity duration-200" : "transition-opacity duration-200"}`}>
          {resultsContent}
        </div>
        {isLoading ? (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/75"
            aria-live="polite"
          >
            <span className="text-sm font-medium text-[#6b7280]">Updating results…</span>
          </div>
        ) : null}
      </div>
    </>
  );
});

export function VendorListingsClient({
  initialListings,
  initialTotal,
  initialPage = 0,
  initialKeyword,
  initialCategory,
  initialError,
}: VendorListingsClientProps) {
  const pathname = usePathname();
  const fetchIdRef = useRef(0);
  const skipKeywordFetchRef = useRef(true);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(initialPage);
  const [listings, setListings] = useState(initialListings);
  const [totalItems, setTotalItems] = useState(initialTotal);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(initialError);

  const categoryRef = useRef(category);
  categoryRef.current = category;
  const keywordRef = useRef(keyword);
  keywordRef.current = keyword;

  const syncUrl = useCallback(
    (nextKeyword: string, nextCategory: string, nextPage: number) => {
      const queryString = buildQueryString(nextKeyword, nextCategory, nextPage);
      const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
      const currentUrl =
        typeof window !== "undefined"
          ? `${window.location.pathname}${window.location.search}`
          : pathname;

      if (nextUrl !== currentUrl && typeof window !== "undefined") {
        window.history.replaceState(null, "", nextUrl);
      }
    },
    [pathname]
  );

  const fetchListings = useCallback(async (nextKeyword: string, nextCategory: string, nextPage: number) => {
    const fetchId = ++fetchIdRef.current;
    setIsLoading(true);
    setError(undefined);

    try {
      let result = await getMarketplaceListings({
        keyword: nextKeyword.trim() || undefined,
        category: nextCategory !== "all" ? nextCategory : undefined,
        page: nextPage,
        perPage: PER_PAGE,
      });

      if (fetchId !== fetchIdRef.current) return;

      setListings(result.data);
      setTotalItems(result.totalItems);
    } catch (err) {
      if (fetchId !== fetchIdRef.current) return;

      setError(err instanceof Error ? err.message : "Failed to load listings");
      setListings([]);
      setTotalItems(0);
    } finally {
      if (fetchId === fetchIdRef.current) {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (initialCategory !== "all" && initialListings.length === 0) {
      void fetchListings(initialKeyword, initialCategory, initialPage);
    }
  }, [initialCategory, initialListings.length, initialKeyword, initialPage, fetchListings]);

  const handleCategoryChange = useCallback((nextCategory: string) => {
    setCategory(nextCategory);
    setPage(0);
    syncUrl(keywordRef.current, nextCategory, 0);
    void fetchListings(keywordRef.current, nextCategory, 0);
  }, [syncUrl, fetchListings]);

  const handlePageChange = useCallback((nextPage: number) => {
    setPage(nextPage);
    syncUrl(keywordRef.current, categoryRef.current, nextPage);
    void fetchListings(keywordRef.current, categoryRef.current, nextPage);
    if (typeof document !== 'undefined') {
      const grid = document.getElementById('vendor-listings-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [syncUrl, fetchListings]);

  const handleSearchSubmit = useCallback(() => {
    setPage(0);
    syncUrl(keyword, categoryRef.current, 0);
    void fetchListings(keyword, categoryRef.current, 0);
    if (typeof document !== 'undefined') {
      const grid = document.getElementById('vendor-listings-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [keyword, syncUrl, fetchListings]);

  useEffect(() => {
    if (skipKeywordFetchRef.current) {
      skipKeywordFetchRef.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      setPage(0);
      syncUrl(keyword, categoryRef.current, 0);
      void fetchListings(keyword, categoryRef.current, 0);
      if (keyword.trim() && typeof document !== 'undefined') {
        const grid = document.getElementById('vendor-listings-grid');
        if (grid) {
          grid.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [keyword, syncUrl, fetchListings]);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <MemoizedVendorListingsHero
          keyword={keyword}
          onKeywordChange={setKeyword}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>

      <VendorListingsResultsSection
        listings={listings}
        totalItems={totalItems}
        currentPage={page}
        isLoading={isLoading}
        category={category}
        error={error}
        onCategoryChange={handleCategoryChange}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
