"use client";

import { EVENTS_ID, SPONSOR_ID, scrollToSection } from "../data/anchors";

type Props = {
  target?: typeof EVENTS_ID | typeof SPONSOR_ID;
  variant?: "primary" | "secondary" | "onDark";
  children: React.ReactNode;
};

const STYLES = {
  primary:
    "bg-[#e8574c] text-white hover:bg-[#d54a40] focus-visible:outline-white",
  secondary:
    "border border-[#131315]/20 text-[#131315] hover:border-[#131315]/45 hover:bg-[#131315]/[0.03] focus-visible:outline-[#131315]",
  onDark:
    "border border-white/35 text-white hover:border-white/70 hover:bg-white/5 focus-visible:outline-white",
} as const;

/**
 * The page's two CTAs. Both stay on /events and scroll to their section,
 * so every "Attend Our Event" / "Become a Sponsor" behaves identically.
 */
export function SponsorCta({
  target = SPONSOR_ID,
  variant = "primary",
  children,
}: Props) {
  return (
    <a
      href={`#${target}`}
      onClick={(event) => scrollToSection(event, target)}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${STYLES[variant]}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
