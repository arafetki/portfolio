import type { Metadata, Viewport } from "next";
import { Raleway, Roboto, Roboto_Mono } from "next/font/google";
import { METADATA } from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers";
import ScrollTop from "@/components/scroll-top";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-raleway-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.title}`,
  },
  description: METADATA.description,
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
        className={`${roboto.variable} ${raleway.variable} ${robotoMono.variable} flex min-h-screen flex-col font-roboto antialiased`}
      >
        <Providers>
          {/* <Header /> */}
          <main className="grow">{children}</main>
          <SpeedInsights />
          <Toaster richColors closeButton position="top-right" />
          <ScrollTop visibleHeight={300} position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
