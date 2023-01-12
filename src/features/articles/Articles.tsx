import React, { useEffect, useMemo } from 'react';

import './Articles.scss';

import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesAction from './articlesSlice';
import { Article } from '../../types/Article';
import { filterByPriorityFields } from '../../utils/filterByPriorityFields';
import { FilterField } from '../../types/FilterField';
import { useDebounce } from '../../hooks/useDebounce';
import { Message } from '../../components/Message';
import { ArticlesList } from '../../components/ArticlesList';

export const Articles: React.FC = () => {
  const dispatch = useAppDispatch();
  const { articles, loading, error } = useAppSelector(
    (state) => state.articles
  );
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    dispatch(articlesAction.init());
  }, []);

  const filteredArticles: Article[] = useMemo(() => {
    return filterByPriorityFields(
      [FilterField.TITILE, FilterField.SUMMARY],
      articles,
      debouncedQuery
    );
  }, [articles, debouncedQuery]);

  return (
    <Box className="articles">
      <Typography className="articles__count">{`Results: ${filteredArticles.length}`}</Typography>

      <ArticlesList articles={filteredArticles} />

      {error.length > 0 && <Message text="Something went wrong &#x1F622;" />}

      {!loading && !error.length && !articles.length && (
        <Message text="No articles yet &#x1F622;" />
      )}

      {!loading && !error.length && !filteredArticles.length && (
        <Message text="There are no matches &#x1F622;" />
      )}
    </Box>
  );
};
