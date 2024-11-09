"use client";

import { PROFILE } from "@/config";
import Bar from "@/components/bar";
import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./icons";

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: <Icons.github className="size-7 fill-zinc-500 hover:fill-primary"/>,
        href: "https://github.com/arafetki"
    },
    {
        name: "LinkedIn",
        icon: <Icons.linkedin className="size-7 fill-zinc-500 hover:fill-primary"/>,
        href: "https://www.linkedin.com/in/arafet-ben-kilani"
    },
    {
        name: "Reddit",
        icon: <Icons.reddit className="size-7 fill-zinc-500 hover:fill-primary"/>,
        href: "https://www.reddit.com/user/arfoutbenk"
    }
]

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col xl:flex-row items-center gap-y-6 xl:justify-between py-8">
            <div className="order-2 xl:order-1">
                <Bar className="my-2"/>
                <h1 className="font-extrabold font-mono text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-green-600 to-primary">
                    <span className="block">Build</span>
                    <span className="block">Innovate</span>
                </h1>
                <p className="mt-12 text-muted-foreground text-base md:text-lg text-pretty font-medium tracking-tight max-w-[60ch]">
                    {PROFILE.bio}
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <Button variant="outline" size="lg" className="border-primary">About me</Button>
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-primary hover:from-primary hover:to-green-600">Get In Touch</Button>
                </div>
                <div className="mt-12 flex items-center gap-4">
                    <Bar className="grow"/>
                    <ul className="flex items-center gap-5">
                        {SOCIAL_LINKS.map((item)=>{
                            return (
                                <li key={item.name}>
                                    <Link href={item.href} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="order-1 xl:order-2 bg-[url('/me.jpg')] bg-no-repeat bg-cover bg-center size-[200px] md:size-[250px] lg:size-[300px] xl:size-[375px] animate-avatar shadow-[inset_0_0_0_7px] shadow-secondary/80"/>
        </section>
    );
}