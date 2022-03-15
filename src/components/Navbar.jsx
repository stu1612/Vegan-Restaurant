// npm
import { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsMobileOpen(!isMobileOpen);
  }

  // Why this function exist? Can you just pass false to MobileNavigation by default?
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
