import React from 'react';

import { Typography, Paper } from '@mui/material';

import { Article } from '../../types/Article';
import { Loader } from '../../components/Loader';
import { Message } from '../../components/Message';

import './ArticlePaper.scss';

type Props = {
  article: Article | null;
  loading: boolean;
  error: boolean;
};

export const ArticlePaper: React.FC<Props> = ({ article, loading, error }) => (
  <Paper className="article_paper">
    {loading ? (
      <Loader />
    ) : (
      <>
        <Typography className="article_paper__title">
          {article?.title}
        </Typography>

        <Typography className="article_paper__summary">
          {article?.summary}
        </Typography>
      </>
    )}

    {error && (
      <Message
        text="Something went wrong &#x1F622;"
        className="article_paper__message"
      />
    )}
  </Paper>
);
