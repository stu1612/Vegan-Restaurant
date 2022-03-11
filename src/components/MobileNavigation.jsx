import NavLinks from "./NavLinks";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const burgerIcon = (
    <BiMenu className="burger" size={33} onClick={() => setIsOpen(!isOpen)} />
  );

  const closedBurgerIcon = (
    <BiMenuAltRight
      className="burger"
      size={33}
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  function closeMobileMenu() {
    setIsOpen(false);
  }
  return (
    <div className="nav mobile-navigation">
      {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      {isOpen ? closedBurgerIcon : burgerIcon}
    </div>
  );
}
