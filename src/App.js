import react from "react";
import Header from "./components/navbar/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product"
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/banner/banner.jpg"
import women_banner from "./assets/banner/women_banner.avif"
import kids_banner from "./assets/banner/kids_banner.jpg"


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />} />

          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />} />

          <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
