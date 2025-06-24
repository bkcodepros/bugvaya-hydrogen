// app/components/ProductHighlightSection.jsx
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function ProductHighlightSection({products}) {
  return (
    <section className="product-highlights">
      <h2 className="section-title">NEW</h2>
      <div className="highlight-grid">
        {products.map((product) => (
          <div key={product.id} className="highlight-product">
            <Link to={`/products/${product.handle}`}>
              {product.featuredImage && (
                <Image
                  data={product.featuredImage}
                  alt={product.featuredImage.altText || product.title}
                  width={300}
                  height={300}
                />
              )}
              <h3>{product.title}</h3>
              <div className="price">
                <span className="original-price">${product.priceRange.minVariantPrice.amount}</span>
                {product.compareAtPrice && (
                  <span className="compare-price">${product.compareAtPrice}</span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}