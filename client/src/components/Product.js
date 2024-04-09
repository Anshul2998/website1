import React from "react";
import { ProdCard } from "./ProdCard";
import { Link } from "react-router-dom";
import prod1 from "../images/pre-engineered-metal-buildings.jpg";
import prod2 from "../images/bridge-fabrication-services.jpg";
import prod3 from "../images/img/download (41).jpg";
export const Product = () => {
  return (
    <>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Products</h2>
          </div>
          <div className="product-container">
            <ProdCard
              Prod_img={prod1}
              Prod_name="Pre-engineered Building(PEBs) frame"
            />
            <ProdCard Prod_img={prod2} Prod_name="Railway Bridges" />
            <ProdCard Prod_img={prod3} Prod_name="Profile Sheets" />
          </div>
          <div className="info d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="200"
                    to="/moreprod"
                    className="btn-get-started"
                  >
                    Load more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
