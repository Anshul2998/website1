import React from "react";
import QuoteForm from "./QuoteForm";

export const Getstarted = () => {
  return (
    <>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-up"
            >
              <div className="content">
                <h3>THE LLOYD WAY</h3>
                <h1>Setting New Standards</h1>
                <p>
                  We have built our reputation on solid professionalism and a
                  winning track record. For more than fifteen years, we have not
                  just been the market leaders – we have also catalysed the
                  industry’s progress.
                  <ul>
                    <li>Solid Expertise</li>
                    <li>Top-of-the-line Product Range</li>
                    <li>Unrivalled Experience</li>
                    <li>Impeccable Track Record</li>
                    <li>Exceptional Performance & Quality Control</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              {/* <form
                action="forms/quote.php"
                method="post"
                className="php-email-form"
              >
                <h3>Get a quote</h3>
                <p>
                  Submit your enquiry below and our team will get in touch with
                  you shortly.
                </p>
                <div className="row gy-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your quote request has been sent successfully. Thank you!
                    </div>

                    <button type="submit">Get a quote</button>
                  </div>
                </div>
              </form> */}
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
