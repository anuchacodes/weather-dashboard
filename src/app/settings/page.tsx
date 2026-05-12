import Link from "next/link";
import { ArrowLeft, Settings } from "lucide-react";

import { SettingsForm } from "@/components/settings/SettingsForm";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <section className="mx-auto max-w-4xl space-y-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Settings className="size-6 text-primary" aria-hidden="true" />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">ตั้งค่า</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                จัดการค่าที่บันทึกไว้สำหรับแดชบอร์ด
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="secondary">
              <Link href="/dashboard">
                <ArrowLeft className="size-4" aria-hidden="true" />
                แดชบอร์ด
              </Link>
            </Button>
          </div>
        </header>
        <SettingsForm />
      </section>
    </main>
  );
}
