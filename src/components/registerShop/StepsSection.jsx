import React from "react";
import { Box, Typography } from "@mui/material";

const SimpleStepsText = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1262px",
        margin: "50px auto",
        padding: "40px 20px",
        textAlign: "center",
        position: "relative",
        "@media (max-width: 600px)": {
          padding: "20px",
        },
      }}
    >
      {/* Title Text Above the Steps */}
      <Typography
  sx={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: { xs: "20px", sm: "24px", md: "28px" },
    fontWeight: 700,
    lineHeight: "var(--lineheight38)", // Using CSS variable
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    margin: "0 auto 20px auto",
    "@media (max-width: 900px)": {
      fontSize: "24px",
    },
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  }}
>
  Simple steps to register your shop easily
</Typography>


      {/* Step Container */}
      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          background: "#EFF8FF",
          padding: "40px 20px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            padding: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            position: "relative",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/* Connecting Line */}
          <Box
            sx={{
              position: "absolute",
              top: "24px",
              left: "50%",
              width: "calc(90% - 80px)",
              height: "1px",
              background: "#455F76",
              zIndex: 0,
              transform: "translateX(-50%)",
              "@media (max-width: 600px)": {
                display: "none", // Hide the line on mobile
              },
            }}
          />

          {/* Step Details */}
          {[
            {
              number: "1",
              title: "Personal Details",
              description: "Aadhaar card document required in this section",
            },
            {
              number: "2",
              title: "Business Details",
              description:
                "PAN Card, shop registration document, and shop owner authentication proof are required.",
            },
            {
              number: "3",
              title: "GST Details",
              description:
                "GST Document or Enrollment Number document required in this section.",
            },
            {
              number: "4",
              title: "Bank Details",
              description: "Details about bank account are required.",
            },
            {
              number: "5",
              title: "Pick up address",
              description: "Provide the address for product pickup.",
            },
          ].map((step, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                "@media (max-width: 600px)": {
                  marginBottom: "15px",
                },
              }}
            >
              {/* Step Number */}
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#3A5A78",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                {step.number}
              </Box>

              {/* Step Title */}
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "5px",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {step.title}
              </Typography>

              {/* Step Description */}
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#7A8B9A",
                  maxWidth: "200px",
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SimpleStepsText;
