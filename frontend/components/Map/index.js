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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.93906256171016!2d85.40955329145972!3d27.674255205612212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a9090296f47%3A0x1ffea95dbe37cb48!2sSEI%20INSTITUTE!5e0!3m2!1sen!2snp!4v1680254755377!5m2!1sen!2snp"
          style={{
            height: "20vmax",
            width: "100%",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SeiMap;
