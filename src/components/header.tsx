"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/config";
import Navbar from "@/components/nav";
import MobileMenu from "@/components/mobile-menu";

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
        <header className="sticky top-0 w-full z-50 bg-background/85 backdrop-blur-xl">
            <Navbar items={NAV_ITEMS} showMobileMenu={showMobileMenu} toggleMenu={()=>setShowMobileMenu(!showMobileMenu)} closeMenu={()=>{ if (showMobileMenu) setShowMobileMenu(false)}}/>
            {showMobileMenu && <MobileMenu items={NAV_ITEMS} closeMenu={()=>setShowMobileMenu(false)}/>}
        </header>
    );
}