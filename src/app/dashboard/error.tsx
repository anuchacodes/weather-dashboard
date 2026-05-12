"use client";

import { ErrorState } from "@/components/dashboard/ErrorState";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorState
      message={error.message}
      onRetry={reset}
      title="เกิดข้อผิดพลาดในแดชบอร์ด"
    />
  );
}
