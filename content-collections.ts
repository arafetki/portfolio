import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from 'remark-gfm';
import  rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string(),
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
