import React from "react";

// good
export default function GoogleMap() {
  return (
    <div className="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.198403188047!2d13.191448015654657!3d55.70292300330572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397c4dd73b257%3A0xfda9ea166a2b6056!2sStortorget%2C%20Lund!5e0!3m2!1sen!2sse!4v1647101096040!5m2!1sen!2sse"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
