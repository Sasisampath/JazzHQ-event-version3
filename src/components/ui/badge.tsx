type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className=" w-fit inline-flex rounded-full border border-black bg-[var(--badge-yellow)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black md:text-xs">
      {children}
    </span>
  );
}
