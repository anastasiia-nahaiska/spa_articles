import React from 'react';

import './ArticleItem.scss';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastIcon from '@mui/icons-material/East';
import { Link as RouterLink } from 'react-router-dom';

// import { Article } from '../../types/Article';

// type Props = {
//   article: Article;
// };

export const ArticleItem: React.FC = () => {
  // const { id, title, summary, imageUrl, updatedAt } = article;

  return (
    <Card className="articleItem">
      <CardMedia
        image={
          'https://cdn.mos.cms.futurecdn.net/4MLyNZ66GSMUp7z49Q8k3K-320-80.jpg'
        }
        className="articleItem__image"
      />
      <CardContent className="articleItem__content">
        <Box className="articleItem__date">
          <CalendarTodayIcon className="articleItem__date_icon" />
          <Typography className="articleItem__date_text">
            June 29th, 2021
          </Typography>
        </Box>

        <Box className="articleItem__preview">
          <Typography component="h3" className="articleItem__title">
            The 2020 World&#39;s Most Valuable Brands
          </Typography>
          <Typography className="articleItem__summary">
            Non sed molestie tortor massa vitae in mattis. Eget vel consequat
            hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
            pharetra...
          </Typography>

          <Link component={RouterLink} to=":id" className="articleItem__link">
            Read more
            <EastIcon className="articleItem__link_icon" />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
