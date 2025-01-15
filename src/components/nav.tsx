"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute inset-0 hidden h-screen md:flex [&>a]:text-2xl [&>a]:uppercase hover:[&>a]:text-primary">
      <Link href="/about" className="fixed right-8 top-8">
        About
      </Link>
      <Link href="/blog" className="fixed bottom-8 right-8">
        Blog
      </Link>
      <Link
        href="mailto:mr.arafetk@gmail.com"
        className="fixed bottom-8 left-8"
      >
        Contact
      </Link>
    </nav>
  );
}
