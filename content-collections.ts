import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    topics: z.array(z.string()),
    summary: z.string(),
    author: z.string(),
    publishedDate: z.coerce.date(),
    thumbnail: z.string().optional().default(`/default_thumbnail.png`),
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc, {
      rehypePlugins: [
        [
          rehypePrettyCode,
          { theme: "github-dark-high-contrast", keepBackground: false },
        ],
        rehypeSlug,
        rehypeAutoLinkHeadings,
      ],
      remarkPlugins: [remarkGfm],
    });

    const lastModified = await ctx.cache(
      doc._meta.filePath,
      async (filePath) => {
        const { stdout } = await execAsync(
          `git log -1 --format=%ai -- ${filePath}`,
        );
        if (stdout) {
          return new Date(stdout.trim()).toISOString();
        }
        return new Date().toISOString();
      },
    );

    return {
      ...doc,
      lastModified,
      mdx,
      slug: doc._meta.path,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
