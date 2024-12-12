"use client";

import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  closeMenu: () => void;
};

export default function Logo({ closeMenu }: LogoProps) {
  return (
    <Link href="/" onClick={closeMenu}>
      <Image src="/logo.png" alt="Logo" width={25} height={25} />
    </Link>
  );
}
