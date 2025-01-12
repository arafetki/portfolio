"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";

type NavbarProps = {
  items: {
    name: string;
    href: string;
  }[];
  showMobileMenu: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
};

export default function Navbar({
  items,
  toggleMenu,
  showMobileMenu,
  closeMenu,
}: NavbarProps) {
  const path = usePathname();

  return (
    <nav className="z-50 mx-auto flex h-24 max-w-7xl items-center justify-between p-6">
      <Logo closeMenu={closeMenu} />
      <div>
        <ul className="hidden items-center gap-4 py-2 md:flex">
          {items.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted-foreground p-3 transition-all ease-linear",
                    path === item.href
                      ? "border-b-2 border-primary"
                      : "rounded-sm hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={toggleMenu}
          size="icon"
          variant="ghost"
          className="rounded-lg md:hidden"
        >
          {showMobileMenu ? (
            <Icons.close className="!size-[22px]" />
          ) : (
            <Icons.menu className="!size-[22px]" />
          )}
        </Button>
      </div>
    </nav>
  );
}
