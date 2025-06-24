import {useState} from 'react';
import './ImageAccordionSection.css';
export default function ImageAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content of the first accordion item.',
    },
    {
      title: 'Accordion Item 2',
      content: 'Here is some more information for item 2.',
    },
    {
      title: 'Accordion Item 3',
      content: 'More content for item 3 goes here.',
    },
  ];

  return (
    <section className="image-accordion-section">
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
            </button>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}