"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="สลับโหมดสี"
      className={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition",
        "hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Sun className="size-4 text-primary dark:hidden" aria-hidden="true" />
      <Moon
        className="hidden size-4 text-primary dark:block"
        aria-hidden="true"
      />
      <span>ธีม</span>
    </button>
  );
}
