import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Modal,
} from "@mui/material";

const DeliveryAddress = () => {
  const [showForm, setShowForm] = useState(false);
  
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track index for editing
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  
  const [address, setAddress] = useState({
    name: '',
    mobile: '',
    pincode: '',
    locality: '',
    areaStreet: '',
    city: '',
    state: '',
    landmark: '',
    Altmobile: '',
    addressType: '', // Default to an empty string
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (Object.keys(address).length > 0) {
      if (editIndex !== null) {
        // Update existing address
        setAddresses((prev) =>
          prev.map((addr, index) => (index === editIndex ? address : addr))
        );
      } else {
        // Add new address
        setAddresses((prev) => [...prev, address]);
      }
    }
    setShowForm(false);
    setAddress({});
    setEditIndex(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setAddress({});
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setAddress(addresses[index]); // Load the selected address into the form
    setEditIndex(index); // Set the edit index
    setShowForm(true); // Open the form modal
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
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Montserrat",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "16px",
          color: "#455F76",
          "@media (max-width: 600px)": {
            fontSize: "20px",
          },
        }}
      >
        Select Delivery Address
      </Typography>
    
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <Box
            key={index}
            sx={{
              padding: "16px",
              border: "1px solid #BABABA",
              borderRadius: "8px",
              marginBottom: "8px",
              backgroundColor: "border: 1px solid var(--iz-grey-light, #BABABA)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                "@media (max-width: 600px max-height: auto)": {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  "@media (max-width: 600px)": {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                }}
              >
                {/* Updated Radio Button */}
                <Radio
                  checked={selectedAddressIndex === index}
                  onChange={() => setSelectedAddressIndex(index)}
                />
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {address.name}
                </Typography>
                {address.addressType && (
  <Box
    sx={{
      width: "56px",
      height: "25px",
      position: "relative",
      
      padding: "4px 6px",
      gap: "10px",
      borderRadius: "3px 3px 3px 3px",
      border: "0.5px solid #455F76", // Add border color
      opacity: 1, // Make it visible
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "17.07px",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
      color: "#455F76",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {address.addressType}
  </Box>
)}

                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  {address.mobile}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#007BFF",
                  cursor: "pointer",
                  "@media (max-width: 600px)": {
                    marginLeft: "8px",
                  },
                }}
                onClick={() => handleEdit(index)}
              >
                Edit
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginLeft: "32px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#656565",
                fontWeight: "500",
                paddingLeft: "16px",
                "@media (max-width: 600px)": {
                  marginLeft: "0",
                },
              }}
            >
              {`${address.locality }, ${address.areaStreet}, ${address.city}, ${address.state}, ${address.pincode}, ${address.Altmobile}`}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography>No addresses added yet.</Typography>
      )}
    
    
<a
  href="#"
  onClick={() => setShowForm(true)}
  style={{
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '19.5px',
    textAlign: 'left',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    cursor: 'pointer',
    color:  '#FF944E',

  }}
>
  Add New Delivery Address
</a>
<hr
  style={{
    width: '100%',  // Make the line take up 100% of the width of its container
    maxWidth: '896px',  // Limit the width to 896px on larger screens
    margin: '16px auto',  // Center the line horizontally and add vertical spacing
    border: '0',  // Remove default border style
    borderTop: '2px solid #BABABA',  // Set color and thickness for the horizontal line
  }}
/>



<Modal
  open={showForm}
  onClose={handleCancel}
  aria-labelledby="add-address-modal"
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "24px",
      width: "90%",
      maxWidth: "848px",
      maxHeight: "650px", // Limit modal height to viewport height
      overflowY: "auto", // Enable scrolling for overflow
      boxShadow: 24,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: "600",
        marginBottom: "16px",
        textAlign: "center",
      }}
    >
      {editIndex !== null
        ? "Edit Delivery Address"
        : "Add New Delivery Address"}
    </Typography>

    {/* Address Form */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        height: "750px",
        "@media (max-width: 600px)": {
          gridTemplateColumns: "1fr",
        },
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={address.name || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Mobile Number"
        name="mobile"
        value={address.mobile || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Pincode"
        name="pincode"
        value={address.pincode || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Locality"
        name="locality"
        value={address.locality || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Area & Street"
        name="areaStreet"
        value={address.areaStreet || ""}
        onChange={handleInputChange}
        fullWidth
        sx={{
          gridColumn: "1 / -1", // Spans full row
          "& .MuiInputBase-root": {
            height: "76px",
          },
        }}
      />
      <TextField
        label="City"
        name="city"
        value={address.city || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={address.state || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Landmark"
        name="landmark"
        value={address.landmark || ""}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Alternate Mobile"
        name="Altmobile"
        value={address.Altmobile || ""}
        onChange={handleInputChange}
        fullWidth
      />
    </Box>

    <FormControl
 
>
  <Typography
    sx={{
      fontFamily: "Montserrat",
      fontSize: "16px",
      color: "#A1A1A1",
      fontWeight: "500",
      marginBottom: "8px",
    }}
  >
    Address Type
  </Typography>
  <RadioGroup
    name="delivery-options"
    value={address.addressType || ""}
    onChange={(e) =>
      setAddress((prev) => ({
        ...prev,
        addressType: e.target.value,
      }))
    }
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      "@media (max-width: 600px)": {
        flexDirection: "column",
      },
    }}
  >
    <FormControlLabel
      value="home"
      control={<Radio />}
      label={
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "19px",
              color: "#212121",
              fontWeight: "600",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              color: "#B8B8B8",
              fontWeight: "400",
            }}
          >
            Home deliveries
          </Typography>
        </Box>
      }
    />
    <FormControlLabel
      value="work"
      control={<Radio />}
      label={
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "19px",
              color: "#212121",
              fontWeight: "600",
            }}
          >
            Work
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              color: "#B8B8B8",
              fontWeight: "400",
            }}
          >
            Office deliveries
          </Typography>
        </Box>
      }
    />
  </RadioGroup>
  
</FormControl>



    {/* Action Buttons */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "16px",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          gap: "12px",
        },
      }}
    >
      <Button
        variant="outlined"
        onClick={handleCancel}
        sx={{
          width: "250px",
          height: "56px",
          fontFamily: 'Montserrat',
          fontWeight:600,
          fontSize: '20px',
          "@media (max-width: 600px)": {
                  width: "100%",
                },
        }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        onClick={handleSave}
        sx={{
          width: "250px",
          height: "56px",
          fontFamily: 'Montserrat',
          backgroundColor: "#FF944E",
          fontFamily: 'Montserrat',
          fontWeight:600,
          fontSize: '20px',
          "@media (max-width: 600px)": {
                  width: "100%",
                },
        }}
      >
        Save & Deliver Here
      </Button>
    </Box>
  </Box>
</Modal>

    </Box>
  );
};

export default DeliveryAddress;
