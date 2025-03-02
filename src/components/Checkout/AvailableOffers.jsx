import React, { useState } from 'react';
import { Box, Typography, TextField, Link, InputAdornment, Checkbox, FormControlLabel, IconButton } from '@mui/material';
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
             padding: "5px",
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
          textAlign: { xs: 'left', sm: 'left' },
          "@media (max-width: 600px)": {
          fontSize:'19px',
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
                textAlign: 'left',
                marginBottom: '2px',
                '@media (max-width: 600px)': {
                  fontSize: '14px',
                  textAlign: 'left',
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
            textAlign: 'left',
            color: '#BABABA',
            paddingLeft: { xs: '16px', sm: '28px' },
            marginBottom: '20px',
            '@media (max-width: 600px)': {
              paddingLeft: '16px',
              textAlign: 'left',
            },
          }}
        >
          Choose the No Return Discount and enjoy savings! Don’t worry—if the product is damaged or not functional, you can still return it during the return window.
        </Typography>
      </Box>

      {/* Discount Code Input */}
      <Box
        sx={{
          width: '100%',
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
            borderRadius: '5px',
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
                    color: '#455F76',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
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
          color: '#BABABA',
          marginBottom: '16px',
          textAlign: 'left',
        }}
      >
        Enter a valid coupon/Gift Card/Referral code
      </Typography>
     
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "19.5px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#212121",
          marginTop: '20px', 
          marginBottom: '15px',
        }}
      >
        Available Coupon Code
      </Typography>
   
      {/* Coupon Options */}
      <Box
  display="flex"
  justifyContent="space-between"
  gap={2}
  flexWrap="wrap"
  sx={{
    width: "60%", // Default for larger screens
    "@media (max-width: 600px)": {
      width: "100%", // Mobile view
    },
  }}
>
        <Box
          onClick={() => handleCouponClick('COUPON10')}
          sx={{
            width: { xs: '100%', sm: '48%' },
            minHeight: '110px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '10px',
            border: '0.5px solid gray',
            boxShadow: '0px 7.39px 14.78px -2.46px #919EAB1F',
            cursor: 'pointer',
            borderRadius: '10px',
            boxSizing: 'border-box',
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
              marginBottom: '20px',
            }}
          >
            Get 10% off on Minimum order value Rs 1499
          </Typography>
          <Box
  sx={{
   
    border: '2px dashed #E1E1E1', // Dashed border matching the text color
   
    padding: '8px 16px', // Padding for inner spacing
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    margin: '0 auto', // Center the box horizontally
    marginTop: '10px', // Add some top spacing
    "@media (max-width: 600px)": {
      marginLeft: 'auto', // Centering in mobile view
      marginRight: 'auto',
    },
  }}
>
<Typography
    variant="h6"
    sx={{
      fontSize: '16px',
      fontWeight: 600,
      textAlign: 'center',
      color: '#FF944E',
      display: 'flex',
      alignItems: 'center',
    }}
  >
            Coupon 10% OFF <ContentCopyIcon sx={{ color: "#FF944E" ,height:"17px"}} /> 
          </Typography>
          </Box>
        </Box>

        <Box
          onClick={() => handleCouponClick('COUPON20')}
          sx={{
            width: { xs: '100%', sm: '48%' },
            minHeight: '110px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '10px',
            border: '0.5px solid gray',
            boxShadow: '0px 7.39px 14.78px -2.46px #919EAB1F',
            cursor: 'pointer',
            borderRadius: '10px',
            boxSizing: 'border-box',
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
              marginBottom: '20px',
            }}
          >
            Get 20% off on Minimum order value Rs 1499
          </Typography>
          <Box
  sx={{
   
    border: '2px dashed #E1E1E1', // Dashed border matching the text color
   
    padding: '8px 16px', // Padding for inner spacing
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    margin: '0 auto', // Center the box horizontally
    marginTop: '10px', // Add some top spacing
    "@media (max-width: 600px)": {
      marginLeft: 'auto', // Centering in mobile view
      marginRight: 'auto',
    },
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontSize: '16px',
      fontWeight: 600,
      textAlign: 'center',
      color: '#FF944E',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    Coupon 20% OFF 
    <ContentCopyIcon sx={{ color: "#FF944E", height: "17px", marginLeft: "4px" }} />
  </Typography>
</Box>

        </Box>
      </Box>

      {/* Bank Offer Section */}
      <Box sx={{ width: '100%', padding: '10px' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontWeight: 600,
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          Bank offers
        </Typography>
        <Typography
  variant="body2"
  sx={{
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 600,
    textAlign: 'left',
    display: 'flex',
    letterSpacing: "0.2px",
    alignItems: 'center',
  }}
>
  <Discount sx={{ marginRight: '8px', color: 'gray', width: '12.18px', height: '12.18px' }} />
  Bank Offer 5% Cashback on Axis Bank Credit Card&nbsp;
  <Link
    href="https://your-terms-and-conditions-link.com"
    sx={{
      color: '#455F76',
      marginLeft: '4px', // Add margin to create space between the text and link
    }}
    target="_blank"
  >
    T&C
  </Link>
</Typography>

<Typography
  variant="body2"
  sx={{
    marginTop: '10px',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 600,
    textAlign: 'left',
    display: 'flex',
    letterSpacing: "0.2px",
    alignItems: 'center',
  }}
>
  <Discount sx={{ marginRight: '8px', color: 'gray', width: '12.18px', height: '12.18px' }} />
  Bank Offer 15% Cashback on EMI purchase with any Bank Credit Card&nbsp;
  <Link
    href="https://your-terms-and-conditions-link.com"
    sx={{
      color: '#455F76',
      marginLeft: '4px', // Add margin to create space between the text and link
    }}
    target="_blank"
  >
    T&C
  </Link>
</Typography>

      </Box>

      {/* Horizontal Line */}
      <hr
        style={{
          width: '100%',
          maxWidth: '896px',
          margin: '16px auto',
          border: '0',
          borderTop: '2px solid #BABABA',
        }}
      />
    </Box>
  );
};

export default ApplyDiscount;
