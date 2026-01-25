import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.mdx" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      status: z.enum(["draft", "published", "archived"]).default("draft"),
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      heroImage: image().optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      tableOfContents: z.boolean().default(true),
    }),
});

export const collections = { blog };
