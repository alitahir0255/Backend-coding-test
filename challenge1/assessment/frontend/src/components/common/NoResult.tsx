import React from 'react';
import { SearchOff } from '@mui/icons-material';
import { Typography } from '@mui/material';

type Result = {
  title: string;
};

const NoResult = ({ title }: Result) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        width: '100%',
      }}
    >
      <SearchOff fontSize='large' />
      <Typography variant='h6' style={{ textAlign: 'start' }}>
        {title}
      </Typography>
    </div>
  );
};

export default NoResult;
