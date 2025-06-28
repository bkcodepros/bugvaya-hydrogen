import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    hcaptcha: false,
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {  // <-- point to your serverless endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('success');
      // optionally reset form:
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        hcaptcha: false,
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="contact-container">
      <div class="faq-bnr"> <h1 className="faq-title">Contact Us</h1> <div class="breadcrumb"><ul><li>Home</li><li>&bull;</li><li>Faq</li></ul></div></div> 
      <div class="get-started">
        <div class="cont-wrap">
            <h2>Get in touch with us. We’re here to assist you.</h2>
            <p className="lead">
                Feel free to reach out at any time. We’re here to help with orders, product
                questions, and any feedback you may have.
            </p>
        </div>
        <div class="scl-icon">
            <ul>
                <li><a href="#"><img src="/images/fb.svg" alt="" /></a></li>
                <li><a href="#"><img src="/images/insta.svg" alt="" /></a></li>
                <li><a href="#"><img src="/images/twitter.svg" alt="" /></a></li>

            </ul>

        </div>
        
      </div>
      

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="field-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="phone">Phone Number (optional)</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label htmlFor="topic">Topic</label>
          <input
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group full-width">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group full-width captcha">
          <input
            id="hcaptcha"
            type="checkbox"
            name="hcaptcha"
            checked={formData.hcaptcha}
            onChange={handleChange}
            required
          />
          <label htmlFor="hcaptcha">
            This site is protected by hCaptcha and the hCaptcha{' '}
            <a href="https://www.hcaptcha.com/privacy">Privacy Policy</a> and{' '}
            <a href="https://www.hcaptcha.com/terms">Terms of Service</a> apply.
          </label>
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Leave us a Message →'}
        </button>

        {status === 'success' && (
          <p className="success">Thanks! We’ll be in touch shortly.</p>
        )}
        {status === 'error' && (
          <p className="error">
            Sorry—something went wrong. Please try again later.
          </p>
        )}
      </form>

      <section className="contact-info">
        
        
        <div className="info-columns">
          <div class="always-assist"><h5>Contact Info</h5><h2>We are always happy to assist you</h2></div>
          <div>
            <h3>Email Address</h3>
            <p>help@info.com</p>
            <small>Assistance hours: Mon–Fri 6 am to 8 pm EST</small>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>(808) 998-34256</p>
            <small>Assistance hours: Mon–Fri 6 am to 8 pm EST</small>
          </div>
        </div>
      </section>
    </div>
);
}