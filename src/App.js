import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";
import RegisterShopPage from "./pages/RegisterShopPage"; // Import Sellers component
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="" element={<Test />} />
         
      </Route>
      <Route path="/register-shop" element={<RegisterShopPage />} />

    </Routes>
  );
}

export default App;
