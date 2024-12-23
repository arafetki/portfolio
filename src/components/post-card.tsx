import { cn, formatDate } from "@/lib/utils";
import type { Post } from "content-collections";
import Link from "next/link";
import Tags from "./tags";

interface PostCardProps extends React.HTMLProps<HTMLElement> {
  post: Post;
}

export default function PostCard({ post, className, ...rest }: PostCardProps) {
  return (
    <article
      className={cn(
        "group relative bg-secondary/60 dark:bg-secondary/20 border-l-4 border-primary flex flex-col gap-y-5 hover:bg-gradient-to-r hover:-translate-y-2 transition-all duration-500 p-8",
        className
      )}
      {...rest}
    >
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <time
        dateTime={post.publishedDate.toISOString()}
        className="block font-mono text-sm"
      >
        Published on {formatDate(post.publishedDate)}
      </time>
      <p className="text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base md:text-lg">
        {post.summary}
      </p>
      <Tags topics={post.topics} />
      <Link href={`/posts/${post.slug}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
}
