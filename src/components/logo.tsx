"use client";

import Link from "next/link";
import { PROFILE } from "@/config";
// import { Icons } from "@/components/icons";

type LogoProps = {
  closeMenu: () => void;
};

export default function Logo({ closeMenu }: LogoProps) {
  return (
    <Link href="/" onClick={closeMenu} className="flex items-center">
      {/* <Icons.bulb strokeWidth={1} size={50} className="text-primary" /> */}
      <h1 className="bg-gradient-green-primary bg-clip-text font-bold uppercase text-transparent md:text-lg lg:text-xl">
        {PROFILE.fullName}
      </h1>
    </Link>
  );
}
