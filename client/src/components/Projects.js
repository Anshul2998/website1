import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import background from "../images/1398718_248674671952814_1874130314_o.jpg";
import { Link } from "react-router-dom";
import { ProdCard } from "./ProdCard";

export const Projects = (props) => {
  return (
    <>
      <Header />
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${background})` }}
          // style="background-image: url('assets/img/breadcrumbs-bg.jpg');"
        >
          <div
            className="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Clients</h2>
            <ol>
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>Products</li>
            </ol>
          </div>
        </div>
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Projects Done By Us</h2>
            </div>
            <div className="row row-cols-3 row-cols-md-3 g-4">
              <ProdCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
