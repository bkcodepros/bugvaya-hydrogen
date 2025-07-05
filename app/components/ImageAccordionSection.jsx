import {useState} from 'react';
import './ImageAccordionSection.css';
export default function ImageAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: 'What is the return policy for beauty products?',
      content: 'We accept returns within 30 days for unopened and unused products. Contact our support team for assistance.',
    },
    {
      title: 'Are your cosmetics cruelty-free?',
      content: 'Here is some more information for item 2.',
    },
    {
      title: 'How do I find the right foundation shade?',
      content: 'More content for item 3 goes here.',
    },
    {
      title: 'Can I use your skincare products on sensitive skin?',
      content: 'More content for item 3 goes here.',
    },
    {
      title: 'Are your products vegan?',
      content: 'More content for item 3 goes here.',
    },
  ];

  return (
    <div className="container"><section className="image-accordion-section">
      <div className="left-image">
        <img src="https://cdn.shopify.com/s/files/1/0691/3025/6522/files/faq.png" alt="Sample" />
      </div>
      <div className="right-accordion">
        <h2>Frequently Asked Question</h2>
        {items.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            
            <button onClick={() => toggleAccordion(index)} className="accordion-title">
              {item.title}
              <span className="icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section></div>
    
  );
}