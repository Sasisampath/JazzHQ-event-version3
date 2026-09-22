import Image from "next/image";
import {
  JAZZCLUB_TESTIMONIALS,
  PARTNER_LOGOS,
  TESTIMONIALS_HEADING,
} from "../data/jazzclub-testimonials";

/**
 * Quote-led editorial cards. The supplied portraits are small (≈250px), so
 * they render as a sharp 88px avatar rather than a stretched banner — the
 * quote carries the card and nothing is upscaled.
 */
export function JazzclubTestimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="jc-section jc-section--light"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <p className="jc-eyebrow">Testimonials</p>
          <h2 id="testimonials-heading" className="jc-title mt-5 max-w-[18ch]">
            {TESTIMONIALS_HEADING}
          </h2>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {JAZZCLUB_TESTIMONIALS.map((person) => (
              <li key={person.id}>
                <figure
                  className="jc-quote-card flex h-full flex-col rounded-2xl border border-[var(--stroke)] bg-white p-7 sm:p-8"
                  style={{ ["--jc-accent" as string]: person.panel }}
                >
                  <span aria-hidden="true" className="jc-quote-mark">
                    “
                  </span>

                  {person.quote && (
                    <blockquote className="text-[17px] leading-[1.55] tracking-[-0.01em] text-[#131315] sm:text-[19px]">
                      {person.quote}
                    </blockquote>
                  )}

                  <figcaption className="mt-auto flex items-center gap-4 border-t border-[var(--stroke)] pt-6">
                    <span className="jc-avatar">
                      <Image
                        src={person.portrait}
                        alt={`${person.name}, ${person.role} at ${person.company}`}
                        width={176}
                        height={176}
                        quality={95}
                        loading="lazy"
                        sizes="88px"
                        className="h-full w-full object-cover object-top"
                      />
                    </span>

                    <span className="min-w-0">
                      <span className="jc-eyebrow block">{person.name}</span>
                      <span className="jc-body mt-1.5 block text-sm">
                        {person.role}, {person.company}
                      </span>
                    </span>

                    {person.logo && (
                      <Image
                        src={person.logo}
                        alt={person.company}
                        width={104}
                        height={26}
                        loading="lazy"
                        className="ml-auto h-5 w-auto shrink-0 opacity-60"
                      />
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-[var(--stroke)] pt-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#9a9aa2]">
              Partners in the room
            </p>
            <ul className="mt-7 flex flex-wrap items-center gap-x-12 gap-y-7">
              {PARTNER_LOGOS.map((logo) => (
                <li key={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={128}
                    height={32}
                    loading="lazy"
                    className="h-6 w-auto opacity-55 sm:h-7"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
