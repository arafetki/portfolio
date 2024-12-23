import type { Metadata, Viewport } from "next";
import { Raleway, Roboto_Mono } from "next/font/google";
import { SITE_METADATA } from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";
import ScrollTopButton from "@/components/scroll-top-button";

const ralewaySans = Raleway({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-raleway-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ralewaySans.variable} ${robotoMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <SpeedInsights />
          <Toaster richColors closeButton position="top-right" />
          <ScrollTopButton />
        </Providers>
      </body>
    </html>
  );
}
