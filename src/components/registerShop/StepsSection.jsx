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
        position: "relative", // Ensures proper alignment for positioning
      }}
    >
      {/* Title Text Above the Steps */}
      <Typography
        sx={{
          width: "592px",
          height: "38px",
          gap: "0px",
          opacity: 1,
          fontFamily: "Montserrat",
          fontSize: "28px", // Adjust as needed
          fontWeight: 800,
          lineHeight: "38px",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          margin: "0 auto 20px auto", // Centers the text and adds margin below
          position: "relative",
          top: "-20px", // Moves the text slightly upward
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          {/* Horizontal Connecting Line */}
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
                "PAN Card, shop registration document, and shop owner authentication proof are required in this section.",
            },
            {
              number: "3",
              title: "GST Details",
              description:
                "GST Document or Enrollments Number document required in this section.",
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
