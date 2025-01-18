import Container from "@/components/container";
import Hero from "@/components/hero";
import { BackgroundBeamsWithCollision } from "@/components/background";

export default function Home() {
    return (
        <Container>
            <BackgroundBeamsWithCollision>
                <Hero />
            </BackgroundBeamsWithCollision>
        </Container>
    );
}
