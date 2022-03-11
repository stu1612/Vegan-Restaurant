import { Link } from "react-router-dom";

export default function NavLinks(props) {
  return (
    <ul className="ul-links">
      <Link
        to="/dishes"
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Dishes
      </Link>
      <Link
        to="/drinks"
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Drinks
      </Link>
      <Link
        to="/desserts"
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Desserts
      </Link>
      <Link
        to="/contact"
        className="link"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        Contact
      </Link>
    </ul>
  );
}
