import React from 'react';
import './BotenicalSkincare.css';
export default function BotenicalSkincare() {
  return (
    <div class="container">
    <section
      className="bg-cover botenical-hme bg-center text-white py-24 px-4"
      style={{
        backgroundImage: `url('https://cdn.shopify.com/s/files/1/0691/3025/6522/files/bnr1.png')`,
      }}
    >
      <div className="botenical-txt">
        <h2>Welcome to Our Store</h2>
        <p>Explore our latest collection and enjoy great deals.</p>
        <a href="/collections/all" className="btn-primary btn">Shop Now</a>
      </div>
    </section>
    </div>
  );
}