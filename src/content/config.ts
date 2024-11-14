import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const posts = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: 'src/content/posts',
    }),
    schema: z.object({
        isDraft: z.boolean(),
        isPublic: z.boolean(),
        title: z.string(),
        author: z.string().default('Anonymous'),
        description: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        updatedDate: z
            .string()
            .transform(str => new Date(str))
            .optional(),
    }),
});

export const collections = { posts };
