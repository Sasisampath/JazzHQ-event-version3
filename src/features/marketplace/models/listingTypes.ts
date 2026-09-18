export interface PartnerTierBenefits {
  name: string;
  commission?: string;
  mdf?: string;
  payPerLead?: string;
  others?: string;
}

export interface CustomerUseCase {
  id?: number;
  title: string;
  description: string;
}

export interface IdealPartnerProfile {
  description: string;
  companySizes: string[];
  certifications: string[];
  headquarteredIn: string;
  adjacentPartnerships: string[];
}

export interface PartnerTestimonial {
  id?: number;
  _clientId?: string;
  authorName: string;
  authorTitle?: string;
  authorCompany?: string;
  quote: string;
  authorHeadshotUrl?: string;
}

export interface MarketplaceListingSummary {
  id: number;
  tenantSlug: string;
  vendorId: number;
  name: string;
  tagline?: string;
  productType?: string;
  description?: string;
  logoUrl?: string;
  categories?: string[];
  icpCompanySizes?: string[];
  ippCompanySizes?: string[];
  partnerTypes?: string[];
  techTags?: string[];
  isFeatured?: boolean;
  idealPartnerProfile?: IdealPartnerProfile;
}

export interface MarketplaceListingDetail extends MarketplaceListingSummary {
  website?: string;
  location?: string;
  category?: string;
  coverBannerUrl?: string;
  productVideoType?: "YOUTUBE_LINK" | "S3_UPLOAD";
  productVideoUrl?: string;
  productKeyFeatures?: string[];
  icpProfile?: string;
  icpTargetSegments?: string[];
  icpGeographies?: string[];
  geographiesServed?: string[];
  customerUseCases?: CustomerUseCase[];
  partnerTiersAndBenefits?: PartnerTierBenefits[];
  partnerTestimonials?: PartnerTestimonial[];
}

export interface PageResponse<T> {
  data: T[];
  page: number;
  perPage: number;
  totalItems: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface TemplateSummary {
  id: string;
  name: string;
  description: string;
}
