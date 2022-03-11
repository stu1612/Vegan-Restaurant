import React from "react";

export default function OpeningHours({ mobile }) {
  return (
    <div className={`opening-hours ${mobile ? "mobile" : "desktop"}`}>
      <h3>Opening Hours</h3>
      <span>Monday to Friday 11.00 - 21.00 </span>
      <span>Saturday 12.00 - 22.00 </span>
      <span>Sunday CLOSED </span>
    </div>
  );
}
