import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
