"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Save, Thermometer } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import type { TemperatureUnit } from "@/features/weather/types/weather";
import { cn } from "@/lib/utils";
import { useWeatherStore, weatherLocations } from "@/stores/weather-store";

const settingsSchema = z.object({
  locationName: z
    .string()
    .min(1, "กรุณาเลือกจังหวัด")
    .refine(
      (value) => weatherLocations.some((location) => location.name === value),
      "กรุณาเลือกจังหวัดในประเทศไทยให้ถูกต้อง",
    ),
  unit: z.enum(["celsius", "fahrenheit"], {
    error: "กรุณาเลือกหน่วยอุณหภูมิ",
  }),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

const unitOptions = [
  { label: "เซลเซียส", shortLabel: "C", value: "celsius" },
  { label: "ฟาเรนไฮต์", shortLabel: "F", value: "fahrenheit" },
] satisfies Array<{
  label: string;
  shortLabel: string;
  value: TemperatureUnit;
}>;

export function SettingsForm() {
  const selectedLocation = useWeatherStore((state) => state.selectedLocation);
  const setSelectedLocation = useWeatherStore(
    (state) => state.setSelectedLocation,
  );
  const unit = useWeatherStore((state) => state.unit);
  const setUnit = useWeatherStore((state) => state.setUnit);
  const [isSaved, setIsSaved] = useState(false);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      locationName: selectedLocation.name,
      unit,
    },
  });

  const selectedUnit = useWatch({
    control,
    name: "unit",
  });

  useEffect(() => {
    reset({
      locationName: selectedLocation.name,
      unit,
    });
  }, [reset, selectedLocation.name, unit]);

  const onSubmit = (values: SettingsFormValues) => {
    const nextLocation = weatherLocations.find(
      (location) => location.name === values.locationName,
    );

    if (!nextLocation) {
      return;
    }

    setSelectedLocation(nextLocation);
    setUnit(values.unit);
    setIsSaved(true);

    window.setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <form
      className="rounded-lg border bg-card p-5 shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.55fr)]">
        <div className="grid gap-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="locationName"
          >
            จังหวัดเริ่มต้น
          </label>
          <select
            className={cn(
              "h-11 rounded-md border bg-background px-3 text-sm text-foreground outline-none transition focus-visible:ring-2 focus-visible:ring-ring",
              errors.locationName && "border-destructive",
            )}
            id="locationName"
            {...register("locationName")}
          >
            <option value="">เลือกจังหวัด</option>
            {weatherLocations.map((location) => (
              <option key={location.name} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
          {errors.locationName ? (
            <p className="text-sm text-destructive">
              {errors.locationName.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <p className="text-sm font-medium text-foreground">หน่วยอุณหภูมิ</p>
          <div className="inline-flex h-11 w-fit items-center rounded-md border bg-background p-1 shadow-sm">
            <div className="flex h-full items-center border-r px-2 text-muted-foreground">
              <Thermometer className="size-4" aria-hidden="true" />
            </div>
            <div className="ml-1 grid h-full grid-cols-2 gap-1">
              {unitOptions.map((option) => {
                const isSelected = selectedUnit === option.value;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={cn(
                      "rounded-sm px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                    key={option.value}
                    onClick={() =>
                      setValue("unit", option.value, {
                        shouldDirty: true,
                        shouldValidate: true,
                      })
                    }
                    type="button"
                  >
                    {option.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
          {errors.unit ? (
            <p className="text-sm text-destructive">{errors.unit.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          ระบบจะบันทึกค่าบนเครื่องนี้และนำไปใช้กับการดึงข้อมูลบนแดชบอร์ด
        </p>
        <div className="flex items-center gap-3">
          {isSaved ? (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Check className="size-4" aria-hidden="true" />
              บันทึกแล้ว
            </span>
          ) : null}
          <Button disabled={isSubmitting} type="submit">
            <Save className="size-4" aria-hidden="true" />
            บันทึกการตั้งค่า
          </Button>
        </div>
      </div>
    </form>
  );
}
