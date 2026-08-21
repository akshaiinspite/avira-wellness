import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const isMl = language === 'ml';

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
    { id: 'home', label: t('nav_home') },
    { id: 'about', label: t('nav_about') },
    { id: 'services', label: t('nav_services') },
    { id: 'approach', label: t('nav_approach') },
    { id: 'contact', label: t('nav_contact') },
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
        backgroundColor: isScrolled ? 'rgba(20, 27, 21, 0.96)' : 'rgba(16, 22, 17, 0.75)',
        backdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? '0 12px 35px rgba(0,0,0,0.4)' : 'none',
        padding: isScrolled ? '6px 0' : '12px 0',
        borderBottom: isScrolled ? '1px solid rgba(184, 149, 106, 0.3)' : '1px solid rgba(245, 241, 232, 0.12)',
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Prominent Logo */}
        <div 
          onClick={() => handleLinkClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <img
            src="/images/logo-2.png"
            alt="Aavira Wellness Logo"
            style={{
              height: isScrolled ? '56px' : '72px',
              width: 'auto',
              maxHeight: '80px',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.6))'
            }}
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            gap: isMl ? 'clamp(12px, 1.6vw, 26px)' : 'clamp(16px, 2.2vw, 32px)', 
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap'
          }} 
          className="desktop-nav"
        >
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
                  fontSize: isMl ? '13px' : '12px',
                  fontWeight: isActive ? 700 : 600,
                  letterSpacing: isMl ? '0px' : '1.5px',
                  cursor: 'pointer',
                  padding: '6px 0',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  textTransform: isMl ? 'none' : 'uppercase',
                  whiteSpace: 'nowrap',
                  lineHeight: 1.3
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

        {/* Desktop CTA & Language Dropdown */}
        <div style={{ display: 'none', alignItems: 'center', gap: '14px', flexShrink: 0 }} className="desktop-cta">
          {/* Language Selector Dropdown */}
          <div 
            style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              backgroundColor: 'rgba(184, 149, 106, 0.14)', 
              border: '1px solid rgba(184, 149, 106, 0.4)', 
              borderRadius: '30px', 
              padding: '6px 14px',
              transition: 'all 0.3s ease'
            }}
          >
            <Globe style={{ width: '15px', height: '15px', color: '#B8956A', flexShrink: 0 }} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              style={{
                backgroundColor: 'transparent',
                color: '#F5F1E8',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                paddingRight: '2px'
              }}
            >
              <option value="en" style={{ backgroundColor: '#1C261D', color: '#F5F1E8' }}>English</option>
              <option value="ml" style={{ backgroundColor: '#1C261D', color: '#F5F1E8' }}>മലയാളം</option>
            </select>
          </div>

          {/* Book Consultation Button */}
          <button 
            onClick={onOpenBooking}
            className="btn-bronze"
            style={{ 
              padding: isMl ? '10px 18px' : '11px 22px', 
              fontSize: isMl ? '11.5px' : '11px',
              whiteSpace: 'nowrap',
              letterSpacing: isMl ? '0px' : '1px'
            }}
          >
            <Calendar style={{ width: '14px', height: '14px', flexShrink: 0 }} />
            <span>{t('nav_book')}</span>
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
            top: '75px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(20, 27, 21, 0.98)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 24px',
            gap: '16px',
            zIndex: 999,
            borderTop: '1px solid rgba(184, 149, 106, 0.2)',
            overflowY: 'auto'
          }}
        >
          {/* Mobile Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid rgba(184, 149, 106, 0.2)' }}>
            <span style={{ fontSize: '13px', color: '#B8956A', fontWeight: 600, letterSpacing: '1px' }}>LANGUAGE / ഭാഷ</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(184, 149, 106, 0.18)', border: '1px solid rgba(184, 149, 106, 0.45)', borderRadius: '20px', padding: '6px 14px' }}>
              <Globe style={{ width: '15px', height: '15px', color: '#B8956A' }} />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#F5F1E8',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="en" style={{ backgroundColor: '#1C261D', color: '#F5F1E8' }}>English</option>
                <option value="ml" style={{ backgroundColor: '#1C261D', color: '#F5F1E8' }}>മലയാളം</option>
              </select>
            </div>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === link.id ? '#B8956A' : '#F5F1E8',
                fontSize: '17px',
                fontFamily: isMl ? 'inherit' : 'var(--font-serif)',
                fontWeight: activeSection === link.id ? 700 : 500,
                letterSpacing: isMl ? '0px' : '1.5px',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.label}
            </button>
          ))}

          <div style={{ marginTop: '16px' }}>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="btn-bronze"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: isMl ? '12.5px' : '11.5px' }}
            >
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span>{t('nav_book')}</span>
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
