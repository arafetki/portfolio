import type { Metadata, Viewport } from "next";
import { Rubik, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers";
import config from "@/config";
import Header from "@/components/header";
import { MobileMenuProvider } from "@/contexts/mobile-menu";
import MobileMenu from "@/components/mobile-menu";

import "./globals.css";

const rubikSans = Rubik({
    variable: "--font-rubik-sans",
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: {
        default: config.layout.metadata.title,
        template: `%s | ${config.layout.metadata.title}`,
    },
    description: config.layout.metadata.description,
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
                className={`${rubikSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <Providers>
                    <MobileMenuProvider>
                        <Header />
                        <MobileMenu />
                    </MobileMenuProvider>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
