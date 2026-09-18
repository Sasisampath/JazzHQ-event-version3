import Image from "next/image";
import { HeroValueCard } from "@/components/home/hero-value-card";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__inner page-section mb-10">
        <div className="hero-section__heading-wrap">
          <Image
            src="/assets/hero/arrow-left.png"
            alt="Decorative arrow pointing to the hero headline"
            width={233}
            height={120}
            priority
            className="hidden lg:block left-arrow"
          />
          <Image
            src="/assets/hero/arrow-right.png"
            alt="Decorative arrow pointing to the hero headline"
            width={233}
            height={233}
            className="hero-section__arrow hero-section__arrow--right"
            aria-hidden
          />

          <div className="hero-section__heading">
            <h1 className="hero-section__title">
              Full-stack{" "}
              <span className="hero-section__highlight">AI Distribution Platform</span>
            </h1>

            <p className="hero-section__subtitle">
              We help AI-first companies grow through channel partners.
              <br className="hidden sm:block" />
              Because AI needs{" "}
              <span className="hero-section__humans">
                humans to deploy it!
                <Image
                  src="/assets/hero/green-underline.svg"
                  alt="Decorative green underline beneath humans to deploy it"
                  width={224}
                  height={40}
                  className="hero-section__underline"
                  aria-hidden
                />
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="hero-section__cards">
          <HeroValueCard variant="vendor" />
          <HeroValueCard variant="partner" />
        </div>
      </div>
    </section>
  );
}
