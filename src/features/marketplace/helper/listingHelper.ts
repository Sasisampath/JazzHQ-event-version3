import type { MarketplaceListingDetail, PartnerTestimonial } from "@/features/marketplace/models/listingTypes";

export const createEmptyListing = (): MarketplaceListingDetail => ({
  id: 0,
  tenantSlug: "",
  vendorId: 0,
  name: "",
  website: "",
  description: "",
  tagline: "",
  category: "",
  location: "",
  productType: "",
  categories: [],
  coverBannerUrl: undefined,
  logoUrl: undefined,
  productVideoType: "YOUTUBE_LINK",
  productVideoUrl: "",
  productKeyFeatures: [],
  icpProfile: "",
  icpTargetSegments: [],
  icpCompanySizes: [],
  icpGeographies: [],
  geographiesServed: [],
  customerUseCases: [],
  partnerTiersAndBenefits: [
    { name: "Referral", commission: "", mdf: "", payPerLead: "", others: "" },
    { name: "Reseller", commission: "", mdf: "", payPerLead: "", others: "" },
  ],
  idealPartnerProfile: {
    description: "",
    companySizes: [],
    certifications: [],
    headquarteredIn: "",
    adjacentPartnerships: [],
  },
  partnerTestimonials: [],
});

const splitToList = (value: unknown): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const coerceToString = (value: unknown): string => {
  if (value == null) return "";
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return String(value);
};

const coerceToStringList = (value: unknown): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  return String(value)
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
};

const createTestimonialClientId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `client-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export const getTestimonialStableKey = (testimonial: PartnerTestimonial) =>
  testimonial?.id ?? testimonial?._clientId ?? undefined;

export const getTestimonialReactKey = (testimonial: PartnerTestimonial, index = 0) => {
  const stableKey = getTestimonialStableKey(testimonial);
  return stableKey != null ? String(stableKey) : `testimonial-${index}`;
};

const ensurePartnerTestimonialClientId = (testimonial: PartnerTestimonial) => {
  if (!testimonial || getTestimonialStableKey(testimonial)) return testimonial;
  return { ...testimonial, _clientId: createTestimonialClientId() };
};

/** Maps API DTO fields to normalized listing shape used by preview UI. */
export const normalizeListing = (data: Partial<MarketplaceListingDetail> = {}): MarketplaceListingDetail => ({
  ...createEmptyListing(),
  ...data,
  categories: data.categories || [],
  productKeyFeatures: data.productKeyFeatures || [],
  icpTargetSegments: Array.isArray(data.icpTargetSegments)
    ? data.icpTargetSegments
    : splitToList(data.icpTargetSegments),
  icpCompanySizes: data.icpCompanySizes || [],
  icpGeographies: Array.isArray(data.icpGeographies)
    ? data.icpGeographies
    : splitToList(data.icpGeographies),
  geographiesServed: data.geographiesServed || [],
  customerUseCases: data.customerUseCases?.length
    ? data.customerUseCases.map(({ title, description, id }) => ({
        ...(id ? { id } : {}),
        title: title || "",
        description: description || "",
      }))
    : [],
  partnerTiersAndBenefits: data.partnerTiersAndBenefits?.length
    ? data.partnerTiersAndBenefits
    : createEmptyListing().partnerTiersAndBenefits,
  idealPartnerProfile: {
    ...createEmptyListing().idealPartnerProfile!,
    ...(data.idealPartnerProfile || {}),
    description: coerceToString(data.idealPartnerProfile?.description),
    companySizes: data.idealPartnerProfile?.companySizes || [],
    adjacentPartnerships: data.idealPartnerProfile?.adjacentPartnerships || [],
    headquarteredIn: coerceToString(data.idealPartnerProfile?.headquarteredIn),
    certifications: coerceToStringList(data.idealPartnerProfile?.certifications),
  },
  partnerTestimonials: (data.partnerTestimonials || []).map(ensurePartnerTestimonialClientId),
  logoUrl: data.logoUrl || (data as { logoURL?: string }).logoURL || undefined,
  coverBannerUrl:
    data.coverBannerUrl ||
    (data as { bannerUrl?: string; coverBannerURL?: string }).bannerUrl ||
    (data as { coverBannerURL?: string }).coverBannerURL ||
    undefined,
  productVideoUrl:
    data.productVideoUrl || (data as { videoUrl?: string }).videoUrl || undefined,
});

export const joinList = (items: string[] | string | null | undefined) => {
  if (Array.isArray(items)) return items.join(", ");
  return items == null ? "" : String(items);
};

export const joinListLines = (items: string[] | string | null | undefined) => {
  if (Array.isArray(items)) return items.join("\n");
  return items == null ? "" : String(items);
};

export const parseCommaList = (value: string) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const getAuthorInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
};

export const getTestimonialHeadshotPreviewUrl = (
  testimonial: PartnerTestimonial,
  previewUrl?: string
) => previewUrl || testimonial?.authorHeadshotUrl || "";

export const getCompanyLogoInitial = (name = "") => {
  const trimmed = name.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase();
};

export const formatWebsiteDisplay = (website = "") =>
  String(website || "")
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/, "");

export const formatWebsiteHref = (website = "") => {
  if (!website?.trim()) return undefined;
  return website.startsWith("http") ? website : `https://${website}`;
};

export const buildListingMetaParts = (listing: Partial<MarketplaceListingDetail> = {}) => {
  const parts: string[] = [];
  if (listing.productType?.trim()) parts.push(listing.productType.trim());
  if (listing.location?.trim()) parts.push(listing.location.trim());
  if (listing.website?.trim()) parts.push(formatWebsiteDisplay(listing.website));
  return parts;
};
