import {
  CALENDAR_HEADING,
  CALENDAR_INTRO,
  CALENDAR_NOTE,
} from "../data/calendar-2027";
import { CalendarGrid } from "./CalendarGrid";

/**
 * The full editorial calendar on /events. The explorer shows the same data
 * in its dark modal — both read from `calendar-2027.ts`.
 */
export function CalendarSection() {
  return (
    <section
      aria-labelledby="calendar-2027-heading"
      className="bg-[#f6f3ec] py-20 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(19,19,21,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19,19,21,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <div className="max-w-[720px]">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-[#e8574c]">
              CALENDAR 2027
            </p>
            <h2
              id="calendar-2027-heading"
              className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-[#131315] sm:text-5xl"
            >
              {CALENDAR_HEADING}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-[#5b5b63] sm:text-lg">
              {CALENDAR_INTRO}
            </p>
          </div>

          <div className="mt-14">
            <CalendarGrid tone="light" />
          </div>

          <p className="mt-12 text-sm font-medium text-[#6b6b73]">
            {CALENDAR_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
