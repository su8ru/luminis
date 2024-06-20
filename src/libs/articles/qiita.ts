import type { Article } from '.';

type Item = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: any;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stcock_count: number;
  tags: { name: string }[];
  title: string;
  updated_at: string;
  url: string;
};

const _fetch = async (): Promise<Item[]> => {
  const res = await fetch(
    'https://qiita.com/api/v2/users/su8ru/items?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.SECRET_QIITA_TOKEN}`,
      },
    }
  );
  return res.json();
};

export const getArticlesFromQiita = async (): Promise<Article[]> => {
  const articles = await _fetch();
  return articles.map(({ title, url, created_at }) => ({
    title,
    url,
    createdAt: created_at,
    site: 'qiita.com',
  }));
};
