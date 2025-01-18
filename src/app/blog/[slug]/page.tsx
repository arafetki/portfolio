import Container from "@/components/container";

type PostPros = {
    params: Promise<{ slug: string }>;
};

export default async function Post({ params }: PostPros) {
    const { slug } = await params;
    return (
        <Container>
            <h1>{slug} Post Page</h1>
        </Container>
    );
}
