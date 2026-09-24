import {
  CALENDAR_HEADING,
  CALENDAR_INTRO,
  CALENDAR_NOTE,
} from "../data/calendar-2027";
import { CalendarGrid } from "./CalendarGrid";

/** Figma heading + supporting copy; the calendar itself is the web route. */
export function CalendarSection() {
  return (
    <section aria-labelledby="calendar-2027-heading" className="page-section">
      <div className="mx-auto max-w-[var(--max-content)]">
        <h2 id="calendar-2027-heading" className="jc-h2">
          {CALENDAR_HEADING}
        </h2>
        <p className="jc-lead mt-3.5 max-w-[760px]">{CALENDAR_INTRO}</p>

        <div className="mt-10">
          <CalendarGrid />
        </div>

        <p className="jc-lead mt-10 text-[14px]">{CALENDAR_NOTE}</p>
      </div>
    </section>
  );
}
