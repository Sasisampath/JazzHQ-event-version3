/**
 * The 2027 JazzClub calendar — ONE source of truth.
 *
 * Used by the full editorial section on /events and by the dark modal on
 * /events/explore. Add or change a month here only.
 */

export type CalendarMonth = {
  month: string;
  /** Published cities. Empty means "no published location yet". */
  cities: string[];
};

export type CalendarQuarter = {
  id: string;
  label: string;
  /** Quarter accent — used by both the light section and the dark modal. */
  accent: string;
  months: CalendarMonth[];
};

export const CALENDAR_2027: CalendarQuarter[] = [
  {
    id: "q1",
    label: "Q1",
    accent: "#e8574c",
    months: [
      { month: "January", cities: ["Chennai", "Bengaluru"] },
      { month: "February", cities: ["Bengaluru", "Mumbai"] },
      { month: "March", cities: ["Chennai", "Dubai"] },
    ],
  },
  {
    id: "q2",
    label: "Q2",
    accent: "#2f7d5c",
    months: [
      { month: "April", cities: ["Singapore", "Kuala Lumpur"] },
      { month: "May", cities: ["Bengaluru", "London"] },
      { month: "June", cities: ["Mumbai", "Berlin"] },
    ],
  },
  {
    id: "q3",
    label: "Q3",
    accent: "#4f46e5",
    months: [
      { month: "July", cities: ["Chennai", "Singapore"] },
      { month: "August", cities: [] },
      { month: "September", cities: ["Berlin", "Amsterdam"] },
    ],
  },
  {
    id: "q4",
    label: "Q4",
    accent: "#c2801c",
    months: [
      { month: "October", cities: ["Dubai", "London"] },
      { month: "November", cities: ["Amsterdam", "New York"] },
      { month: "December", cities: [] },
    ],
  },
];

export const CALENDAR_HEADING = "The 2027 JazzClub Calendar";

export const CALENDAR_INTRO =
  "A curated 2027 event calendar connecting sponsors with the right people, in the right markets, around the right conversations.";

export const CALENDAR_NOTE = "Exact dates to be announced soon.";

/** Months with no room planned — deliberate, not missing information. */
export const CALENDAR_EMPTY_LABEL = "—";
