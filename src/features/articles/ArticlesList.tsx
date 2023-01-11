import React, { useEffect } from 'react';

import './ArticleList.scss';

import { Box } from '@mui/material';
import { ArticleItem } from '../../components/ArticleItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesAction from './articlesSlice';

export const ArticlesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles, loading, error } = useAppSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(articlesAction.init());
  }, []);

  return (
    <Box className="articlesList">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Box>
  );
};
