"use client";

import Clock from "@/components/clock";
import Tools from "@/components/tools";
import config from "@/config";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    console.log("render hero");
    return (
        <section className="py-8 space-y-20 motion-preset-blur-down motion-duration-1500">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="order-2 lg:order-1 space-y-10 max-w-2xl">
                    <div className="space-y-2">
                        <h2 className="text-lg sm:text-xl lg:text-2xl">
                            Hey there!{" "}
                            <span className="text-xl sm:text-2xl lg:text-3xl">
                                👋
                            </span>
                        </h2>
                        <h1 className="font-medium text-2xl sm:text-3xl lg:text-5xl tracking-tight">
                            This is{" "}
                            <span className="font-extrabold uppercase">
                                {config.about.name}
                            </span>
                            ,
                        </h1>
                    </div>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        Welcome to my lil corner of the web where I share my
                        work with y&apos;all. I&apos;m a tech enthusiast based
                        in{" "}
                        <span className="text-foreground underline">
                            {config.about.address.country}
                        </span>{" "}
                        who loves to build amazing things with code
                    </p>
                    <div className="flex gap-4">
                        <button>
                            <Link
                                href="/about"
                                className="px-4 py-3 rounded-md ring-offset-background border border-foreground shadow-[3px_3px_rgb(0_0_0_/_20%)] dark:shadow-[3px_3px_rgb(255_255_255_/_40%)] hover:bg-secondary"
                            >
                                Know more
                                <ChevronRight
                                    size={22}
                                    className="inline-block"
                                />
                            </Link>
                        </button>
                        <button>
                            <Link
                                href="/about"
                                className="px-4 py-3 rounded-md ring-offset-background border border-foreground shadow-[3px_3px_rgb(0_0_0_/_20%)] dark:shadow-[3px_3px_rgb(255_255_255_/_40%)] bg-yellow-200 text-primary-foreground hover:bg-secondary hover:text-foreground"
                            >
                                Get in touch
                            </Link>
                        </button>
                    </div>
                    <div className="pt-8 space-y-3">
                        <h3 className="text-muted-foreground">
                            Tech stack and tools
                        </h3>
                        <Tools />
                    </div>
                </div>
                <figure className="order-1 lg:order-2 mx-auto animate-wiggle size-[150px] rounded-full bg-[url('/me.jpg')] bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_7px] shadow-primary lg:size-[260px]">
                    <figcaption className="sr-only">
                        {config.about.name}
                    </figcaption>
                </figure>
            </div>
            <div className="flex items-center justify-center gap-2 ">
                <div className="size-[10px] bg-green-700 rounded-full motion-preset-blink motion-duration-[1200ms]" />
                <div className="flex items-center gap-2 text-sm font-light">
                    <p>Available for Work</p>
                    {"-"}
                    <div>
                        <Clock timezone="Africa/Tunis" />,{" "}
                        <span>{config.about.address.country}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
