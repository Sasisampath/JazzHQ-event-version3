"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { CALENDAR_NOTE } from "../data/calendar-2027";
import { CalendarGrid } from "./CalendarGrid";

type Props = {
  open: boolean;
  onClose: () => void;
  /** Cities with published events — those become clickable. */
  linkedCities: Set<string>;
  /** Picking a city closes the modal and filters the deck behind it. */
  onCityClick: (city: string) => void;
};

/**
 * Dark overlay over the explorer. It never navigates: closing leaves the
 * filters, active event and scroll position exactly as they were.
 */
export function CalendarModal({ open, onClose, linkedCities, onCityClick }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  // Escape closes; focus moves into the dialog and back on close.
  useEffect(() => {
    if (!open) return;
    restoreFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      // Keep tabbing inside the dialog.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], select, input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = overflow;
      restoreFocus.current?.focus?.();
    };
  }, [open, onClose]);

  const handleCity = useCallback(
    (city: string) => {
      onClose();
      onCityClick(city);
    },
    [onClose, onCityClick],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close calendar"
        tabIndex={-1}
        onClick={onClose}
        className="jc-modal-backdrop absolute inset-0 h-full w-full cursor-default bg-[#08080a]/80"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="calendar-modal-heading"
        className="jc-modal-panel relative flex h-full max-h-none w-full flex-col overflow-hidden border-white/12 bg-[#0d0d10] sm:h-auto sm:max-h-[85vh] sm:w-[90vw] sm:max-w-[1200px] sm:rounded-[22px] sm:border"
      >
        <header className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-6 sm:px-10 sm:py-8">
          <div>
            <h2
              id="calendar-modal-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              JazzClub Calendar 2027
            </h2>
            <p className="mt-2 text-sm text-white/60 sm:text-base">
              See where JazzClub is heading next.
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close calendar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
          <CalendarGrid
            tone="dark"
            linkedCities={linkedCities}
            onCityClick={handleCity}
          />
          <p className="mt-10 text-sm text-white/45">{CALENDAR_NOTE}</p>
        </div>
      </div>
    </div>
  );
}
