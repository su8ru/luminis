import type { CollectionEntry } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';

export const getWorkOgImage = async (
  work: CollectionEntry<'works'>
): Promise<Buffer> => {
  const svg = await satori(<main></main>, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Zen Maru Gothic',
        data: await getFontData(
          'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@700&display=swap'
        ),
      },
    ],
  });

  return await sharp(Buffer.from(svg)).png().toBuffer();
};

// https://github.com/vercel/satori/blob/main/playground/pages/api/font.ts#L86-L111
const getFontData = async (url: string): Promise<ArrayBuffer> => {
  const css = await (
    await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) return new ArrayBuffer(0);

  const res = await fetch(resource[1]);
  return res.arrayBuffer();
};
