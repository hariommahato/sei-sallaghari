import React from "react";

const SeiMap = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "2rem",
        
      }}
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56519.59691519243!2d85.25176048278803!3d27.70262277356221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a856f19aef%3A0x9ddce90cad32122e!2sSEI!5e0!3m2!1sen!2snp!4v1679112039576!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            height:"20vmax",
            width:"100%"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default SeiMap;
