"use client";

export const CATEGORY_OPTIONS = [
  { id: "all", label: "All Programs" },
  { id: "CRM", label: "CRM" },
  { id: "Customer Support", label: "Customer Support" },
  { id: "HR & Talent", label: "HR & Talent" },
  { id: "Finance & Accounting", label: "Finance & Accounting" },
  { id: "Marketing", label: "Marketing" },
  { id: "Document Management", label: "Document Management" },
  { id: "Project & Work Management", label: "Project & Work Management" },
  { id: "Data & Reporting", label: "Data & Reporting" },
  { id: "IT & Security", label: "IT & Security" },
  { id: "Developer Tools", label: "Developer Tools" },
] as const;

type CategoryFilterPillsProps = {
  value: string;
  onChange: (category: string) => void;
};

export function CategoryFilterPills({ value, onChange }: CategoryFilterPillsProps) {
  return (
    <div className="min-h-11 pb-1 w-full relative">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}} />
      <div 
        className="flex overflow-x-auto sm:flex-wrap gap-2 md:gap-3 pb-2 sm:pb-0 hide-scroll snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {CATEGORY_OPTIONS.map((option) => {
          const active = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#E5484D] text-white"
                  : "border border-[#e6e8ea] bg-white text-[#6b7280] hover:text-[#111827]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
