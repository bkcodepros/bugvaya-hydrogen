import React from 'react';

export default function Banner() {
  return (
    <section
      className="bg-cover bg-center text-white py-24 px-4"
      style={{
        backgroundImage: `url('https://cdn.shopify.com/s/files/1/0691/3025/6522/files/bnr1.png')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center bg-black/50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Explore our latest collection and enjoy great deals.</p>
        <a
          href="/collections/all"
          className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}