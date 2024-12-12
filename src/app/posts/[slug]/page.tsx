import { allPosts } from "content-collections";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { generateRssFeed } from "@/lib/rss";
import Image from "next/image";
import { cn, formatDate } from "@/lib/utils";
import Mdx from "@/components/mdx";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import SocialShare from "@/components/social-share";

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
      <article className="mx-auto max-w-4xl p-6 lg:py-16">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
            <time
              dateTime={post.publishedDate.toISOString()}
              className="font-mono text-xs uppercase"
            >
              {post.modifiedDate ? (
                <span>Updated on: {formatDate(post.modifiedDate)}</span>
              ) : (
                <span>Published on: {formatDate(post.publishedDate)}</span>
              )}
            </time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
            {post.summary}
          </p>
          <ul className="flex items-center gap-x-2">
            {post.topics.map((topic, idx) => {
              return (
                <li
                  key={topic + idx}
                  className="transition-all duration-500 hover:-translate-y-1"
                >
                  <Link
                    href={`/blog/topics/${topic}`}
                    className="rounded-full bg-primary/25 px-4 py-2 text-sm font-medium uppercase text-primary"
                  >
                    {topic}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <SocialShare title={post.title} slug={post.slug} className="mt-8" />
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={9999}
          height={9999}
          className="my-8"
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
