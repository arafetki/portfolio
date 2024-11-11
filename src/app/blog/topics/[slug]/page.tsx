type TopicProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: TopicProps) {
  const { slug } = await params;
  return (
    <div>
      <div className="my-container">Topic: {slug}</div>
    </div>
  );
}
