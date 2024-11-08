import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {SITE_URL} from "@/config";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from 'remark-gfm';
import  rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    topics: z.array(z.string()),
    summary: z.string(),
    author: z.string(),
    date: z.coerce.date().optional().default(new Date()),
    thumbnail: z.string().url().optional().default(`${SITE_URL}/default_thumbnail.png`),
  }),
  transform: async (doc,ctx) => {
    const mdx = await compileMDX(ctx,doc,{
        rehypePlugins: [
            [rehypePrettyCode,{theme: 'github-dark-high-contrast', keepBackground: false}],
            rehypeSlug,
            rehypeAutoLinkHeadings
        ],
        remarkPlugins: [remarkGfm]
    });

    return {
        ...doc,
        mdx,
        slug: doc._meta.path,
    }

  },
});


export default defineConfig({
  collections: [posts],
});
