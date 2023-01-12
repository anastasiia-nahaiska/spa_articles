import { Article } from '../../types/Article';
import { getAll, getById } from '../../utils/fetch';

const ARTICLES_API_URL = 'v3/articles';

export const getArticles = async (): Promise<Article[]> => {
  return getAll(`${ARTICLES_API_URL}`);
};

export const getArticleById = async (id: number): Promise<Article> => {
  return getById(`${ARTICLES_API_URL}`, id);
};
