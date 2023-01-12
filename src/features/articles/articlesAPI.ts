import { Article } from '../../types/Article';
import { getAll, getById } from '../../utils/fetch';

const ARTICLES_API_URL = 'v3/articles6';

export const getArticles = async (): Promise<Article[]> => {
  return await getAll(`${ARTICLES_API_URL}`);
};

export const getArticleById = async (id: number): Promise<Article> => {
  return await getById(`${ARTICLES_API_URL}`, id);
};
