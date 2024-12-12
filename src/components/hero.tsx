"use client";

import { PROFILE } from "@/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-y-6 py-4 lg:block"
    >
      <div className="size-[150px] animate-avatar bg-[url('/me.jpg')] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_7px] shadow-secondary/80 md:size-[200px] lg:hidden" />
      <div className="text-center lg:text-left">
        <h1 className="text-6xl font-extrabold lg:text-8xl">
          <span className="block">Build</span>
          <span className="block">Innovate</span>
        </h1>
        <p className="mt-12 max-w-prose text-pretty text-base font-medium tracking-tight text-muted-foreground md:text-lg [&>strong]:text-foreground">
          Hey! I am <strong>{PROFILE.fullName}</strong>, a recent Engineering
          Graduate from{" "}
          <strong>
            <Link
              href="https://supcom.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <span>SUP&apos;COM</span>
              <Icons.external size={14} />
            </Link>
          </strong>{" "}
          and a Cloud DevSecOps Enthusiast based in Tunisia.
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
