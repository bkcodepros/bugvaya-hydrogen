import React from 'react';
import './ProductHighlight.css';
import productImage from '/public/images/product-mockup.png'; // adjust path if needed
export default function ProductHighlight() {
  return (
    <section className="highlightSection">
        <h2>The Most selling Product</h2>
         
      <div className="container-prd">
       <div className="high-wrap">
        {/* Left Side - Product Info */}
        <div className="infoBox">
          <div className="label">50 ML | GLASS BOTTLE</div>
          <h3 className="title">LEMONGRASS</h3>
          <p className="description">
            A bright, citrusy blend inspired by sun-drenched mornings and golden hour walks...
          </p>
          <p>Lemongrass oil takes center stage in this uplifting scent — zesty, fresh, and just the right amount of green. It’s your go-to for warm days, picnics, and anything al fresco. Powered by a blend of essential oils known to repel mosquitoes, this formula keeps bugs at bay without compromising your vibe.</p>   
          {/* Purchase Options */}
          <div className="pricingBox">
            <label className="radioRow">
              <div class="lt-pnl"><input type="radio" name="purchaseType" defaultChecked />
              <span>One-Time Purchase</span></div>  
              
              <span className="price">$34.99</span>
            </label>
            <label className="radioRow">
              <div class="lt-pnl"><input type="radio" name="purchaseType" />
              <span>
                Subscription <span className="discount">Save 25%</span>
              </span></div>
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
            <li><span className="icn"><img src="/images/icon-check.svg" alt="Icon Image" /></span> Fresh, herbaceous scent</li>
            <li><span className="icn"><img src="/images/icon-check.svg" alt="Icon Image" /></span> Powered by lemongrass, cedarwood, and peppermint oils</li>
            <li><span className="icn"><img src="/images/icon-check.svg" alt="Icon Image" /></span> 100% plant-based and non-toxic</li>
          </ul>

          {/* Quantity and Buttons */}
          <div className="actions">
            <div class="qty" ><button>-</button>
            <span>1</span>
            <button>+</button></div>
            
            <button className="addToCart">Add to cart</button>
          </div>

          <button className="buyNow">Buy It Now</button>
        </div>
        {/* Right Side - Image */}
        <div className="imageBox">
          <img src={productImage} alt="Product" />
          <div className="note">
        <strong>Also available in Gentle Formula:</strong> Designed for sensitive skin and delicate noses — same scent, lighter touch.
      </div>
        </div>
      
      
      {/* Bottom Note */}
      
     </div>
         </div> 
      {/* View All Button */}
      <div className="viewAll">
        <a href="/products">VIEW ALL PRODUCTS <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
      </div>
    </section>
  );
}