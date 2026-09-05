import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { VegFilterProvider } from "./context/VegFilterContext";

// Import your components
import RestaurantLanding from "./components/RestaurantLanding";
import MenuPage from "./components/MenuPage";
import V2DishDetail from "./components/V2DishDetail";

// Import your global styles
import "./components/V2Styles.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <VegFilterProvider>
          <Routes>
            {/* Landing page as the default root */}
            <Route path="/" element={<RestaurantLanding />} />
            
            {/* The main v2 menu route */}
            <Route path="/v2" element={<RestaurantLanding />} />
            <Route path="/v2/menu" element={<MenuPage />} />
            
            {/* Dynamic route for individual dish details */}
            <Route path="/v2/dish/:dishId" element={<V2DishDetail />} />
          </Routes>
        </VegFilterProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;