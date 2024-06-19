import type { Article } from '.';

type Item = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  pinned: boolean;
  path: string;
};
type Response = {
  articles: Item[];
  next_page: number | null;
};

const _fetch = async (): Promise<Response> => {
  const res = await fetch('https://zenn.dev/api/articles?username=su8ru');
  return res.json();
};

export const getArticlesFromZenn = async (): Promise<Article[]> => {
  const res = await _fetch();
  return res.articles.map(({ title, path, published_at }) => ({
    title,
    url: `https://zenn.dev${path}`,
    createdAt: published_at,
  }));
};
