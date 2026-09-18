"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/home";

const TRANSITION_MS = 300;

function QuoteMarks() {
  return (
    <div className="testimonial-card__quote-marks" aria-hidden>
      <Image
        src="/assets/testimonials/quote-icon.svg"
        alt="Decorative quotation mark"
        width={27}
        height={41}
        className="testimonial-card__quote-icon"
      />
      <Image
        src="/assets/testimonials/quote-icon.svg"
        alt="Decorative quotation mark"
        width={27}
        height={41}
        className="testimonial-card__quote-icon"
      />
    </div>
  );
}

function HeartSticker({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="testimonial-card__heart-sticker-wrap">
      <Image
        src={src}
        alt={alt}
        width={145}
        height={120}
        className="testimonial-card__heart-sticker"
      />
    </div>
  );
}

function PaginationDots({
  active,
  onChange,
}: {
  active: number;
  onChange: (index: number) => void;
}) {
  return (
    <div className="testimonial-card__pagination">
      {TESTIMONIALS.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show testimonial ${index + 1}`}
          onClick={() => onChange(index)}
          className={`testimonial-card__dot ${index === active ? "is-active" : ""}`}
        />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeRef = useRef(active);
  const transitioningRef = useRef(false);

  const changeSlide = useCallback((index: number) => {
    if (index === activeRef.current || transitioningRef.current) {
      return;
    }

    transitioningRef.current = true;
    setIsTransitioning(true);

    window.setTimeout(() => {
      setActive(index);
      activeRef.current = index;
      transitioningRef.current = false;
      setIsTransitioning(false);
    }, TRANSITION_MS);
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      changeSlide((activeRef.current + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [changeSlide]);

  const item = TESTIMONIALS[active];
  const showHeart = "showHeart" in item && Boolean(item.showHeart);
  const heartBadge =
    "heartBadge" in item && typeof item.heartBadge === "string"
      ? item.heartBadge
      : "/assets/testimonials/heart-badge-shashidhar.webp";
  const transitionClass = isTransitioning
    ? "testimonial-card--transitioning"
    : "testimonial-card--visible";

  return (
    <section className="testimonial-section">
      <div className="testimonial-section__inner page-section">
        <header className="testimonial-section__header">
          <h2 className="testimonial-section__title">Trusted by</h2>
          <p className="testimonial-section__subtitle">
            Hear from technology partners running active operations on JazzHQ.
          </p>
        </header>

        <div className="testimonial-card-wrap">
          <div className="testimonial-card-row">
            <div className="testimonial-card__quote-wrap">
              {showHeart && (
                <HeartSticker
                  src={heartBadge}
                  alt={`${item.name} customer appreciation badge`}
                />
              )}

              <article
                className={`testimonial-card__quote-panel ${transitionClass} ${
                  showHeart ? "testimonial-card__quote-panel--with-heart" : ""
                }`}
                style={{ backgroundColor: item.quoteBg }}
              >
                <div className="testimonial-card__quote-body">
                  {!showHeart && <QuoteMarks />}
                  <blockquote className="testimonial-card__quote">
                    {item.quote}
                  </blockquote>
                </div>

                <div className="testimonial-card__footer">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={120}
                    height={28}
                    className="testimonial-card__logo"
                  />
                  <PaginationDots active={active} onChange={changeSlide} />
                </div>
              </article>
            </div>

            <div
              className={`testimonial-card__photo-panel ${transitionClass}`}
              style={{
                backgroundColor:
                  "photoPanelBg" in item && typeof item.photoPanelBg === "string"
                    ? item.photoPanelBg
                    : undefined,
              }}
            >
              <Image
                src={item.panel}
                alt={`${item.name}, ${item.company}`}
                width={1500}
                height={1250}
                sizes="(max-width: 768px) 100vw, 320px"
                className="testimonial-card__photo"
                priority={active === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
