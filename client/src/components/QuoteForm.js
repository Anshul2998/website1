import React, { useState } from "react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quoteSent, setQuoteSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming your server responds with a JSON object containing a 'success' property
      const responseData = await response.json();

      if (responseData.success) {
        setQuoteSent(true);
      } else {
        setError("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      setError(
        "There was an error submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <h3>Get a quote</h3>
      <p>
        Submit your enquiry below and our team will get in touch with you
        shortly.
      </p>
      <div className="row gy-3">
        <div className="col-md-12">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            className="form-control"
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={`col-md-12 text-center ${quoteSent ? "show" : ""}`}>
          {loading && <div className="loading">Loading</div>}
          {error && <div className="error-message">{error}</div>}
          <div className={`sent-message ${quoteSent ? "show" : ""}`}>
            Your quote request has been sent successfully. Thank you!
          </div>
          <button type="submit">Get a quote</button>
        </div>
      </div>
    </form>
  );
};

export default QuoteForm;
