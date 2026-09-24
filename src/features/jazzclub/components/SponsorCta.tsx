"use client";

import { EVENTS_ID, SPONSOR_ID, scrollToSection } from "../data/anchors";

type Props = {
  target?: typeof EVENTS_ID | typeof SPONSOR_ID;
  children: React.ReactNode;
};

/**
 * Figma coral pill CTA. Stays on /events and scrolls to its section, so
 * every "Become a Sponsor" on the page behaves identically.
 */
export function SponsorCta({ target = SPONSOR_ID, children }: Props) {
  return (
    <a
      href={`#${target}`}
      onClick={(event) => scrollToSection(event, target)}
      className="jc-cta"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
