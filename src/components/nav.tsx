"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";

type NavbarProps = {
    items:{
            name:string
            href:string
        }[]
    showMobileMenu: boolean
    closeMenu: () => void
    toggleMenu: () => void
}

export default function Navbar({items,toggleMenu,showMobileMenu, closeMenu}: NavbarProps) {

    const path = usePathname()

    return (
        <nav className="max-w-7xl mx-auto h-24 flex items-center justify-between p-3 z-50">
            <Logo closeMenu={closeMenu}/>
            <div>
                <ul className="hidden md:flex items-center gap-4 py-2 px-6">
                    {items.map(item=>{
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn("text-muted-foreground p-3 transition-all ease-linear",path===item.href ? "text-primary border-b-2 border-primary" : "rounded-sm hover:bg-accent hover:text-accent-foreground")}
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
                    className="md:hidden rounded-lg"
                >
                    {showMobileMenu? <Icons.close size={22}/>: <Icons.menu size={22}/>}
                </Button>
            </div>
        </nav>
    );
}