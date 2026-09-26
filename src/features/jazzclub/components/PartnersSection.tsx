import Image from "next/image";
import { PARTNER_LOGOS } from "../data/jazzclub-testimonials";

/** Figma: centred heading over a full-width white band of co-host logos. */
export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading">
      <div className="page-section">
        <h2 id="partners-heading" className="jc-h2 text-center">
          Previous Co-hosts include
        </h2>
      </div>

      <ul className="jc-logo-row mt-[30px]">
        {PARTNER_LOGOS.map((logo) => (
          <li key={logo.name} className="jc-logo-row__item">
            <Image
              src={logo.src}
              alt={logo.name}
              width={180}
              height={40}
              loading="lazy"
              className="jc-logo-row__logo"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
