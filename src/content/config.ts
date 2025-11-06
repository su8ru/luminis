import { z, defineCollection, type ImageFunction } from 'astro:content';

const imageSchema = (image: ImageFunction) =>
  z.object({
    src: image(),
    alt: z.string(),
  });

const works = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      role: z.string().optional(),
      type: z.string(),
      date: z.date(),
      pinned: z.boolean().default(false),
      thumbnail: imageSchema(image),
      images: z.array(imageSchema(image)).optional(),
    }),
});

export const collections = {
  works,
};
