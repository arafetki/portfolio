"use client";

import Link from "next/link";

type MobileMenuProps = {
    items:{
            name:string
            href:string
        }[]
    closeMenu: () => void
}

export default function MobileMenu({items,closeMenu}: MobileMenuProps) {
    return (
        <div className="fixed inset-0 top-24 h-[calc(100vh-6rem)] overflow-auto px-5 pb-32 shadow-md animate-in duration-300 slide-in-from-bottom-80 md:hidden">
            <div className="rounded-md bg-card text-popover-foreground drop-shadow-lg p-3">
                <nav className="grid grid-flow-row auto-rows-max gap-3 text-sm">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}