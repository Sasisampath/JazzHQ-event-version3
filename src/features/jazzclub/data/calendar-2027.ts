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
  months: CalendarMonth[];
};

export const CALENDAR_2027: CalendarQuarter[] = [
  {
    id: "q1",
    label: "Q1",
    months: [
      { month: "January", cities: ["Chennai", "Bengaluru"] },
      { month: "February", cities: ["Bengaluru", "Mumbai"] },
      { month: "March", cities: ["Chennai", "Dubai"] },
    ],
  },
  {
    id: "q2",
    label: "Q2",
    months: [
      { month: "April", cities: ["Singapore", "Kuala Lumpur"] },
      { month: "May", cities: ["Bengaluru", "London"] },
      { month: "June", cities: ["Mumbai", "Berlin"] },
    ],
  },
  {
    id: "q3",
    label: "Q3",
    months: [
      { month: "July", cities: ["Chennai", "Singapore"] },
      { month: "August", cities: [] },
      { month: "September", cities: ["Berlin", "Amsterdam"] },
    ],
  },
  {
    id: "q4",
    label: "Q4",
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

/** Shown when a month has no published location yet. */
export const CALENDAR_EMPTY_LABEL = "No published location yet";
