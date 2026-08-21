import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const PhilosophyBanner: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Background zoom parallax and line width transform
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const lineWidth = useTransform(scrollYProgress, [0.3, 0.6], ['0px', '160px']);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      style={{
        position: 'relative',
        minHeight: '540px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#F5F1E8',
        textAlign: 'center',
        padding: '100px 24px'
      }}
    >
      {/* Background Photography Layer with Scroll Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/philosophy_nature_reflection.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale: bgScale,
          zIndex: 1
        }}
      />

      {/* Dark Sage Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(18, 25, 19, 0.9) 0%, rgba(38, 48, 39, 0.88) 50%, rgba(18, 25, 19, 0.92) 100%)',
          zIndex: 2
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '920px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '2px' }}
            whileInView={{ opacity: 1, letterSpacing: '4px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#B8956A',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px'
            }}
          >
            {t('philo_tag')}
          </motion.span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.18,
              fontWeight: 600,
              marginBottom: '24px',
              color: '#F5F1E8',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            {t('philo_title')}
          </h2>

          {/* Dynamic Gold Line Expand Scroll Animation */}
          <motion.div
            style={{ 
              height: '2px',
              backgroundColor: '#B8956A',
              margin: '0 auto 24px auto',
              boxShadow: '0 0 12px rgba(184, 149, 106, 0.8)',
              width: lineWidth
            }}
          />

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif"
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              color: '#D4B892',
              marginBottom: '28px',
              fontWeight: 500,
              letterSpacing: '1px'
            }}
          >
            {t('philo_sub')}
          </motion.p>

          <p
            style={{
              fontSize: '17.5px',
              color: 'rgba(245, 241, 232, 0.9)',
              lineHeight: 1.85,
              maxWidth: '750px',
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            {t('philo_desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
