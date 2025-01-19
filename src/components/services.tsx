"use client";

import Image from "next/image";

export default function Services() {
    return (
        <section
            id="services"
            className="py-8 md:motion-preset-fade motion-duration-300 motion-delay-300 motion-ease-in"
        >
            <div className="space-y-10">
                <h1 className="font-medium text-xl uppercase text-center sm:text-2xl lg:text-4xl">
                    What am i capable of
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 [&>div]:bg-secondary [&>div]:col-span-1 ">
                    <div className="sm:-rotate-[2deg] sm:mt-1.5 hover:scale-95 transition-transform duration-500 ease-in-out">
                        <Image
                            src="/thinking.gif"
                            width={100}
                            height={100}
                            alt="Fullstack"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="hover:scale-95 transition-transform duration-500 ease-in-out">
                        <Image
                            src="/fullstack.gif"
                            width={100}
                            height={100}
                            alt="Fullstack"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="sm:rotate-[2deg] sm:mt-1.5 hover:scale-95 transition-transform duration-500 ease-in-out">
                        <Image
                            src="/devops.gif"
                            width={100}
                            height={100}
                            alt="Fullstack"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
