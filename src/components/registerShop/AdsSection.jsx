import React from 'react';
import { Box, Typography, Button, styled, Link } from '@mui/material';

// 💡 Styled Button
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

// 💡 Styled Image
const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '425px',
  height: 'auto',
  position: 'relative',
  top: '47px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
}));

const OverlappingContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '425px',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
}));

const OverlappingImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% - 70px)', // Responsive positioning
  left: '10%', // Dynamic centering
  width: '100%', // Scales with parent container
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    top: '95%',
    left: '5%',
    width: '80%',
  },
}));

const AdditionalOverlappingImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '40px', // Adjust as needed
  left: '250px', // Adjust as needed
  width: '200px',
  zIndex: 2, // Ensure this image is on top of the previous one// Ensure this image is on top
  [theme.breakpoints.down('sm')]: {
    top: '20%',
    left: '10%',
    width: '40%',
  },
}));

// 💡 Styled Headline
const StyledHeadline = styled(Typography)(({ theme }) => ({
  color: '#455F76',
  fontFamily: 'Montserrat',
  fontWeight: 700,
  lineHeight: '1.2',
  textAlign: 'left',
  marginBottom: '20px',
  fontSize: '36px',
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

// 💡 Styled SubHeadline
const StyledSubHeadline = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '36px',
  textAlign: 'justify',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: '20px',
  },
}));

// 💻 Main Component
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: '20px',
        }}
      >
        {/* 📝 Left Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <StyledHeadline>
            Turn Your Products Into Profits - 
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
        </Box>

        {/* 📸 Right Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
          }}
        >
          <OverlappingContainer>
            <StyledImage
              src="/assets/images/INDIAZONAwn.png"
              alt="Woman holding boxes"
            />
            <OverlappingImage
              src="/assets/images/Rectangle.png"
              alt="Indiazona logo"
            />
            <AdditionalOverlappingImage
              src="/assets/images/Ellipse.png"
              alt="Additional overlapping graphic"
            />
          </OverlappingContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default AdsSection;
