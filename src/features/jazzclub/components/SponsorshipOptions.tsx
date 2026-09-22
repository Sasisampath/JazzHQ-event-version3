import Link from "next/link";
import { CO_HOST_URL } from "../data/events";
import {
  SPONSORSHIP_HEADING,
  SPONSORSHIP_OPTIONS,
  SPONSOR_CTA_LABEL,
} from "../data/sponsors";

/**
 * Dark section, three flat cards. "Become a sponsor" reuses the existing
 * JazzHQ co-host/sponsor form — no second form is introduced.
 */
export function SponsorshipOptions() {
  return (
    <section
      aria-labelledby="sponsorship-heading"
      className="jc-section jc-section--dark"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <p className="jc-eyebrow">Sponsorship options</p>
          <h2
            id="sponsorship-heading"
            className="jc-title mt-5 max-w-[20ch]"
          >
            {SPONSORSHIP_HEADING}
          </h2>

          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {SPONSORSHIP_OPTIONS.map((option) => (
              <li
                key={option.id}
                className="jc-option-card flex h-full flex-col rounded-[28px] p-8 sm:p-10"
                style={{ backgroundColor: option.surface, color: option.ink }}
              >
                <h3 className="text-[22px] font-bold leading-[1.2] tracking-[-0.02em] sm:text-2xl">
                  {option.name}
                </h3>
                <p
                  className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: option.muted }}
                >
                  {option.branding}
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {option.points.map((point) => (
                    <li
                      key={point}
                      className="border-t pt-4 text-[15px] leading-[1.6] first:border-t-0 first:pt-0"
                      style={{ borderColor: option.rule }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center lg:justify-start">
            <Link
              href={CO_HOST_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#e8574c] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#d54a40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {SPONSOR_CTA_LABEL}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
