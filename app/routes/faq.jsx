import FaqAccordion from '../components/FaqAccordion';
import '../styles/faq.css';

export default function FAQPage() {
  return (
    <div className="faq-page">
       <div class="faq-bnr"> <h1 className="faq-title">Informative FAQ</h1> <div class="breadcrumb"><ul><li>Home</li><li>&bull;</li><li>Faq</li></ul></div></div> 
     
      <div className="faq-container">
        <div className="faq-sidebar">
            <h3>FAQ</h3>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#orders">Orders And Payment</a></li>
            <li><a href="#returns">Returns And Refunds</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="faq-content">
          <section id="products">
            <h2>Products</h2>
            <FaqAccordion question="Which skin types are rhode products suitable for?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Are bugvaya skincare products vegan or cruelty-free?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Are bugvaya skincare products nut-free?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Are all bugvaya skincare products fragrance-free?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Are bugvaya skincare products pregnancy safe?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            
          </section>

          <section id="shipping">
            <h2>Shipping</h2>
            <FaqAccordion question="How long will my order take to arrive?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="How much is shipping?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Where do you ship?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Do you ship to canada?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Do you ship to the united kingdom?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
          </section>

          <section id="orders">
            <h2>Orders And Payment</h2>
            <FaqAccordion question="How can I check my order?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="What is your return policy?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Which payment methods do you accept?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="When will my credit card be charged?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Can I remove a saved payment method?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
          </section>

          <section id="returns">
            <h2>Returns And Refunds</h2>
            <FaqAccordion question="What is your return policy?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Do you offer international returns?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            <FaqAccordion question="Can I cancel or change an order?" answer="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis." />
            
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <FaqAccordion question="How can I contact the rhode team?" answer="Email us at support@bugvaya.com." />
          </section>
        </div>
      </div>
    </div>
  );
}