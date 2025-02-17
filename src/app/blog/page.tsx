import Container from "@/components/container";
import config from "@/config";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: `${config.about.name}'s blog`,
};

export default function Blog() {
    return (
        <Container>
            <h1 className="font-medium text-3xl">Under Construction</h1>
        </Container>
    );
}
