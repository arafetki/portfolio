"use client";

import ScrollDown from "@/components/scroll-down";
import { useEffect, useState } from "react";

export default function Hero() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set window height after the component mounts
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <section id="hero" className="relative h-screen">
      <aside className="absolute left-0 top-1/2 hidden h-60 w-2 -translate-y-1/2 bg-rose-700 lg:flex"></aside>
      <div className="flex h-full flex-col justify-center gap-y-8 p-6">
        <div className="animate-wiggle mx-auto size-[150px] bg-[url('/me.jpg')] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_7px] shadow-secondary/80 md:size-[200px]" />
        <div className="mx-auto max-w-4xl space-y-2 text-center">
          <h2 className="text-xs uppercase tracking-wide sm:text-sm md:text-base">
            Arafet BenKilani
          </h2>
          <h1 className="font-raleway text-xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            ICT Engineer & Self-taught Software Developer
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl [&>strong]:text-foreground">
            A recent Engineering Graduate based in Tunisia who is who passionate
            about <strong>Cloud</strong>, <strong>DevSecOps</strong> and{" "}
            <strong>Fullstack</strong> development.
          </p>
        </div>
      </div>
      <ScrollDown
        to={windowHeight}
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
      />
    </section>
  );
}
