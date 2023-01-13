import React, { useMemo } from 'react';

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
import { useSearchParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

import { Article } from '../../types/Article';
import { formatDate } from '../../utils/formatDete';

type Props = {
  article: Article;
};

export const ArticleItem: React.FC<Props> = ({ article }) => {
  const { id, title, summary, imageUrl, publishedAt } = article;
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const trimedQuery = useMemo(() => query.trim(), [query]);
  const formatedDate = useMemo(() => formatDate(publishedAt), [publishedAt]);
  const visibleSummary = useMemo(
    () => `${summary.slice(0, 100).trim()}...`,
    [summary]
  );

  return (
    <Card className="articleItem" component={'li'}>
      <CardMedia image={imageUrl} className="articleItem__image" />

      <CardContent className="articleItem__content">
        <Box className="articleItem__date">
          <CalendarTodayIcon className="articleItem__date_icon" />
          <Typography className="articleItem__date_text">
            {formatedDate}
          </Typography>
        </Box>

        <Box className="articleItem__preview">
          <Typography component="h3">
            <Highlighter
              className="articleItem__title"
              highlightClassName="articleItem__highlight"
              searchWords={[trimedQuery]}
              autoEscape={true}
              textToHighlight={title}
            />
          </Typography>

          <Typography className="articleItem__summary_wrapper">
            <Highlighter
              className="articleItem__summary"
              highlightClassName="articleItem__highlight"
              searchWords={[trimedQuery]}
              autoEscape={true}
              textToHighlight={visibleSummary}
            />
          </Typography>

          <Link
            component={RouterLink}
            to={`/:${id}`}
            className="articleItem__link"
          >
            Read more
            <EastIcon className="articleItem__link_icon" />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};
