import Image from "next/image";
import {
  ABOUT_FOUNDERS,
  ABOUT_JOURNEY_SUBTITLE,
  ABOUT_JOURNEY_TITLE,
  ABOUT_PAPER_FRAME,
  ABOUT_TIMELINE,
  ABOUT_TIMELINE_HERO_IMAGE,
  type AboutTimelineColor,
} from "@/data/about";

const TIMELINE_COLOR_CLASS: Record<AboutTimelineColor, string> = {
  red: "about-journey-card--red",
  blue: "about-journey-card--blue",
  green: "about-journey-card--green",
};

function JourneyCard({
  date,
  title,
  description,
  color,
  align,
}: {
  date: string;
  title: string;
  description: string;
  color?: AboutTimelineColor;
  align: "left" | "right";
}) {
  const variantClass = color
    ? TIMELINE_COLOR_CLASS[color]
    : "about-journey-card--white";

  return (
    <article
      className={`about-journey-card ${variantClass} about-journey-card--${align}`}
    >
      <p className="about-journey-card__date">{date}</p>
      <h3 className="about-journey-card__title">{title}</h3>
      <p className="about-journey-card__description">{description}</p>
    </article>
  );
}

function JourneyMedia({
  src,
  alt,
  priority = false,
  imageFit = "cover",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  imageFit?: "cover" | "contain";
}) {
  return (
    <div
      className={`about-journey-media${imageFit === "contain" ? " about-journey-media--contain" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        className={`about-journey-media__image about-journey-media__image--${imageFit}`}
        priority={priority}
      />
    </div>
  );
}

export function AboutNotepadSection() {
  return (
    <section className="about-page">
      <div className="about-page__inner page-section">
        <h1 className="about-page__title">Why we are building JazzHQ</h1>

        <div className="about-notepad">
          <div className="about-notepad__paper" aria-hidden>
            <Image
              src={ABOUT_PAPER_FRAME}
              alt="Decorative notepad paper background"
              fill
              sizes="(max-width: 768px) 100vw, 758px"
              className="object-fill"
              priority
            />
          </div>

          <div className="about-notepad__content">
            <p className="about-notepad__text">
              AI has changed how software is built. But it has not changed one
              truth:{" "}
              <span className="about-highlight-yellow">
                software still needs humans to make it successful.
              </span>
            </p>

            <p className="about-notepad__text">
              The market is full of powerful AI products, but{" "}
              <span className="about-wavy-underline">discovery is broken</span>.
              Vendors struggle to reach the right customers, build trust, and
              drive adoption through traditional channels. Buyers are overwhelmed.
              Great products get missed.
            </p>

            <p className="about-notepad__text">
              At the same time, consultants, agencies, and channel partners are
              looking for new ways to build revenue around AI. They want credible
              products to represent, practical training, ready-to-use templates,
              and a clear path to monetization.
            </p>

            <p className="about-notepad__text">
              But{" "}
              <span className="about-pill-purple">the ecosystem is fragmented</span>{" "}
              Vendors and partners are still finding each other through scattered
              networks, manual outreach, spreadsheets, and luck.
            </p>

            <div className="about-callout">
              <p className="about-notepad__text about-notepad__text--callout">
                <span className="about-highlight-gold">
                  Because AI does not deploy itself.
                </span>{" "}
                It needs humans who understand customers, workflows, adoption,
                and outcomes.
              </p>
            </div>

            <p className="about-notepad__text">
              JazzHQ is where AI companies and those humans{" "}
              <span className="about-pill-purple">come together.</span>
            </p>

            <div className="about-founders">
              {ABOUT_FOUNDERS.map((founder) => (
                <article key={founder.name} className="about-founder">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={72}
                    height={72}
                    className="about-founder__avatar"
                  />
                  <p className="about-founder__name">{founder.name}</p>
                  <p className="about-founder__role">{founder.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutTimelineSection() {
  return (
    <section className="about-journey-section">
      <div className="page-section about-journey-section__header">
        <h2 className="about-journey-section__title">{ABOUT_JOURNEY_TITLE}</h2>
        <p className="about-journey-section__subtitle">{ABOUT_JOURNEY_SUBTITLE}</p>
      </div>

      <div className="about-journey-section__rule" aria-hidden />

      <div className="page-section about-journey-grid-wrap">
        <div className="about-journey-grid">
          <div className="about-journey-grid__yellow-bar" aria-hidden />
          <div className="about-journey-grid__top-rule" aria-hidden />
          <div className="about-journey-grid__spine" aria-hidden />
          <div className="about-journey-grid__mobile-spine" aria-hidden />

        {ABOUT_TIMELINE.map((item, index) => {
          const cardOnLeft = index % 2 === 0;

          return (
            <div
              key={`${item.title}-${index}`}
              className={`about-journey-grid__row ${
                cardOnLeft
                  ? "about-journey-grid__row--card-left"
                  : "about-journey-grid__row--card-right"
              }`}
            >
              {cardOnLeft ? (
                <>
                  <JourneyCard
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                    align="left"
                  />
                  <JourneyMedia
                    src={item.image}
                    alt={`${item.title} — ${item.date}`}
                    priority={index === 0}
                    imageFit={item.imageFit}
                  />
                </>
              ) : (
                <>
                  <JourneyMedia
                    src={item.image}
                    alt={`${item.title} — ${item.date}`}
                    imageFit={item.imageFit}
                  />
                  <JourneyCard
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    align="right"
                  />
                </>
              )}
            </div>
          );
        })}

        <div className="about-journey-grid__hero">
          <Image
            src={ABOUT_TIMELINE_HERO_IMAGE}
            alt="JazzHQ team"
            width={1600}
            height={640}
            sizes="100vw"
            className="about-journey-hero__image"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
