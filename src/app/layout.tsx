import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/shared/providers";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "แดชบอร์ดสภาพอากาศ",
  description: "แดชบอร์ดติดตามสภาพอากาศจาก Open-Meteo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={kanit.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
