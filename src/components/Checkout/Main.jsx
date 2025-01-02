// src/components/MainContainer.jsx

import React from 'react';
import { Box } from '@mui/material';
import SubContainer from './SubContainer';
import { mainContainerStyles, subContainerWrapperStyles } from '../styles/MainContainerStyles';

const MainContainer = () => {
  return (
    <Box sx={mainContainerStyles}>
      {/* SubContainer Positioned on the Left */}
      <Box sx={subContainerWrapperStyles}>
        <SubContainer />
      </Box>

      {/* Placeholder for Other Content */}
      <Box
        sx={{
          flex: 1,
          padding: '20px',
          backgroundColor: '#e9ecef',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (max-width: 768px)': {
            display: 'none',
          },
        }}
      >
        <p>Additional Content Here</p>
      </Box>
    </Box>
  );
};

export default MainContainer;
