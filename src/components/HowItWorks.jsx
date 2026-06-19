import React from 'react';

export default function HowItWorks({ tagline, title, description, steps = [] }) {
  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-tagline">{tagline || 'Process'}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-steps">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="timeline-step">
                  <div className="step-number-node">
                    <span className="step-num">{idx + 1}</span>
                    {Icon && (
                      <div className="step-icon-wrap">
                        <Icon size={16} />
                      </div>
                    )}
                  </div>
                  
                  <div className="step-info-card premium-card">
                    {step.image && (
                      <div className="phone-frame-wrap">
                        <div className="phone-frame">
                          <div className="phone-notch"></div>
                          <div className="phone-screen">
                            <img src={step.image} alt={step.title} className="step-image" />
                          </div>
                          <div className="phone-home-bar"></div>
                        </div>
                      </div>
                    )}
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: var(--theme-bg);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .timeline-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        /* Timeline connector line */
        .timeline-line {
          position: absolute;
          left: 40px;
          right: 40px;
          top: 22px;
          height: 3px;
          background: linear-gradient(to right, var(--theme-primary) 0%, var(--theme-secondary, var(--theme-primary)) 100%);
          border-radius: var(--border-radius-full);
          opacity: 0.2;
        }

        .timeline-steps {
          display: flex;
          flex-direction: row;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 10px 10px 40px;
          -webkit-overflow-scrolling: touch;
        }
        
        .timeline-steps::-webkit-scrollbar {
          height: 6px;
        }
        .timeline-steps::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
          border-radius: 10px;
        }
        .timeline-steps::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.15);
          border-radius: 10px;
        }
        .timeline-steps::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.25);
        }

        .timeline-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          min-width: 100%;
          flex: 0 0 100%;
          scroll-snap-align: center;
          position: relative;
          text-align: center;
        }

        @media (min-width: 768px) {
          .timeline-step {
            min-width: 40%;
            flex: 0 0 40%;
          }
        }

        /* Step Node Circle */
        .step-number-node {
          position: relative;
          z-index: 5;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--theme-gradient-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(var(--theme-primary), 0.3);
          flex-shrink: 0;
        }

        .step-icon-wrap {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          color: var(--theme-primary);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        /* Information Cards */
        .step-info-card {
          padding: 28px 20px 24px;
          background-color: #ffffff;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        /* Phone Frame */
        .phone-frame-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .phone-frame {
          position: relative;
          width: 200px;
          height: 400px;
          background: #1a1a1a;
          border-radius: 36px;
          padding: 12px 8px;
          box-shadow:
            0 0 0 2px #3a3a3a,
            0 20px 60px rgba(0,0,0,0.35),
            0 8px 20px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .phone-notch {
          width: 60px;
          height: 8px;
          background: #2a2a2a;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .phone-screen {
          flex: 1;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          position: relative;
        }

        .step-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .phone-home-bar {
          width: 50px;
          height: 4px;
          background: #3a3a3a;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-dark);
        }

        .step-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 300px;
        }

        @media (max-width: 768px) {
          .timeline-line {
            display: none;
          }
          .timeline-step {
            min-width: 85vw;
          }
          .phone-frame {
            width: 180px;
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
}
