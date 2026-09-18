import { 
  VendorListingsHeroSearchIcon
} from "@/features/marketplace/helper/marketplaceIcons";

type VendorListingsHeroProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSearchSubmit?: () => void;
};

export function VendorListingsHero({ keyword, onKeywordChange, onSearchSubmit }: VendorListingsHeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[14px] bg-white border border-[#eaeaea] shadow-sm w-full max-w-[1262px] mx-auto lg:h-[332px]">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full px-5 sm:px-8 lg:px-12 py-8 lg:py-0 gap-8">
        
        {/* Left side content */}
        <div className="flex-1 w-full max-w-[800px] flex flex-col justify-center relative">
          
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Vendor Listings
          </h1>
          <p className="mt-2 text-[14px] md:text-[15px] lg:text-[16px] text-[#6b7280] leading-relaxed w-full lg:whitespace-nowrap">
            Discover vendors with active partner programs. Join their network and start earning commissions.
          </p>

          {/* Mobile Graphic */}
          <div className="flex justify-center md:justify-end lg:hidden w-full mt-6 -mb-2">
            <img 
              src="/images/vendor-listings-hero/Herosec_image (3).png" 
              alt="Vendor ecosystem illustration" 
              className="w-[60%] max-w-[220px] h-auto object-contain"
            />
          </div>

          {/* Search Bar */}
          <div className="mt-8 md:mt-6 max-w-[580px] w-full">
            <form onSubmit={handleSubmit} className="relative flex items-center w-full rounded-xl border border-[#eaeaea] bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#E5484D] focus-within:border-transparent transition-all">
              <div className="pl-3 md:pl-4 text-[#9ca3af]">
                <VendorListingsHeroSearchIcon />
              </div>
              <input
                type="search"
                value={keyword}
                onChange={(e) => onKeywordChange(e.target.value)}
                placeholder="Search programs, tools or categories..."
                className="flex-1 border-0 bg-transparent py-3 md:py-3.5 pl-2 md:pl-3 pr-2 md:pr-3 text-[#111827] placeholder:text-[#9ca3af] focus:ring-0 text-[13px] md:text-[15px] outline-none"
              />
              <div className="pr-1.5 md:pr-2 py-1.5 md:py-2">
                <button
                  type="submit"
                  className="rounded-lg md:rounded-[10px] bg-[#ef4444] px-4 md:px-8 py-2 text-[13px] md:text-[15px] font-semibold text-white transition-colors hover:bg-[#dc2626] cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right side graphic (Desktop Only) */}
        <div className="hidden lg:flex relative w-full lg:w-[400px] justify-end items-center">
          <img 
            src="/images/vendor-listings-hero/Herosec_image (3).png" 
            alt="Vendor ecosystem illustration" 
            className="w-full h-auto max-w-[340px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
