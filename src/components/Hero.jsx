import React from "react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-img" />
        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fafafa"
              fillOpacity="1"
              d="M0,64L80,106.7C160,149,320,235,480,240C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
