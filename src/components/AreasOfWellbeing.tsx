import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Eye, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Activity, 
  Sun
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AreasOfWellbeing: React.FC = () => {
  const { t } = useLanguage();

  const areas = [
    {
      title: t('area1_title'),
      icon: <Heart style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area1_desc')
    },
    {
      title: t('area2_title'),
      icon: <Eye style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area2_desc')
    },
    {
      title: t('area3_title'),
      icon: <ShieldCheck style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area3_desc')
    },
    {
      title: t('area4_title'),
      icon: <TrendingUp style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area4_desc')
    },
    {
      title: t('area5_title'),
      icon: <Users style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area5_desc')
    },
    {
      title: t('area6_title'),
      icon: <Activity style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area6_desc')
    },
    {
      title: t('area7_title'),
      icon: <Sun style={{ width: '26px', height: '26px', color: '#B8956A' }} />,
      desc: t('area7_desc')
    }
  ];

  return (
    <section
      id="areas"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'url(/images/hero_waterfall.png)',
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
          background: 'linear-gradient(180deg, rgba(18, 24, 19, 0.92) 0%, rgba(35, 45, 36, 0.88) 60%, rgba(18, 24, 19, 0.95) 100%)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}
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
            {t('areas_tag')}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginTop: '6px',
              marginBottom: '16px'
            }}
          >
            {t('areas_title')}
          </h2>
          <div className="gold-line" style={{ width: '80px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.7 }}>
            {t('areas_sub')}
          </p>
        </motion.div>

        {/* 7 Glassmorphic Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                backgroundColor: 'rgba(26, 34, 27, 0.72)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(184, 149, 106, 0.3)',
                padding: '36px 28px',
                borderRadius: '6px',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: '0 15px 35px rgba(0,0,0,0.25)'
              }}
              whileHover={{
                y: -6,
                borderColor: '#B8956A',
                backgroundColor: 'rgba(32, 42, 33, 0.88)',
                boxShadow: '0 25px 45px rgba(0,0,0,0.4)'
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#B8956A',
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  boxShadow: '0 0 10px rgba(184, 149, 106, 0.8)'
                }}
              />

              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(184, 149, 106, 0.15)',
                  border: '1px solid rgba(184, 149, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {area.icon}
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: '22px',
                  color: '#F5F1E8',
                  marginBottom: '10px',
                  fontWeight: 600
                }}
              >
                {area.title}
              </h3>

              <p style={{ fontSize: '14.5px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.7, margin: 0 }}>
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
