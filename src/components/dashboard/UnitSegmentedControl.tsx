"use client";

import { Thermometer } from "lucide-react";

import type { TemperatureUnit } from "@/features/weather/types/weather";
import { cn } from "@/lib/utils";

type UnitSegmentedControlProps = {
  unit: TemperatureUnit;
  onUnitChange: (unit: TemperatureUnit) => void;
};

const unitOptions = [
  { label: "C", value: "celsius" },
  { label: "F", value: "fahrenheit" },
] satisfies Array<{ label: string; value: TemperatureUnit }>;

export function UnitSegmentedControl({
  unit,
  onUnitChange,
}: UnitSegmentedControlProps) {
  return (
    <div className="grid min-w-0 gap-1 text-xs font-medium text-muted-foreground">
      หน่วย
      <div className="inline-flex h-9 w-full items-center rounded-md border bg-card p-1 shadow-sm sm:w-auto">
        <div className="flex h-full items-center border-r px-2 text-muted-foreground">
          <Thermometer className="size-4" aria-hidden="true" />
        </div>
        <div className="ml-1 inline-grid h-full flex-1 grid-cols-2 gap-1 sm:flex-none">
          {unitOptions.map((option) => {
            const isSelected = unit === option.value;

            return (
              <button
                aria-pressed={isSelected}
                className={cn(
                  "min-w-10 rounded-sm px-3 text-xs font-semibold transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
                key={option.value}
                onClick={() => onUnitChange(option.value)}
                type="button"
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
