import React, { useEffect, useMemo } from 'react';

import './Articles.scss';

import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { ArticleItem } from '../../components/ArticleItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as articlesAction from './articlesSlice';
import { Article } from '../../types/Article';
import { filterByPriorityFields } from '../../utils/filterByPriorityFields';
import { FilterField } from '../../types/FilterField';
import { useDebounce } from '../../hooks/useDebounce';
import { CardSkeleton } from '../../components/CardSkeleton';

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

  const skeletonArray = Array(6).fill('');

  return (
    <Box className="articles">
      <Typography className="articles__count">{`Results: ${filteredArticles.length}`}</Typography>

      <Box className="articles__list" component="ul">
        {loading
          ? skeletonArray.map((el, i) => <CardSkeleton key={i} />)
          : filteredArticles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
      </Box>

      {error.length > 0 && (
        <Typography className="articles__message">
          Something went wrong &#x1F622;
        </Typography>
      )}

      {!loading && !error.length && !articles.length && (
        <Typography className="articles__message">
          No articles yet &#x1F622;
        </Typography>
      )}

      {!loading && !error.length && !filteredArticles.length && (
        <Typography className="articles__message">
          There are no matches &#x1F622;
        </Typography>
      )}
    </Box>
  );
};
