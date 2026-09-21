import Image from "next/image";
import {
  JAZZCLUB_TESTIMONIALS,
  PARTNER_LOGOS,
  TESTIMONIALS_HEADING,
} from "../data/jazzclub-testimonials";

/**
 * Supplied cut-out portraits, coral name label, role and quote, over the
 * JazzHQ grid. Real partner marks sit underneath — nothing invented.
 */
export function JazzclubTestimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="jc-section jc-section--light"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <h2
            id="testimonials-heading"
            className="jc-title max-w-[18ch]"
          >
            {TESTIMONIALS_HEADING}
          </h2>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {JAZZCLUB_TESTIMONIALS.map((person) => (
              <li key={person.id}>
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--stroke)] bg-white">
                  {/* The supplied portraits are opaque, so they run
                      full-bleed; the accent stays as a thin band above. */}
                  <div
                    aria-hidden="true"
                    className="h-1.5 w-full"
                    style={{ backgroundColor: person.panel }}
                  />
                  <div className="relative h-[280px] w-full overflow-hidden bg-white sm:h-[320px]">
                    <Image
                      src={person.portrait}
                      alt={`${person.name}, ${person.role} at ${person.company}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <figcaption className="flex flex-1 flex-col p-7">
                    <p className="jc-eyebrow">{person.name}</p>
                    <p className="jc-body mt-2 text-sm">
                      {person.role}, {person.company}
                    </p>

                    {person.quote && (
                      <blockquote className="mt-5 border-t border-[var(--stroke)] pt-5 text-[15px] leading-[1.6] text-[#131315]">
                        “{person.quote}”
                      </blockquote>
                    )}

                    {person.logo && (
                      <div className="mt-auto pt-7">
                        <Image
                          src={person.logo}
                          alt={person.company}
                          width={104}
                          height={26}
                          loading="lazy"
                          className="h-6 w-auto opacity-70"
                        />
                      </div>
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
