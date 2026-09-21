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
      className="bg-[#f6f3ec] py-20 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(19,19,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19,19,21,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <h2
            id="testimonials-heading"
            className="max-w-[16ch] text-4xl font-semibold leading-[1.06] tracking-tight text-[#131315] sm:text-5xl"
          >
            {TESTIMONIALS_HEADING}
          </h2>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {JAZZCLUB_TESTIMONIALS.map((person) => (
              <li key={person.id}>
                <figure className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-[#131315]/8">
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e8574c]">
                      {person.name}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#6b6b73]">
                      {person.role}, {person.company}
                    </p>

                    {person.quote && (
                      <blockquote className="mt-5 border-t border-[#131315]/10 pt-5 text-base leading-relaxed text-[#131315]">
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

          <div className="mt-16 border-t border-[#131315]/12 pt-10">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-[#6b6b73]">
              PARTNERS IN THE ROOM
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
