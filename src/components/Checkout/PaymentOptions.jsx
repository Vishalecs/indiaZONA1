import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Link,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardType, setCardType] = useState("debit");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowCardForm(false); // Reset the card form visibility when changing payment option
  };

  const handleCardTypeChange = (type) => {
    setCardType(type);
  };

  const handleAddCardClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowCardForm(true); // Show the card form
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "898px" }, // Responsive maxWidth for smaller screens
        backgroundColor: "#fff",
        fontFamily: "Montserrat",
        padding: { xs: "8px", sm: "16px" }, // Adjust padding for different screen sizes
        "@media (max-width: 600px)": {
          padding: "8px",
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Montserrat",
          fontSize: { xs: "18px", sm: "22px" }, // Font size adjustment
          fontWeight: "600",
          marginBottom: "16px",
          color: "#455F76",
          "@media (max-width: 600px)": {
            textAlign: "left",
          },
        }}
      >
        Payment
      </Typography>

      {/* Radio Group */}
      <RadioGroup
        value={selectedOption}
        onChange={handleOptionChange}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "12px", sm: "16px" }, // Adjust spacing for different screen sizes
        }}
      >
        <FormControlLabel
          value="upi"
          control={<Radio />}
          label="UPI"
          sx={{
            width: "100%", // Full width for small screens
            height: "74px",
            padding: "15px 15px 15px 15px",
            borderRadius: "5px 5px 5px 5px",
            border: "1px solid #BABABA",
            backgroundColor: selectedOption === "upi" ? "#f5f5f5" : "transparent",
          }}
        />
        {/* Conditional Forms */}
      {selectedOption === "upi" && (
        <Box
          sx={{
            width: "100%", // Full width for smaller screens
            height: "120px",
            marginTop: "2px",
            marginLeft: "-10px",
            border: "1px solid var(--iz-grey-light, #BABABA)",
            borderRadius: "5px 5px 5px 5px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              borderBottom: "1px solid #BABABA",
              
            }}
          >
            <input
              type="text"
              placeholder="Enter your UPI ID"
              style={{
                width: "calc(100% - 60px)", // Reserve space for the Verify link
                border: "none",
                outline: "none",
                fontSize: "16px",
                padding: "5px 0",
              }}
            />
            <Link
              href="#"
              underline="always"
              sx={{
                color: "#1976d2",
                fontSize: "14px",
                fontWeight: "500",
                position: "absolute",
                right: "0",
              }}
            >
              Verify
            </Link>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6b6b6b",
              marginTop: "8px",
            }}
          >
            UPI ID is in the format of yourname@bankname or yourmobile@bankname
          </Typography>
        </Box>
      )}

        <FormControlLabel
          value="credit"
          control={<Radio />}
          label="Credit/Debit Card"
          sx={{
            width: "100%", // Full width for small screens
            height: "74px",
            padding: "15px 0 0 0",
            borderRadius: "5px 5px 5px 5px",
            border: "1px solid #BABABA",
            backgroundColor:
              selectedOption === "credit" ? "#f5f5f5" : "transparent",
          }}
        />
        
      {selectedOption === "credit" && !showCardForm && (
        <Box
          sx={{
            width: "100%", // Full width for smaller screens
            height: "98px",
            marginTop: "2px",
            border: "1px solid var(--iz-grey-light, #BABABA)",
            borderRadius: "5px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
            marginLeft: "-10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "10px",
              color: "#455F76",
            }}
          >
            No card is listed. Please add a card to continue with this option.
          </Typography>
          <Link
            href="#"
            underline="always"
            onClick={handleAddCardClick}
            sx={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "500",
              textDecoration: "underline",
              color: "#FF944E",
            }}
          >
            Add Debit/Credit Card
          </Link>
        </Box>
      )}

{showCardForm && (
  <Box
    sx={{
      width: "866px", // Retain desktop width
      height: "auto",
      padding: "10px",
      marginTop: "2px",
      
      marginLeft: "-10px",
     
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: "10px",
      borderRadius: "5px",
      border: "1px solid var(--iz-grey-light, #BABABA)",
      boxSizing: "border-box",
      "@media (max-width: 900px)": {
        width: "100%", // Adjust width for smaller screens
        marginLeft: "-10px", // Remove negative margin on mobile
        padding: "15px", // Add padding for better spacing
      },
    }}
  >
    {/* Links to Switch Between Forms */}
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        marginBottom: "10px",
        "@media (max-width: 600px)": {
          justifyContent: "center", // Center links on smaller screens
          gap: "15px", // Reduce space between links
        },
      }}
    >
      <Typography
        sx={{
          textDecoration: cardType === "debit" ? "underline" : "none",
          cursor: "pointer",
          fontWeight: cardType === "debit" ? "bold" : "normal",
          color: cardType === "debit" ? "#FF944E" : "#BABABA",
        }}
        onClick={() => handleCardTypeChange("debit")}
      >
        Debit Card
      </Typography>
      <Typography
        sx={{
          textDecoration: cardType === "credit" ? "underline" : "none",
          cursor: "pointer",
          fontWeight: cardType === "credit" ? "bold" : "normal",
          color: cardType === "credit" ? "#FF944E" : "#BABABA",
        }}
        onClick={() => handleCardTypeChange("credit")}
      >
        Credit Card
      </Typography>
    </Box>

    {/* Debit Card Form */}
    {cardType === "debit" && (
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Debit Card Form
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            "@media (max-width: 600px)": {
              flexDirection: "column", // Stack inputs vertically on mobile
              gap: "15px", // Adjust gap for better spacing
            },
          }}
        >
          <TextField fullWidth label="Debit Card Number" variant="standard" />
          <TextField fullWidth label="Debit Card Holder Name" variant="standard" />
          <TextField label="Expiry" variant="standard" sx={{ flex: 1 }} />
          <TextField label="CVV" variant="standard" type="password" sx={{ flex: 1 }} />
        </Box>
      </Box>
    )}

    {/* Credit Card Form */}
    {cardType === "credit" && (
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Credit Card Form
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              gap: "15px",
            },
          }}
        >
          <TextField fullWidth label="Credit Card Number" variant="standard" />
          <TextField fullWidth label="Credit Card Holder Name" variant="standard" />
          <TextField label="Expiry" variant="standard" sx={{ flex: 1 }} />
          <TextField label="CVV" variant="standard" type="password" sx={{ flex: 1 }} />
        </Box>
      </Box>
    )}

    {/* Save Card Checkbox */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        "@media (max-width: 600px)": {
          flexDirection: "column", // Stack elements vertically on mobile
          alignItems: "start",
        },
      }}
    >
      <Checkbox />
      <Typography>Save this card for future transactions</Typography>
    </Box>

    {/* Save Button */}
    <Button
      variant="contained"
      color="primary"
      sx={{
        marginTop: "10px",
        width: "150px",
        "@media (max-width: 600px)": {
          alignSelf: "center", // Center-align button on mobile
          width: "100%", // Make the button take full width
        },
      }}
    >
      Save
    </Button>
  </Box>
)}
        <FormControlLabel
          value="cod"
          control={<Radio />}
          label="Cash on Delivery"
          sx={{
            width: "100%", // Full width for small screens
            height: "74px",
            padding: "15px 0 0 0",
            borderRadius: "5px 5px 5px 5px",
            border: "1px solid #BABABA",
            backgroundColor: selectedOption === "cod" ? "#f5f5f5" : "transparent",
          }}
        />
      </RadioGroup>

      



    </Box>
  );
};

export default PaymentOptions;
