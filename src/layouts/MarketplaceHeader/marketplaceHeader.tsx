"use client";

import { useState, useEffect, useRef } from "react";
import { getMarketplaceListings, getMarketplaceTemplates } from "@/features/marketplace/api/listingApi";
import type { MarketplaceListingSummary, TemplateSummary } from "@/features/marketplace/models/listingTypes";
import Link from "next/link";
import { cn } from "@/utils/cn";
import {
  HeaderSearchIcon,
  MarketplaceMonogramIcon,
} from "@/layouts/MarketplaceHeader/headerIcons";
import { ChevronDown } from "lucide-react";

type SubNavKey = "vendor-listings" | "templates";

type MarketplaceHeaderProps = {
  activeSubNav?: SubNavKey;
};

const subNavLinks: { key: SubNavKey; label: string; href: string }[] = [
  { key: "vendor-listings", label: "Vendor Listings", href: "/marketplace" },
];

function subNavClassName(isActive: boolean) {
  return cn(
    "text-[15px] leading-[15px] tracking-[-0.15px] transition-colors",
    isActive ? "font-medium text-white" : "font-normal text-white/60 hover:text-white"
  );
}

export function MarketplaceHeader({
  activeSubNav = "vendor-listings",
}: MarketplaceHeaderProps) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [listingsResults, setListingsResults] = useState<MarketplaceListingSummary[]>([]);
  const [templatesResults, setTemplatesResults] = useState<TemplateSummary[]>([]);
  
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setListingsResults([]);
      setTemplatesResults([]);
      setIsSearching(false);
      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    setIsSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const [listingsRes, templatesRes] = await Promise.all([
          getMarketplaceListings({ keyword: searchQuery, page: 0, perPage: 5 }),
          getMarketplaceTemplates({ keyword: searchQuery, page: 0, perPage: 5 })
        ]);
        setListingsResults(listingsRes.data || []);
        setTemplatesResults(templatesRes.data || []);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [searchQuery]);

  return (
    <div className="shrink-0 relative z-40">
      {/* Marketplace sub-nav */}
      <div className="relative border-b border-[#e0ddcb] bg-[#242424]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-2 md:py-[14px] md:px-6 lg:px-[90px]">
          <div className="relative flex w-full items-center justify-between gap-4 md:gap-6 md:px-5">
            <div className="flex shrink-0 items-center gap-1 md:w-1/3">
              <Link href="/marketplace" className="inline-flex items-center gap-2">
                <MarketplaceMonogramIcon size={20} className="size-[14px] md:size-5 shrink-0 object-cover" />
                <span className="text-[13px] md:text-base font-semibold leading-[15px] tracking-[-0.15px] text-white">
                  Marketplace
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 text-white/60 md:hidden hover:text-white"
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
                aria-label="Toggle marketplace menu"
              >
                <ChevronDown
                  className={cn("size-4 transition-transform", isSubMenuOpen && "rotate-180")}
                />
              </button>
            </div>

            <nav className="hidden items-center justify-center gap-5 md:flex md:w-1/3 md:absolute md:left-1/2 md:-translate-x-1/2" aria-label="Marketplace">
              <ul className="flex items-center gap-5 whitespace-nowrap">
                {subNavLinks.map(({ key, label, href }) => (
                  <li key={key}>
                    {href.startsWith("/") ? (
                      <Link href={href} className={subNavClassName(activeSubNav === key)}>
                        {label}
                      </Link>
                    ) : (
                      <a href={href} className={subNavClassName(activeSubNav === key)}>
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center justify-end gap-3 h-8 relative md:w-1/3">
              {isSearchExpanded ? (
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1 border border-white/20 w-[200px] md:w-[300px] h-full relative">
                  <HeaderSearchIcon size={14} className="text-white/60 mr-2 shrink-0" strokeColor="currentColor" />
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent border-none text-white text-sm outline-none w-full placeholder:text-white/40"
                    onBlur={() => {
                      setIsSearchExpanded(false);
                      setSearchQuery("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsSearchExpanded(false);
                        setSearchQuery("");
                      }
                    }}
                  />
                  {searchQuery.trim() && (
                    <div 
                      className="absolute top-full mt-2 right-0 w-[300px] md:w-[400px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 text-gray-900"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {isSearching ? (
                        <div className="p-4 text-center text-sm text-gray-500">Searching...</div>
                      ) : (
                        <div className="max-h-[400px] overflow-y-auto py-2">
                          {listingsResults.length === 0 && templatesResults.length === 0 ? (
                            <div className="p-4 text-center text-sm text-gray-500">
                              No results match your search
                            </div>
                          ) : (
                            <>
                              {listingsResults.length > 0 && (
                                <div className="mb-2">
                                  <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Listings
                                  </div>
                                    {listingsResults.map((l) => {
                                      const catSlug = l.categories && l.categories.length > 0 
                                        ? l.categories[0].toLowerCase().replace(/\s+/g, '-') 
                                        : 'software';
                                      const vendorSlug = l.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                      return (
                                        <Link key={l.id} href={`/${catSlug}/${vendorSlug}`} className="block px-4 py-2 hover:bg-gray-50 transition-colors" onClick={() => { setIsSearchExpanded(false); setSearchQuery(""); }}>
                                          <div className="text-sm font-medium truncate">{l.name}</div>
                                          <div className="text-xs text-gray-500 truncate">{l.tagline}</div>
                                        </Link>
                                      );
                                    })}
                                </div>
                              )}
                              {templatesResults.length > 0 && (
                                <div>
                                  <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Templates
                                  </div>
                                  {templatesResults.map((t) => (
                                    <a key={t.id} href="#" className="block px-4 py-2 hover:bg-gray-50 transition-colors" onClick={() => { setIsSearchExpanded(false); setSearchQuery(""); }}>
                                      <div className="text-sm font-medium truncate">{t.name}</div>
                                      <div className="text-xs text-gray-500 truncate">{t.description}</div>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                  aria-label="Search"
                  onClick={() => setIsSearchExpanded(true)}
                >
                  <HeaderSearchIcon size={16} className="size-4" strokeColor="currentColor" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isSubMenuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 bg-[#242424] px-4 py-4 md:hidden">
            {subNavLinks.map(({ key, label, href }) => (
              <Link
                key={key}
                href={href}
                className={subNavClassName(activeSubNav === key)}
                onClick={() => setIsSubMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
