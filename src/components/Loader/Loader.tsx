import React from 'react';
import { BeatLoader } from 'react-spinners';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="loader">
    <BeatLoader color="#363636" />
  </div>
);
