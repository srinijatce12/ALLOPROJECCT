import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ tagline, title, description, faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-tagline">{tagline || 'Questions'}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Accordion Wrapper */}
        <div className="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-header">
                  <h3 className="faq-question">{faq.question}</h3>
                  <button className="faq-toggle-btn" aria-label="Toggle Question">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </div>
                
                <div className={`faq-body-collapse ${isOpen ? 'expanded' : ''}`}>
                  <div className="faq-body-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #ffffff;
        }

        .faq-accordion-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item-card {
          border: 1px solid var(--border-light);
          border-radius: var(--border-radius-md);
          background-color: #ffffff;
          cursor: pointer;
          transition: all var(--transition-normal);
          overflow: hidden;
        }

        .faq-item-card:hover {
          border-color: var(--theme-primary);
          box-shadow: var(--shadow-sm);
        }

        .faq-item-card.open {
          border-color: var(--theme-primary);
          box-shadow: var(--theme-glow);
        }

        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
        }

        .faq-question {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
        }

        .faq-toggle-btn {
          background: none;
          border: none;
          color: var(--theme-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--theme-primary-light);
          transition: all var(--transition-fast);
        }

        .faq-item-card.open .faq-toggle-btn {
          background-color: var(--theme-primary);
          color: #ffffff;
        }

        /* Smooth Accordion Collapse Height Transition */
        .faq-body-collapse {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal) ease-out;
        }

        .faq-body-collapse.expanded {
          max-height: 200px; /* Large enough to host content */
          transition: max-height var(--transition-normal) ease-in;
        }

        .faq-body-content {
          padding: 0 24px 24px 24px;
          border-top: 1px solid transparent;
        }

        .faq-item-card.open .faq-body-content {
          border-top-color: var(--border-light);
        }

        .faq-body-content p {
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
