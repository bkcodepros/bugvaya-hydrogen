import React from 'react';
import './ProductHighlight.css';
import productImage from '/public/images/product-mockup.png'; // adjust path if needed
export default function ProductHighlight() {
  return (
    <section className="highlightSection">
        <h2>The Most selling Products</h2>
      <div className="container-prd">
        {/* Left Side - Product Info */}
        <div className="infoBox">
          <div className="label">50 ML | GLASS BOTTLE</div>
          <h2 className="title">LEMONGRASS</h2>
          <p className="description">
            A bright, citrusy blend inspired by sun-drenched mornings and golden hour walks...
          </p>

          {/* Purchase Options */}
          <div className="pricingBox">
            <label className="radioRow">
              <input type="radio" name="purchaseType" defaultChecked />
              <span>One-Time Purchase</span>
              <span className="price">$34.99</span>
            </label>
            <label className="radioRow">
              <input type="radio" name="purchaseType" />
              <span>
                Subscription <span className="discount">Save 25%</span>
              </span>
              <span>
                <span className="price">$32.49</span>{' '}
                <span className="strike">$34.99</span>
              </span>
            </label>
            <select className="select">
              <option>Every 2 months</option>
              <option>Every 1 month</option>
              <option>Every 3 months</option>
            </select>
          </div>

          {/* Feature List */}
          <ul className="features">
            <li>✔ Fresh, herbaceous scent</li>
            <li>✔ Powered by lemongrass, cedarwood, and peppermint oils</li>
            <li>✔ 100% plant-based and non-toxic</li>
          </ul>

          {/* Quantity and Buttons */}
          <div className="actions">
            <button>-</button>
            <span>1</span>
            <button>+</button>
            <button className="addToCart">Add to cart</button>
          </div>

          <button className="buyNow">Buy It Now</button>
        </div>

        {/* Right Side - Image */}
        <div className="imageBox">
          <img src={productImage} alt="Product" />
        </div>
      </div>

      {/* Bottom Note */}
      <div className="note">
        <strong>Also available in Gentle Formula:</strong> Designed for sensitive skin and delicate noses — same scent, lighter touch.
      </div>

      {/* View All Button */}
      <div className="viewAll">
        <a href="/products">VIEW ALL PRODUCTS →</a>
      </div>
    </section>
  );
}