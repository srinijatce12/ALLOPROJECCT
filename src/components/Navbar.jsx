import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ brand, otherProduct, otherProductUrl, menuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <img 
            src={brand === 'Allokonnect' ? '/allokonnect-icon.png' : '/allobaby-icon.png'} 
            alt={`${brand} Logo`} 
            style={{ height: '44px', width: '44px', objectFit: 'cover', borderRadius: '11px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} 
          />
          {brand}
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          
          <Link to={otherProductUrl} className="nav-switch-btn">
            {otherProduct} <ArrowRight size={14} />
          </Link>
          
          <a href="#download" className="nav-cta btn btn-primary">
            Download
          </a>
        </div>

        {/* Mobile Hamburger toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link 
            to={otherProductUrl} 
            className="mobile-link switch-link"
            onClick={() => setIsOpen(false)}
          >
            Switch to {otherProduct} <ArrowRight size={14} />
          </Link>
          <a 
            href="#download" 
            className="btn btn-primary w-full"
            onClick={() => setIsOpen(false)}
          >
            Download App
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
          font-family: 'Inter', sans-serif;
        }

        .navbar.scrolled {
          padding: 12px 0;
          background: rgba(248, 250, 252, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.3px;
        }

        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--theme-gradient-primary);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          font-weight: 500;
          font-size: 15px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--theme-primary);
        }

        .nav-switch-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 14px;
          color: var(--theme-primary);
          text-decoration: none;
          padding: 8px 16px;
          background-color: var(--theme-primary-light);
          border-radius: var(--border-radius-full);
          transition: all var(--transition-fast);
        }

        .nav-switch-btn:hover {
          background-color: var(--theme-primary);
          color: #ffffff;
        }

        .nav-cta.btn {
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 600;
          background: linear-gradient(135deg, #2563EB, #0EA5E9);
          color: white;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
          transition: all 0.3s ease;
        }
        .nav-cta.btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.35);
        }

        .nav-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .nav-toggle {
            display: none;
          }
        }

        .nav-mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid var(--border-light);
          padding: 24px;
          transform: translateY(-120%);
          transition: transform var(--transition-normal);
          z-index: 999;
          box-shadow: var(--shadow-md);
        }

        .nav-mobile-drawer.open {
          transform: translateY(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-link {
          font-weight: 600;
          font-size: 16px;
          color: var(--text-dark);
          text-decoration: none;
        }

        .mobile-link.switch-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--theme-primary);
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
