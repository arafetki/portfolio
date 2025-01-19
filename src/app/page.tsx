import Container from "@/components/container";
import Hero from "@/components/hero";
import { BackgroundBeamsWithCollision } from "@/components/background-beams";
import Services from "@/components/services";

export default function Home() {
    return (
        <Container>
            <BackgroundBeamsWithCollision>
                <Hero />
                <Services />
            </BackgroundBeamsWithCollision>
        </Container>
    );
}
