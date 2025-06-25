import React from 'react';
import './NewCollectionSection.css';
export default function SimpleHeroSection() {
  return (
    <div class="container">
    <section
      className="new-collection"
      style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0691/3025/6522/files/new-collec.png')" }}
    >
      <div className="col-text">
        <p className="subtitle">New Arrival</p>
        <h2 className="subtitle">Glow Naturally</h2>
        <p>
          Discover skincare crafted from clean, clinically tested ingredients for radiant results.
        </p>
        <a
          href="/shop"
          className="btn-primary btn"
        >
          Shop Now
        </a>
      </div>
    </section>
    </div>
  );
}