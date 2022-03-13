// npm
import { Link } from "react-router-dom";
// components
import NavLinks from "./NavLinks";
// images
import logo from "../assets/images/app_images/logo.png";

export default function Navigation() {
  return (
    <div className="nav navigation">
      <Link to="/" className="logo">
        <img src={logo} alt={`Rooted ${logo}`} />
      </Link>
      <NavLinks />
    </div>
  );
}
