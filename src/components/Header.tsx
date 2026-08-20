import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'welcome', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'approach', label: 'APPROACH' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        backgroundColor: isScrolled ? 'rgba(20, 27, 21, 0.96)' : 'rgba(16, 22, 17, 0.65)',
        backdropFilter: 'blur(14px)',
        boxShadow: isScrolled ? '0 12px 35px rgba(0,0,0,0.4)' : 'none',
        padding: isScrolled ? '8px 0' : '14px 0',
        borderBottom: isScrolled ? '1px solid rgba(184, 149, 106, 0.3)' : '1px solid rgba(245, 241, 232, 0.12)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Large Prominent Logo-2 */}
        <div 
          onClick={() => handleLinkClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/images/logo-2.png"
            alt="Aavira Wellness Logo"
            style={{
              height: isScrolled ? '62px' : '78px',
              width: 'auto',
              maxHeight: '85px',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.6))'
            }}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#B8956A' : '#F5F1E8',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  textTransform: 'uppercase'
                }}
              >
                {link.label}
                {/* Active Underline Indicator */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    backgroundColor: '#B8956A',
                    width: isActive ? '100%' : '0%',
                    transition: 'width 0.3s ease'
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-cta">
          <button 
            onClick={onOpenBooking}
            className="btn-bronze"
            style={{ padding: '12px 24px', fontSize: '11px' }}
          >
            <Calendar style={{ width: '15px', height: '15px' }} />
            Book Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#F5F1E8',
            cursor: 'pointer',
            padding: '8px',
            display: 'block'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} style={{ color: '#B8956A' }} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(20, 27, 21, 0.98)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 30px',
            gap: '24px',
            zIndex: 999,
            borderTop: '1px solid rgba(184, 149, 106, 0.2)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === link.id ? '#B8956A' : '#F5F1E8',
                fontSize: '18px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                letterSpacing: '2px',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.label}
            </button>
          ))}

          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="btn-bronze"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar style={{ width: '16px', height: '16px' }} />
              Book Consultation
            </button>
          </div>
        </div>
      )}

      {/* Inline styles for media query responsive header */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
