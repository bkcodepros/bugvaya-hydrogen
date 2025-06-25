import React from 'react';
import './BotenicalSkincare.css';
export default function BotenicalSkincare() {
  return (
    <div class="container">
    <section
      className="bg-cover botenical-hme bg-center text-white py-24 px-4"
      style={{
        backgroundImage: `url('/images/img-botec.png')`,
      }}
    >
      <div className="botenical-txt">
        <p class="subtitle">BOTANICAL SKINCARE</p>
        <h2>100% Authentic Products</h2>
        <p>Boutique is  believe in providing a personalized shopping experience and exceptional customer service, just like you would expect from a physical boutique.</p>
        <a href="/collections/all" className="btn-primary btn">Explore Now <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
      </div>
    </section>
    </div>
  );
}