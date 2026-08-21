import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigate }) => {
  const { language, t } = useLanguage();
  const isMl = language === 'ml';

  const quickLinks = [
    { name: t('nav_home'), id: 'home' },
    { name: t('nav_about'), id: 'about' },
    { name: t('nav_services'), id: 'services' },
    { name: t('nav_approach'), id: 'approach' },
    { name: t('nav_contact'), id: 'contact' }
  ];

  const address = "54/1059, Ground Floor, Valuers Building, Bhattatiripadu Road, Near Jawahar Nagar, Elamkulam, Kadavanthara, Kaloor S.O, Kaloor, Ernakulam, Kerala – 682017";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Aavira Wellness " + address)}`;

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#121813',
        color: '#F5F1E8',
        paddingTop: '90px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(184, 149, 106, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Radial Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(184, 149, 106, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Contact Preview Glass Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(26, 35, 27, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(184, 149, 106, 0.35)',
            borderTop: '3.5px solid #B8956A',
            borderRadius: '8px',
            padding: '48px 36px',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto 70px auto',
            boxShadow: '0 25px 55px rgba(0,0,0,0.35)'
          }}
        >
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              letterSpacing: isMl ? '0.5px' : '3.5px', 
              color: '#B8956A', 
              textTransform: isMl ? 'none' : 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            {t('footer_preview_tag')}
          </span>
          <h3 className="font-serif" style={{ fontSize: 'clamp(30px, 4vw, 42px)', color: '#F5F1E8', fontWeight: 500, marginBottom: '14px' }}>
            {t('footer_preview_title')}
          </h3>
          <div className="gold-line" style={{ width: '70px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.75, marginBottom: '28px' }}>
            {t('footer_preview_desc')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn-bronze"
              style={{ padding: '14px 28px', fontSize: '12px' }}
            >
              <Phone style={{ width: '16px', height: '16px' }} />
              <span>{t('hero_btn_book')}</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </button>

            <a
              href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ padding: '14px 28px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <MessageCircle style={{ width: '16px', height: '16px', color: '#25D366' }} />
              <span>{t('whatsapp_btn')}</span>
            </a>
          </div>
        </motion.div>

        {/* 3 Columns Grid Layout - Professionally Aligned */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
            marginBottom: '60px',
            alignItems: 'flex-start'
          }}
        >
          {/* Col 1: Prominent Large Brand Logo & Founder Info */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/images/logo-2.png"
                alt="Aavira Wellness Logo"
                style={{
                  height: '220px',
                  maxHeight: '260px',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.85))',
                  display: 'block'
                }}
              />
            </div>
            
            <p style={{ fontSize: '11.5px', letterSpacing: isMl ? '0px' : '2.5px', color: '#B8956A', textTransform: isMl ? 'none' : 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
              {t('footer_col1_title')}
            </p>
            
            <p style={{ fontSize: '14.5px', color: '#D4B892', fontWeight: 600, marginBottom: '10px' }}>
              Afeefa — Founder & Wellness Practitioner
            </p>
            
            <p style={{ fontSize: '14px', color: 'rgba(245, 241, 232, 0.75)', lineHeight: 1.7, maxWidth: '380px' }}>
              {t('welcome_desc2')}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div style={{ paddingTop: '10px' }}>
            <h4 className="font-serif" style={{ fontSize: '22px', color: '#B8956A', marginBottom: '20px', letterSpacing: '1px', fontWeight: 600 }}>
              {t('footer_col2_title')}
            </h4>
            
            <div className="gold-line" style={{ width: '40px', margin: '0 0 20px 0' }} />

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate(link.id);
                      } else {
                        const el = document.getElementById(link.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      color: 'rgba(245, 241, 232, 0.85)',
                      textDecoration: 'none',
                      fontSize: isMl ? '14px' : '13.5px',
                      letterSpacing: isMl ? '0px' : '1.5px',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B8956A';
                      e.currentTarget.style.transform = 'translateX(6px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(245, 241, 232, 0.85)';
                      e.currentTarget.style.transform = 'translateX(0px)';
                    }}
                  >
                    <span style={{ color: '#B8956A', fontSize: '14px' }}>›</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address Details */}
          <div style={{ paddingTop: '10px' }}>
            <h4 className="font-serif" style={{ fontSize: '22px', color: '#B8956A', marginBottom: '20px', letterSpacing: '1px', fontWeight: 600 }}>
              {t('footer_col3_title')}
            </h4>
            
            <div className="gold-line" style={{ width: '40px', margin: '0 0 20px 0' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <span style={{ fontSize: '13.5px', color: 'rgba(245, 241, 232, 0.85)', lineHeight: 1.6 }}>
                  54/1059, Ground Floor, Valuers Building, Bhattatiripadu Road, Near Jawahar Nagar, Elamkulam, Kadavanthara, Kaloor S.O, Kaloor, Ernakulam, Kerala – 682017
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <Phone style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <a
                  href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#D4B892', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}
                >
                  +91 98951 22295
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <Mail style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <a href="mailto:contact@aavirawellness.com" style={{ color: '#D4B892', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                  contact@aavirawellness.com
                </a>
              </div>

              {/* Google Maps Directions */}
              <div style={{ marginTop: '6px' }}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-bronze"
                  style={{ padding: '10px 20px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <Navigation style={{ width: '14px', height: '14px' }} />
                  <span>{t('footer_directions')}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(184, 149, 106, 0.2)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12.5px',
            color: 'rgba(245, 241, 232, 0.6)'
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {t('footer_copyright')}</p>
          <p style={{ margin: 0 }}>Integrative Wellness & Inner Wellbeing | Afeefa</p>
        </div>

      </div>
    </footer>
  );
};
