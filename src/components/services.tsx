import { FocusCards } from "@/components/focus-card";
import config from "@/config";

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
                <FocusCards cards={config.services} />
            </div>
        </section>
    );
}
