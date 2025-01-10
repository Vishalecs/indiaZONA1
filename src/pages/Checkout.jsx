import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import CheckoutComponent from '../components/Checkout/Heading'; // Header component
import DeliveryAddress from '../components/Checkout/DeliveryAddress'; // DeliveryAddress component
import CouponOffers from '../components/Checkout/AvailableOffers'; // CouponOffers component
import Payment from '../components/Checkout/PaymentOptions'; // Payment component
import OrderSummary from '../components/Checkout/OrderSummary'; // OrderSummary component

const CheckoutPage = () => {
  const [discount, setDiscount] = useState(0);

  const orderDetails = {
    productTotal: 13494.94,
    deliveryCharge: 0.00,
    taxes: 134.56,
    discountApplied: discount,
    total: 13494.94 + 134.56 - discount
  };

  const applyDiscount = (discountCode) => {
    if (discountCode === 'COUPON10') {
      setDiscount(1349.49); // Applying 10% Discount
    } else if (discountCode === 'COUPON20') {
      setDiscount(2698.99); // Applying 20% Discount
    } else {
      alert('Invalid discount code');
    }
  };
  return (
    <>
      <CheckoutComponent />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: "linear-gradient(to bottom,#C7DEEF, #ffffff)"

        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: '1400px',
            height: 'auto',
            backgroundColor: '#fff',
            padding: '16px',
            
            marginTop: '40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '16px',
            }}
          >
            {/* Left Section */}
            <Box sx={{ flex: 1 }}>
              <DeliveryAddress />
              <CouponOffers onApplyDiscount={applyDiscount} />
              <Payment />
            </Box>

            {/* Right Section */}
            <Box sx={{ flex: 0.4 }}>
            <OrderSummary
            productTotal={orderDetails.productTotal}
            deliveryCharge={orderDetails.deliveryCharge}
            taxes={orderDetails.taxes}
            discountApplied={orderDetails.discountApplied}
            total={orderDetails.total}
          />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CheckoutPage;
