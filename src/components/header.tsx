"use client";

import { PROFILE } from "@/config";
import { NAV_ITEMS } from "@/config";
import Navbar from "@/components/nav";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/mobile-menu";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleThemeButton from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";

export default function Header() {

    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);

    useEffect(()=>{

        if (showMobileMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

    },[showMobileMenu])

    return (
        <header className="sticky top-0 w-full z-50">
            <div className="container h-24 flex items-center justify-between px-6">
                <h1 className="md:grow font-bold text-base md:text-lg">
                    <Link
                        href="/"
                        onClick={()=>{ if (showMobileMenu) setShowMobileMenu(false)}}
                    >
                        {PROFILE.fullName}
                    </Link>
                </h1>
                <Navbar items={NAV_ITEMS}/>
                <div className="flex items-center gap-1">
                    <ToggleThemeButton/>
                    <Separator orientation="vertical" className="md:hidden h-6"/>
                    <Button
                        onPress={()=>setShowMobileMenu(!showMobileMenu)}
                        size="icon"
                        variant="ghost"
                        className="md:hidden rounded-lg"
                    >
                        {showMobileMenu? <Icons.close size={22}/>: <Icons.menu size={22}/>}
                    </Button>
                </div>
            </div>
            {showMobileMenu && <MobileMenu items={NAV_ITEMS} closeMenu={()=>setShowMobileMenu(false)}/>}
        </header>
    );
}