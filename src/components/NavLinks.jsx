// npm
import { Link } from "react-router-dom";

export default function NavLinks({ closeMobileNavigation }) {
  return (
    <ul className="links">
      <Link to="/dishes" className="link" onClick={closeMobileNavigation}>
        Dishes
      </Link>
      <Link to="/drinks" className="link" onClick={closeMobileNavigation}>
        Drinks
      </Link>
      <Link to="/desserts" className="link" onClick={closeMobileNavigation}>
        Desserts
      </Link>
      <Link to="/contact" className="link" onClick={closeMobileNavigation}>
        Contact
      </Link>
    </ul>
  );
}
