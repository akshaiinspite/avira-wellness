import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Compass, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax transforms for video background and hero text content
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '-60px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        paddingTop: '110px',
        paddingBottom: '80px',
        background: '#141A15'
      }}
    >
      {/* Background Video Layer with Smooth Scroll Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: videoY,
          zIndex: 1
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            transform: 'scale(1.35)',
            transformOrigin: 'center center',
            filter: 'brightness(1.02) contrast(1.05)'
          }}
        >
          <source src="/hero%20video.mp4" type="video/mp4" />
          <source src="/hero video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Light Overlay Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(12, 17, 13, 0.8) 0%, rgba(14, 20, 15, 0.5) 45%, rgba(12, 17, 13, 0.25) 100%)',
          zIndex: 2
        }}
      />

      {/* Soft Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 50%, transparent 40%, rgba(12, 17, 13, 0.45) 100%)',
          pointerEvents: 'none',
          zIndex: 3
        }}
      />

      {/* Main Content Container with Scroll Parallax */}
      <motion.div 
        className="container hero-container-left" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          maxWidth: '1320px',
          width: '100%',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 7vw, 100px)',
          paddingRight: '24px',
          y: contentY,
          opacity: contentOpacity
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              marginBottom: '20px',
              backgroundColor: 'rgba(20, 27, 21, 0.45)',
              padding: '8px 18px',
              borderRadius: '30px',
              border: '1px solid rgba(184, 149, 106, 0.35)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#B8956A', display: 'inline-block' }} />
            <span 
              style={{ 
                fontSize: '11px', 
                fontWeight: 600, 
                letterSpacing: '3px', 
                color: '#D4B892', 
                textTransform: 'uppercase'
              }}
            >
              {t('hero_tag')}
            </span>
          </motion.div>

          {/* Hero Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 68px)',
              lineHeight: 1.15,
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '24px',
              letterSpacing: '-0.5px',
              textShadow: '0 4px 25px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            {t('hero_headline')}
          </motion.h1>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(245, 241, 232, 0.95)',
              marginBottom: '40px',
              maxWidth: '680px',
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(0,0,0,0.85)'
            }}
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              alignItems: 'center'
            }}
          >
            {/* Primary Action Button */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(184, 149, 106, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="btn-bronze"
              style={{
                padding: '18px 38px',
                fontSize: '12px',
                letterSpacing: '2.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span>{t('hero_btn_book')}</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </motion.button>

            {/* Secondary Action Button */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(245, 241, 232, 0.12)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreServices}
              className="btn-outline"
              style={{
                padding: '18px 38px',
                fontSize: '12px',
                letterSpacing: '2.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                borderColor: 'rgba(245, 241, 232, 0.6)'
              }}
            >
              <Compass style={{ width: '16px', height: '16px' }} />
              <span>{t('hero_btn_explore')}</span>
            </motion.button>
          </motion.div>

        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
        onClick={onExploreServices}
      >
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#D4B892', textTransform: 'uppercase', fontWeight: 600 }}>
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: '20px',
            height: '32px',
            borderRadius: '12px',
            border: '1.5px solid rgba(184, 149, 106, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px'
          }}
        >
          <div style={{ width: '3px', height: '6px', borderRadius: '2px', backgroundColor: '#B8956A' }} />
        </motion.div>
      </motion.div>

      {/* Responsive Inline Styles for Left Alignment */}
      <style>{`
        @media (max-width: 768px) {
          .hero-container-left {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>

    </section>
  );
};
