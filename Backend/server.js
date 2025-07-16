import React, { useState } from "react";
import "./Contact.css";
import { Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const url = `${process.env.REACT_APP_API_URL}/contact`;
      const res = await axios.post(url, formData);
      console.log(res.data);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      alert("❌ Message failed to send.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="success-msg">✅ Message sent successfully!</p>}
      </form>

      <div className="contact-icons">
        <p><Mail size={20} /> nadia@example.com</p>
        <p><Phone size={20} /> +92 300 1234567</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
