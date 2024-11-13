import { allPosts } from "content-collections";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { generateRssFeed } from "@/lib/rss";
import Image from "next/image";
// import SocialShare from "@/components/social-share";
import { cn, formatDate } from "@/lib/utils";
import Mdx from "@/components/mdx";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Tags from "@/components/tags";

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
      <article className="mx-auto max-w-3xl p-6 lg:py-16">
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
            <time dateTime={post.publishedDate.toISOString()}>
              {formatDate(post.publishedDate)}
            </time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            {post.summary}
          </p>
          <Tags topics={post.topics} />
        </section>
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={9999}
          height={9999}
          className="mb-8 mt-12"
        />
        <Mdx code={post.mdx} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 size-4" />
            See all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
