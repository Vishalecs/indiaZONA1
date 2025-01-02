import React, { useState } from 'react';
import { Box, Typography, TextField, Link, Card, InputAdornment ,CardContent, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Discount } from '@mui/icons-material'; 
const ApplyDiscount = ({ onApplyDiscount }) => {
  const [discountCode, setDiscountCode] = useState('');

  const handleApplyClick = () => {
    onApplyDiscount(discountCode);
    setDiscountCode('');
  };

  const handleCouponClick = (couponCode) => {
    setDiscountCode(couponCode);
  };

  const handleCopyClick = (couponCode) => {
    navigator.clipboard.writeText(couponCode).then(() => {
      alert(`${couponCode} copied to clipboard!`);
    });
  };

  return (
    <Box
      sx={{
        maxWidth: "884px",
        backgroundColor: "#fff",
        fontFamily: "Montserrat",
        "@media (max-width: 600px)": {
          padding: "16px",
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '22px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#455F76',
          '@media (max-width: 600px)': {
            fontSize: '18px',
            textAlign: 'left', // Center text on small screens
          },
        }}
      >
        Available offers
      </Typography>

      {/* Checkbox with label */}
      <Box mt={1}>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '19.5px',
                textAlign: 'left',
                marginBottom: '2px',
                '@media (max-width: 600px)': {
                  fontSize: '14px', // Adjust font size on small screens
                  textAlign: 'left', // Center text on small screens
                },
              }}
            >
              Save More with No Return Discount!
            </Typography>
          }
        />
      </Box>

      {/* Subheading */}
      <Box mt={0.2}>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            textAlign: 'left',
            color: '#BABABA',
            paddingLeft: '28px',
            marginBottom: '20px',
            '@media (max-width: 600px)': {
              paddingLeft: '16px', // Adjust padding on small screens
              textAlign: 'center', // Center text on small screens
            },
          }}
        >
          Choose the No Return Discount and enjoy savings! Don’t worry—if the product is damaged or not functional, you can still return it during the return window.
        </Typography>
      </Box>

    
        
          
          
          <Box
      sx={{
        width: '100%',
        height: '48px',
        gap: '0px',
        
        marginBottom: '20px',
        
      }}
    >
      <TextField
        fullWidth
        label="Discount Code"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        variant="outlined"
        sx={{
          height: '48px',
          borderRadius: '5px 5px 5px 5px',
          
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography
                onClick={handleApplyClick}
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '19.5px',
                  textAlign: 'right',
                  paddingRight: '10px',
                  color: 'blue',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                APPLY
              </Typography>
            </InputAdornment>
          ),
        }}
      />
    </Box>
          {/* Validation Message */}
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '12px',
          textAlign: 'left',
          color: '#BABABA',
          marginBottom: '16px',
          '@media (max-width: 600px)': {
            textAlign: 'center', // Center text on small screens
          },
        }}
      >
        Enter a valid coupon/Gift Card/Referral code
      </Typography>
      <Typography variant="h6" gutterBottom>
            Apply Discount
          </Typography>
          <Box display="flex" justifyContent="space-between" gap={2} flexWrap="wrap" width={469}>
      <Box
        onClick={() => handleCouponClick('COUPON10')}
        sx={{
          width: { xs: '100%', sm: '48%' }, // Full width on small screens, 48% on larger screens
          height: 'auto', // Let the height adjust based on content
          minHeight: '110px', // Minimum height to maintain layout
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centers the content vertically
          alignItems: 'flex-start', // Aligns the content to the left
          padding: '10px',
          border: '0.5px solid',
          borderColor:'gray',
          boxShadow: '0px 7.39px 14.78px -2.46px #919EAB1F', // Optional border to visually separate the container
          cursor: 'pointer', // Makes the container clickable
          boxSizing: 'border-box',
          borderRadius:'10px', // Prevents padding from affecting the width
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            width: '100%', // Ensures full width for left-aligned text
            whiteSpace: 'normal', // Allows text to wrap
            overflowWrap: 'break-word', // Breaks words when needed to prevent overflow
            wordBreak: 'break-word',
            marginBottom: '20px',
          }}
        >
          Get 10% off on Minimum order value Rs 1499
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            textAlign: 'center', // Centers the Coupon text horizontally
            width: '100%', // Ensures full width for centering
            color:'#FF944E',
          }}
        >
          Coupon 10% OFF
        </Typography>
      </Box>
      <Box
        onClick={() => handleCouponClick('COUPON20')}
        sx={{
          width: { xs: '100%', sm: '48%' }, // Full width on small screens, 48% on larger screens
          height: 'auto', // Let the height adjust based on content
          minHeight: '110px', // Minimum height to maintain layout
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centers the content vertically
          alignItems: 'flex-start', // Aligns the content to the left
          padding: '10px',
          borderRadius: '10px 10px 10px 10px',
          border: '1px solid', // Optional border to visually separate the container
          cursor: 'pointer', // Makes the container clickable
          boxSizing: 'border-box', 
          border: '0.5px solid',
          borderColor:'gray',
          boxShadow: '0px 7.39px 14.78px -2.46px #919EAB1F', // Prevents padding from affecting the width
          
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            width: '100%', // Ensures full width for left-aligned text
            whiteSpace: 'normal', // Allows text to wrap
            overflowWrap: 'break-word', // Breaks words when needed to prevent overflow
            wordBreak: 'break-word', // Ensures long words break properly
            marginBottom: '20px',
          }}
        >
          Get 20% off on Minimum order value Rs 1499
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            textAlign: 'center', // Centers the Coupon text horizontally
            width: '100%', // Ensures full width for centering
            
            color:'#FF944E',
          }}
        >
          Coupon 20% OFF
        </Typography>
      </Box>
    </Box>
      
      
      <Box sx={{ width: '100%', padding: '10px' }}>
      {/* Bank Offer Title */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '19.5px',
          textAlign: 'left',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        Bank Offer
      </Typography>

      {/* Bank Offer Details */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '16px',
          letterSpacing: '0.2px',
          textAlign: 'left',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
          display: 'flex',
          alignItems: 'center', // Align icon and text horizontally
        }}
      >
        {/* Discount Icon */}
        <Discount sx={{ marginRight: '8px', color: 'gray',width:'12.18px',height:'12.18px' }} /> 
        {/* You can adjust color or margin as needed */}
        Bank Offer 5% Cashback on Axis Bank Credit Card  {'  '}
        {/* The T&C text as a clickable link */}
        <Link
          href="https://your-terms-and-conditions-link.com" // Replace with your T&C link
          sx={{
            
            color: '#455F76', // Customize the link color if needed
          }}
          target="_blank"
        >
          T&C
        </Link>
      </Typography>
      {/* Bank Offer Details */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '16px',
          letterSpacing: '0.2px',
          textAlign: 'left',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
          marginTop: '10px',

        }}
      > 
      <Discount sx={{ marginRight: '8px', color: 'gray',width:'12.18px',height:'12.18px' }} />
        Bank Offer 5% Cashback on Axis Bank Credit Card{' '}
        {/* The T&C text as a clickable link */}
        <Link
          href="https://your-terms-and-conditions-link.com" // Replace with your T&C link
          sx={{
            
            color: '#455F76', // Customize the link color if needed
          }}
          target="_blank"
        >
          T&C
        </Link>
      </Typography>
    </Box>
      
    <hr
  style={{
    width: '100%',  // Make the line take up 100% of the width of its container
    maxWidth: '896px',  // Limit the width to 896px on larger screens
    margin: '16px auto',  // Center the line horizontally and add vertical spacing
    border: '0',  // Remove default border style
    borderTop: '2px solid #BABABA',  // Set color and thickness for the horizontal line
  }}
/>
    </Box>
  );
};

export default ApplyDiscount;
