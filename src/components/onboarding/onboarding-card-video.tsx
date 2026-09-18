"use client";

import { useCallback, useRef, useState } from "react";

const DEFAULT_VIMEO_VIDEO_ID = "1185814961";

type OnboardingCardVideoProps = {
  videoId?: string;
};

function buildEmbedSrc(videoId: string, muted: boolean) {
  const params = new URLSearchParams({
    api: "1",
    autoplay: "1",
    muted: muted ? "1" : "0",
    loop: "1",
    background: "1",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
}

export function OnboardingCardVideo({
  videoId = DEFAULT_VIMEO_VIDEO_ID,
}: OnboardingCardVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const postToPlayer = useCallback((method: string, value: number | boolean) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method, value }),
      "https://player.vimeo.com",
    );
  }, []);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    postToPlayer("setVolume", nextMuted ? 0 : 1);
  };

  return (
    <div className="onboarding-card__media">
      <iframe
        ref={iframeRef}
        src={buildEmbedSrc(videoId, true)}
        title="JazzHQ"
        className="onboarding-card__video"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
      <button
        type="button"
        className="onboarding-card__mute-btn"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M11 5L6 9H3v6h3l5 4V5z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 9l5 5M21 9l-5 5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M11 5L6 9H3v6h3l5 4V5z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
