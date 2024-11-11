import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { PROFILE } from "@/config";
import Bar from "@/components/bar";
import PostCard from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const [firstName] = PROFILE.fullName.split(" ");

  return (
    <div>
      <div className="my-container">
        <section className="space-y-4 py-10">
          <Bar />
          <div className="space-y-8">
            <h1 className="text-4xl font-semibold md:text-5xl">{`${firstName}'s Blog`}</h1>
            <p className="max-w-3xl text-wrap text-lg leading-relaxed text-muted-foreground md:text-xl">
              The latest IT trends, tips, and more right here!
            </p>
          </div>
        </section>
        <div className="flex items-center gap-2">
          <div className="h-0 grow border border-dashed" />
          <Bar />
        </div>
        <section className="mt-8">
          {allPosts.length ? (
            <div className="grid gap-10 sm:grid-cols-2">
              {allPosts.map((post) => {
                return <PostCard key={post.slug} post={post} />;
              })}
            </div>
          ) : (
            <p className="text-xl font-medium tracking-tight">
              No posts published.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
