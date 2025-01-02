import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";
import RegisterShopPage from "./pages/RegisterShopPage";
import CheckOut from "./pages/Checkout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  // Function to handle total price updates
  const handleUpdateTotalPrice = (newPrice) => {
    console.log("Updated Total Price:", newPrice);
    // You can perform any necessary state updates or logic here
  };

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Default route to render Test component */}
        <Route path="" element={<Test />} />
      </Route>

      {/* Route for Register Shop Page */}
      <Route path="/register-shop" element={<RegisterShopPage />} />

      {/* Pass the handleUpdateTotalPrice function as a prop to CheckOut */}
      <Route
        path="/checkout"
        element={<CheckOut onUpdateTotalPrice={handleUpdateTotalPrice} />}
      />
    </Routes>
  );
}

export default App;
