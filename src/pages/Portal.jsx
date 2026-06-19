import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, ArrowRight, Baby, Activity, Bell, Syringe, Star } from 'lucide-react';

export default function Portal() {
  useEffect(() => {
    document.title = "Allo Health Suite - Digital Maternal & Family Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portal-page">
      {/* Subtle mesh background */}
      <div className="portal-bg-mesh" />

      <div className="container portal-inner">

        {/* ── HEADER ── */}
        <div className="portal-header">
          <div className="p-suite-tag">
            <span className="p-tag-dot" />
            ALLO DIGITAL HEALTH SUITE
          </div>
          <h1 className="portal-title">
            One Platform. <span className="p-gradient">Two Powerful</span> Health Apps.
          </h1>
          <p className="portal-subtitle">
            Choose your experience — smart pregnancy & baby care, or connected family health management.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="portal-grid">

          {/* ── CARD 1: Allobaby (PINK) ── */}
          <Link to="/allobaby" className="p-card pink-card">
            {/* Decorative blobs inside card */}
            <div className="card-blob card-blob-1" />
            <div className="card-blob card-blob-2" />

            {/* TOP SECTION — colored */}
            <div className="card-top">
              <div className="card-logo-ring pink-ring">
                <img src="/allobaby-icon.png" alt="Allobaby" className="card-logo-img" />
              </div>
              <div className="card-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#fff" color="#fff" />)}
                <span className="card-rating">4.9</span>
              </div>
            </div>

            {/* BOTTOM SECTION — white */}
            <div className="card-bottom">
              <div className="card-badge pink-badge">Pregnancy & Baby Care</div>
              <h2 className="card-brand">Allobaby</h2>
              <p className="card-desc">
                Smart pregnancy companion with weekly baby growth tracking, medication reminders, kick counters, and expert-approved guidelines.
              </p>

              {/* Feature tags */}
              <div className="card-tags">
                <span className="c-tag pink-tag"><Baby size={11} /> Growth Tracker</span>
                <span className="c-tag pink-tag"><Activity size={11} /> Vitals</span>
                <span className="c-tag pink-tag"><Bell size={11} /> Reminders</span>
                <span className="c-tag pink-tag"><Syringe size={11} /> Vaccination</span>
              </div>

              <div className="card-cta pink-cta">
                Open Allobaby <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* ── CARD 2: Allokonnect (BLUE) ── */}
          <Link to="/allokonnect" className="p-card blue-card">
            <div className="card-blob card-blob-b1" />
            <div className="card-blob card-blob-b2" />

            <div className="card-top">
              <div className="card-logo-ring blue-ring">
                <img src="/allokonnect-icon.png" alt="Allokonnect" className="card-logo-img" />
              </div>
              <div className="card-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#fff" color="#fff" />)}
                <span className="card-rating">4.8</span>
              </div>
            </div>

            <div className="card-bottom">
              <div className="card-badge blue-badge">Family Care Link</div>
              <h2 className="card-brand">Allokonnect</h2>
              <p className="card-desc">
                Securely connect your family circle — monitor elder care, share health alerts, coordinate medicines, and chat in an encrypted feed.
              </p>

              <div className="card-tags">
                <span className="c-tag blue-tag"><Users size={11} /> Family Connect</span>
                <span className="c-tag blue-tag"><Shield size={11} /> Secure</span>
                <span className="c-tag blue-tag"><Bell size={11} /> Alerts</span>
                <span className="c-tag blue-tag"><Activity size={11} /> Vitals</span>
              </div>

              <div className="card-cta blue-cta">
                Open Allokonnect <ArrowRight size={16} />
              </div>
            </div>
          </Link>

        </div>

        {/* ── TRUST STRIP ── */}
        <div className="p-trust">
          <div className="p-trust-item">
            <Shield size={16} color="#3B82F6" />
            <span>GDPR Compliant</span>
          </div>

          <div className="p-trust-sep" />
          <div className="p-trust-item">
            <Heart size={16} color="#EC4899" fill="#EC4899" />
            <span>Trusted by 100,000+ Users</span>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .portal-page {
          min-height: 100vh;
          background: #F0F4FF;
          position: relative;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          padding: 60px 0 80px;
        }

        /* Subtle mesh background */
        .portal-bg-mesh {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 10% 10%, rgba(59,130,246,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(236,72,153,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .portal-inner {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        /* ── HEADER ── */
        .portal-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .p-suite-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #2563EB;
          background: rgba(37,99,235,0.07);
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: 999px;
          padding: 8px 18px;
          margin-bottom: 20px;
        }
        .p-tag-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.25);
          animation: tagPulse 2s ease infinite;
        }
        @keyframes tagPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(59,130,246,0.25); }
          50%      { box-shadow: 0 0 0 7px rgba(59,130,246,0.08); }
        }
        .portal-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(34px, 4.5vw, 58px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .p-gradient {
          background: linear-gradient(135deg, #3B82F6 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .portal-subtitle {
          font-size: 17px;
          color: #64748B;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── GRID ── */
        .portal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          max-width: 920px;
          margin: 0 auto 56px;
        }
        @media (min-width: 768px) {
          .portal-grid { grid-template-columns: 1fr 1fr; }
        }

        /* ── CARD BASE ── */
        .p-card {
          border-radius: 28px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(.175,.885,.32,1.275), box-shadow 0.4s ease;
          position: relative;
        }
        .p-card:hover {
          transform: translateY(-12px) scale(1.01);
        }
        .pink-card:hover { box-shadow: 0 28px 56px rgba(236,72,153,0.22), 0 8px 16px rgba(0,0,0,0.06); }
        .blue-card:hover { box-shadow: 0 28px 56px rgba(37,99,235,0.22), 0 8px 16px rgba(0,0,0,0.06); }

        /* ── CARD TOP (colored section) ── */
        .card-top {
          position: relative;
          padding: 44px 36px 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          overflow: hidden;
          min-height: 240px;
          justify-content: center;
        }
        .pink-card .card-top {
          background: linear-gradient(145deg, #F43F8A 0%, #EC4899 40%, #C026A8 100%);
        }
        .blue-card .card-top {
          background: linear-gradient(145deg, #3B82F6 0%, #2563EB 40%, #1D4ED8 100%);
        }

        /* Decorative blobs inside card */
        .card-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          pointer-events: none;
        }
        .card-blob-1  { width:180px;height:180px; background:#fff; top:-60px; right:-40px; }
        .card-blob-2  { width:120px;height:120px; background:#fff; bottom:-30px; left:-20px; }
        .card-blob-b1 { width:180px;height:180px; background:#fff; top:-60px; right:-40px; }
        .card-blob-b2 { width:120px;height:120px; background:#fff; bottom:-30px; left:-20px; }

        /* Logo ring */
        .card-logo-ring {
          width: 120px; height: 120px;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: transform 0.4s ease;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 0 0 5px rgba(255,255,255,0.2);
        }
        .p-card:hover .card-logo-ring { transform: scale(1.1) rotate(-3deg); }
        .pink-ring {
          background: rgba(255,255,255,0.1);
          border: 2.5px solid rgba(255,255,255,0.35);
        }
        .blue-ring {
          background: rgba(255,255,255,0.1);
          border: 2.5px solid rgba(255,255,255,0.35);
        }
        .card-logo-img {
          width: 120px; height: 120px;
          object-fit: cover;
          border-radius: 22px;
        }

        /* Stars */
        .card-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          position: relative;
          z-index: 2;
        }
        .card-rating {
          font-size: 13px;
          font-weight: 700;
          color: white;
          margin-left: 6px;
          opacity: 0.9;
        }

        /* ── CARD BOTTOM (white section) ── */
        .card-bottom {
          background: white;
          padding: 32px 32px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        /* Badge */
        .card-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .pink-badge { color: #DB2777; background: #FDF2F8; border: 1px solid #FCE7F3; }
        .blue-badge { color: #2563EB; background: #EFF6FF; border: 1px solid #DBEAFE; }

        /* Brand name */
        .card-brand {
          font-family: 'Poppins', sans-serif;
          font-size: 34px;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        /* Description */
        .card-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.75;
          margin-bottom: 22px;
          max-width: 300px;
        }

        /* Tags */
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 28px;
        }
        .c-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid;
        }
        .pink-tag { color: #DB2777; background: #FDF2F8; border-color: #FCE7F3; }
        .blue-tag { color: #2563EB; background: #EFF6FF; border-color: #DBEAFE; }

        /* CTA */
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          justify-content: center;
          padding: 16px 28px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: white;
          transition: all 0.3s ease;
          letter-spacing: 0.2px;
        }
        .pink-cta {
          background: linear-gradient(135deg, #F43F8A 0%, #EC4899 100%);
          box-shadow: 0 8px 24px rgba(236,72,153,0.3);
        }
        .blue-cta {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          box-shadow: 0 8px 24px rgba(37,99,235,0.3);
        }
        .p-card:hover .pink-cta { box-shadow: 0 14px 32px rgba(236,72,153,0.45); }
        .p-card:hover .blue-cta  { box-shadow: 0 14px 32px rgba(37,99,235,0.45); }

        /* ── TRUST ── */
        .p-trust {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 28px 0 0;
          border-top: 1px solid #E2E8F0;
          max-width: 560px;
          margin: 0 auto;
        }
        .p-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #64748B;
        }
        .p-trust-sep {
          width: 1px; height: 22px;
          background: #E2E8F0;
        }
      `}</style>
    </div>
  );
}
