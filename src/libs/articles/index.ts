import { getArticlesFromZenn } from './zenn';
import { getArticlesFromQiita } from './qiita';

type Site = 'zenn.dev' | 'qiita.com';

export type Article = {
  title: string;
  url: string;
  createdAt: string;
  site: Site;
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

export const getFaviconUrl = (site: Site): string => {
  return `https://www.google.com/s2/favicons?domain=${site}&sz=64`;
};
