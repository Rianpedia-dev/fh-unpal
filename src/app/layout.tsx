import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PublicLayout from "@/components/layout/public-layout";
import { ThemeProvider } from "@/components/theme-provider";
import { getFullSiteConfig, getViews, incrementViews } from "@/db/queries";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Increment visitor count on each request (Server Component)
  try {
    await incrementViews();
  } catch (e) {
    console.error("Failed to increment views:", e);
  }

  const siteConfig = await getFullSiteConfig();
  const visitorCount = await getViews();

  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PublicLayout siteConfig={siteConfig} visitorCount={visitorCount}>
            {children}
          </PublicLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}



