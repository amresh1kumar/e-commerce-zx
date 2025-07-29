import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product"
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword"
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/banner/banner.jpg"
import women_banner from "./assets/banner/women_banner.avif"
import kids_banner from "./assets/banner/kids_banner.jpg"
import Register from "./pages/Register";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />} />

          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />} />

          <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />} />

          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
