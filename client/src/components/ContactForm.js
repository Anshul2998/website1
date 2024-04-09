import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData.success) {
        setSent(true);
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
      <div className="row gy-4">
        <div className="col-lg-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6 form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className={`col-md-12 text-center ${sent ? "show" : ""}`}>
        {loading && <div className="loading">Loading</div>}
        {error && <div className="error-message">{error}</div>}
        <div className={`sent-message ${sent ? "show" : ""}`}>
          Your message has been sent. Thank you!
        </div>
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
