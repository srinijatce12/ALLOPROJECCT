import { ArrowRight, Play, Heart, Bell, Shield, Users, Baby, Moon, Syringe } from 'lucide-react';

export default function Hero({ title, tagline, description, ctaPrimary, ctaSecondary, themeName, appPreview, googlePlayUrl }) {
  const isAllobaby = themeName === 'allobaby';

  return (
    <section className="hero-section">
      {/* Animated Background Blobs */}
      <div className="blob blob-blue" />
      <div className="blob blob-pink" />
      <div className="blob blob-purple" />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`particle particle-${i + 1}`} />
      ))}

      <div className="container hero-container">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-info-column">
          <div className="hero-badge">
            <span className="badge-dot" />
            {tagline} &nbsp;·&nbsp; Smart Healthcare Platform
          </div>

          <h1 className="hero-title">
            {isAllobaby ? (
              <>Your Baby's <span className="gradient-text">Growth Journey</span> Beautifully Tracked</>
            ) : (
              <>Connecting <span className="gradient-text">Family Care</span> in Real Time</>
            )}
          </h1>

          <p className="hero-desc">{description}</p>

          <div className="hero-ctas">
            <a href={googlePlayUrl || "#download"} target={googlePlayUrl ? "_blank" : undefined} rel={googlePlayUrl ? "noopener noreferrer" : undefined} className="cta-primary">
              <Play size={18} fill="white" strokeWidth={0} />
              {ctaPrimary}
            </a>
            <a href="#features" className="cta-secondary">
              {ctaSecondary}
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="trust-strip">
            <div className="trust-item">
              <span className="trust-num">{isAllobaby ? '10+' : '100k+'}</span>
              <span className="trust-label">{isAllobaby ? 'Reviews' : 'Active Users'}</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">{isAllobaby ? '4.4 ★' : '3+ ★'}</span>
              <span className="trust-label">Play Store</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-visual-column">
          <div className="visual-wrapper">

            {/* Glow rings behind image */}
            <div className="glow-ring glow-ring-1" />
            <div className="glow-ring glow-ring-2" />

            {/* Baby Photo */}
            <div className="baby-photo-frame">
              {isAllobaby ? (
                <img
                  src="/baby-footprints.png"
                  alt="Baby Footprints"
                  className="baby-photo-img"
                  style={{ objectFit: 'contain', padding: '30px', background: '#fff' }}
                />
              ) : (
                <img
                  src="/family-care-logo.png"
                  alt="Family Care"
                  className="baby-photo-img"
                  style={{ objectFit: 'contain', borderRadius: '24px', background: 'transparent' }}
                />
              )}
            </div>

            {/* Floating Glassmorphism Cards */}
            {isAllobaby ? (
              <>
                <div className="float-card fc-top-left float-anim-1">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#3B82F6,#60a5fa)' }}>
                    <Baby size={18} color="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Baby Growth</span>
                    <span className="fc-val">Week 14 · Lemon</span>
                  </div>
                </div>

                <div className="float-card fc-top-right float-anim-2">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#EC4899,#f472b6)' }}>
                    <Heart size={18} color="white" fill="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Heart Rate</span>
                    <span className="fc-val">142 bpm ✓</span>
                  </div>
                </div>

                <div className="float-card fc-bottom-left float-anim-3">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#8B5CF6,#a78bfa)' }}>
                    <Moon size={18} color="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Sleep Monitor</span>
                    <span className="fc-val">7.5 hrs tonight</span>
                  </div>
                </div>

                <div className="float-card fc-bottom-right float-anim-4">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>
                    <Syringe size={18} color="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Vaccination</span>
                    <span className="fc-val">Due in 3 days</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="float-card fc-top-left float-anim-1">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#3B82F6,#60a5fa)' }}>
                    <Users size={18} color="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Family Online</span>
                    <span className="fc-val">4 Members</span>
                  </div>
                </div>
                <div className="float-card fc-bottom-right float-anim-2">
                  <div className="fc-icon" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>
                    <Bell size={18} color="white" />
                  </div>
                  <div className="fc-text">
                    <span className="fc-label">Care Alert</span>
                    <span className="fc-val">Medicines Taken</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          padding: 140px 0 100px;
          overflow: hidden;
          background: #F8FAFC;
          font-family: 'Inter', sans-serif;
        }

        /* ── ANIMATED BLOBS ── */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: blobFloat 12s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }
        .blob-blue {
          width: 520px; height: 520px;
          background: radial-gradient(circle, #3B82F6 0%, transparent 70%);
          top: -100px; left: -150px;
          animation-delay: 0s;
        }
        .blob-pink {
          width: 420px; height: 420px;
          background: radial-gradient(circle, #EC4899 0%, transparent 70%);
          top: 50px; right: -100px;
          animation-delay: -4s;
        }
        .blob-purple {
          width: 340px; height: 340px;
          background: radial-gradient(circle, #8B5CF6 0%, transparent 70%);
          bottom: -80px; left: 40%;
          animation-delay: -8s;
        }
        @keyframes blobFloat {
          0%   { transform: translate(0,0) scale(1); }
          50%  { transform: translate(30px,-30px) scale(1.05); }
          100% { transform: translate(-20px,20px) scale(0.97); }
        }

        /* ── PARTICLES ── */
        .particle {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg,#3B82F6,#EC4899);
          opacity: 0.5;
          animation: particleDrift 8s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }
        ${[...Array(12)].map((_, i) => `
          .particle-${i + 1} {
            top: ${10 + i * 7}%;
            left: ${5 + i * 8}%;
            width: ${4 + (i % 4) * 2}px;
            height: ${4 + (i % 4) * 2}px;
            animation-delay: ${-i * 0.7}s;
            animation-duration: ${6 + (i % 5)}s;
          }
        `).join('')}
        @keyframes particleDrift {
          0%   { transform: translateY(0) translateX(0); opacity: 0.4; }
          100% { transform: translateY(-25px) translateX(15px); opacity: 0.8; }
        }

        /* ── LAYOUT ── */
        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 60px;
        }
        @media (min-width: 1024px) {
          .hero-container { grid-template-columns: 1.1fr 0.9fr; gap: 80px; }
        }

        /* ── LEFT ── */
        .hero-info-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #2563EB;
          margin-bottom: 24px;
          letter-spacing: 0.3px;
        }
        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.25);
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(59,130,246,0.25); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0.1); }
        }

        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.1;
          color: #0F172A;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.75;
          color: #64748B;
          max-width: 520px;
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%);
          box-shadow: 0 12px 32px rgba(37,99,235,0.35);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(37,99,235,0.45);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: #0F172A;
          background: white;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-secondary:hover {
          border-color: #3B82F6;
          color: #2563EB;
          transform: translateY(-2px);
        }

        /* Trust strip */
        .trust-strip {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .trust-num {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1;
        }
        .trust-label {
          font-size: 12px;
          font-weight: 500;
          color: #94A3B8;
          margin-top: 2px;
        }
        .trust-divider {
          width: 1px;
          height: 36px;
          background: #E2E8F0;
        }

        /* ── RIGHT VISUAL ── */
        .hero-visual-column {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .visual-wrapper {
          position: relative;
          width: 420px;
          height: 480px;
        }

        /* Glow rings */
        .glow-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .glow-ring-1 {
          width: 380px; height: 380px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          animation: ringPulse 4s ease-in-out infinite;
        }
        .glow-ring-2 {
          width: 460px; height: 460px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
          animation: ringPulse 4s ease-in-out infinite reverse;
        }
        @keyframes ringPulse {
          0%,100% { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 1; transform: translate(-50%,-50%) scale(1.06); }
        }

        /* Baby Photo Frame */
        .baby-photo-frame {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 400px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow:
            0 0 0 6px rgba(255,255,255,0.8),
            0 0 0 10px rgba(59,130,246,0.12),
            0 32px 64px rgba(0,0,0,0.15),
            0 8px 24px rgba(59,130,246,0.15);
          animation: heroFloat 5s ease-in-out infinite;
          background: #f0f9ff;
        }
        .baby-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @keyframes heroFloat {
          0%,100% { transform: translate(-50%, -50%) translateY(0); }
          50%      { transform: translate(-50%, -50%) translateY(-12px); }
        }

        /* Floating Glassmorphism Cards */
        .float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 18px;
          padding: 12px 18px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.06);
          z-index: 10;
          white-space: nowrap;
        }
        .fc-icon {
          width: 38px; height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fc-text {
          display: flex;
          flex-direction: column;
        }
        .fc-label {
          font-size: 11px;
          font-weight: 500;
          color: #94A3B8;
          font-family: 'Inter', sans-serif;
        }
        .fc-val {
          font-size: 13px;
          font-weight: 700;
          color: #0F172A;
          font-family: 'Inter', sans-serif;
          margin-top: 1px;
        }

        /* Card positions */
        .fc-top-left    { top: 20px;  left: -50px; }
        .fc-top-right   { top: 30px;  right: -50px; }
        .fc-bottom-left { bottom: 80px; left: -50px; }
        .fc-bottom-right{ bottom: 60px; right: -50px; }

        /* Card float animations */
        @keyframes floatA { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(-5px)} 50%{transform:translateY(5px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)}   50%{transform:translateY(8px)} }
        @keyframes floatD { 0%,100%{transform:translateY(-3px)} 50%{transform:translateY(6px)} }
        .float-anim-1 { animation: floatA 3.5s ease-in-out infinite; }
        .float-anim-2 { animation: floatB 4s ease-in-out infinite; animation-delay: -1s; }
        .float-anim-3 { animation: floatC 3.8s ease-in-out infinite; animation-delay: -2s; }
        .float-anim-4 { animation: floatD 4.2s ease-in-out infinite; animation-delay: -0.5s; }

        @media (max-width: 768px) {
          .visual-wrapper { width: 320px; height: 380px; }
          .baby-photo-frame { width: 260px; height: 310px; }
          .fc-top-left    { left: -10px; top: 0; }
          .fc-top-right   { right: -10px; top: 10px; }
          .fc-bottom-left { left: -10px; bottom: 60px; }
          .fc-bottom-right{ right: -10px; bottom: 40px; }
          .float-card { padding: 10px 14px; gap: 8px; }
        }
      `}</style>
    </section>
  );
}
