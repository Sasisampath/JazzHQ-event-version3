import Image from "next/image";
import { PARTNER_LOGOS } from "../data/jazzclub-testimonials";

/** Figma logo row: centred heading, one line of full-colour marks. */
export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading" className="page-section">
      <div className="mx-auto max-w-[var(--max-content)]">
        <h2 id="partners-heading" className="jc-h2 text-center">
          Partners in the Room
        </h2>

        <ul className="jc-logo-row mt-[30px]">
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
    </section>
  );
}
