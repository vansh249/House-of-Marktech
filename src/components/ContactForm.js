import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      type: "loading",
      message: "Sending your message...",
    });

    // Mock API call
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <p>123 Business Avenue, Tech City, 10001</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <p>contact@yourcompany.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {formStatus && (
            <div className={`form-status ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
