import { CircularProgress } from '@mui/material';
import React from 'react';

const Loading = ({ size = null }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: size ? 'unset' : '81vh',
        flexDirection: 'column',
        margin: 20,
      }}
    >
      <CircularProgress size={size ? size : 90} thickness={2} />
    </div>
  );
};

export default Loading;
