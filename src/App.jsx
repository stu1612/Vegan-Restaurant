// npm
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

// By the way the folder with the pages should be called pages/ not screens/
export default function App() {
  return (
    <>
      {/* tags -1 */}
      {/* No need to wrap the navbar in a div, this class nav-container should be inside the component */}
      {/* this can be atribute to the complexity of the component tree, making it hard to spot refactorings like this one */}
      <div className="nav-container">
        <Navbar />
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* You can skip the hardcoded routes -1 */}
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
