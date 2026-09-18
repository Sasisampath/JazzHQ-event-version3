import Image from "next/image";
import Link from "next/link";

type HeroValueCardProps = {
  variant: "vendor" | "partner";
};

const CARD_CONFIG = {
  vendor: {
    title: "List Your Product",
    description:
      "Attract, activate, and scale your channel partner ecosystem automatically. Over 1,000 certified resellers are waiting.",
    frame: "/assets/hero/vendor-card-bg.svg",
    href: "/for-vendors",
  },
  partner: {
    title: "Become a Partner",
    description:
      "Add high-margin AI packages to your agency reselling portfolio. Discover vetted software, download battlecards, and grow.",
    frame: "/assets/hero/partner-card-bg.svg",
    href: "/for-partners",
  },
} as const;

function CardCtaVisual({ label }: { label: string }) {
  return (
    <span className="inline-flex h-full min-h-[42px] w-full items-center justify-between gap-2.5 rounded-full bg-[#131315] pl-5 pr-1.5 text-[13px] font-medium text-white md:min-h-[46px] md:pl-5 md:text-[14px]">
      <span className="truncate">{label}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#131315] md:h-9 md:w-9">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden>
          <path
            d="M1 1L6.5 6L1 11"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

export function HeroValueCard({ variant }: HeroValueCardProps) {
  const config = CARD_CONFIG[variant];

  return (
    <Link
      href={config.href}
      className={`hero-value-card hero-value-card--${variant} block cursor-pointer transition-opacity hover:opacity-95`}
    >
      <div className="hero-value-card__frame">
        <Image
          src={config.frame}
          alt={`${config.title} card illustration`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-left"
          priority
        />

        <div className="hero-value-card__overlay">
          <div className="hero-value-card__content">
            <h3 className="hero-value-card__title">{config.title}</h3>
            <p className="hero-value-card__description">{config.description}</p>
          </div>

          <div className="hero-value-card__cta">
            <CardCtaVisual label={config.title} />
          </div>
        </div>
      </div>
    </Link>
  );
}
