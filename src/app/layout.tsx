import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PublicLayout from "@/components/layout/public-layout";
import { getFullSiteConfig } from "@/db/queries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fakultas Hukum — Universitas Palembang",
    template: "%s | Fakultas Hukum UNPAL",
  },
  description:
    "Website resmi Fakultas Hukum Universitas Palembang — Mencetak Sarjana Hukum yang Berintegritas, Profesional, dan Berdaya Saing.",
  keywords: [
    "Fakultas Hukum",
    "Universitas Palembang",
    "UNPAL",
    "Sarjana Hukum",
    "PMB",
    "Pendaftaran",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = getFullSiteConfig();

  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PublicLayout siteConfig={siteConfig}>{children}</PublicLayout>
      </body>
    </html>
  );
}

