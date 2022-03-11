import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// screen
import Index from "./screens/Index";
import Dishes from "./screens/Dishes";
import Drinks from "./screens/Drinks";
import Desserts from "./screens/Desserts";
import Product from "./screens/Product";
import Contact from "./screens/Contact";
import PageNotFound from "./screens/404";
// components
import Navbar from "./components/Navbar";
// data
import menuData from "./data/db.json";
// styles
import "./styles/style.css";
// images
import logo from "./assets/images/app_images/logo.png";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(menuData);
  }, []);

  return (
    <Router>
      <div className="nav-container">
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt={`Rooted ${logo}`} />
          </Link>
          <Navbar />
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dishes" element={<Dishes data={data} />} />
        <Route path="/drinks" element={<Drinks data={data} />} />
        <Route path="/desserts" element={<Desserts data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<Product data={data} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
