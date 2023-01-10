import { ArticleEvent } from './ArticleEvent';
import { ArticleLaunch } from './ArticleLaunch';

export interface Article {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: ArticleLaunch[];
  events: ArticleEvent[];
}
