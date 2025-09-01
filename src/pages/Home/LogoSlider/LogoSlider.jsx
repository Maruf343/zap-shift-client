// LogoSlider.jsx
import React from "react";
import Marquee from "react-fast-marquee";

// Import your logos
import logo1 from "../../../assets/brands/logo1.png";
import logo2 from "../../../assets/brands/logo2.png";
import logo3 from "../../../assets/brands/logo3.png";
import logo4 from "../../../assets/brands/logo4.png";
import logo5 from "../../../assets/brands/logo5.png";
import logo6 from "../../../assets/brands/logo6.png";
import logo7 from "../../../assets/brands/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoSlider = () => {
  return (
    <div className="my-20 py-5">
        <h2 className="text-center text-2xl text-blue-950 font-bold mt-5 mb-15">We've helped thousands of sales teams</h2>
      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{ marginRight: "100px" }} 
          >
            <img
              src={logo}
              alt={`Client ${index}`}
              className="h-5 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
