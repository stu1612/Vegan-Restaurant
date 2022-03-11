import { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsMobileOpen(!isMobileOpen);
  }

  function setStateToFalse() {
    setIsMobileOpen(false);
  }
  return (
    <nav>
      <Navigation />
      <MobileNavigation
        toggleMobileNavigation={toggleMobileNavigation}
        isMobileOpen={isMobileOpen}
        setStateToFalse={setStateToFalse}
      />
    </nav>
  );
}
