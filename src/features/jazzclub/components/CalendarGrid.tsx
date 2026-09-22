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
 * The 2027 calendar: one panel per quarter, each carrying its own accent,
 * with a row per month. Same data in both tones — see `calendar-2027.ts`.
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
          style={{ ["--jc-accent" as string]: quarter.accent }}
        >
          <header className="jc-quarter__head">
            <h3 className="jc-quarter__label">{quarter.label}</h3>
            <span className="jc-quarter__year">2027</span>
          </header>

          <dl>
            {quarter.months.map((entry) => (
              <div key={entry.month} className="jc-month">
                <dt className="jc-month__name">{entry.month}</dt>
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
      <p className="jc-break">
        <span aria-hidden="true">—</span>
        {CALENDAR_EMPTY_LABEL}
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {entry.cities.map((city) => {
        const linked = Boolean(onCityClick && linkedCities?.has(city));
        return (
          <li key={city}>
            {linked ? (
              <button
                type="button"
                onClick={() => onCityClick?.(city)}
                className="jc-city-chip jc-city-chip--link"
              >
                <span aria-hidden="true" className="jc-city-dot" />
                {city}
                <span aria-hidden="true" className="jc-city-arrow">
                  →
                </span>
              </button>
            ) : (
              <span className="jc-city-chip">
                <span aria-hidden="true" className="jc-city-dot" />
                {city}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
