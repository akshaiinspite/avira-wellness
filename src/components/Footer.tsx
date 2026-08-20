import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const quickLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'CONTACT', href: '#contact' }
  ];

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
            maxWidth: '840px',
            margin: '0 auto 70px auto',
            boxShadow: '0 25px 55px rgba(0,0,0,0.35)'
          }}
        >
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              letterSpacing: '3.5px', 
              color: '#B8956A', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            CONTACT PREVIEW
          </span>
          <h3 className="font-serif" style={{ fontSize: 'clamp(30px, 4vw, 42px)', color: '#F5F1E8', fontWeight: 500, marginBottom: '14px' }}>
            Let's Begin With a Conversation
          </h3>
          <div className="gold-line" style={{ width: '70px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.75, marginBottom: '28px' }}>
            Have a question or want to understand which approach may be right for you? Reach out to Aavira to discuss your needs and explore the next step.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn-bronze"
              style={{ padding: '14px 28px', fontSize: '12px' }}
            >
              <Phone style={{ width: '16px', height: '16px' }} />
              <span>REACH OUT TO AAVIRA</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </button>

            <a
              href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ padding: '14px 28px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <MessageCircle style={{ width: '16px', height: '16px', color: '#25D366' }} />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </motion.div>

        {/* 3 Columns Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
            marginBottom: '60px'
          }}
        >
          {/* Col 1: Official Brand Logo-2 & Founder */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/images/logo-2.png"
                alt="Aavira Wellness Logo"
                style={{
                  height: '92px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.6))'
                }}
              />
            </div>
            <p style={{ fontSize: '12px', letterSpacing: '2px', color: '#B8956A', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 600 }}>
              Integrative Wellness & Inner Wellbeing
            </p>
            <p style={{ fontSize: '14.5px', color: '#D4B892', fontWeight: 500, marginBottom: '12px' }}>
              Afeefa M. P. — Founder & Wellness Practitioner
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(245, 241, 232, 0.75)', lineHeight: 1.7 }}>
              Creating a compassionate, non-judgemental space to pause, reflect, understand yourself and move towards meaningful personal transformation.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '20px', color: '#B8956A', marginBottom: '20px', letterSpacing: '1px', fontWeight: 600 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(245, 241, 232, 0.85)',
                      textDecoration: 'none',
                      fontSize: '13px',
                      letterSpacing: '2px',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#B8956A';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(245, 241, 232, 0.85)';
                      e.currentTarget.style.transform = 'translateX(0px)';
                    }}
                  >
                    <span style={{ color: '#B8956A', fontSize: '12px' }}>›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '20px', color: '#B8956A', marginBottom: '20px', letterSpacing: '1px', fontWeight: 600 }}>
              Wellness Sanctuary Location
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <MapPin style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <span style={{ fontSize: '13.5px', color: 'rgba(245, 241, 232, 0.85)', lineHeight: 1.6 }}>
                  54/1059, Ground Floor, Valuers Building, Bhattatiripadu Road, Near Jawahar Nagar, Elamkulam, Kadavanthara, Kaloor S.O, Kaloor, Ernakulam, Kerala – 682017
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <Phone style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  style={{ background: 'none', border: 'none', color: '#D4B892', cursor: 'pointer', fontSize: '14px', padding: 0, textDecoration: 'underline' }}
                >
                  WhatsApp / Call Us
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <Mail style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <a href="mailto:contact@aavirawellness.com" style={{ color: '#D4B892', textDecoration: 'underline', fontSize: '14px' }}>
                  Email Us
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(184, 149, 106, 0.15)', border: '1px solid rgba(184, 149, 106, 0.3)', flexShrink: 0 }}>
                  <Navigation style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#B8956A', textDecoration: 'underline', fontSize: '13.5px', fontWeight: 600 }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(184, 149, 106, 0.15)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: 'rgba(245, 241, 232, 0.5)'
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Aavira Wellness. All rights reserved.</p>
          <p style={{ margin: 0 }}>Integrative Wellness & Inner Wellbeing | Afeefa M. P.</p>
        </div>

      </div>
    </footer>
  );
};
