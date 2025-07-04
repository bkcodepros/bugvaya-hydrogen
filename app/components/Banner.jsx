import React from 'react';
import './Banner.css';
export default function Banner() {
  return (
    <div class="container">
    <section
      className="bg-cover banner-hme bg-center text-white py-24 px-4"
      style={{
        backgroundImage: `url('https://cdn.shopify.com/s/files/1/0691/3025/6522/files/bnr1.png')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center bg-black/50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Tell That <br />Bug - Vaya</h1>
        <p className="text-lg mb-6">with our bug repellent that’s natural and designed to protect — without cramping your style.</p>
        <a
          href="/collections/all"
          className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </a>
      </div>
    </section>
    </div>
  );
}