import React from 'react';

import './CardSkeleton.scss';

import { Skeleton, Card, Box, CardContent } from '@mui/material';

export const CardSkeleton: React.FC = () => (
  <Card className="card_skeleton" component={'li'}>
    <Skeleton
      className="card_skeleton__image"
      variant="rectangular"
      animation="wave"
    />

    <CardContent className="card_skeleton__content">
      <Skeleton className="card_skeleton__title" animation="wave" />

      <Box className="card_skeleton__summary">
        <Skeleton className="card_skeleton__text" animation="wave" />
        <Skeleton className="card_skeleton__text" animation="wave" />
        <Skeleton className="card_skeleton__text" animation="wave" />
      </Box>

      <Box className="card_skeleton__link">
        <Skeleton className="card_skeleton__text" animation="wave" />
      </Box>
    </CardContent>
  </Card>
);
