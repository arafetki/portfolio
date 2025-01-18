"use client";

import Container from "@/components/container";
import ThemeToggle from "@/components/theme-toggle";
import config from "@/config";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useMobileMenu } from "@/contexts/mobile-menu";

export default function Header() {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();

    return (
        <header
            className={`sticky top-0 z-50 bg-background ${
                showMobileMenu && "transition-colors duration-300"
            }`}
        >
            <Container className="flex justify-between items-center">
                {/* Left */}
                <h1
                    className="text-xl sm:text-2xl font-medium"
                    onClick={() => {
                        if (showMobileMenu) {
                            setShowMobileMenu(false);
                        }
                    }}
                >
                    <Link href="/">
                        AR.
                        <span className="motion-preset-blink motion-duration-1000">
                            |
                        </span>
                    </Link>
                </h1>
                {/* Right */}
                <div className="flex items-center gap-x-1 sm:gap-x-4">
                    {/* Navigation */}
                    <nav>
                        {/* Desktop */}
                        <ul className="hidden sm:flex sm:items-center">
                            {config.navigation.items.map((item, idx) => {
                                return (
                                    <li
                                        key={item.title + idx}
                                        className="py-3 px-4 relative group hover:bg-muted rounded-md"
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                        <div className="absolute bottom-0 left-0 w-full bg-primary h-0.5 origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    {/* Resume button */}
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="hidden text-sm text-primary-foreground sm:flex hover:opacity-85 px-5 py-[10px]  bg-primary rounded-2xl uppercase"
                    >
                        Resume
                        <ArrowRight
                            size={17}
                            strokeWidth={3}
                            className="inline-block ml-1"
                        />
                    </Link>
                    {/* Theme toggle */}
                    <ThemeToggle />
                    {/* Mobile Menu Trigger */}
                    <button
                        className="sm:hidden p-2 rounded-full hover:bg-muted"
                        aria-label="Toggle mobile menu"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>
        </header>
    );
}
