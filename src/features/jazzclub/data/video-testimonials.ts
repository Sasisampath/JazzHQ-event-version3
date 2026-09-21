/**
 * Community video testimonials shown on /events.
 *
 * Only real, supplied YouTube URLs belong here. Titles and descriptions stay
 * empty until JazzHQ supplies them — the cards fall back to the section
 * heading rather than inventing a quote.
 */

export type VideoTestimonial = {
  id: string;
  /** Public YouTube URL as supplied. */
  youtubeUrl: string;
  /** Supplied title, or null while it is still to come. */
  title: string | null;
  description?: string | null;
  /** Custom artwork. `null` uses YouTube's own thumbnail for the video. */
  thumbnail?: string | null;
};

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "-Nd7whaakRY",
    youtubeUrl: "https://youtu.be/-Nd7whaakRY",
    title: null,
    thumbnail: null,
  },
  {
    id: "nJtDeh-L04o",
    youtubeUrl: "https://youtu.be/nJtDeh-L04o",
    title: null,
    thumbnail: null,
  },
  {
    id: "fdMmGgifx2I",
    youtubeUrl: "https://youtu.be/fdMmGgifx2I",
    title: null,
    thumbnail: null,
  },
];

/** YouTube's own still for a video — no API key, no extra assets. */
export function youtubeThumbnail(video: VideoTestimonial) {
  return video.thumbnail ?? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

/** Privacy-friendly player URL, only loaded once the viewer hits play. */
export function youtubeEmbedUrl(video: VideoTestimonial) {
  return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`;
}
