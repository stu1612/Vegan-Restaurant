import { Routes, Route, Navigate } from "react-router-dom";
// screen
import Index from "./screens/Index";
import Dishes from "./screens/Dishes";
import Drinks from "./screens/Drinks";
import Desserts from "./screens/Desserts";
import Product from "./screens/Product";
import Contact from "./screens/Contact";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// styles
import "./styles/style.css";

export default function App() {
  return (
    <>
      <div className="nav-container">
        <Navbar />
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}
