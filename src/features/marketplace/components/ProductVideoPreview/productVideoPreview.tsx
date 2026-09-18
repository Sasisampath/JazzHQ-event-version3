import { Play } from "lucide-react";
import type { MarketplaceListingDetail } from "@/features/marketplace/models/listingTypes";

function ProductVideoEmptyPreview() {
  return (
    <div className="vendor-detail-video-preview vendor-detail-video-preview--empty">
      <span className="vendor-detail-video-preview__play" aria-hidden="true">
        <Play size={18} fill="currentColor" />
      </span>
    </div>
  );
}

export function YouTubePreview({ url }: { url: string }) {
  if (!url) return <ProductVideoEmptyPreview />;

  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  const videoId = match?.[1];
  if (!videoId) return <ProductVideoEmptyPreview />;

  return (
    <div className="vendor-detail-video-preview">
      <iframe
        title="Product video preview"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function ProductVideoPreview({
  listing,
  previewUrl,
}: {
  listing: MarketplaceListingDetail;
  previewUrl?: string;
}) {
  if (listing.productVideoType === "YOUTUBE_LINK") {
    return <YouTubePreview url={listing.productVideoUrl || ""} />;
  }

  const src = previewUrl || listing.productVideoUrl;
  if (src) {
    return (
      <div className="vendor-detail-video-preview">
        <video src={src} controls playsInline className="vendor-detail-video-preview__video" />
      </div>
    );
  }

  return <ProductVideoEmptyPreview />;
}
