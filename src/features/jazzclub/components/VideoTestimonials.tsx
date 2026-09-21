"use client";

import Image from "next/image";
import { useState } from "react";
import {
  VIDEO_TESTIMONIALS,
  youtubeEmbedUrl,
  youtubeThumbnail,
  type VideoTestimonial,
} from "../data/video-testimonials";

/**
 * Community proof, straight after the hero. Lightweight by default: each card
 * shows YouTube's own still and only mounts the player once the viewer hits
 * play, so nothing autoplays and three iframes never load on arrival.
 */
export function VideoTestimonials() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="video-testimonials-heading"
      className="jc-section jc-section--dark"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <h2
            id="video-testimonials-heading"
            className="jc-title max-w-[18ch]"
          >
            What people say about JazzClub
          </h2>

          {/* One row on desktop; a swipeable rail on small screens. */}
          <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
            {VIDEO_TESTIMONIALS.map((video, index) => (
              <li
                key={video.id}
                className="w-[82vw] max-w-[380px] shrink-0 snap-start sm:w-auto sm:max-w-none"
              >
                <VideoCard
                  video={video}
                  index={index}
                  playing={playing === video.id}
                  onPlay={() => setPlaying(video.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  video,
  index,
  playing,
  onPlay,
}: {
  video: VideoTestimonial;
  index: number;
  playing: boolean;
  onPlay: () => void;
}) {
  const label = video.title ?? `JazzClub community video ${index + 1}`;

  return (
    <figure className="flex h-full flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#131315] ring-1 ring-white/10">
        {playing ? (
          <iframe
            src={youtubeEmbedUrl(video)}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play ${label}`}
            className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Image
              src={youtubeThumbnail(video)}
              alt=""
              fill
              loading="lazy"
              unoptimized
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#08080a]/25 transition-colors group-hover:bg-[#08080a]/10"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition group-hover:bg-white"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-[#131315]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {video.title && (
        <figcaption className="mt-4">
          <p className="text-[17px] font-semibold tracking-[-0.01em] text-white">
            {video.title}
          </p>
          {video.description && (
            <p className="jc-sub mt-1.5">
              {video.description}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
