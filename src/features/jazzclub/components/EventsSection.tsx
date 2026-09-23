"use client";

import { useCallback, useMemo, useState } from "react";
import { EVENTS_ID } from "../data/anchors";
import {
  eventStatus,
  eventTime,
  jazzclubEvents,
  startOfToday,
  type JazzclubEvent,
} from "../data/events";
import { EventDeck } from "./EventDeck";

/**
 * The event catalogue, now directly below the hero — the approved deck from
 * the old Explore page, without the separate route, filters or dropdown.
 *
 * It renders whatever is in `events.ts`, so more Lu.ma events just appear.
 */

/** Upcoming first (nearest date), then past events (most recent first). */
function orderEvents(events: JazzclubEvent[], today: number) {
  const upcoming = events
    .filter((event) => eventStatus(event, today) === "upcoming")
    .sort((a, b) => eventTime(a) - eventTime(b));
  const past = events
    .filter((event) => eventStatus(event, today) === "past")
    .sort((a, b) => eventTime(b) - eventTime(a));
  return [...upcoming, ...past];
}

/** Opens on a featured upcoming event, else the nearest upcoming one. */
function initialIndex(deck: JazzclubEvent[], today: number) {
  const featured = deck.findIndex(
    (event) => event.featured && eventStatus(event, today) === "upcoming",
  );
  if (featured !== -1) return featured;
  const upcoming = deck.findIndex(
    (event) => eventStatus(event, today) === "upcoming",
  );
  return upcoming === -1 ? 0 : upcoming;
}

export function EventsSection() {
  const [today] = useState(startOfToday);
  const deck = useMemo(() => orderEvents(jazzclubEvents, today), [today]);
  const [activeIndex, setActiveIndex] = useState(() =>
    initialIndex(deck, today),
  );

  const handleActiveChange = useCallback(
    (index: number) => setActiveIndex(index),
    [],
  );

  return (
    <section
      id={EVENTS_ID}
      aria-labelledby="events-heading"
      className="jc-section jc-section--dark relative w-full overflow-hidden scroll-mt-24"
    >
      <div className="page-section">
        <div className="mx-auto max-w-[var(--max-content)]">
          <p className="jc-eyebrow">Upcoming rooms</p>
          <h2 id="events-heading" className="jc-title mt-5 max-w-[20ch]">
            Find the next JazzClub room near you.
          </h2>
        </div>
      </div>

      {deck.length > 0 ? (
        <EventDeck
          events={deck}
          activeIndex={Math.min(activeIndex, deck.length - 1)}
          onActiveChange={handleActiveChange}
        />
      ) : (
        <div className="page-section mt-12">
          <p className="jc-sub mx-auto max-w-[var(--max-content)]">
            The next rooms are being scheduled.
          </p>
        </div>
      )}
    </section>
  );
}
