import {
  CALENDAR_2027,
  CALENDAR_EMPTY_LABEL,
} from "../data/calendar-2027";

/** "January" → "Jan" for the rail labels. */
function shortMonth(month: string) {
  return month.slice(0, 3);
}

/**
 * The 2027 calendar as one route through the year: a continuous rail with a
 * node per month, grouped into accented quarters. Desktop reads left to
 * right across all twelve months; tablet runs two quarters per row; mobile
 * turns the rail vertical. Same data as before — see `calendar-2027.ts`.
 */
export function CalendarGrid() {
  return (
    <div className="jc-route">
      {CALENDAR_2027.map((quarter) => {
        const first = shortMonth(quarter.months[0].month);
        const last = shortMonth(quarter.months[quarter.months.length - 1].month);
        return (
          <section
            key={quarter.id}
            aria-label={`${quarter.label} 2027, ${quarter.months[0].month} to ${
              quarter.months[quarter.months.length - 1].month
            }`}
            className="jc-route__quarter"
            style={{ ["--jc-accent" as string]: quarter.accent }}
          >
            <header className="jc-route__head">
              <h3 className="jc-route__q">{quarter.label}</h3>
              <span className="jc-route__range">
                {first} — {last}
              </span>
            </header>

            <ol
              className="jc-route__months"
              style={{ ["--jc-months" as string]: quarter.months.length }}
            >
              {quarter.months.map((entry) => {
                const empty = entry.cities.length === 0;
                return (
                  <li
                    key={entry.month}
                    className={`jc-route__month ${empty ? "is-empty" : ""}`}
                  >
                    <span aria-hidden="true" className="jc-route__node" />
                    <p className="jc-route__name">
                      <abbr title={entry.month}>{shortMonth(entry.month)}</abbr>
                    </p>
                    {empty ? (
                      <p className="jc-route__dash" aria-label={`${entry.month}: no room planned`}>
                        {CALENDAR_EMPTY_LABEL}
                      </p>
                    ) : (
                      <ul className="jc-route__cities">
                        {entry.cities.map((city) => (
                          <li key={city} className="jc-route__city">
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
