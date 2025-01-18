"use client";

import {createContext, useContext, useState} from "react";

export type MobileMenuContextType = {
    showMobileMenu: boolean;
    setShowMobileMenu: (show: boolean) => void;
};

const mobileMenuContext = createContext<MobileMenuContextType>({
    showMobileMenu: false,
    setShowMobileMenu: () => null
});

mobileMenuContext.displayName = 'MobileMenuContext';

export function MobileMenuProvider({children}: {children: React.ReactNode}) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <mobileMenuContext.Provider value={{showMobileMenu, setShowMobileMenu}}>
            {children}
        </mobileMenuContext.Provider>
    );
}

export function useMobileMenu() {
    return useContext(mobileMenuContext);
}