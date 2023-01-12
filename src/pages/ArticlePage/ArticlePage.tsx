import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import { Image } from 'mui-image';

import { useAppSelector } from '../../app/hooks';
import { getArticleById } from '../../features/articles/articlesAPI';
import { Typography, Box, Paper, Link } from '@mui/material';
import { Article } from '../../types/Article';

import './ArticlePage.scss';

export const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { articleId } = useParams();
  const { articles } = useAppSelector((state) => state.articles);

  const loadArticle = async (id: number) => {
    try {
      setLoading(true);

      const articleFromApi = await getArticleById(id);

      setArticle(articleFromApi);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!articleId) {
      return;
    }

    const articleIdAsNumber = +articleId.slice(1);

    loadArticle(articleIdAsNumber);
  }, []);

  console.log(article?.summary);

  return (
    <Box component="main" className="article_page">
      {article && (
        <Box className="article_page__image">
          <Image src={article.imageUrl} />
        </Box>
      )}

      <Box className="article_page__content">
        {article && (
          <Paper className="article_page__paper">
            <Typography className="article_page__title">
              {article.title}
            </Typography>

            <Typography className="article_page__summary">
              {article.summary}
            </Typography>
          </Paper>
        )}

        <Link to="/" component={RouterLink} className="article_page__link">
          <WestIcon className="article_page__link_icon" />
          Back to homepage
        </Link>
      </Box>
    </Box>
  );
};
