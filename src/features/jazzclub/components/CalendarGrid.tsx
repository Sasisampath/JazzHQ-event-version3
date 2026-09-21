"use client";

import {
  CALENDAR_2027,
  CALENDAR_EMPTY_LABEL,
  type CalendarMonth,
} from "../data/calendar-2027";

type Props = {
  /** Light = editorial section on /events, dark = modal on /events/explore. */
  tone: "light" | "dark";
  /**
   * Cities that have published events. Those render as buttons; everything
   * else stays plain information — no fake links.
   */
  linkedCities?: Set<string>;
  onCityClick?: (city: string) => void;
};

/** The 2027 calendar, rendered from the shared data in both tones. */
export function CalendarGrid({ tone, linkedCities, onCityClick }: Props) {
  const dark = tone === "dark";
  const quarterLabel = dark ? "text-white/45" : "text-[#e8574c]";
  const rule = dark ? "border-white/12" : "border-[#131315]/12";
  const monthInk = dark ? "text-white/55" : "text-[#6b6b73]";
  const cityInk = dark ? "text-white" : "text-[#131315]";
  const emptyInk = dark ? "text-white/35" : "text-[#9a9aa2]";

  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
      {CALENDAR_2027.map((quarter) => (
        <section key={quarter.id} aria-label={`${quarter.label} 2027`}>
          <h3
            className={`text-[11px] font-semibold tracking-[0.28em] ${quarterLabel}`}
          >
            {quarter.label.toUpperCase()}
          </h3>

          <dl className={`mt-5 border-t ${rule}`}>
            {quarter.months.map((entry) => (
              <div key={entry.month} className={`border-b ${rule} py-5`}>
                <dt
                  className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${monthInk}`}
                >
                  {entry.month}
                </dt>
                <dd className="mt-2.5">
                  <MonthCities
                    entry={entry}
                    cityInk={cityInk}
                    emptyInk={emptyInk}
                    dark={dark}
                    linkedCities={linkedCities}
                    onCityClick={onCityClick}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

function MonthCities({
  entry,
  cityInk,
  emptyInk,
  dark,
  linkedCities,
  onCityClick,
}: {
  entry: CalendarMonth;
  cityInk: string;
  emptyInk: string;
  dark: boolean;
  linkedCities?: Set<string>;
  onCityClick?: (city: string) => void;
}) {
  if (entry.cities.length === 0) {
    return (
      <p className={`text-sm italic ${emptyInk}`}>{CALENDAR_EMPTY_LABEL}</p>
    );
  }

  return (
    <ul className="flex flex-col gap-1.5">
      {entry.cities.map((city) => {
        const linked = Boolean(onCityClick && linkedCities?.has(city));
        return (
          <li key={city}>
            {linked ? (
              <button
                type="button"
                onClick={() => onCityClick?.(city)}
                className={`group inline-flex items-center gap-2 text-lg font-medium tracking-tight ${cityInk} transition-colors hover:text-[#e8574c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  dark ? "focus-visible:outline-white" : "focus-visible:outline-[#131315]"
                }`}
              >
                {city}
                <span
                  aria-hidden="true"
                  className="text-sm opacity-0 transition-opacity group-hover:opacity-100"
                >
                  →
                </span>
              </button>
            ) : (
              <span
                className={`text-lg font-medium tracking-tight ${cityInk}`}
              >
                {city}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
