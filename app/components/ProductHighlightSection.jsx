// app/components/FeaturedDeals.jsx
import './ProductHighlightSection.css'; // basic styles

export default function FeaturedDeals() {
  const cards = [
    {
      title: 'GET THE GLOW',
      image: '/images/prd1.png',
      originalPrice: '$18.04',
      salePrice: '$10.67',
      href: '/collections/glow-deals',
      colorClass: 'card1',
    },
    {
      title: 'ESSENTIAL PRICES',
      image: '/images/prd2.png',
      originalPrice: '$18.04',
      salePrice: '$10.67',
      href: '/collections/essential-prices',
      colorClass: 'card2',
    },
    {
      title: 'SUMMER SALE',
      image: '/images/prd3.png',
      originalPrice: '$18.04',
      salePrice: '$10.67',
      href: '/collections/summer-sale',
      colorClass: 'card3',
    },
  ];

  return (
    <div class="container">
    <section className="deal-section">
      
      {cards.map((item, idx) => (
        <a href={item.href}  aria-label={`View ${item.title}`}>
        <div key={idx} className={`deal-card ${item.colorClass}`}>
          <span className="deal-badge">NEW</span>
          <img src={item.image} alt={item.title} className="deal-image" />
          <div className="deal-info">
            <h3>{item.title}</h3>
            <p className="deal-price">
              <s>{item.originalPrice}</s> – <span>{item.salePrice}</span>
            </p>
          </div>
        </div>
        </a>
      ))}
      
    </section>
    </div>
  );
}