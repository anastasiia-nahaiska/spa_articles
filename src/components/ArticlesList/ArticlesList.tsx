import React, { useMemo } from 'react';

import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../app/hooks';
import { Article } from '../../types/Article';
import { ArticleItem } from '../ArticleItem';
import { CardSkeleton } from '../../components/CardSkeleton';

import './ArticlesList.scss';

type Props = {
  articles: Article[];
};

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  const { loading } = useAppSelector((state) => state.articles);
  const skeletonArray = useMemo(
    () =>
      Array(6)
        .fill('')
        .map(() => {
          id: uuidv4();
        }),
    []
  );

  console.log(skeletonArray);

  return (
    <Box className="articles_list" component="ul">
      {loading
        ? skeletonArray.map((_, i) => <CardSkeleton key={i} />)
        : articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
    </Box>
  );
};
