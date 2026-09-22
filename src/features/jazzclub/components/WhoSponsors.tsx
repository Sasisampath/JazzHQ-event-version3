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
        <div className="mx-auto grid max-w-[var(--max-content)] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
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

          <dl className="lg:pt-2">
            {SPONSOR_MATCHES.map((match) => (
              <div
                key={match.index}
                className="grid gap-2.5 border-t border-[var(--stroke)] py-7 first:border-t-0 first:pt-0 sm:grid-cols-[112px_1fr] sm:gap-10 sm:py-8"
              >
                <dt className="jc-eyebrow sm:pt-1">{match.index}</dt>
                <dd>
                  <p className="text-[19px] font-bold uppercase leading-[1.25] tracking-[-0.01em] text-[#131315] sm:text-[21px]">
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
