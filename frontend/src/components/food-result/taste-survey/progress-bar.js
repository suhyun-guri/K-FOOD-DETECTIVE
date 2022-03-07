import React from 'react';
import { Box, Typography } from '@mui/material';

export function ProgressBar({ percentage }) {
  const BoxStyle = {
    height: '1rem',
    backgroundColor: "#F9F6FF",
    borderRadius: 50,
    mx: 5
    
  }

  const FillerStyle = {
    height: '100%',
    width: `${percentage}%`,
    background: 'linear-gradient(to right, #09c6f9 0%, #045de9 100%)',
    borderRadius: '20px',
    transition: '1s ease 0.005s',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)'
  }


  return (
    <>
        <Typography
          textAlign='right'
          variant='h6'
          sx={{
            mx: 7
          }}
        >
          {percentage}%
        </Typography>
      
        <Box
          role = 'progressbar'
          style = {{width: `${percentage}%`}}
        />
        <Box sx={BoxStyle}>
            <Box sx={FillerStyle} />
        </Box>
    </>
  );
};

