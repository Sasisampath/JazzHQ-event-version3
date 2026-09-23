import Image from "next/image";
import { PARTNER_LOGOS } from "../data/jazzclub-testimonials";

/**
 * Partner marks in one horizontal line, full colour and optically balanced.
 * The row scrolls rather than wrapping when it runs out of width.
 */
export function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="jc-section jc-section--light"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <h2 id="partners-heading" className="jc-title text-center">
            Partners in the Room
          </h2>

          <ul className="jc-logo-row mt-10 sm:mt-12">
            {PARTNER_LOGOS.map((logo) => (
              <li key={logo.name} className="jc-logo-row__item">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={40}
                  loading="lazy"
                  className="jc-logo-row__logo"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
