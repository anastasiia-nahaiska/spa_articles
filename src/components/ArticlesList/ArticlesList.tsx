import React, { useMemo } from 'react';

import { Box } from '@mui/material';

import { useAppSelector } from '../../app/hooks';
import { Article } from '../../types/Article';
import { ArticleItem } from '../ArticleItem';
import { CardSkeleton } from '../../components/CardSkeleton';

import './ArticlesList.scss';
import { getNeewArrayWithId } from '../../utils/getNewArrayWithId';

type Props = {
  articles: Article[];
};

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  const { loading } = useAppSelector((state) => state.articles);

  const skeletonArray = useMemo(() => getNeewArrayWithId(6), []);

  return (
    <Box className="articles_list" component="ul">
      {loading
        ? skeletonArray.map(({ id }) => <CardSkeleton key={id} />)
        : articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
    </Box>
  );
};
