import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const BenefitsText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1262px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
          fontWeight: 600,
          lineHeight: "38px",
          marginBottom: "10px",
        }}
      >
        Benefits to Indiazona Sellers
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: 400,
          lineHeight: "26px",
          color: "#A1A1A1",
          marginBottom: "30px",
        }}
      >
        All the benefits of selling on Indiazona are designed to help you reach
        more customers and make it easier to grow your business seamlessly.
      </Typography>

      {/* Benefits Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        {[
          { text: "ZERO Marketing Expense", icon: "📣" },
          { text: "Logistics Management", icon: "🚚" },
          { text: "Vendor Friendly Policies", icon: "🤝" },
          { text: "FAIR Business Opportunity", icon: "📜" },
          { text: "Payments Management", icon: "💳" },
          { text: "Low Platform Charges", icon: "📦" },
        ].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "368px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                backgroundColor: "#EFF8FF",
                border: "1px solid #EFF8FF",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: "39px",
                  height: "39px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                {item.icon}
              </Box>
              {/* Text */}
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: 600,
                  textAlign: "left",
                  color: "#212121",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsText;
