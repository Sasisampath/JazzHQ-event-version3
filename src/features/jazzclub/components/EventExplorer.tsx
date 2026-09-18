"use client";

import { ChevronDown, MapPin } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import {
  eventCities,
  eventStatus,
  eventTime,
  jazzclubEvents,
  startOfToday,
  type JazzclubEvent,
} from "../data/events";
import { EventDeck } from "./EventDeck";

export type StatusFilter = "all" | "upcoming" | "featured" | "past";

const STATUS_FILTERS: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All events" },
  { id: "upcoming", label: "Upcoming" },
  { id: "featured", label: "Featured" },
  { id: "past", label: "Past" },
];

const ALL_CITIES = "all";

/**
 * Filters decide which events are in the deck (status AND city).
 * Sort order per status:
 * - upcoming → nearest first
 * - past     → most recent first
 * - all / featured → chronological (past on the left, future on the right)
 */
function filterEvents(
  events: JazzclubEvent[],
  status: StatusFilter,
  city: string,
  today: number,
) {
  const matches = events.filter((event) => {
    if (city !== ALL_CITIES && event.city !== city) return false;
    if (status === "featured") return event.featured;
    if (status === "upcoming") return eventStatus(event, today) === "upcoming";
    if (status === "past") return eventStatus(event, today) === "past";
    return true;
  });

  const sorted = [...matches].sort((a, b) => eventTime(a) - eventTime(b));
  return status === "past" ? sorted.reverse() : sorted;
}

/**
 * Initial active card: featured upcoming → nearest upcoming → first card.
 * Decks are chronological, so the first upcoming match is the nearest.
 */
function defaultActiveId(deck: JazzclubEvent[], today: number) {
  const upcoming = deck.filter((e) => eventStatus(e, today) === "upcoming");
  return (
    upcoming.find((e) => e.featured)?.id ?? upcoming[0]?.id ?? deck[0]?.id ?? null
  );
}

export function EventExplorer() {
  const [today] = useState(startOfToday);
  const [status, setStatus] = useState<StatusFilter>("all");
  const [city, setCity] = useState<string>(ALL_CITIES);

  const cities = useMemo(() => eventCities(jazzclubEvents), []);
  const deck = useMemo(
    () => filterEvents(jazzclubEvents, status, city, today),
    [status, city, today],
  );

  // Carousel state is independent of filters: it only remembers which event
  // is active. Whenever the filters produce a new deck, it starts on that
  // deck's default card.
  const [activeId, setActiveId] = useState<string | null>(() =>
    defaultActiveId(deck, today),
  );

  const activeIndex = Math.max(
    0,
    deck.findIndex((event) => event.id === activeId),
  );

  const handleActiveChange = useCallback(
    (index: number) => setActiveId(deck[index]?.id ?? null),
    [deck],
  );

  function applyFilters(nextStatus: StatusFilter, nextCity: string) {
    setStatus(nextStatus);
    setCity(nextCity);
    setActiveId(
      defaultActiveId(
        filterEvents(jazzclubEvents, nextStatus, nextCity, today),
        today,
      ),
    );
  }

  function clearFilters() {
    applyFilters("all", ALL_CITIES);
  }

  return (
    <section
      aria-label="Pick your event"
      className="relative flex min-h-[calc(100dvh-72px)] w-full flex-col overflow-hidden bg-[#08080a] pb-8 pt-6 sm:pt-8"
    >
      <div className="page-section">
        <div className="jc-enter-rise mx-auto max-w-[var(--max-content)] text-center">
          <h1 className="text-[34px] font-semibold tracking-tight text-white sm:text-6xl">
            Pick your event.
          </h1>
          <p className="mt-3 text-base text-white/60 sm:text-lg">
            Find the next Jazzclub room near you.
          </p>
        </div>

        <div
          className="jc-enter-rise mx-auto mt-6 flex max-w-[900px] flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          style={{ animationDelay: "60ms" }}
        >
          <div
            role="radiogroup"
            aria-label="Event status"
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {STATUS_FILTERS.map((filter) => {
              const selected = filter.id === status;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => applyFilters(filter.id, city)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 sm:py-3 sm:text-[15px] ${
                    selected
                      ? "border-white bg-white text-[#08080a]"
                      : "border-white/25 bg-transparent text-white hover:border-white/50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <span
            aria-hidden="true"
            className="mx-2 hidden h-10 w-px bg-white/20 sm:block"
          />

          <label className="relative inline-flex items-center">
            <span className="sr-only">City</span>
            <MapPin
              aria-hidden="true"
              className="pointer-events-none absolute left-4 h-4 w-4 text-white"
            />
            <select
              value={city}
              onChange={(event) => applyFilters(status, event.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-white/25 bg-transparent py-2.5 pl-10 pr-11 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3 sm:text-[15px]"
            >
              <option value={ALL_CITIES} className="bg-[#131315] text-white">
                All cities
              </option>
              {cities.map((name) => (
                <option key={name} value={name} className="bg-[#131315] text-white">
                  {name}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 h-4 w-4 text-white"
            />
          </label>
        </div>
      </div>

      {deck.length > 0 ? (
        <EventDeck
          events={deck}
          activeIndex={activeIndex}
          onActiveChange={handleActiveChange}
        />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
          <p className="text-2xl font-semibold text-white">
            No events here yet.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#08080a] transition hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View all events
          </button>
        </div>
      )}
    </section>
  );
}
