import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface WelcomeSectionProps {
  onOpenBooking: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'url(/images/welcome_journey_inward.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#F5F1E8',
        overflow: 'hidden'
      }}
    >
      {/* Dark Sage Overlay Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18, 25, 19, 0.9) 0%, rgba(30, 39, 31, 0.85) 50%, rgba(18, 25, 19, 0.94) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Top Header & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '920px',
            margin: '0 auto 70px auto',
            textAlign: 'center'
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
              marginBottom: '12px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            {t('welcome_tag')}
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 54px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.85)'
            }}
          >
            {t('welcome_title')}
          </h2>

          <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />

          <p 
            style={{ 
              fontSize: '17px', 
              color: 'rgba(245, 241, 232, 0.95)', 
              lineHeight: 1.85, 
              marginBottom: '20px',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)'
            }}
          >
            {t('welcome_desc1')}
          </p>

          <p 
            style={{ 
              fontSize: '16.5px', 
              color: 'rgba(245, 241, 232, 0.88)', 
              lineHeight: 1.8, 
              marginBottom: '32px',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)'
            }}
          >
            {t('welcome_desc2')}
          </p>

          <div
            style={{
              backgroundColor: 'rgba(184, 149, 106, 0.16)',
              border: '1px solid rgba(184, 149, 106, 0.45)',
              backdropFilter: 'blur(10px)',
              padding: '16px 32px',
              borderRadius: '6px',
              display: 'inline-block',
              boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
            }}
          >
            <span
              className="font-serif"
              style={{
                fontSize: 'clamp(17px, 2vw, 22px)',
                color: '#B8956A',
                fontWeight: 600,
                letterSpacing: '2.5px'
              }}
            >
              {t('welcome_badge')}
            </span>
          </div>
        </motion.div>

        {/* Founder Feature Block: MEET AFEEFA M. P. */}
        <div
          className="responsive-card-padding responsive-grid-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
            alignItems: 'center',
            backgroundColor: 'rgba(22, 30, 23, 0.75)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(184, 149, 106, 0.3)',
            borderRadius: '8px',
            padding: '48px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.35)'
          }}
        >
          {/* Left Column: Founder Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid rgba(184, 149, 106, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
            >
              <img
                src="/images/kerala_banyan_sanctuary.png"
                alt="Kerala style traditional Banyan Tree Wellness Sanctuary - Afeefa Founder at Aavira"
                className="responsive-img-height"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.96) contrast(1.02)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26, 35, 27, 0.7) 0%, transparent 60%)'
                }}
              />
            </div>
            
            {/* Gold Frame Accent Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-15px',
                width: '100px',
                height: '100px',
                borderRight: '2px solid #B8956A',
                borderBottom: '2px solid #B8956A',
                pointerEvents: 'none'
              }}
            />
          </motion.div>

          {/* Right Column: Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '2.5px',
                color: '#B8956A',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              {t('founder1_tag')}
            </span>

            <h3
              className="font-serif"
              style={{
                fontSize: '32px',
                color: '#F5F1E8',
                fontWeight: 600,
                marginBottom: '6px'
              }}
            >
              {t('founder1_title')}
            </h3>

            {/* Credentials Tag */}
            <p
              style={{
                fontSize: '13px',
                color: '#D4B892',
                fontWeight: 500,
                letterSpacing: '0.5px',
                lineHeight: 1.6,
                marginBottom: '20px',
                borderBottom: '1px solid rgba(184, 149, 106, 0.25)',
                paddingBottom: '16px'
              }}
            >
              {t('founder1_creds')}
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.8, marginBottom: '16px' }}>
              {t('founder1_p1')}
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.8, marginBottom: '16px' }}>
              {t('founder1_p2')}
            </p>

            <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.8, marginBottom: '28px' }}>
              {t('founder1_p3')}
            </p>

            <button
              onClick={onOpenBooking}
              className="btn-bronze"
              style={{ padding: '16px 36px' }}
            >
              {t('founder1_btn')}
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
