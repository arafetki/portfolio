"use client";

import { ChevronsUp } from "lucide-react";

export default function ScrollTopButton() {
    return (
        <button
            type="button"
            className="flex items-center gap-2 uppercase text-sm sm:text-base"
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            Back to top
            <div className="p-2 sm:p-3 aspect-square rounded-full bg-background">
                <ChevronsUp className="size-5 sm:size-6 text-foreground" />
            </div>
        </button>
    );
}
