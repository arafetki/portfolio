"use client";

import { ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollTopButton() {
    const [isvisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleVisiblity = () => {
            const position = window.scrollY;
            if (position >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        handleVisiblity();
        window.addEventListener("scroll", handleVisiblity);
        return () => window.removeEventListener("scroll", handleVisiblity);
    }, []);

    return (
        <button
            type="button"
            className={`fixed bottom-10 right-10 p-2 rounded-full bg-primary uppercase text-sm sm:text-base animate-bounce ${
                !isvisible && "hidden"
            }`}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            <ChevronsUp className="size-5 sm:size-6 text-primary-foreground" />
        </button>
    );
}
