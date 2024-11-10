import { allPosts } from "content-collections";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { generateRssFeed } from "@/lib/rss";
import Image from "next/image";

type PostProps = {
  params: Promise<{
    slug: string;
  }>;
};

const getPostFromParams = async (params: PostProps["params"]) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) return null;
  return post;
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      images: [
        {
          url: post.thumbnail,
          alt: post.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  generateRssFeed(allPosts);
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: PostProps) {
  const post = await getPostFromParams(params);
  if (!post) notFound();
  return (
    <div>
      <div className="box">
        <div className="space-y-2">
          <h1>{post.title}</h1>
          <Image
            src={post.thumbnail}
            alt={post.title}
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}
