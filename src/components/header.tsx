"use client";

import { NAV_ITEMS } from "@/config";
import Navbar from "@/components/nav";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/mobile-menu";
import Logo from "@/components/logo";

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
            <div className="max-w-7xl mx-auto h-24 flex items-center justify-between py-6 pl-6 pr-2">
                <Logo closeMenu={()=>{ if (showMobileMenu) setShowMobileMenu(false)}}/>
                <Navbar items={NAV_ITEMS} showMobileMenu={showMobileMenu} toggleMenu={()=>setShowMobileMenu(!showMobileMenu)}/>
            </div>
            {showMobileMenu && <MobileMenu items={NAV_ITEMS} closeMenu={()=>setShowMobileMenu(false)}/>}
        </header>
    );
}