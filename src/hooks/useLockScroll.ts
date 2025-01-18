"use client";

import { useEffect } from "react";
import { useMobileMenu } from "@/contexts/mobile-menu";

export default function useLockScroll() {
    const { showMobileMenu } = useMobileMenu();

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showMobileMenu]);
}
