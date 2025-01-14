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
      <h1 className="pointer-events-auto fixed left-8 top-8 text-3xl font-medium">
        <Link
          href="/"
          onClick={() => {
            if (showMobileMenu) {
              setShowMobileMenu(false);
            }
          }}
        >
          Logo
        </Link>
      </h1>
      <Button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        size="icon"
        variant="ghost"
        className="pointer-events-auto fixed right-8 top-8 rounded-full md:hidden"
      >
        {showMobileMenu ? (
          <Icons.close className="!size-7" />
        ) : (
          <Icons.menu className="!size-7" />
        )}
      </Button>
      {showMobileMenu && (
        <MobileMenu
          items={NAV_ITEMS}
          showMobileMenu={showMobileMenu}
          closeMenu={() => setShowMobileMenu(false)}
        />
      )}
    </header>
  );
}
