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
  const [address, setAddress] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track index for editing

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
          padding: "16px",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily:'Montserrat',
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "16px",
          color:'#455F76',
          
          "@media (max-width: 600px)": {
            fontSize: "18px",
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
    "@media (max-width: 600px)": {
      flexDirection: "row", // Ensure it stays in a row even in mobile view
      alignItems: "center", // Align all items to the center on mobile
      justifyContent: "space-between", // Maintain spacing between elements in mobile
    },
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      "@media (max-width: 600px)": {
        flexDirection: "row", // Keep elements in a row in mobile view
        alignItems: "center", // Align the elements in the center for better mobile display
      },
    }}
  >
    {/* Radio Button */}
    <Radio />
    
    {/* Name */}
    <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
      {address.name}
    </Typography>
    
    {/* Address Type Button */}
    <Button
      variant="outlined"
      sx={{
        fontSize: "14px",
        fontWeight: "500",
        color: "#555",
        textTransform: "none",
      }}
      disabled
    >
      {address.addressType}
    </Button>
    
    {/* Mobile Number */}
    <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
      {address.mobile}
    </Typography>
  </Box>

  {/* Edit Link - Positioned on the same line */}
  <Typography
    sx={{
      fontSize: "14px",
      fontWeight: "500",
      color: "#007BFF",
      cursor: "pointer",
      "@media (max-width: 600px)": {
        marginLeft: "8px", // Add some space between mobile number and Edit link
      },
    }}
    onClick={() => handleEdit(index)}
  >
    Edit
  </Typography>
</Box>

            <Typography
              sx={{
                fontFamily:'Montserrat',
                marginLeft: "32px",
                fontSize: "16px",
                lineHeight: '24px',
                color: "#656565",
                fontWeight: "500",
                paddingLeft:'16px',
                "@media (max-width: 600px)": {
                  marginLeft: "0",
                },
              }}
            >
              {`${address.locality}, ${address.areaStreet}, ${address.city}, ${address.state}, ${address.pincode}, ${address.Altmobile}`}
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
            {editIndex !== null ? "Edit Delivery Address" : "Add New Delivery Address"}
          </Typography>

          {/* Address form */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
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
    gridColumn: "1 / -1",
    "& .MuiInputBase-root": {
      height: "76px",  // Adjust this value as needed
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

          <FormControl>
          <Typography
  style={{
    fontFamily: 'Montserrat',
    fontSize: '16px',
    color: 'var(--gark-grey, #A1A1A1)',

    fontWeight: 500,
    lineHeight: '19.84px',
    letterSpacing: '-0.03em',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
  }}
>
  Address Type
</Typography>

  
<RadioGroup
              name="delivery-options"
              value={address.addressType || "home"}
              onChange={(e) =>
                setAddress((prev) => ({
                  ...prev,
                  addressType: e.target.value,
                }))
              }
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <FormControlLabel
                  value="home"
                  control={<Radio />}
                  label={
                    <div>
                      <Typography>Home</Typography>
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
                    </div>
                  }
                />
                <FormControlLabel
                  value="work"
                  control={<Radio />}
                  label={
                    <div>
                      <Typography>Work</Typography>
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
                    </div>
                  }
                />
              </div>
            </RadioGroup>
</FormControl>


<Box
  sx={{
    display: "flex",
    justifyContent: "center", // Center the buttons horizontally
    gap: "20px", // Set 20px gap between the buttons
    marginTop: "16px",
    "@media (max-width: 600px)": {
      flexDirection: "row", // Stack buttons in a column on small screens
      gap: "12px", // Adjust gap for mobile view
    },
  }}
>
  <Button
    variant="outlined"
    onClick={handleCancel}
    sx={{
      width: "250px", // Decreased width for Cancel button
      height: "56px",
      borderRadius: "5px 0px 0px 0px",
      border: "1px solid #455F76",
      opacity: 1,
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "-0.01em",
      textAlign: "center",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
    }}
  >
    Cancel
  </Button>

  <Button
    variant="contained"
    onClick={handleSave}
    sx={{
      width: "250px", // Set width for Save button (same width as Cancel button)
      height: "56px",
      borderRadius: "5px 0px 0px 0px",
      backgroundColor: "#FF944E",
      opacity: 1,
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "-0.01em",
      textAlign: "center",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
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
