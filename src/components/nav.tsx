"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ToggleThemeButton from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

type NavbarProps = {
    items:{
            name:string
            href:string
        }[]
    showMobileMenu: boolean
    toggleMenu: () => void
}

export default function Navbar({items,toggleMenu,showMobileMenu}: NavbarProps) {

    const [active,setActive] = useState<string>("home");

    return (
        <nav>
            <ul className="hidden md:flex items-center gap-4 py-2 mr-16">
                {items.map(item=>{
                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={()=>setActive(item.name.toLowerCase())}
                                className={cn("text-muted-foreground p-3 transition-all ease-linear",active===item.name.toLowerCase() ? "text-primary border-b-2 border-primary" : "rounded-sm hover:bg-accent hover:text-accent-foreground")}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Button
                onPress={toggleMenu}
                size="icon"
                variant="ghost"
                className="md:hidden rounded-lg"
            >
                {showMobileMenu? <Icons.close size={22}/>: <Icons.menu size={22}/>}
            </Button>
        </nav>
    );
}