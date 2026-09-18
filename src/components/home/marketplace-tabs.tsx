"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  MARKETPLACE_CONFIG,
  type MarketplaceRole,
} from "@/data/marketplace";
import Image from "next/image";
import { MarketplaceIcon } from "@/components/icons/marketplace-icons";

function SectionArrow() {
  return (
    <Image
      src="/assets/marketplace/section-arrow.png"
      alt="Decorative arrow pointing to marketplace section"
      width={100}
      height={100}
      className="absolute right-[-20px] top-10 hidden md:block"
      aria-hidden
    />
  );
}

export function MarketplaceTabs() {
  const [role, setRole] = useState<MarketplaceRole>("vendor");
  const [activeNav, setActiveNav] = useState(0);
  const config = MARKETPLACE_CONFIG[role];
  const activePanel = config.panels[activeNav];
  const isVendor = role === "vendor";

  const vendorTheme = {
    tabBg: "bg-[#E5484D]",
    tabText: "text-white",
    contentBg: "bg-[#FFD8DA]",
    inactiveTab: "bg-[#EDE8FB] text-[#6B7280]",
  };
  const partnerTheme = {
    tabBg: "bg-[#6C63D4]",
    tabText: "text-white",
    contentBg: "bg-[#D8D6FF]",
    inactiveTab: "bg-[#FAE8E8] text-[#6B7280]",
  };

  const activeTheme = isVendor ? vendorTheme : partnerTheme;
  const ctaHref = isVendor ? "/for-vendors" : "/for-partners";

  return (
    <section id="marketplace" className="page-section py-12 md:py-20">
      <div className="relative mx-auto mb-10 max-w-5xl px-4 text-center md:px-12">
        <SectionArrow />
        <h2 className="text-[clamp(28px,3vw,42px)] font-bold tracking-tight text-[#131315]">
          Here is what you get
        </h2>
        <p className="mt-3 text-base text-[#4a5565] md:text-lg">
          Everything you need to discover the right opportunities and build
          trusted partnerships.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex items-end gap-1">
          <button
            type="button"
            onClick={() => {
              setRole("vendor");
              setActiveNav(0);
            }}
            className={`relative z-10 rounded-t-2xl px-7 py-3.5 text-sm font-bold transition-all ${
              isVendor
                ? `${vendorTheme.tabBg} ${vendorTheme.tabText}`
                : partnerTheme.inactiveTab
            }`}
          >
            I&apos;m a Vendor
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("partner");
              setActiveNav(0);
            }}
            className={`relative rounded-t-2xl px-7 py-3.5 text-sm font-bold transition-all ${
              !isVendor
                ? `${partnerTheme.tabBg} ${partnerTheme.tabText} z-10`
                : `${vendorTheme.inactiveTab} z-0`
            }`}
          >
            I&apos;m a Partner
          </button>
        </div>

        <div
          className={`${activeTheme.contentBg} rounded-b-3xl rounded-tr-3xl border border-[rgba(0,0,0,0.08)] p-6 md:p-8`}
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(220px,260px)_minmax(0,1fr)_minmax(280px,400px)] lg:gap-8">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                Workspace
              </p>

              {config.panels.map((panel, i) => (
                <button
                  key={panel.id}
                  type="button"
                  onClick={() => setActiveNav(i)}
                  className={`flex w-full max-w-[260px] cursor-pointer items-center gap-3 rounded-[18px] px-4 py-2.5 text-left text-sm font-medium transition-all ${
                    i === activeNav
                      ? "border-[2px] border-[#1A1A1A] bg-white text-[#131315] shadow-[1px_1px_0px_0px_#111]"
                      : "border-[3px] border-transparent bg-transparent text-[#6B7280]"
                  }`}
                >
                  <span className="flex shrink-0 items-center justify-center text-[#1A1A1A]">
                    <MarketplaceIcon name={panel.navIcon} />
                  </span>
                  <span className="min-w-0 leading-snug">{panel.label}</span>
                </button>
              ))}

              <div className="mt-auto pt-4">
                <Link
                  href={ctaHref}
                  className="flex w-full max-w-[260px] cursor-pointer items-center justify-between rounded-full bg-[#131315] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {config.cta}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-xs">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="marketplace-panel__content flex min-w-0 flex-col gap-4">
              <Badge>{activePanel.badge}</Badge>
              <h3 className="marketplace-panel__title">{activePanel.title}</h3>
              <p className="marketplace-panel__description">
                {activePanel.description}
              </p>
            </div>

            <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.1)] lg:min-h-[360px]">
              <Image
                src={activePanel.image}
                alt={`${activePanel.title} feature preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain object-center"
                priority={activeNav === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
