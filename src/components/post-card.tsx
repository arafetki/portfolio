import { cn, formatDate } from "@/lib/utils";
import type { Post } from "content-collections";
import Link from "next/link";

interface PostCardProps extends React.HTMLProps<HTMLElement> {
    post: Post
}

export default function PostCard({post,className,...rest}: PostCardProps) {

    return (
        <article
            className={cn("group relative bg-secondary/60 dark:bg-secondary/20 border-l-4 border-primary flex flex-col gap-y-5 hover:bg-gradient-to-r hover:-translate-y-2 transition-all duration-500 p-8",className)}
            {...rest}
        >
            <h1 className="font-bold text-3xl">{post.title}</h1>
            <time
                dateTime={post.date.toISOString()} 
                className="block text-sm md:text-base" 
            >
                Published on {formatDate(post.date)}
            </time>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg tracking-tight leading-relaxed">{post.summary}</p>
            <ul className="flex gap-x-2">
                {post.topics.map((topic,idx)=>{
                    return (
                        <li key={topic+idx}>{`#${topic.toLowerCase()}`}</li>
                    )
                })}
            </ul>
            <Link href={`/posts/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
            </Link>
        </article>
    );
}