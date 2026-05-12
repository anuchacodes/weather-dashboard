"use client";

import { Check, ChevronDown, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { WeatherLocation } from "@/features/weather/types/weather";

type LocationSelectProps = {
  locations: WeatherLocation[];
  selectedLocation: WeatherLocation;
  onLocationChange: (location: WeatherLocation) => void;
};

export function LocationSelect({
  locations,
  selectedLocation,
  onLocationChange,
}: LocationSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      className="relative grid min-w-0 gap-1 text-xs font-medium text-muted-foreground"
      ref={containerRef}
    >
      เลือกจังหวัด
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="inline-flex h-9 w-full items-center justify-between gap-3 rounded-md border bg-card px-3 text-sm text-foreground shadow-sm outline-none transition hover:border-primary/50 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring sm:w-[220px]"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span className="flex min-w-0 items-center gap-2">
          <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="truncate">{selectedLocation.name}</span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      {isOpen ? (
        <div className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-full min-w-[280px] overflow-hidden rounded-lg border bg-popover shadow-xl sm:left-auto sm:right-0">
          <div className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">
            จังหวัดในประเทศไทย
          </div>
          <div className="max-h-80 overflow-y-auto p-1" role="listbox">
            {locations.map((location) => {
              const isSelected = location.name === selectedLocation.name;

              return (
                <button
                  aria-selected={isSelected}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm transition",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-popover-foreground hover:bg-secondary hover:text-secondary-foreground",
                  )}
                  key={location.name}
                  onClick={() => {
                    onLocationChange(location);
                    setIsOpen(false);
                  }}
                  role="option"
                  type="button"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium">
                      {location.name}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs",
                        isSelected
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground",
                      )}
                    >
                      {location.latitude.toFixed(2)},{" "}
                      {location.longitude.toFixed(2)}
                    </span>
                  </span>
                  {isSelected ? (
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
