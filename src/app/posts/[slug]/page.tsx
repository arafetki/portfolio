type PostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  return (
    <div>
      <div className="box">
        <h1>Post: {slug}</h1>
      </div>
    </div>
  );
}
