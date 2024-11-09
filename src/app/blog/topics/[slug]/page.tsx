type TopicProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: TopicProps) {
  const { slug } = await params;
  return (
    <div>
      <div className="box">Topic: {slug}</div>
    </div>
  );
}
