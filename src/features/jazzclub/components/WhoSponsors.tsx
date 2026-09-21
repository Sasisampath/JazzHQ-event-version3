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
      className="jc-section jc-section--light scroll-mt-24"
    >
      <div className="page-section">
        <div className="mx-auto grid max-w-[var(--max-content)] gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <p className="jc-eyebrow">Who sponsors</p>
            <h2
              id="who-sponsors-heading"
              className="jc-title mt-5"
            >
              {WHO_SPONSORS_HEADING}
            </h2>
            <p className="jc-sub mt-4 max-w-[46ch]">
              {WHO_SPONSORS_INTRO}
            </p>
          </div>

          <dl className="border-t border-[var(--stroke)]">
            {SPONSOR_MATCHES.map((match) => (
              <div
                key={match.index}
                className="grid gap-3 border-b border-[var(--stroke)] py-7 sm:grid-cols-[132px_1fr] sm:gap-8 sm:py-9"
              >
                <dt className="jc-eyebrow">
                  {match.index}
                </dt>
                <dd>
                  <p className="text-xl font-bold uppercase leading-[1.2] tracking-[-0.01em] text-[#131315] sm:text-[22px]">
                    {match.audience}
                  </p>
                  <p className="jc-body mt-2.5 max-w-[46ch]">
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
