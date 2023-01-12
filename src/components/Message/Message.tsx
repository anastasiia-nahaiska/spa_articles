import React from 'react';

import { Typography } from '@mui/material';

import './Message.scss';

type Props = {
  text: string;
  className?: string;
};

export const Message: React.FC<Props> = ({ text, className = '' }) => (
  <Typography className={`message ${className}`}>{text}</Typography>
);
