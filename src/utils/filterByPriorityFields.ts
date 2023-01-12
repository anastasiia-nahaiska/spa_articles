import { Article } from '../types/Article';
import { FilterField } from '../types/FilterField';

export const filterByPriorityFields = (
  fields: FilterField[],
  articles: Article[],
  query: string
): Article[] => {
  if (!query.length) {
    return articles;
  }

  const filteredArticles: Article[] = [];
  const formatQuery = query.toLowerCase().trim();

  fields.forEach((field) => {
    const matches = articles.filter(
      (article) =>
        article[field].toLowerCase().includes(formatQuery) &&
        !filteredArticles.includes(article)
    );
    filteredArticles.push(...matches);
  });

  return filteredArticles;
};
