import React from 'react';

export default function Benefits({ tagline, title, description, benefitsList = [] }) {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-tagline">{tagline || 'Benefits'}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-4">
          {benefitsList.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="benefit-card-wrap premium-card">
                <div className="benefit-icon-container">
                  <Icon size={24} />
                </div>
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .benefits-section {
          background-color: var(--theme-bg);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .benefit-card-wrap {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 36px 24px;
          background-color: #ffffff;
        }

        .benefit-icon-container {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--theme-primary-light);
          color: var(--theme-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .benefit-card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--text-dark);
        }

        .benefit-card-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
