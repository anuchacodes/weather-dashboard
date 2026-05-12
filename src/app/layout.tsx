import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/components/shared/providers";

export const metadata: Metadata = {
  title: "Weather Monitoring Dashboard",
  description: "Modern weather monitoring dashboard powered by Open-Meteo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
