import { CheckCircle2 } from 'lucide-react';

export default function About({ heading, content, purposes = [], tagline }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Content Card */}
          <div className="about-content-wrap">
            <span className="section-tagline">{tagline || 'About Us'}</span>
            <h2 className="section-title text-left-align">{heading}</h2>
            <p className="about-text">{content}</p>
            
            <div className="about-features-highlights">
              <div className="highlight-item">
                <span className="hl-num">01</span>
                <div>
                  <h4>Clinical Standards</h4>
                  <p>Designed in collaboration with healthcare specialists.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="hl-num">02</span>
                <div>
                  <h4>Secure Encryption</h4>
                  <p>Your health and connection data is fully private & safe.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Purpose Checklist */}
          <div className="about-purpose-card premium-card">
            <h3 className="purpose-title">Our Primary Focus</h3>
            <p className="purpose-subtitle">We are dedicated to building technologies that empower daily health and connection.</p>
            
            <ul className="purpose-list">
              {purposes.map((purpose, idx) => (
                <li key={idx} className="purpose-item">
                  <div className="purpose-icon-wrap">
                    <CheckCircle2 className="purpose-check-icon" size={20} />
                  </div>
                  <div className="purpose-content">
                    <strong>{purpose.title}</strong>
                    <p>{purpose.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--theme-bg);
          border-bottom: 1px solid var(--border-light);
        }

        .text-left-align {
          text-align: left;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }

        .about-text {
          font-size: 17px;
          color: var(--text-muted);
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .about-features-highlights {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .highlight-item {
          display: flex;
          gap: 16px;
        }

        .hl-num {
          font-size: 24px;
          font-weight: 800;
          color: var(--theme-primary);
          opacity: 0.6;
          font-family: var(--font-heading);
        }

        .highlight-item h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .highlight-item p {
          font-size: 14px;
          color: var(--text-muted);
        }

        /* Purpose Card (Right Column) */
        .about-purpose-card {
          background: rgba(255, 255, 255, 0.7);
        }

        .purpose-title {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .purpose-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .purpose-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .purpose-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .purpose-icon-wrap {
          margin-top: 2px;
        }

        .purpose-check-icon {
          color: var(--theme-secondary, var(--theme-primary));
        }

        .purpose-content strong {
          font-size: 15px;
          color: var(--text-dark);
          display: block;
          margin-bottom: 2px;
        }

        .purpose-content p {
          font-size: 13.5px;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
