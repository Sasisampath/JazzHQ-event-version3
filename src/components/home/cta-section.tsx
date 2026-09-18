import Image from "next/image";

export function CtaSection() {
  return (
    <section className="page-section py-14 md:py-2">
      {/* Heading */}
      <div className="text-center ">
        <h2 className="text-[clamp(32px,4vw,52px)] font-bold text-[#131315] tracking-tight">
          Ready to Grow?
        </h2>
        <p className="mt-4 text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
          Whether you are an AI vendor looking for distribution, or a
          consultant, agency, or channel partner looking to add AI revenue,
          JazzHQ gives you the marketplace and infrastructure to grow.
        </p>
      </div>

      {/* Three-column row */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 lg:mt-0 gap-0 lg:gap-10">
        {/* List Your Product button */}
        <a
          href="/for-vendors"
          className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#5048E5] px-7 py-4 text-base font-bold text-white hover:bg-[#4039D4] transition-colors shadow-lg"
        >
          List Your Product
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            →
          </span>
        </a>

        {/* Center illustration */}
        <div className="relative mx-auto h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:h-[400px] lg:w-[500px]">
          <Image
            src="/assets/cta/ready-to-grow.webp"
            alt="Illustration of a character ready to grow with JazzHQ"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Become a Partner button */}
        <a
          href="/for-partners"
          className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#E84545] px-7 py-4 text-base font-bold text-white hover:bg-[#D43838] transition-colors shadow-lg"
        >
          Become a Partner
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
