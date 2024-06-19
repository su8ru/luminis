import { getArticlesFromZenn } from './zenn';
import { getArticlesFromQiita } from './qiita';

export type Article = {
  title: string;
  url: string;
  createdAt: string;
};

export const getArticles = async (): Promise<Article[]> => {
  const articles = await Promise.all([
    getArticlesFromZenn(),
    getArticlesFromQiita(),
  ]);
  return articles
    .flat()
    .sort((a, b) => (new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1));
};
