"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
    items:{
            name:string
            href:string
        }[]
}

export default function Navbar({items}: NavbarProps) {

    const [active,setActive] = useState<string>("home");

    return (
        <nav className="hidden md:grow md:flex md:items-center">
            <ul className="flex items-center gap-3 lg:gap-8">
                {items.map(item=>{
                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={()=>setActive(item.name.toLowerCase())}
                                className={cn("text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground p-3 rounded-sm transition-all ease-linear",active===item.name.toLowerCase() && "rounded-none border-b-2 border-primary")}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}