import React from 'react';
import { Typography, Box, CssBaseline, GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';

const GlobalReset = () => (
  <GlobalStyles
    styles={{
      body: { margin: 0, padding: 0, boxSizing: 'border-box' },
      '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    }}
  />
);

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100vw', // Full viewport width
  height: '72px',
  background: '#455F76',
  boxShadow: '0px 7.39px 14.78px -2.46px #919EAB1F, 0px 0px 1.23px 0px #919EAB33',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '52px',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '28px',
  textAlign: 'center',
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const Heading = () => {
  return (
    <>
      <CssBaseline />
      <GlobalReset />
      <StyledContainer>
        <StyledTypography>Checkout</StyledTypography>
      </StyledContainer>
    </>
  );
};

export default Heading;
