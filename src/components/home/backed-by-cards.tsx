"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ADVISORS } from "@/data/home";

function AdvisorCard({ advisor }: { advisor: (typeof ADVISORS)[number] }) {
  return (
    <article className="advisor-card">
      <div className="advisor-card__frame">
        <Image
          src="/assets/backed-by/card-frame.png"
          alt="Advisor profile card frame"
          fill
          sizes="(max-width: 768px) 280px, 390px"
          className="object-contain"
        />

        <div className="advisor-card__content">
          <div className="advisor-card__photo">
            <Image
              src={advisor.photo}
              alt={advisor.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="advisor-card__name">{advisor.name}</h3>
          <p className="advisor-card__role">{advisor.role}</p>
        </div>
      </div>
    </article>
  );
}

export function BackedByCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) {
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (!container || !card) {
      return;
    }

    const targetLeft =
      card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;

    container.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <>
      <div ref={scrollRef} className="backed-by-section__cards">
        {ADVISORS.map((advisor) => (
          <AdvisorCard key={advisor.name} advisor={advisor} />
        ))}
      </div>

      <div className="backed-by-section__dots" aria-hidden={false}>
        {ADVISORS.map((advisor, index) => (
          <button
            key={advisor.name}
            type="button"
            aria-label={`Show advisor ${index + 1}: ${advisor.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => scrollToIndex(index)}
            className={`backed-by-section__dot ${
              index === activeIndex ? "is-active" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
}
