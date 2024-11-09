import type { Metadata, Viewport } from "next";
import {Roboto_Flex, Roboto_Mono} from "next/font/google";
import { SITE_METADATA } from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const robotoFlexSans = Roboto_Flex({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-roboto-flex-sans",
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
        className={`${robotoFlexSans.variable} ${robotoMono.variable} font-sans antialiased min-h-screen flex flex-col`}
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
