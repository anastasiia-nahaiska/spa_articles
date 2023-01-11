import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LastPage } from '@mui/icons-material';

import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => (
  <Box component="main" className="notFoundPage">
    <Typography variant="h2" component="h1" className="notFoundPage__title">
      Oops, you got lost &#x1F622;
    </Typography>
    <Button
      variant="contained"
      component={Link}
      to="/"
      endIcon={<LastPage />}
      className="notFoundPage__button"
    >
      Go to Home
    </Button>
  </Box>
);
