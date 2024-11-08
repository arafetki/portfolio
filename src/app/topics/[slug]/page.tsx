type TopicProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({params}: TopicProps) {
    const {slug} = await params
    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 lg:py-10">Topic: {slug}</div>
        </div>
    );
}