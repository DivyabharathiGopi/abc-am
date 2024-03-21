import React, { Component } from "react";
import "./ComponentsStyles.css";
import Car1 from "./img/car1.jpg";
import Car2 from "./img/car2.jpg";
import Car3 from "./img/car3.jpg";
import Car4 from "./img/car4.jpg";
const Vehicles = () => {
  return (
    <div>
      <h2>Vehicle</h2>
      <div className="vehicle">
        <img src={Car1} alt="car1" />
        <img src={Car2} alt="car2" />
        <img src={Car3} alt="car3" />
        <img src={Car4} alt="car4" />
      </div>
    </div>
  );
};
export default Vehicles;
