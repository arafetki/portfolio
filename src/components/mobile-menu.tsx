"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type MobileMenuProps = {
  items: {
    name: string;
    href: string;
  }[];
  showMobileMenu: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({
  items,
  closeMenu,
  showMobileMenu,
}: MobileMenuProps) {
  return (
    <div
      className={`pointer-events-auto fixed left-0 top-0 -z-10 size-full overflow-auto bg-background duration-500 md:hidden ${
        showMobileMenu
          ? "animate-in slide-in-from-right"
          : "animate-out slide-out-to-right"
      }`}
    >
      <nav className="relative flex h-full flex-col items-center justify-center">
        <ul className="flex flex-col items-center gap-6 text-2xl">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="active:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <ul className="absolute bottom-32 flex items-center gap-4">
          <li>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-muted-foreground"
              asChild
            >
              <Link
                href="https://github.com/arafetki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.github className="!size-6 fill-muted-foreground hover:fill-primary" />
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-muted-foreground"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/arafet-ben-kilani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.linkedin className="!size-6 fill-muted-foreground hover:fill-primary" />
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-muted-foreground"
              asChild
            >
              <Link
                href="https://www.reddit.com/user/arfoutbenk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.reddit className="!size-6 fill-muted-foreground hover:fill-primary" />
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
