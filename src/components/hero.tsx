"use client";

import { useEffect, useState } from "react";
import ScrollDown from "@/components/scroll-down";

export default function Hero() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set window height after the component mounts
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <section id="hero" className="grid h-[calc(100vh-5rem)] content-evenly p-6">
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <figure className="animate-wiggle size-[150px] rounded-full bg-[url('/me.jpg')] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_7px] shadow-secondary/80 md:size-[200px]">
          <figcaption className="sr-only">Arafet BenKilani</figcaption>
        </figure>
        <div className="max-w-4xl space-y-4 text-center">
          <h2 className="text-xs uppercase tracking-wide sm:text-sm md:text-base">
            Arafet BenKilani
          </h2>
          <h1 className="font-raleway text-xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            ICT Engineer & Self-taught Software Developer
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-lg lg:text-xl [&>strong]:text-foreground">
            A recent Engineering Graduate based in Tunisia who is passionate
            about <strong>Cloud</strong>, <strong>DevSecOps</strong>, and{" "}
            <strong>Fullstack</strong> development.
          </p>
        </div>
      </div>
      <ScrollDown to={windowHeight} className="mx-auto " />
    </section>
  );
}
