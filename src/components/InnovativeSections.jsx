import React, { useState } from 'react';
import { Target, HeartPulse, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function InnovativeSections() {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <section className="section bg-pastel-blue">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge badge-primary">Premium Capabilities</span>
          <h2>Innovative Health Tools</h2>
          <p>Explore our advanced suite of trackers and dashboards designed for modern maternal care.</p>
        </div>

        <div className="innovative-tabs">
          <button 
            className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
            onClick={() => setActiveTab('journey')}
          >
            Pregnancy Journey
          </button>
          <button 
            className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
            onClick={() => setActiveTab('health')}
          >
            Health Score
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            Mother Care Tips
          </button>
          <button 
            className={`tab-btn ${activeTab === 'community' ? 'active' : ''}`}
            onClick={() => setActiveTab('community')}
          >
            Community
          </button>
        </div>

        <div className="innovative-content glass-card">
          {activeTab === 'journey' && (
            <div className="tab-pane active fade-in">
              <div className="pane-grid">
                <div className="pane-text">
                  <h3>Pregnancy Journey Timeline & Milestones</h3>
                  <p>Follow your baby's week-by-week progress visually. Our timeline adapts dynamically to your gestation age.</p>
                  <ul className="pane-list">
                    <li><Target size={18}/> <span>Interactive 3D model visualization</span></li>
                    <li><Target size={18}/> <span>Weekly organ development alerts</span></li>
                    <li><Target size={18}/> <span>Size comparisons to everyday objects</span></li>
                  </ul>
                  <a href="#download" className="btn btn-primary" style={{marginTop: '20px'}}>Experience Now</a>
                </div>
                <div className="pane-visual">
                  <div className="journey-mockup">
                    <div className="timeline-line"></div>
                    <div className="timeline-node active">
                      <div className="node-dot"></div>
                      <div className="node-content">
                        <strong>Week 12</strong>
                        <span>Plum Size</span>
                      </div>
                    </div>
                    <div className="timeline-node">
                      <div className="node-dot"></div>
                      <div className="node-content">
                        <strong>Week 13</strong>
                        <span>Lemon Size</span>
                      </div>
                    </div>
                    <div className="timeline-node">
                      <div className="node-dot"></div>
                      <div className="node-content">
                        <strong>Week 14</strong>
                        <span>Peach Size</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'health' && (
            <div className="tab-pane active fade-in">
              <div className="pane-grid">
                <div className="pane-text">
                  <h3>Smart Health Score Dashboard</h3>
                  <p>Our algorithm combines your sleep, nutrition, activity, and vitals into a single, easy-to-understand wellness indicator.</p>
                  <ul className="pane-list">
                    <li><HeartPulse size={18}/> <span>Overall wellness indicator (0-100)</span></li>
                    <li><HeartPulse size={18}/> <span>Actionable improvement tips</span></li>
                    <li><HeartPulse size={18}/> <span>Historical trend analysis</span></li>
                  </ul>
                </div>
                <div className="pane-visual">
                  <div className="health-score-card">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path className="circle-bg"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path className="circle"
                        strokeDasharray="85, 100"
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="20.35" className="percentage">85</text>
                    </svg>
                    <h4 style={{textAlign: 'center', marginTop: '10px'}}>Excellent Vitality</h4>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="tab-pane active fade-in">
              <div className="pane-grid">
                <div className="pane-text">
                  <h3>Personalized Mother Care Tips</h3>
                  <p>Receive daily advice cards tailored to your specific symptoms, trimester, and health goals.</p>
                  <ul className="pane-list">
                    <li><Sparkles size={18}/> <span>Expert-verified medical advice</span></li>
                    <li><Sparkles size={18}/> <span>Dietary and recipe suggestions</span></li>
                    <li><Sparkles size={18}/> <span>Mental wellness exercises</span></li>
                  </ul>
                </div>
                <div className="pane-visual">
                  <div className="tips-card">
                    <div className="tip-header">
                      <span className="tip-tag">Nutrition</span>
                      <span>Today</span>
                    </div>
                    <div className="tip-body">
                      <strong>Boost your Iron</strong>
                      <p>Try adding spinach or lentils to your meals today to support increased blood volume.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div className="tab-pane active fade-in">
              <div className="pane-grid">
                <div className="pane-text">
                  <h3>Community & Support Section</h3>
                  <p>Connect with other expecting mothers, share experiences, and consult certified experts directly through the app.</p>
                  <ul className="pane-list">
                    <li><MessageCircle size={18}/> <span>Private maternal groups</span></li>
                    <li><MessageCircle size={18}/> <span>Expert Q&A sessions</span></li>
                    <li><MessageCircle size={18}/> <span>24/7 Emotional support access</span></li>
                  </ul>
                </div>
                <div className="pane-visual">
                  <div className="community-mockup">
                    <div className="msg left">Has anyone experienced morning sickness in week 14?</div>
                    <div className="msg right">Yes! Ginger tea helped me a lot. Hang in there! ❤️</div>
                    <div className="msg left">Thanks for the tip, trying it now!</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .bg-pastel-blue {
          background: linear-gradient(180deg, rgba(224, 242, 254, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
        }
        .innovative-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background: #ffffff;
          border: 1px solid var(--border-light);
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }
        .tab-btn:hover {
          border-color: var(--theme-primary);
          color: var(--theme-primary);
        }
        .tab-btn.active {
          background: var(--theme-gradient-primary);
          color: #ffffff;
          border-color: transparent;
          box-shadow: var(--shadow-md);
        }
        .innovative-content {
          padding: 40px;
          border-radius: 24px;
          min-height: 400px;
        }
        .pane-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .pane-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .pane-text h3 {
          font-size: 28px;
          margin-bottom: 16px;
          color: var(--text-dark);
        }
        .pane-text p {
          color: var(--text-muted);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .pane-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pane-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: var(--text-dark);
          font-weight: 500;
        }
        .pane-list li svg {
          color: var(--theme-primary);
        }
        
        /* Visual elements styling */
        .pane-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Timeline */
        .journey-mockup {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 300px;
          position: relative;
        }
        .timeline-line {
          position: absolute;
          left: 45px;
          top: 40px;
          bottom: 40px;
          width: 2px;
          background: var(--border-light);
        }
        .timeline-node {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        .node-dot {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          margin-left: 10px;
        }
        .timeline-node.active .node-dot {
          background: var(--theme-primary);
          box-shadow: 0 0 0 4px var(--theme-primary-light);
        }
        .node-content strong {
          display: block;
          color: var(--text-dark);
        }
        .node-content span {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* Health Score */
        .health-score-card {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 250px;
        }
        .circular-chart {
          display: block;
          margin: 0 auto;
          max-width: 80%;
          max-height: 250px;
        }
        .circle-bg {
          fill: none;
          stroke: #f1f5f9;
          stroke-width: 3.8;
        }
        .circle {
          fill: none;
          stroke-width: 2.8;
          stroke-linecap: round;
          stroke: var(--theme-primary);
          animation: progress 1s ease-out forwards;
        }
        @keyframes progress {
          0% { stroke-dasharray: 0 100; }
        }
        .percentage {
          fill: var(--text-dark);
          font-family: sans-serif;
          font-size: 0.5em;
          text-anchor: middle;
          font-weight: bold;
        }

        /* Tips Card */
        .tips-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          padding: 24px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
          width: 100%;
          max-width: 300px;
        }
        .tip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          font-size: 12px;
          color: var(--text-muted);
        }
        .tip-tag {
          background: var(--theme-secondary-light);
          color: var(--theme-secondary);
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 600;
        }
        .tip-body strong {
          display: block;
          font-size: 18px;
          margin-bottom: 8px;
        }

        /* Community */
        .community-mockup {
          background: #ffffff;
          padding: 20px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .msg {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.4;
          max-width: 85%;
        }
        .msg.left {
          background: #f1f5f9;
          color: var(--text-dark);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        .msg.right {
          background: var(--theme-primary);
          color: #ffffff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
      `}</style>
    </section>
  );
}
