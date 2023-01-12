import React from 'react';

import './HomePage.scss';

import { Typography, Box, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useAppSelector } from '../../app/hooks';
import { ArticlesList } from '../../features/articles/ArticlesList';

export const HomePage: React.FC = () => {
  const { articles, loading, error } = useAppSelector(
    (state) => state.articles
  );

  return (
    <Box component="main" className="homePage">
      <Typography className="homePage__search">Filter by keywords</Typography>
      <OutlinedInput
        className="homePage__search_input"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className="homePage__search_icon" />
          </InputAdornment>
        }
      />
      <Typography className="homePage__count">{`Results: ${articles.length}`}</Typography>
      <ArticlesList />
    </Box>
  );
};
