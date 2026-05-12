import { AlertTriangle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  title?: string;
  message: string;
  retryLabel?: string;
  onRetry: () => void;
};

export function ErrorState({
  title = "ไม่สามารถโหลดข้อมูลได้",
  message,
  retryLabel = "ลองใหม่อีกครั้ง",
  onRetry,
}: ErrorStateProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="w-full max-w-md rounded-lg border bg-card p-6 text-center shadow-sm">
        <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="size-5" aria-hidden="true" />
        </div>
        <p className="mt-5 text-sm font-medium text-destructive">
          เกิดข้อผิดพลาดจาก API
        </p>
        <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {message}
        </p>
        <Button className="mt-6" onClick={onRetry}>
          <RefreshCw className="size-4" aria-hidden="true" />
          {retryLabel}
        </Button>
      </section>
    </main>
  );
}
