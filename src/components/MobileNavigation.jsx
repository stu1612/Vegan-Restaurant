// npm
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
// components
import NavLinks from "./NavLinks";
// images
import logo from "../assets/images/app_images/logo.png";

export default function MobileNavigation({
  toggleMobileNavigation,
  isMobileOpen,
  setStateToFalse,
}) {
  const isMobile = true;

  const burgerIcon = (
    <BiMenu
      className="burger"
      size={33}
      color="white"
      onClick={toggleMobileNavigation}
    />
  );

  const closedBurgerIcon = (
    <BiMenuAltRight
      className="burger"
      size={33}
      onClick={toggleMobileNavigation}
    />
  );

  function closeMobileNavigation() {
    isMobile && setStateToFalse();
  }

  return (
    <div className="nav mobile-navigation">
      <Link to="/" className="logo">
        <img
          src={logo}
          alt={`Rooted ${logo}`}
          onClick={closeMobileNavigation}
        />
      </Link>
      {isMobileOpen && (
        <NavLinks closeMobileNavigation={closeMobileNavigation} />
      )}
      {isMobileOpen ? closedBurgerIcon : burgerIcon}
    </div>
  );
}
