import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/shivay-construction' },
    { name: 'About Us', path: '/shivay-construction/about' },
    { name: 'Services', path: '/shivay-construction/services' },
    { name: 'Projects', path: '/shivay-construction/projects' },
    { name: 'Contact', path: '/shivay-construction/contact' }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/shivay-construction" className="logo">
          <svg viewBox="0 0 24 24" className="logo-icon">
            {/* Custom abstract railway construction logo */}
            <path d="M2 17h20v2H2zm2-2l2-5h12l2 5zm8-10L6 10h12z" fill="var(--accent)" />
          </svg>
          <span className="logo-text">SHIVAY <span className="logo-subtext">CONSTRUCTION</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="/shivay-construction/contact" className="btn btn-primary nav-cta">
            Tender Inquiry
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/shivay-construction/contact"
              className="btn btn-primary mobile-nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Tender Inquiry
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          transition: all var(--transition-normal);
          border-bottom: 1px solid transparent;
          background: transparent;
        }

        .site-header.scrolled {
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-dark);
          height: 70px;
        }

        .header-container {
          max-width: var(--max-width);
          height: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 1px;
          color: var(--text-light);
        }

        .logo-icon {
          width: 28px;
          height: 28px;
        }

        .logo-subtext {
          font-weight: 400;
          font-size: 0.85rem;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-title);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-light-muted);
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: width var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-light);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          padding: 0.5rem 1.25rem;
          font-size: 0.9rem;
        }

        /* Mobile hamburger button */
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          z-index: 1100;
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--text-light);
          transition: all var(--transition-fast);
        }

        /* Hambuger active animation */
        .mobile-menu-btn.active .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .mobile-menu-btn.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.active .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Nav Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: var(--primary);
          box-shadow: -5px 0 25px rgba(0,0,0,0.5);
          padding: calc(var(--header-height) + 2rem) 2rem 2rem;
          transition: right var(--transition-normal);
          z-index: 1050;
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-link {
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 1.2rem;
          color: var(--text-light-muted);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.5rem;
        }

        .mobile-nav-link:hover {
          color: var(--accent);
        }

        .mobile-nav-cta {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
