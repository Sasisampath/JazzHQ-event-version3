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

/**
 * The 2027 calendar: one bordered panel per quarter, one row per month.
 * Same data in both tones — see `calendar-2027.ts`.
 */
export function CalendarGrid({ tone, linkedCities, onCityClick }: Props) {
  const dark = tone === "dark";

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {CALENDAR_2027.map((quarter) => (
        <section
          key={quarter.id}
          aria-label={`${quarter.label} 2027`}
          className={`jc-quarter ${dark ? "jc-quarter--dark" : ""}`}
        >
          <header className="jc-quarter__head">
            <h3 className="jc-label" style={dark ? { color: "#ffffff" } : undefined}>
              {quarter.label}
            </h3>
            <span
              className="text-[11px] font-semibold tracking-[0.18em]"
              style={{ color: dark ? "rgba(255,255,255,0.4)" : "#9a9aa2" }}
            >
              2027
            </span>
          </header>

          <dl>
            {quarter.months.map((entry) => (
              <div key={entry.month} className="jc-month">
                <dt
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] leading-[1.6]"
                  style={{ color: dark ? "rgba(255,255,255,0.5)" : "#9a9aa2" }}
                >
                  {entry.month}
                </dt>
                <dd>
                  <MonthCities
                    entry={entry}
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
  linkedCities,
  onCityClick,
}: {
  entry: CalendarMonth;
  linkedCities?: Set<string>;
  onCityClick?: (city: string) => void;
}) {
  if (entry.cities.length === 0) {
    return (
      <p className="jc-tba">
        <span aria-hidden="true">•</span>
        {CALENDAR_EMPTY_LABEL}
      </p>
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
                className="jc-city-link group inline-flex items-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                <span className="jc-city">{city}</span>
                <span
                  aria-hidden="true"
                  className="text-sm text-[#e8574c] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  →
                </span>
              </button>
            ) : (
              <span className="jc-city">{city}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
