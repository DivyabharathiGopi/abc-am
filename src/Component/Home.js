import React, { Component } from "react";

import "./ComponentsStyles.css";
import Banner from "./auto-mobile.jpg";

const Home = () => {
  return (
    <div className="home-banner">
      <h1>ABC Automobiles</h1>
      <img src={Banner} alt="auto-mobile.jpg" width="100%" />
    </div>
  );
};
export default Home;
