import React, { Component } from "react";
import "./ComponentsStyles.css";
import AboutBanner from "./automobile.jpg";
const Aboutus = () => {
  return (
    <div className="about-us">
      <h2>About us</h2>
      <div className="about-us-content">
        <h2>We are the leders on the Automobile Industry</h2>
        <p>
          Websites are a vital part of automotive success. Whether your goal is
          to gain online traffic for car sales or to increase your parts sales
          and RO count, a website is the first impression a potential customer
          gets when searching for your goods or services.
        </p>
      </div>
      <img className="about-us-image" src={AboutBanner} alt="automobile.jpg" />
    </div>
  );
};
export default Aboutus;
