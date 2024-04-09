import React from "react";
import mem1 from "../images/Nilender-Prakash-Punj.jpg";
import mem2 from "../images/Gautam-Punj.jpg";
import mem3 from "../images/Mohit-Khanna.jpg";
import mem4 from "../images/Suneet-P-Munjal.jpg";
export const Vision = () => {
  return (
    <>
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Board Of Directors</h2>
            <p>Our Management Team</p>
          </div>

          <div class="row gy-5">
            <div
              class="col-lg-3 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member-img">
                <img src={mem1} class="img-fluid" alt="" />
              </div>
              <div class="member-info text-center">
                <h4>Nilender Prakash Punj</h4>
                <span>Chairman & Whole Time Director</span>
                <p>
                  “Our mission is to provide PEB services in India comparable to
                  or better than world standards.”
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member-img">
                <img src={mem2} class="img-fluid" alt="" />
              </div>
              <div class="member-info text-center">
                <h4>Gautam Punj</h4>
                <span>Managing Director</span>
                <p>
                  “Energy efficient business processes, products and
                  construction methods are our contribution to nation building.”
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member-img">
                <img src={mem3} class="img-fluid" alt="" />
              </div>
              <div class="member-info text-center">
                <h4>Mohit Khanna</h4>
                <span>Joint Managing Director</span>
                <p>
                  “Our corporate policy of diversified growth ensures service to
                  a wide spectrum of customers in every domain.”
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 member"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="member-img">
                <img src={mem4} class="img-fluid" alt="" />
              </div>
              <div class="member-info text-center">
                <h4>Suneet P. Munjal</h4>
                <span>Director</span>
                <p>
                  “Robust backing of our manufacturing units, wide network of
                  resource base & our nationwide presence in each state gives us
                  clear edge over any of our competitors.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
