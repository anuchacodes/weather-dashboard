export function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("th-TH", {
    maximumFractionDigits,
  }).format(value);
}

export function formatHour(value: string) {
  return new Intl.DateTimeFormat("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function formatWeekdayHour(value: string) {
  return new Intl.DateTimeFormat("th-TH", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function formatShortTime(value: string) {
  return new Intl.DateTimeFormat("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
