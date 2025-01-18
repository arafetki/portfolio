"use client";

import Link from "next/link";
import { useMobileMenu } from "@/contexts/mobile-menu";
import config from "@/config";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/tailwind";
import { useIsMobile } from "@/hooks/use-mobile";
import Socials from "@/components/socials";
import useLockScroll from "@/hooks/useLockScroll";

export default function MobileMenu() {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();
    const pathname = usePathname();
    const isMobile = useIsMobile();
    useLockScroll();

    useEffect(() => {
        if (!isMobile || pathname) {
            setShowMobileMenu(false);
        }
    }, [pathname, isMobile, setShowMobileMenu]);

    return (
        <nav
            className={cn(
                "fixed inset-0 z-10 h-screen bg-background overflow-auto transition-all duration-300",
                showMobileMenu
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
            )}
            aria-hidden={!showMobileMenu}
        >
            <div className="relative h-full flex flex-col items-center justify-center">
                <ul
                    className="flex flex-col items-center justify-center gap-y-6"
                    role="menu"
                >
                    {config.navigation.items.map((item) => (
                        <li
                            key={item.title}
                            className="text-xl hover:text-primary"
                            role="menuitem"
                        >
                            <Link href={item.href} className="block p-2">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Socials
                    items={config.about.socials}
                    className="absolute bottom-20"
                />
            </div>
        </nav>
    );
}
