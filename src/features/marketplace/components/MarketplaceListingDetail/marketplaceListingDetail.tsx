"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Play, ArrowUpRight, Lock, BookOpen, TrendingUp, Star, Users, ArrowRight } from "lucide-react";
import { PreviewSectionCard } from "@/features/marketplace/components/PreviewSectionCard/previewSectionCard";
import { ProductVideoPreview, YouTubePreview } from "@/features/marketplace/components/ProductVideoPreview/productVideoPreview";
import { HowItWorks } from "@/features/marketplace/components/HowItWorks/howItWorks";
import { ListingCtaBand, ListingHeroCtas, OnboardingPopup } from "@/features/marketplace/components/ListingCtaBand/listingCtaBand";
import {
  buildListingMetaParts,
  formatWebsiteDisplay,
  formatWebsiteHref,
  getAuthorInitials,
  getCompanyLogoInitial,
  getTestimonialHeadshotPreviewUrl,
  getTestimonialReactKey,
  joinList,
} from "@/features/marketplace/helper/listingHelper";
import type { MarketplaceListingDetail } from "@/features/marketplace/models/listingTypes";
import {
  vendorDetailPreviewCustomerUseCasesIcon,
  vendorDetailPreviewGeographiesIcon,
  vendorDetailPreviewGeographiesServedIcon,
  vendorDetailPreviewIcpIcon,
  vendorDetailPreviewIppIcon,
  vendorDetailPreviewProductDemoIcon,
  vendorDetailPreviewProductOverviewIcon,
  vendorDetailPreviewTestimonialIcon,
  vendorDetailPreviewTestimonialQuoteIcon,
  vendorDetailPreviewUseCasesIcon,
} from "@/features/marketplace/helper/listingIcons";
import {
  MarketplaceArrowLeftIcon,
  MarketplaceArrowRightIcon,
} from "@/features/marketplace/helper/marketplaceIcons";
import "./marketplaceListingDetail.scss";

const TIER_BENEFIT_ROWS = [
  { key: "commission" as const, label: "Commission" },
  { key: "mdf" as const, label: "MDF" },
  { key: "payPerLead" as const, label: "Pay per Lead" },
  { key: "others" as const, label: "Others" },
];

function LockedSectionBanner({ onTalkToAgent }: { onTalkToAgent: () => void }) {
  const handleMaybeLater = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const container = e.currentTarget.closest(".relative");
    if (container) {
      const nextSibling = container.nextElementSibling;
      if (nextSibling) {
        nextSibling.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 bg-transparent z-[5]">
      <div className="bg-white border border-[#E6E8EA] rounded-[16px] border-1 shadow-2xl p-6 sm:p-8 max-w-[480px] w-full text-center flex flex-col items-center gap-5">
        {/* Lock Icon Wrapper */}
        <div className="w-12 h-12 rounded-full bg-[#EBF3FF] flex items-center justify-center text-[#0B4AB2] shrink-0">
          <Lock className="w-5 h-5" />
        </div>

        {/* Title */}
        <h4 className="text-lg sm:text-xl font-bold text-[#111827] leading-tight tracking-tight">
          Apply once. Unlock many<br />partnership opportunities.
        </h4>

        {/* Description */}
        <p className="text-xs text-[#6B7280] leading-relaxed text-center px-2">
          Join our partner community to unlock customer insights, proven playbooks, resources, and partner connections that help you identify the right customers and grow faster.
        </p>

        {/* Divider Header */}
        <div className="flex items-center w-full justify-between">
          <span className="h-[1px] bg-[#E6E8EA] flex-1"></span>
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0B4AB2] px-3">
            As a community member, you'll unlock
          </span>
          <span className="h-[1px] bg-[#E6E8EA] flex-1"></span>
        </div>

        {/* Features list */}
        <div className="flex flex-col w-full text-left gap-4">
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#0B4AB2] shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-[#111827]">Partner playbooks & resources</span>
              <span className="text-[11px] text-[#6B7280] leading-normal">Access proven guides, battle cards, templates, and best practices from top-performing partners.</span>
            </div>
          </div>

          <div className="h-[1px] bg-[#F1F3F5] w-full" />

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#0B4AB2] shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-[#111827]">Customer & partnership insights</span>
              <span className="text-[11px] text-[#6B7280] leading-normal">See who the best customers are, where they buy, and which partner opportunities align with your expertise so you can apply with confidence.</span>
            </div>
          </div>

          <div className="h-[1px] bg-[#F1F3F5] w-full" />

          {/* Item 3 */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#0B4AB2] shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-[#111827]">Connect & learn from partners</span>
              <span className="text-[11px] text-[#6B7280] leading-normal">Collaborate with experienced partners, share insights, and accelerate your success through the community.</span>
            </div>
          </div>
        </div>

        {/* Buttons block */}
        <div className="flex flex-col items-center gap-3 w-full">
          <button
            data-fillout-id="e7siaJuYm9us"
            data-fillout-embed-type="popup"
            data-fillout-dynamic-resize
            data-fillout-inherit-parameters
            data-fillout-popup-size="small"
            className="w-full bg-[#0B4AB2] hover:bg-[#093d93] text-white font-semibold py-2.5 rounded-xl transition-all shadow-md text-xs cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Join Partner Community</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          <button
            onClick={handleMaybeLater}
            className="text-xs text-[#94A3B8] hover:text-[#64748B] font-semibold transition-colors cursor-pointer bg-transparent border-0 outline-none"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export function MarketplaceListingDetail({ listing }: { listing: MarketplaceListingDetail }) {
  const [activeTierKey, setActiveTierKey] = useState("0");
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [showNoMoreTestimonials, setShowNoMoreTestimonials] = useState(false);
  const [logoErrorUrl, setLogoErrorUrl] = useState<string | null>(null);
  const [bannerErrorUrl, setBannerErrorUrl] = useState<string | null>(null);
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(false);

  const tiers = useMemo(() => listing.partnerTiersAndBenefits || [], [listing.partnerTiersAndBenefits]);
  const activeTierIndex = Number(activeTierKey);
  const activeTier = tiers[activeTierIndex] || tiers[0] || {};
  const resolvedLogoUrl =
    listing.logoUrl && logoErrorUrl !== listing.logoUrl ? listing.logoUrl : undefined;
  const companyLogoInitial = getCompanyLogoInitial(listing.name);
  const resolvedBannerUrl =
    listing.coverBannerUrl && bannerErrorUrl !== listing.coverBannerUrl
      ? listing.coverBannerUrl
      : undefined;
  const showBanner = Boolean(resolvedBannerUrl);
  const metaParts = buildListingMetaParts(listing);
  const websiteHref = formatWebsiteHref(listing.website);
  const websiteLabel = formatWebsiteDisplay(listing.website || "");
  const testimonials = useMemo(
    () => listing.partnerTestimonials || [],
    [listing.partnerTestimonials]
  );

  const displayedTestimonialEntries = useMemo(() => {
    const entries = testimonials.map((testimonial, sourceIndex) => ({ testimonial, sourceIndex }));
    return showAllTestimonials ? entries : entries.slice(0, 2);
  }, [testimonials, showAllTestimonials]);

  const handleViewAllTestimonials = () => {
    if (testimonials.length > 2) {
      setShowAllTestimonials(true);
      setShowNoMoreTestimonials(false);
      return;
    }
    setShowNoMoreTestimonials(true);
  };

  const useCases = (listing.customerUseCases || []).filter(
    (item) => item.title?.trim() || item.description?.trim()
  );
  const features = (listing.productKeyFeatures || []).filter((item) => item?.trim());
  const idealPartner = listing.idealPartnerProfile || {
    description: "",
    companySizes: [],
    certifications: [],
    headquarteredIn: "",
    adjacentPartnerships: [],
  };

  return (
    <div className="marketplace-listing-detail">
      <Link href="/marketplace" className="marketplace-listing-back inline-flex items-center gap-1.5">
        <MarketplaceArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        All vendors
      </Link>

      <div className="vendor-detail-preview">
        <section
          className={`vendor-detail-preview-hero ${showBanner ? "vendor-detail-preview-hero--has-banner" : "vendor-detail-preview-hero--grid-bg"
            }`}
        >
          <div className="vendor-detail-preview-hero__inner">
            {showBanner ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={resolvedBannerUrl}
                  src={resolvedBannerUrl || ""}
                  alt={`${listing.name} cover banner`}
                  className="vendor-detail-preview-hero__banner-bg"
                  onError={() => setBannerErrorUrl(listing.coverBannerUrl || null)}
                />
                <div className="vendor-detail-preview-hero__banner-scrim" aria-hidden="true" />
              </>
            ) : null}

            <div className="vendor-detail-preview-hero__identity">
              <div className="vendor-detail-preview-hero__top">
                <div className="vendor-detail-preview-hero__logo-wrap">
                  {resolvedLogoUrl ? (
                    <img
                      key={resolvedLogoUrl}
                      src={resolvedLogoUrl}
                      alt={`${listing.name} logo`}
                      className="vendor-detail-preview-hero__logo"
                      onError={() => setLogoErrorUrl(listing.logoUrl || null)}
                      loading="eager"
                      fetchPriority="high"
                    />
                  ) : companyLogoInitial ? (
                    <div className="vendor-detail-preview-hero__logo vendor-detail-preview-hero__logo--initial">
                      {companyLogoInitial}
                    </div>
                  ) : (
                    <div className="vendor-detail-preview-hero__logo vendor-detail-preview-hero__logo--placeholder" />
                  )}
                </div>

                {listing.name ? <h2 className="vendor-detail-preview-hero__name">{listing.name}</h2> : null}
              </div>

              {(listing.tagline || metaParts.length || listing.categories?.length) ? (
                <div className="vendor-detail-preview-hero__details">
                  {listing.tagline ? (
                    <p className="vendor-detail-preview-hero__tagline">{listing.tagline}</p>
                  ) : null}

                  {metaParts.length ? (
                    <div className="vendor-detail-preview-hero__meta">
                      {metaParts.map((part, index) => {
                        const isWebsite = websiteLabel && part === websiteLabel;
                        return (
                          <span key={`${part}-${index}`} className="inline-flex items-center gap-2">
                            {index > 0 ? (
                              <span className="vendor-detail-preview-hero__meta-sep">•</span>
                            ) : null}
                            {isWebsite && websiteHref ? (
                              <a
                                href={websiteHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vendor-detail-preview-hero__meta-link"
                              >
                                Visit Site
                                <span className="vendor-detail-preview-hero__meta-arrow" aria-hidden="true">
                                  <ArrowUpRight className="h-4 w-4 inline" />
                                </span>
                              </a>
                            ) : (
                              <span>{part}</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}

                  {listing.categories?.length ? (
                    <div className="vendor-detail-preview-hero__tags">
                      {listing.categories.map((tag) => (
                        <span key={tag} className="vendor-detail-preview-hero__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <ListingHeroCtas />
                </div>
              ) : (
                <ListingHeroCtas />
              )}
            </div>
          </div>
        </section>

        <HowItWorks />

        {listing.description?.trim() ? (
          <PreviewSectionCard
            icon={vendorDetailPreviewProductOverviewIcon({ size: 32 })}
            title="Company Overview"
          >
            <p className="vendor-detail-preview-text">{listing.description}</p>
          </PreviewSectionCard>
        ) : null}

        {features.length ? (
          <PreviewSectionCard icon={vendorDetailPreviewUseCasesIcon({ size: 32 })} title="Product Overview">
            <ul className="vendor-detail-preview-list">
              {features.map((feature, index) => (
                <li key={`${feature}-${index}`}>{feature}</li>
              ))}
            </ul>
          </PreviewSectionCard>
        ) : null}

        <PreviewSectionCard
          icon={vendorDetailPreviewProductDemoIcon({ size: 32 })}
          title="Product Demo"
          className="vendor-detail-preview-card--video"
        >
          {listing.productVideoType === "YOUTUBE_LINK" && listing.productVideoUrl ? (
            <YouTubePreview url={listing.productVideoUrl} />
          ) : listing.productVideoType === "S3_UPLOAD" && listing.productVideoUrl ? (
            <ProductVideoPreview listing={listing} />
          ) : (
            <div className="vendor-detail-preview-video-placeholder">
              <span className="vendor-detail-preview-video-placeholder__icon" aria-hidden="true">
                <Play size={24} />
              </span>
              <span className="vendor-detail-preview-video-placeholder__label">Video Demo</span>
            </div>
          )}
        </PreviewSectionCard>

        {tiers.length ? (
          <PreviewSectionCard
            icon={vendorDetailPreviewGeographiesIcon({ size: 32 })}
            title="Partner Tiers & Benefits"
          >
            <div className="vendor-detail-tier-tabs vendor-detail-tier-tabs--preview">
              <div className="vendor-detail-tier-tabs__bar">
                {tiers.map((tier, index) => (
                  <button
                    key={tier.name || index}
                    type="button"
                    className={`vendor-detail-tier-tab ${activeTierKey === String(index) ? "vendor-detail-tier-tab--active" : ""
                      }`}
                    onClick={() => setActiveTierKey(String(index))}
                  >
                    {tier.name || `Tier ${index + 1}`}
                  </button>
                ))}
              </div>
            </div>
            <dl className="vendor-detail-preview-tier-table">
              {TIER_BENEFIT_ROWS.map((row) =>
                activeTier[row.key] ? (
                  <div key={row.key} className="vendor-detail-preview-tier-table__row">
                    <dt>{row.label}</dt>
                    <dd>{activeTier[row.key]}</dd>
                  </div>
                ) : null
              )}
            </dl>
          </PreviewSectionCard>
        ) : null}

        {Boolean(
          listing.icpTargetSegments?.length ||
          listing.icpCompanySizes?.length ||
          listing.icpGeographies?.length ||
          listing.icpProfile?.trim() ||
          idealPartner.description?.trim() ||
          idealPartner.companySizes?.length ||
          idealPartner.headquarteredIn?.trim() ||
          idealPartner.adjacentPartnerships?.length ||
          idealPartner.certifications?.length
        ) && (
            <div className="relative flex flex-col gap-4">
              {/* Card 1: Ideal Customer Profile (ICP) */}
              {Boolean(
                listing.icpTargetSegments?.length ||
                listing.icpCompanySizes?.length ||
                listing.icpGeographies?.length ||
                listing.icpProfile?.trim()
              ) && (
                  <PreviewSectionCard icon={vendorDetailPreviewIcpIcon({ size: 32 })} title="Ideal Customer Profile (ICP)">
                    <div>
                      <div className="vendor-detail-preview-icp">
                        {(listing.icpTargetSegments?.length || listing.icpCompanySizes?.length) ? (
                          <div className="vendor-detail-preview-icp__top">
                            {listing.icpTargetSegments?.length ? (
                              <div className="vendor-detail-preview-icp__item">
                                <span className="vendor-detail-preview-icp__label">Target Segments</span>
                                <p className="vendor-detail-preview-icp__value blur-[8px] select-none pointer-events-none filter">{joinList(listing.icpTargetSegments)}</p>
                              </div>
                            ) : null}
                            {listing.icpCompanySizes?.length ? (
                              <div className="vendor-detail-preview-icp__item">
                                <span className="vendor-detail-preview-icp__label">Company Size</span>
                                <p className="vendor-detail-preview-icp__value blur-[8px] select-none pointer-events-none filter">{joinList(listing.icpCompanySizes)}</p>
                              </div>
                            ) : null}
                          </div>
                        ) : null}

                        {(listing.icpTargetSegments?.length || listing.icpCompanySizes?.length) &&
                          (listing.icpGeographies?.length || listing.icpProfile?.trim()) ? (
                          <div className="vendor-detail-preview-icp__divider" aria-hidden="true" />
                        ) : null}

                        {(listing.icpGeographies?.length || listing.icpProfile?.trim()) ? (
                          <div className="vendor-detail-preview-icp__bottom">
                            {listing.icpGeographies?.length ? (
                              <div className="vendor-detail-preview-icp__item">
                                <span className="vendor-detail-preview-icp__label">Geographies</span>
                                <div className="vendor-detail-preview-icp__tags blur-[8px] select-none pointer-events-none filter">
                                  {listing.icpGeographies.map((item) => (
                                    <span key={item} className="vendor-detail-preview-icp__tag">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                            {listing.icpProfile?.trim() ? (
                              <div className="vendor-detail-preview-icp__item">
                                <span className="vendor-detail-preview-icp__label">Profile</span>
                                <p className="vendor-detail-preview-icp__value blur-[8px] select-none pointer-events-none filter">{listing.icpProfile}</p>
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </PreviewSectionCard>
                )}

              {/* Card 2: Ideal Partner Profile (IPP) */}
              {Boolean(
                idealPartner.description?.trim() ||
                idealPartner.companySizes?.length ||
                idealPartner.headquarteredIn?.trim() ||
                idealPartner.adjacentPartnerships?.length ||
                idealPartner.certifications?.length
              ) && (
                  <PreviewSectionCard icon={vendorDetailPreviewIppIcon({ size: 32 })} title="Ideal Partner Profile (IPP)">
                    <div>
                      <div className="vendor-detail-preview-ipp">
                        {idealPartner.description?.trim() ? (
                          <p className="vendor-detail-preview-text vendor-detail-preview-text--intro blur-[8px] select-none pointer-events-none filter">
                            {idealPartner.description}
                          </p>
                        ) : null}

                        {idealPartner.description?.trim() &&
                          (idealPartner.companySizes?.length ||
                            idealPartner.headquarteredIn?.trim() ||
                            idealPartner.adjacentPartnerships?.length ||
                            idealPartner.certifications?.length) ? (
                          <div className="vendor-detail-preview-ipp__divider" aria-hidden="true" />
                        ) : null}

                        <div className="vendor-detail-preview-ipp__grid">
                          {idealPartner.companySizes?.length ? (
                            <div className="vendor-detail-preview-field">
                              <span className="vendor-detail-preview-field__label">Target Market</span>
                              <div className="vendor-detail-preview-tags blur-[8px] select-none pointer-events-none filter">
                                {idealPartner.companySizes.map((item) => (
                                  <span key={item} className="vendor-detail-preview-tags__tag">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {idealPartner.headquarteredIn?.trim() ? (
                            <div className="vendor-detail-preview-field">
                              <span className="vendor-detail-preview-field__label">Headquartered In</span>
                              <p className="vendor-detail-preview-text blur-[8px] select-none pointer-events-none filter">{idealPartner.headquarteredIn}</p>
                            </div>
                          ) : null}
                          {idealPartner.adjacentPartnerships?.length ? (
                            <div className="vendor-detail-preview-field">
                              <span className="vendor-detail-preview-field__label">Adjacent Partnerships</span>
                              <div className="vendor-detail-preview-tags blur-[8px] select-none pointer-events-none filter">
                                {idealPartner.adjacentPartnerships.map((item) => (
                                  <span key={item} className="vendor-detail-preview-tags__tag">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {idealPartner.certifications?.length ? (
                            <div className="vendor-detail-preview-field">
                              <span className="vendor-detail-preview-field__label">Certifications</span>
                              <p className="vendor-detail-preview-text blur-[8px] select-none pointer-events-none filter">{joinList(idealPartner.certifications)}</p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </PreviewSectionCard>
                )}

              {/* Vertical Lock Banner Overlay */}
              <LockedSectionBanner onTalkToAgent={() => setShowOnboardingPopup(true)} />
            </div>
          )}

        {listing.geographiesServed?.length ? (
          <PreviewSectionCard
            icon={vendorDetailPreviewGeographiesServedIcon({ size: 32 })}
            title="Geographies Served"
          >
            <div className="vendor-detail-preview-tags">
              {listing.geographiesServed.map((item) => (
                <span key={item} className="vendor-detail-preview-tags__tag">
                  {item}
                </span>
              ))}
            </div>
          </PreviewSectionCard>
        ) : null}

        {useCases.length ? (
          <PreviewSectionCard
            icon={vendorDetailPreviewCustomerUseCasesIcon({ size: 32 })}
            title="Customer Use Cases"
          >
            <div className="vendor-detail-preview-use-cases">
              {useCases.map((useCase, index) => (
                <article key={useCase.id || index} className="vendor-detail-preview-use-case">
                  {useCase.title ? <h4>{useCase.title}</h4> : null}
                  {useCase.description ? <p>{useCase.description}</p> : null}
                </article>
              ))}
            </div>
          </PreviewSectionCard>
        ) : null}

        <PreviewSectionCard
          icon={vendorDetailPreviewTestimonialIcon({ size: 32 })}
          title="Partner Testimonial"
          className="vendor-detail-preview-card--testimonials"
        >
          {displayedTestimonialEntries.length ? (
            <div className="vendor-detail-preview-testimonials">
              {displayedTestimonialEntries.map(({ testimonial, sourceIndex }) => {
                const headshotUrl = getTestimonialHeadshotPreviewUrl(testimonial);
                const authorInitials = getAuthorInitials(testimonial.authorName);
                const authorMeta = [testimonial.authorTitle, testimonial.authorCompany]
                  .filter(Boolean)
                  .join(" at ");

                return (
                  <article
                    key={getTestimonialReactKey(testimonial, sourceIndex)}
                    className="vendor-detail-preview-testimonial"
                  >
                    <div className="vendor-detail-preview-testimonial__avatar-wrap">
                      {headshotUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={headshotUrl} alt={testimonial.authorName || "Testimonial author"} className="vendor-detail-preview-testimonial__avatar" />
                      ) : authorInitials ? (
                        <span className="vendor-detail-preview-testimonial__avatar vendor-detail-preview-testimonial__avatar--initials">
                          {authorInitials}
                        </span>
                      ) : (
                        <span className="vendor-detail-preview-testimonial__avatar vendor-detail-preview-testimonial__avatar--placeholder" />
                      )}
                    </div>

                    <div className="vendor-detail-preview-testimonial__content">
                      <span className="vendor-detail-preview-testimonial__quote" aria-hidden="true">
                        {vendorDetailPreviewTestimonialQuoteIcon({ width: 28, height: 24 })}
                      </span>
                      {testimonial.quote ? <p>{testimonial.quote}</p> : null}
                      <div className="vendor-detail-preview-testimonial__author">
                        {testimonial.authorName ? <strong>{testimonial.authorName}</strong> : null}
                        {authorMeta ? <span>{authorMeta}</span> : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="vendor-detail-preview-testimonials__empty">
              No partner testimonials have been added yet.
            </p>
          )}
          {testimonials.length > 0 && !showAllTestimonials ? (
            <div className="vendor-detail-preview-testimonials__footer">
              {showNoMoreTestimonials ? (
                <p className="vendor-detail-preview-testimonials__no-more">
                  No additional testimonials to display.
                </p>
              ) : (
                <button
                  type="button"
                  className="vendor-detail-preview-testimonials__more"
                  onClick={handleViewAllTestimonials}
                >
                  View all testimonials
                  <MarketplaceArrowRightIcon className="h-4 w-4 inline ml-1.5" aria-hidden="true" />
                </button>
              )}
            </div>
          ) : null}
        </PreviewSectionCard>

        <ListingCtaBand companyName={listing.name} />
        <OnboardingPopup isOpen={showOnboardingPopup} onClose={() => setShowOnboardingPopup(false)} />
      </div>
    </div>
  );
}
