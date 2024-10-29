import type { Metadata, Viewport } from "next";
import {Inter, Roboto_Mono} from "next/font/google";
import { SITE_METADATA } from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";


const interSans = Inter({
  subsets: ["latin"],
  style: ["italic","normal"],
  variable: "--font-inter-sans",
  weight: ["100","200","300","400","500","600","700","800","900"],
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  style: ["italic","normal"],
  variable: "--font-roboto-mono",
  weight: ["100","200","300","400","500","600","700"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`
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
        className={`${interSans.variable} ${robotoMono.variable} font-sans antialiased min-h-screen flex flex-col overflow-hidden supports-[overflow-clip]:overflow-clip`}
      >
        <Providers>
          <Header/>
          <main className="grow">{children}</main>
          <Footer/>
          <SpeedInsights/>
        </Providers>
      </body>
    </html>
  );
}
