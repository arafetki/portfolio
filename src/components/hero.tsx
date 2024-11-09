"use client";

import { PROFILE } from "@/config";
import Bar from "@/components/bar";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col lg:flex-row items-center gap-x-24 gap-y-5">
            <div className="order-2 lg:order-1">
                <Bar className="my-2"/>
                <h1 className="font-extrabold font-mono text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-green-600 to-primary">
                    <span className="block">Build</span>
                    <span className="block">Innovate</span>
                </h1>
                <p className="mt-12 text-muted-foreground text-lg font-medium tracking-tight max-w-[60ch] space-y-4">
                    <span className="block">
                        {PROFILE.bio}
                    </span>
                    <span className="block">My expertise in JavaScript, TypeScript, Vue.js, and Nuxt.js is highly valued by clients all around the world.</span>
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <Button variant="outline" size="lg" className="border-primary">About me</Button>
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-primary hover:from-primary hover:to-green-600">Get In Touch</Button>
                </div>
            </div>
            <div className="order-1 lg:order-2 bg-[url('/me.jpg')] bg-no-repeat bg-cover bg-center size-[200px] lg:size-[400px] animate-avatar shadow-[inset_0_0_0_7px] shadow-secondary/80"/>
        </section>
    );
}