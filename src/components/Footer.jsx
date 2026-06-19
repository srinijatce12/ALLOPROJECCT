import React from 'react';
import { Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom inline SVG icons for brands (removed in recent lucide versions)
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Footer({ brand, description, sisterProduct, sisterProductUrl }) {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Block */}
        <div className="footer-brand-block">
          <Link to="/" className="footer-brand-logo">
            <span className="brand-dot"></span>
            {brand}
          </Link>
          <p className="footer-brand-desc">{description}</p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" className="social-link" aria-label="Github"><GithubIcon /></a>
            <a href="#" className="social-link" aria-label="Mail"><Mail size={18} /></a>
          </div>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
          </ul>
        </div>

        {/* Links Column 2: Legal */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links-list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Medical Disclaimer</a></li>
            <li><a href="#">Security Info</a></li>
          </ul>
        </div>

        {/* Links Column 3: Sister Products */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Sister Products</h4>
          <ul className="footer-links-list">
            <li><Link to={sisterProductUrl}>Go to {sisterProduct}</Link></li>
            <li><Link to="/">Portal Mainpage</Link></li>
          </ul>
        </div>

        {/* Links Column 4: Contact */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact-block">
            <p className="footer-contact-address">
              Door No. 38, Arunachala Arcade,<br />
              TPK Road, Pasumalai, Madurai,<br />
              Tamil Nadu 625004
            </p>
            <ul className="footer-links-list" style={{ marginTop: '16px' }}>
              <li><a href="mailto:admin@savemom.app">admin@savemom.app</a></li>
              <li><a href="tel:+918095207092">+91 80952 07092</a></li>
              <li><a href="https://savemom.in" target="_blank" rel="noopener noreferrer">savemom.in</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">&copy; {new Date().getFullYear()} {brand}. All rights reserved.</p>
          <p className="crafted-by">
            Made with <Heart size={12} fill="red" color="red" /> for modern healthcare.
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #0f172a;
          color: #94a3b8;
          padding: 80px 0 0 0;
          border-top: 1px solid #1e293b;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-container {
            grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr;
          }
        }

        .footer-contact-address {
          font-size: 14px;
          line-height: 1.7;
          color: #94a3b8;
        }

        .footer-brand-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-brand-logo {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .footer-brand-logo .brand-dot {
          background: var(--theme-gradient-primary);
        }

        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 280px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #1e293b;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          text-decoration: none;
        }

        .social-link:hover {
          background-color: var(--theme-primary);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-heading {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          font-size: 14px;
          color: #94a3b8;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: #ffffff;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #1e293b;
          padding: 24px 0;
        }

        .footer-bottom-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .footer-bottom-container {
            flex-direction: row;
          }
        }

        .copyright, .crafted-by {
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </footer>
  );
}
