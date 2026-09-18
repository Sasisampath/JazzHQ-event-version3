import Image from "next/image";

type LogoItem = {
  name: string;
  src: string;
};

type LogoMarqueeProps = {
  title: string;
  logos: LogoItem[];
  duration?: string;
  subtitle?: string;
};

export function LogoMarquee({
  title,
  logos,
  duration = "40s",
  subtitle,
}: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <section className="page-section py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--heading)] md:text-4xl lg:text-[42px]">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-base text-[var(--muted)] md:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f6f2] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f6f2] to-transparent md:w-24" />

        <div
          className="marquee-track items-center gap-12 px-6 md:gap-16"
          style={{ "--marquee-duration": duration } as React.CSSProperties}
        >
          {track.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-12 shrink-0 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-14"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={46}
                className="h-auto max-h-10 w-auto max-w-[140px] object-contain md:max-h-12 md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
