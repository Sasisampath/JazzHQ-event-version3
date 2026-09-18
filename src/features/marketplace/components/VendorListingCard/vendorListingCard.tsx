"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MarketplaceArrowRightIcon } from "@/features/marketplace/helper/marketplaceIcons";
import { getCompanyLogoInitial } from "@/features/marketplace/helper/listingHelper";
import type { MarketplaceListingSummary } from "@/features/marketplace/models/listingTypes";

export function VendorListingCard({ listing }: { listing: MarketplaceListingSummary }) {
  const [imgError, setImgError] = useState(false);
  const initial = getCompanyLogoInitial(listing.name);
  const categoryItems = listing.categories;
  const categorySlug = categoryItems && categoryItems.length > 0 
    ? categoryItems[0].toLowerCase().replace(/\s+/g, '-') 
    : 'software';
  const vendorSlug = listing.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const href = `/${categorySlug}/${vendorSlug}`;
  const ipp = listing.idealPartnerProfile;

  return (
    <Link 
      href={href}
      prefetch={false}
      className="group block h-[448px] overflow-hidden rounded-[20px] border-2 border-[#e5e7eb] bg-white transition-all duration-150 ease-in-out hover:border-[#E5484D] hover:shadow-md active:border-[#E5484D] active:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E5484D] focus:ring-offset-2"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="flex h-full flex-col pointer-events-none">
        {/* ── Main content area with padding ── */}
        <div className="flex flex-1 flex-col p-5 md:p-6 pb-4 overflow-hidden">
          {/* ── Logo (standalone, not inline with name) ── */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb] border border-[#f3f4f6]">
            {!imgError && listing.logoUrl ? (
              <img
                src={listing.logoUrl}
                alt={listing.name || "Vendor logo"}
                className="h-full w-full object-contain p-2"
                loading="eager"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-2xl font-bold text-[#111827]">{initial}</span>
            )}
          </div>

          {/* ── Name + ProductType (stacked below logo) ── */}
          <div className="mt-4 min-w-0 shrink-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[22px] font-bold tracking-tight text-[#111827]">{listing.name}</h3>
              {listing.isFeatured ? (
                <span className="shrink-0 rounded-full bg-[#8b5cf6] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
              ) : null}
            </div>
            {listing.productType ? (
              <p className="mt-0.5 truncate text-sm font-medium text-[#6b7280]">{listing.productType}</p>
            ) : null}
          </div>

          {/* ── Description (2-line clamp with ellipsis) ── */}
          {listing.description ? (
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#6b7280] shrink-0">{listing.description}</p>
          ) : null}

          {/* ── Category Tags (the "upper tags" / hero section category inputs) ── */}
          {listing.categories?.length ? (
            <div className="mt-4 flex flex-wrap gap-2 overflow-hidden max-h-[28px] shrink-0">
              {listing.categories.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-[#4b5563]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {/* ── Bottom metadata (pushed to bottom via mt-auto) ── */}
          <div className="mt-auto space-y-4 pt-4 shrink-0">
            {/* ── TECH TAGS (Chips shown outside above category) ── */}
            {listing.techTags?.length ? (
              <div className="flex flex-wrap gap-2 overflow-hidden max-h-[30px]">
                {listing.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded-full bg-[#f1f5f9] px-2.5 py-0.5 text-[11px] font-medium text-[#475569]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {/* ── CATEGORY = IPP Company Sizes (Target Market) ── */}
            {ipp?.companySizes?.length ? (
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">Category</p>
                <div className="flex flex-wrap items-center gap-3 overflow-hidden max-h-[30px]">
                  {ipp.companySizes.map((size) => (
                    <span
                      key={size}
                      className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-[#4b5563]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {/* ── PARTNER TYPE ── */}
            {listing.partnerTypes?.length ? (
              <div>
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">Partner Type</p>
                <div className="flex flex-wrap gap-2 overflow-hidden max-h-[30px]">
                  {listing.partnerTypes.map((type) => (
                    <span
                      key={type}
                      className="shrink-0 rounded-full bg-[#f3e8ff] px-3 py-1 text-xs font-medium text-[#7c3aed]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* ── View Program CTA band (full-width, edge-to-edge) ── */}
        <div className="shrink-0 flex w-full items-center justify-center bg-[#ffe4e6] py-3.5 group-hover:bg-[#E5484D] group-active:bg-[#E5484D] transition-colors duration-150 ease-in-out pointer-events-auto">
          <span className="inline-flex items-center justify-center gap-1.5 text-[15px] font-bold text-[#E5484D] group-hover:text-white group-active:text-white transition-colors duration-150 ease-in-out">
            View Vendor
            <MarketplaceArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
