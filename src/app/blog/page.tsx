import type { Metadata } from "next";
import {allPosts} from "content-collections";
import { Separator } from "@/components/ui/separator";
import { PROFILE } from "@/config";
import Bar from "@/components/bar";
import PostCard from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog"
};

export default function Blog() {

    const [firstName] = PROFILE.fullName.split(" ");

    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 lg:py-10">
                <section className="space-y-4 py-10">
                    <Bar/>
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-semibold">{`${firstName}'s Blog`}</h1>
                        <p className="max-w-3xl text-wrap text-muted-foreground text-lg md:text-xl leading-relaxed">
                            The latest IT trends, tips, and more right here!
                        </p>
                    </div>
                </section>
                <Separator/>
                <section className="mt-8">
                    {allPosts.length ? (
                        <div className="grid gap-10 sm:grid-cols-2">
                            {allPosts.map(post=>{
                                return <PostCard key={post.slug} post={post}/>
                            })}
                        </div>
                    ): <p className="text-xl font-medium tracking-tight">No posts published.</p>}
                </section>
            </div>
        </div>
    );
}