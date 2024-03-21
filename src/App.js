import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Vehicles from "./Component/Vehicles";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
