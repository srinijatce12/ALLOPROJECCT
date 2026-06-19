import React, { useState, useEffect } from 'react';
import { Phone, ChevronRight, Check, Send, Play, Pause } from 'lucide-react';

export default function Screenshots({ tagline, title, description, screens = [] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying && screens.length > 0) {
      interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % screens.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, screens.length]);

  const handleTabClick = (idx) => {
    setActiveIdx(idx);
    setIsPlaying(false);
  };

  const activeScreen = screens[activeIdx] || {};

  return (
    <section id="screenshots" className="section screenshots-section">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-tagline">{tagline || 'App Preview'}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Showcase Layout */}
        <div className="showcase-grid">
          {/* Left: Interactive Menu Tabs */}
          <div className="showcase-menu">
            <div className="menu-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 className="menu-heading mb-0">Click to inspect screens</h3>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                style={{ background: 'var(--theme-primary-light)', border: 'none', color: 'var(--theme-primary)', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 'bold' }}
              >
                {isPlaying ? <><Pause size={14} /> Pause Video</> : <><Play size={14} /> Play Video</>}
              </button>
            </div>
            <div className="screen-tabs">
              {screens.map((screen, idx) => (
                <button
                  key={idx}
                  className={`screen-tab-btn ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => handleTabClick(idx)}
                >
                  <span className="tab-num">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="tab-info">
                    <span className="tab-title">{screen.label}</span>
                    <span className="tab-desc">{screen.tagline}</span>
                  </div>
                  <ChevronRight size={16} className="tab-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Live Interactive Phone Simulator */}
          <div className="showcase-simulator">
            {activeScreen.fullImage ? (
              <div style={{ 
                width: '100%', 
                maxWidth: '320px', 
                height: '650px', 
                overflow: 'hidden', 
                borderRadius: '36px', 
                margin: '0 auto', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '8px solid #1e293b',
                background: '#1e293b'
              }}>
                <img 
                  src={activeScreen.fullImage} 
                  alt={activeScreen.label} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} 
                />
              </div>
            ) : (
              <div className="simulator-phone-wrapper">
                <div className="phone-mockup-container">
                  <div className="phone-mockup-frame">
                    <div className="phone-notch">
                      <div className="phone-speaker"></div>
                      <div className="phone-camera"></div>
                    </div>
                    <div className="phone-screen">
                      {/* Status Bar */}
                      <div className="simulator-status-bar">
                        <span>9:41 AM</span>
                        <div className="status-icons">
                          <span>📶</span>
                          <span>🔋</span>
                        </div>
                      </div>
                      
                      {/* Screen Header */}
                      <div className="simulator-app-header">
                        <span className="app-brand-name">{activeScreen.brandName || 'App'}</span>
                        <span className="app-screen-label">{activeScreen.label}</span>
                      </div>

                      {/* Simulated Dynamic Screen UI */}
                      <div className="simulator-app-body">
                        {activeScreen.renderContent ? (
                          activeScreen.renderContent()
                        ) : (
                          <div className="fallback-screen">
                            <p>Screen UI Placeholder</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Home Indicator bar */}
                      <div className="home-indicator"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .screenshots-section {
          background-color: #ffffff;
          border-bottom: 1px solid var(--border-light);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .menu-heading {
          font-size: 20px;
          color: var(--text-dark);
        }

        .screen-tabs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .screen-tab-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          width: 100%;
        }

        .screen-tab-btn:hover {
          border-color: var(--theme-primary);
          transform: translateX(4px);
        }

        .screen-tab-btn.active {
          border-color: var(--theme-primary);
          background-color: var(--theme-primary-light);
          box-shadow: var(--shadow-sm);
        }

        .tab-num {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 800;
          color: var(--theme-primary);
          opacity: 0.6;
        }

        .tab-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tab-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .tab-desc {
          font-size: 12px;
          color: var(--text-muted);
        }

        .tab-arrow {
          color: var(--text-muted);
          transition: transform var(--transition-fast);
        }

        .screen-tab-btn.active .tab-arrow {
          transform: translateX(4px);
          color: var(--theme-primary);
        }

        .showcase-simulator {
          display: flex;
          justify-content: center;
        }

        /* Simulator Custom CSS Layouts */
        .simulator-status-bar {
          display: flex;
          justify-content: space-between;
          padding: 6px 16px;
          font-size: 10px;
          font-weight: 600;
          color: #475569;
          background-color: #ffffff;
        }

        .simulator-app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-secondary, var(--theme-primary)) 100%);
          color: #ffffff;
          box-shadow: var(--shadow-sm);
        }

        .app-brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.5px;
        }

        .app-screen-label {
          font-size: 11px;
          font-weight: 500;
          opacity: 0.9;
        }

        .simulator-app-body {
          flex: 1;
          background-color: #f8fafc;
          overflow-y: auto;
          position: relative;
          padding: 16px;
          display: flex;
          flex-direction: column;
          scrollbar-width: none; /* Firefox */
        }

        .simulator-app-body::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .home-indicator {
          width: 120px;
          height: 5px;
          background: #334155;
          border-radius: 10px;
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        /* Default internal CSS for App Screen Components */
        .sim-input-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .sim-input-group label {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .sim-input {
          padding: 10px 12px;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          font-size: 12px;
          background: #ffffff;
        }

        .sim-btn {
          background: var(--theme-gradient-primary);
          color: #ffffff;
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 10px;
        }

        .fallback-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
