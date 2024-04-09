import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/productcard.css";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Getstarted } from "./components/Getstarted";
import { MoreProd } from "./components/MoreProd";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/project" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/moreprod" element={<MoreProd />} />
          <Route exact path="/getstarted" element={<Getstarted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
