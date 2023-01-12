import React, { useCallback } from 'react';

import './HomePage.scss';

import { Typography, Box, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Articles } from '../../features/articles/Articles';
import { useSearchParams } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (!event.target.value) {
        searchParams.delete('query');
      } else {
        searchParams.set('query', event.target.value);
      }

      setSearchParams(searchParams);
    },
    []
  );

  return (
    <Box component="main" className="homePage">
      <Typography className="homePage__search">Filter by keywords</Typography>
      <OutlinedInput
        value={searchParams.get('query') || ''}
        onChange={(e) => onChange(e)}
        className="homePage__search_input"
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className="homePage__search_icon" />
          </InputAdornment>
        }
      />
      <Articles />
    </Box>
  );
};
