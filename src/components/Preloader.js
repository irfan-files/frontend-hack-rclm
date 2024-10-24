import React from "react";
import "./Preloader.css"; // Import the CSS file for styling

const Preloader = ({ animationClass }) => {
  return (
    <div className={`preloader ${animationClass}`}>
      <div className="preloader-content">
        {/* Add your logo here */}
        <img src="/logo512.png" alt="Logo" className="preloader-logo" />
      </div>
    </div>
  );
};

export default Preloader;
