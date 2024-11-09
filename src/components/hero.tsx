"use client";

import { PROFILE } from "@/config";
import Bar from "@/components/bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Links from "@/components/links";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-y-6 py-8 lg:flex-row lg:justify-between"
    >
      <div className="order-2 lg:order-1">
        <Bar className="my-2" />
        <h1 className="bg-gradient-to-r from-green-600 to-primary bg-clip-text font-mono text-6xl font-extrabold text-transparent lg:text-8xl">
          <span className="block">Build</span>
          <span className="block">Innovate</span>
        </h1>
        <p className="mt-12 max-w-[60ch] text-pretty text-base font-medium tracking-tight text-muted-foreground md:text-lg">
          {PROFILE.bio}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="border-primary"
            asChild
          >
            <Link href={PROFILE.resumeURL} target="_blank">
              Resume
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-primary hover:from-primary hover:to-green-600"
            asChild
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
        <div className="mt-12 flex items-center gap-4">
          <Bar className="grow" />
          <Links />
        </div>
      </div>
      <div className="order-1 size-[200px] animate-avatar bg-[url('/me.jpg')] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_7px] shadow-secondary/80 md:size-[250px] lg:hidden" />
    </section>
  );
}
