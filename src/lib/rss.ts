import { PROFILE } from "@/config";
import { type Post } from "content-collections";
import { writeFileSync } from "fs";
import RSS from "rss";

export function generateRssFeed(posts: Array<Post>) {
  const [firstName] = PROFILE.fullName.split(" ");

  const feed = new RSS({
    title: `${firstName}'s Blog | RSS Feed`,
    description: "The latest IT trends, tips, and more right here!",
    site_url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  posts.forEach((post) =>
    feed.item({
      title: post.title,
      description: post.summary,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`,
      date: post.publishedDate,
    }),
  );

  try {
    writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
    console.log("RSS feed generated successfully.");
  } catch (err) {
    console.error("Error writing RSS feed to file:", err);
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Unexpected error during RSS feed generation");
  }
}
