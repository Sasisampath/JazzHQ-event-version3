import Image from "next/image";
import { FOUNDING_LOGOS } from "@/data/home";
import { LogoStripMarquee } from "@/components/shared/logo-strip-marquee";
import { BackedByCards } from "@/components/home/backed-by-cards";

export function BackedBySection() {
  return (
    <section className="backed-by-section">
      <div className="backed-by-section__inner page-section">
        <header className="backed-by-section__header">
          <h2 className="backed-by-section__title">
            Backed by the Best in the Industry
          </h2>
          <p className="backed-by-section__subtitle">
            Our early investors include prominent founders and seasoned
            executives, who&apos;ve worked at large corporates and leading
            marketplaces
          </p>
        </header>

        <div className="backed-by-section__row">
          <Image
            src="/assets/backed-by/arrow.svg"
            alt="Decorative arrow pointing to advisor cards"
            width={240}
            height={197}
            className="backed-by-section__arrow"
            aria-hidden
          />

          <BackedByCards />
        </div>
      </div>

      <LogoStripMarquee logos={FOUNDING_LOGOS} className="backed-by-logos-strip" />
    </section>
  );
}
