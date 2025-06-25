import React from 'react';
import './NewCollectionSection.css';
export default function SimpleHeroSection() {
  return (
    <div className="container">
    <section
      className="new-collection"
      style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0691/3025/6522/files/new-collec.png')" }}
    >
      <div className="col-text">
        <p className="subtitle">10% off on all cleansers</p>
        <h2 className="subtitle">Get you skin to glow with our new collection</h2>
        <p>
          We sustainably and ethically source our ingredients, to create clean and sustainable products
        </p>
        <a
          href="/shop"
          className="btn-primary btn"
        >
          Shop New Collection
        </a>
      </div>
    </section>
    </div>
  );
}