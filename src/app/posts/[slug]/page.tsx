type PostProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function Post({params}: PostProps) {

    const {slug} = await params

    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 lg:py-10">
                <h1>Post: {slug}</h1>
            </div>
        </div>
    );
}