import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DayWithThyselfProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const DayWithThyself: React.FC<DayWithThyselfProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const suitabilityPoints = [
    t('day_point1'),
    t('day_point2'),
    t('day_point3'),
    t('day_point4'),
    t('day_point5'),
    t('day_point6')
  ];

  return (
    <section
      id="day-with-thyself"
      className="section-padding"
      style={{
        backgroundColor: '#172018',
        color: '#F5F1E8',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(184, 149, 106, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}
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
            {t('day_tag')}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(36px, 4.8vw, 58px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '12px'
            }}
          >
            {t('day_title')}
          </h2>
          <p 
            className="font-serif"
            style={{ 
              fontSize: 'clamp(20px, 2.4vw, 26px)', 
              color: '#D4B892', 
              fontStyle: 'italic', 
              marginBottom: '20px',
              fontWeight: 400
            }}
          >
            {t('day_sub')}
          </p>
          <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />
          <p style={{ fontSize: '17px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.8 }}>
            {t('day_desc')}
          </p>
        </motion.div>

        {/* 2-Column Split: Sanctuary Photography & Detailed Program */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '60px'
          }}
        >
          {/* Left Column: Arched Photography Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '160px 160px 12px 12px',
                overflow: 'hidden',
                border: '1.5px solid rgba(184, 149, 106, 0.4)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.45)',
                position: 'relative'
              }}
            >
              <img
                src="/images/day_with_thyself_sanctuary.png"
                alt="A Day With Thyself Wellness Sanctuary"
                style={{
                  width: '100%',
                  height: '540px',
                  objectFit: 'cover',
                  filter: 'brightness(0.96) contrast(1.04)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(23, 32, 24, 0.6) 0%, transparent 60%)'
                }}
              />
            </div>

            {/* Floating Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'rgba(26, 35, 27, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #B8956A',
                borderRadius: '4px',
                padding: '16px 24px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Sparkles style={{ width: '22px', height: '22px', color: '#B8956A' }} />
              <div>
                <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#B8956A', textTransform: 'uppercase', display: 'block', fontWeight: 600 }}>
                  {t('day_retreat_tag')}
                </span>
                <span style={{ fontSize: '14px', color: '#F5F1E8', fontWeight: 600 }}>
                  {t('day_retreat_sub')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Immersive Program Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div
              style={{
                backgroundColor: 'rgba(26, 35, 27, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(184, 149, 106, 0.3)',
                borderLeft: '4px solid #B8956A',
                padding: '36px',
                borderRadius: '6px',
                boxShadow: '0 20px 45px rgba(0,0,0,0.3)'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '28px', color: '#F5F1E8', marginBottom: '18px', fontWeight: 600 }}>
                {t('day_sec_title')}
              </h3>

              <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.85, marginBottom: '16px' }}>
                {t('day_sec_p1')}
              </p>

              <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
                {t('day_sec_p2')}
              </p>

              <div 
                style={{ 
                  backgroundColor: 'rgba(184, 149, 106, 0.12)', 
                  border: '1px solid rgba(184, 149, 106, 0.3)',
                  padding: '16px 20px',
                  borderRadius: '4px',
                  marginBottom: '28px'
                }}
              >
                <p style={{ fontSize: '13.5px', color: '#D4B892', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  {t('day_sec_note')}
                </p>
              </div>

              {/* Suitability Points Header */}
              <h4 className="font-serif" style={{ fontSize: '20px', color: '#F5F1E8', marginBottom: '16px', fontWeight: 600 }}>
                {t('day_sec_if')}
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '28px' }}>
                {suitabilityPoints.map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 style={{ width: '18px', height: '18px', color: '#B8956A', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.5 }}>{point}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking(t('day_title'))}
                className="btn-bronze"
                style={{ width: '100%', padding: '16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                <Calendar style={{ width: '18px', height: '18px' }} />
                <span>{t('day_btn')}</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Clean, Professionally Aligned Invitation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(26, 35, 27, 0.85)',
            backdropFilter: 'blur(14px)',
            border: '1.5px solid #B8956A',
            borderRadius: '8px',
            padding: '42px 32px',
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)'
          }}
        >
          {/* Top Sparkle Icon Accent */}
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(184, 149, 106, 0.15)',
              border: '1px solid rgba(184, 149, 106, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}
          >
            <Sparkles style={{ width: '22px', height: '22px', color: '#B8956A' }} />
          </div>

          <h4
            className="font-serif"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 38px)',
              color: '#B8956A',
              marginBottom: '14px',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}
          >
            {t('day_inv_title')}
          </h4>

          <div className="gold-line" style={{ width: '60px', margin: '0 auto 20px auto' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <p className="font-serif" style={{ fontSize: 'clamp(19px, 2.2vw, 24px)', color: '#F5F1E8', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              {t('day_inv_l1')}
            </p>
            <p className="font-serif" style={{ fontSize: 'clamp(19px, 2.2vw, 24px)', color: '#F5F1E8', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              {t('day_inv_l2')}
            </p>
            <p className="font-serif" style={{ fontSize: 'clamp(19px, 2.2vw, 24px)', color: '#F5F1E8', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
              {t('day_inv_l3')}
            </p>
          </div>

          <div
            style={{
              marginTop: '22px',
              padding: '16px 24px',
              backgroundColor: 'rgba(184, 149, 106, 0.14)',
              border: '1px solid rgba(184, 149, 106, 0.35)',
              borderRadius: '4px',
              display: 'inline-block'
            }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(19px, 2.4vw, 25px)',
                color: '#D4B892',
                fontWeight: 600,
                margin: 0,
                letterSpacing: '0.3px'
              }}
            >
              {t('day_inv_final')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
