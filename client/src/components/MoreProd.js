import React from "react";
import { ProdCard } from "./ProdCard";
import prod1 from "../images/pre-engineered-metal-buildings.jpg";
import prod2 from "../images/bridge-fabrication-services.jpg";
import prod3 from "../images/img/download (41).jpg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import background from "../images/1398718_248674671952814_1874130314_o.jpg";
import { Link } from "react-router-dom";
export const MoreProd = () => {
  return (
    <>
      <Header />
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${background})` }}
          //style={{background-image: url('assets/img/breadcrumbs-bg.jpg');}}
        >
          <div
            className="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>Product</h2>
            <ol>
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>Products</li>
            </ol>
          </div>
        </div>
      </main>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Products</h2>
          </div>
          {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <ProdCard
              Prod_img={prod1}
              Prod_name="Pre-engineered Building(PEBs) frame"
            />
            <ProdCard Prod_img={prod2} Prod_name="Curved PEB frame" />
            <ProdCard Prod_img={prod3} Prod_name="Power Vantilator" />
            <ProdCard Prod_img={prod4} Prod_name="False Ceiling" />
            <ProdCard Prod_img={prod5} Prod_name="Profile Sheet, Panels" />
            <ProdCard Prod_img={prod6} Prod_name="Castellated Beam" />
            <ProdCard Prod_img={prod7} Prod_name="Mezzanine" />
            <ProdCard
              Prod_img={prod8}
              Prod_name="Pre-engineered Building(PEBs) frame"
            />
            <ProdCard
              Prod_img={prod9}
              Prod_name="Pre-engineered Building(PEBs) frame"
            />
            <ProdCard />
          </div> */}
          <div className="product-container">
            <ProdCard
              Prod_img={prod1}
              Prod_name="Pre-engineered Building(PEBs) frame"
            />
            <ProdCard Prod_img={prod2} Prod_name="Railway Bridges" />
            <ProdCard Prod_img={prod3} Prod_name="Profile Sheets" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
