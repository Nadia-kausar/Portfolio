import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. Send to your existing backend
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        formData
      );

      // 2. If backend successful, also send to FormSubmit
      if (res.data.success) {
        // Send to Gmail via FormSubmit
        await fetch('https://formsubmit.co/ajax/kausarnadia32@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Could not send message. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error.message);
      setStatus('❌ Unable to reach the server. Please try again later.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-cards">

        {/* Info Card */}
        <div className="contact-card info-card">
          <h3>Reach Out</h3>
          <p>Let’s build something great together.</p>
          <p><strong>Open to Collaborations</strong></p>
          <div className="contact-details">
            <p><Mail size={16} className="icon" /> <strong>Email:</strong> kausarnadia32@gmail.com</p>
            <p><Phone size={16} className="icon" /> <strong>Phone:</strong> +92 339 4021996</p>
          </div>
          <div className="social-links">
            <p><strong>Social Links</strong></p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="icon" /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/nadia-kausar-364a2a31b" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} className="icon" /> LinkedIn
            </a>
            <a href="https://github.com/Nadia-kausar" target="_blank" rel="noopener noreferrer">
              <Github size={16} className="icon" /> GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-card form-card">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message..."
            />

            <button type="submit">Send Message</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
