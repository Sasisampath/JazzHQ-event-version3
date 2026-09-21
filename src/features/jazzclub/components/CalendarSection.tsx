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
      className="jc-section jc-section--light"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <div className="max-w-[720px]">
            <p className="jc-eyebrow">Calendar 2027</p>
            <h2
              id="calendar-2027-heading"
              className="jc-title mt-5"
            >
              {CALENDAR_HEADING}
            </h2>
            <p className="jc-sub mt-4">
              {CALENDAR_INTRO}
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <CalendarGrid tone="light" />
          </div>

          <p className="jc-body mt-8">
            {CALENDAR_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
