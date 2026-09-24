import Image from "next/image";
import { SPONSOR_ID } from "../data/anchors";
import {
  SPONSORSHIP_HEADING,
  SPONSORSHIP_OPTIONS,
  SPONSOR_CTA_LABEL,
} from "../data/sponsors";
import { SponsorCta } from "./SponsorCta";

/** Figma tick: 18px filled circle with a white check. */
function Tick({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
        fill={color}
        stroke={color}
        strokeWidth="1.125"
      />
      <path
        d="M6 9.375 7.5 10.875 11.625 7.125"
        stroke="#fff"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Figma V4 "Three simple ways": heading + CTA row, three cards side by side. */
export function SponsorshipOptions() {
  return (
    <section aria-labelledby="sponsorship-heading" className="page-section">
      <div className="mx-auto max-w-[var(--max-content)]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 id="sponsorship-heading" className="jc-h2 max-w-[959px]">
            {SPONSORSHIP_HEADING}
          </h2>
          <SponsorCta target={SPONSOR_ID}>{SPONSOR_CTA_LABEL}</SponsorCta>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {SPONSORSHIP_OPTIONS.map((option) => (
            <li key={option.id} className={`jc-plan jc-plan--${option.tone}`}>
              {option.tone === "dark" && (
                <Image
                  src="/assets/jazzclub/sponsorship/co-market-bg.webp"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="pointer-events-none object-cover"
                />
              )}
              <div className="relative">
                <h3 className="jc-plan__title">{option.name}</h3>
                <p className="jc-plan__brand">{option.branding}</p>

                <div className="jc-plan__media">
                  <Image
                    src={option.image}
                    alt={option.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>

                <ul className="jc-plan__points">
                  {option.points.map((point) => (
                    <li key={point}>
                      <Tick color={option.tick} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
