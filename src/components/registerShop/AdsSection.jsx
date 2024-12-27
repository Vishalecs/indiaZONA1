import React from 'react';
import { Box, Typography, Button, Grid, styled, Link } from '@mui/material';

// Styled Components
const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: '292px',
  height: '60px',
  padding: '16px 0',
  borderRadius: '5px',
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '24px',
  textAlign: 'center',
  textTransform: 'none',
  backgroundColor: '#455F76',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF8A33',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '16px',
    height: '50px',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '425px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
}));

const StyledHeadline = styled(Typography)(({ theme }) => ({
  color: '#455F76',
  fontFamily: 'Montserrat',
  fontWeight: 700,
  lineHeight: '1.2',
  textAlign: 'left',
  marginBottom: '20px',
  '& span:last-of-type': {
    whiteSpace: 'nowrap',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '36px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
  },
}));

const StyledSubHeadline = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '36px',
  textAlign: 'left',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
}));

function AdsSection() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1518px',
        background: '#FFFDF8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        marginTop: '0px',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <StyledHeadline>
            Turn Your Products Into Profits -{' '}
            <span style={{ color: '#619075' }}>Register and</span>{' '}
            <Link href="#" underline="hover" sx={{ color: '#FF944E' }}>
              Start Selling Now!
            </Link>
          </StyledHeadline>
          <StyledSubHeadline>
            Become an Indiazona Seller and{' '}
            <span style={{ color: '#619075' }}>grow your business across India!</span> If you don’t
            have a <span style={{ color: '#619075' }}>GST number?</span> Not an issue, start selling
            with just an <span style={{ color: '#619075' }}>enrollment number</span> and take your
            business to new heights.
          </StyledSubHeadline>
          <StyledButton>Register Your Shop Now</StyledButton>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            position: 'relative',
          }}
        >
          <StyledImage
            src="/assets/images/INDIAZONAwn.png"
            alt="Woman holding boxes"
            
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdsSection;
