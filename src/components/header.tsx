"use client";

import { Icons } from "@/components/icons";
import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/config";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);

  return (
    <header className="pointer-events-none sticky z-50 h-20">
      <div className="flex items-center justify-between p-8">
        <h1 className="pointer-events-auto text-2xl font-medium sm:text-3xl">
          <Link
            href="/"
            onClick={() => {
              if (showMobileMenu) {
                setShowMobileMenu(false);
              }
            }}
          >
            ~/<span className="motion-preset-blink duration-1000">|</span>
          </Link>
        </h1>
        <Button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          size="icon"
          variant="ghost"
          className="pointer-events-auto rounded-full md:hidden"
        >
          {showMobileMenu ? (
            <Icons.close className="!size-7" />
          ) : (
            <Icons.menu className="!size-7" />
          )}
        </Button>
      </div>
      {showMobileMenu && (
        <MobileMenu
          items={NAV_ITEMS}
          closeMenu={() => setShowMobileMenu(false)}
        />
      )}
    </header>
  );
}
