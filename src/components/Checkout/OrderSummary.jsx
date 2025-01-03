import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button, Modal } from "@mui/material";

// OrderSummary Component
const OrderSummary = ({
  productTotal,
  deliveryCharge,
  taxes,
  discountApplied,
  total,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleContinueShopping = () => {
    // Add logic to navigate to the shopping page or home page
    console.log("Navigating to Continue Shopping...");
    // Example: window.location.href = '/shop';
  };

  const handleTrackOrder = () => {
    // Add logic to navigate to the order tracking page
    console.log("Navigating to Track Order...");
    // Example: window.location.href = '/track-order';
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", sm: "0" }, // Added padding for mobile
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "392px" },
          height: { xs: "auto", sm: "487px" },
          borderRadius: "10px",
          background: "#EEF5FA",
          margin: { xs: "10px auto", sm: "0" },
          padding: { xs: "20px", sm: "0" },
          position: { sm: "relative" }, // Removed absolute positioning
        }}
      >
        <Typography
          sx={{
            marginTop: "20px",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "17.07px",
            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          Order Summary
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "328px",
            height: "108px",
            borderRadius: "10px",
            border: "1px solid #E7E9EB",
            background: "#FFFFFF",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto", // Center align on mobile
            marginRight: "auto", // Center align on mobile
          }}
        >
          <Box
            sx={{
              width: "68px",
              height: "81px",
              backgroundImage: `url('/assets/images/phone.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          />
          <Box sx={{ width: "60%", paddingLeft: "10px" }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "17.07px",
                textAlign: "left",
              }}
            >
              SAMSUNG Galaxy F05 (Twilight Blue, 64 GB) (4 GB RAM)
            </Typography>
            <Typography
              sx={{
                marginTop: "7px",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "17.07px",
                textAlign: "left",
              }}
            >
              ₹ 11,139.33
            </Typography>
          </Box>
        </Box>

        {/* Order Summary Box */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "328px",
            borderRadius: "10px 10px 10px 10px",
            border: "1px solid #E7E9EB",
            background: "#FFFFFF",
            padding: "10px",
            marginLeft: "auto", // Center align on mobile
            marginRight: "auto", // Center align on mobile
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "17.07px",
              textAlign: "left",
              color: "black",
              marginLeft: "12px",
            }}
          >
            Payment Details
          </Typography>
          <hr
            style={{
              width: "100%",
              maxWidth: "896px",
              margin: "8px auto",
              border: "0",
              borderTop: "2px solid #BABABA",
            }}
          />
          <CardContent>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  textAlign: "left",
                  color: "#696969",
                }}
              >
                Order
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                ₹{productTotal.toFixed(2)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  textAlign: "left",
                  color: "#696969",
                }}
              >
                Delivery
              </Typography>
              <Typography variant="body1" color="red">
                ₹{deliveryCharge.toFixed(2)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  textAlign: "left",
                  color: "#696969",
                }}
              >
                Taxes
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                ₹{taxes.toFixed(2)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  textAlign: "left",
                  color: "#696969",
                }}
              >
                Discount
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                -₹{discountApplied.toFixed(2)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "27.5px",
                  textAlign: "left",
                  color: "#455F76",
                }}
              >
                Total:
              </Typography>
              <Typography variant="h5" color="#455F76">
                ₹{total.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>

      <Box
        sx={{
          width: "100%",
          maxWidth: "392px",
          marginTop: "20px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "17.07px",
            color: "#696969",
          }}
        >
          By proceeding with this order, you accept all terms and conditions.
        </Typography>
        <Button
          sx={{
            marginTop: "10px",
            backgroundColor: "#FF944E",
            width: "100%",
            height: "56px",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FF944E",
            },
          }}
          variant="contained"
          onClick={handleButtonClick}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Place your order
          </Typography>
        </Button>

        {/* Modal for Order Confirmation */}
        <Modal
  open={isModalOpen}
  onClose={handleClose}
  aria-labelledby="order-success-title"
  aria-describedby="order-success-description"
>
  <Box
    sx={{
      width: { xs: "90%", sm: "70%", md: "520px" }, // Responsive width
      height: { xs: "auto", md: "402px" }, // Adjust height for smaller screens
      backgroundColor: "#fff",
      borderRadius: "15px",
      padding: { xs: "15px", md: "20px" }, // Adjust padding
      margin: "auto",
      marginTop: { xs: "20%", sm: "15%", md: "7%" }, // Adjust top margin
      boxShadow: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    {/* Add the icon */}
    <img
      src="/assets/images/Group.png" // Replace with the actual path to the uploaded image
      alt="Success Icon"
      style={{
        width: "80px", // Adjusted for smaller screens
        height: "80px",
        marginBottom: "20px",
      }}
    />
    <Typography
      variant="h5"
      sx={{
        fontFamily: "Montserrat",
        fontSize: { xs: "18px", md: "24px" }, // Responsive font size
        fontWeight: 700,
        marginBottom: "16px",
      }}
    >
      Your order has been successfully placed!
    </Typography>

    <Typography
      variant="body1"
      sx={{
        fontFamily: "Montserrat",
        fontSize: { xs: "14px", md: "16px" }, // Responsive font size
        color: "#333",
        marginBottom: "8px",
      }}
    >
      Order ID: <strong>3354-6546-5452</strong>
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Montserrat",
        fontSize: { xs: "14px", md: "16px" }, // Responsive font size
        color: "#333",
        marginBottom: "30px",
      }}
    >
      Expected Delivery: <strong>31st Dec, 2024</strong>
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack buttons on small screens
        gap: "15px", // Add spacing between buttons
        justifyContent: { md: "space-between" },
        alignItems: "center",
        width: "100%",
        padding: { xs: "0", md: "0 50px" }, // Adjust padding
      }}
    >
      <Button
        variant="outlined"
        sx={{
          borderColor: "#FF944E",
          color: "#FF944E",
          fontFamily: "Montserrat",
          fontSize: { xs: "12px", md: "14px" }, // Responsive font size
          fontWeight: 600,
          padding: "10px 20px",
          textTransform: "none",
          "&:hover": {
            borderColor: "#FF944E",
            backgroundColor: "rgba(255, 148, 78, 0.1)",
          },
        }}
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF944E",
          fontFamily: "Montserrat",
          fontSize: { xs: "12px", md: "14px" }, // Responsive font size
          fontWeight: 600,
          padding: "10px 20px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FF944E",
          },
        }}
        onClick={handleTrackOrder}
      >
        Track your Order
      </Button>
    </Box>
  </Box>
</Modal>

      </Box>
    </Box>
  );
};

export default OrderSummary;
