import {useState} from 'react';
import '../styles/faq.css';

export default function FaqAccordion({question, answer}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="question-text">{question}</span>
        <span className="toggle-icon">
          <span>{isOpen ? '–' : '+'}</span>
        </span>
      </button>

      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}