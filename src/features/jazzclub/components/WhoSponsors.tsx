import {
  SPONSOR_MATCHES,
  WHO_SPONSORS_HEADING,
  WHO_SPONSORS_INTRO,
} from "../data/sponsors";

/**
 * Editorial split: the argument on the left, the match table on the right.
 * This is where the hero's "Co-host with JazzHQ" CTA lands, hence the id and
 * the scroll offset for the fixed navbar.
 */
export function WhoSponsors() {
  return (
    <section
      id="who-sponsors"
      aria-labelledby="who-sponsors-heading"
      className="scroll-mt-24 bg-[#f6f3ec] py-20 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(19,19,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19,19,21,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div className="page-section">
        <div className="mx-auto grid max-w-[var(--max-content)] gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-[#e8574c]">
              WHO SPONSORS
            </p>
            <h2
              id="who-sponsors-heading"
              className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-[#131315] sm:text-5xl lg:text-[56px]"
            >
              {WHO_SPONSORS_HEADING}
            </h2>
            <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-[#5b5b63] sm:text-lg">
              {WHO_SPONSORS_INTRO}
            </p>
          </div>

          <dl className="border-t border-[#131315]/12">
            {SPONSOR_MATCHES.map((match) => (
              <div
                key={match.index}
                className="grid gap-3 border-b border-[#131315]/12 py-7 sm:grid-cols-[132px_1fr] sm:gap-8 sm:py-9"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e8574c]">
                  {match.index}
                </dt>
                <dd>
                  <p className="text-xl font-semibold uppercase tracking-tight text-[#131315] sm:text-2xl">
                    {match.audience}
                  </p>
                  <p className="mt-2.5 max-w-[46ch] text-sm leading-relaxed text-[#5b5b63] sm:text-base">
                    {match.copy}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
