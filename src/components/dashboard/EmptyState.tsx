import { CloudOff, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  locationName: string;
  onRetry: () => void;
};

export function EmptyState({ locationName, onRetry }: EmptyStateProps) {
  return (
    <section className="rounded-lg border bg-card p-8 text-center shadow-sm">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <CloudOff className="size-6" aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-xl font-semibold">ไม่พบข้อมูลพยากรณ์</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        Open-Meteo ไม่ส่งข้อมูลพยากรณ์รายชั่วโมงสำหรับ {locationName}
        กรุณารีเฟรชข้อมูลหรือเลือกจังหวัดอื่น
      </p>
      <Button className="mt-6" onClick={onRetry} variant="secondary">
        <RefreshCw className="size-4" aria-hidden="true" />
        ลองใหม่อีกครั้ง
      </Button>
    </section>
  );
}
