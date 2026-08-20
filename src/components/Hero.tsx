import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Compass, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
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
          poster="/images/hero_waterfall.png"
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

      {/* Light Overlay Gradient (Keeps left text readable while revealing bright video) */}
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '720px', textAlign: 'left' }}
        >
          {/* Eyebrow Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '14px',
              marginBottom: '20px'
            }}
          >
            <span 
              style={{ 
                width: '50px', 
                height: '1.5px', 
                backgroundColor: '#B8956A', 
                display: 'inline-block',
                boxShadow: '0 0 10px rgba(184, 149, 106, 0.6)'
              }} 
            />
            <span 
              style={{ 
                color: '#D4B892', 
                fontSize: '11px', 
                fontWeight: 600, 
                letterSpacing: '3.5px', 
                textTransform: 'uppercase',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)'
              }}
            >
              INTEGRATIVE WELLNESS & INNER WELLBEING
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              color: '#F5F1E8',
              lineHeight: 1.12,
              fontWeight: 500,
              marginBottom: '24px',
              textShadow: '0 4px 30px rgba(0,0,0,0.85)',
              letterSpacing: '-0.5px'
            }}
          >
            A Space to Pause.{' '}
            <span 
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'normal',
                color: '#B8956A', 
                display: 'block', 
                fontSize: '1.02em', 
                fontWeight: 600, 
                letterSpacing: '1px',
                marginTop: '4px',
                textShadow: '0 4px 25px rgba(184, 149, 106, 0.5), 0 2px 15px rgba(0,0,0,0.9)'
              }}
            >
              Reflect. Reconnect.
            </span>
          </motion.h1>

          {/* Body Description Text (Clean, no black box container) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              maxWidth: '680px',
              marginBottom: '40px'
            }}
          >
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(245, 241, 232, 0.95)',
                lineHeight: 1.8,
                marginBottom: '16px',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0,0,0,0.9)'
              }}
            >
              At Aavira, we create a safe, compassionate and non-judgemental space to help you slow down, understand yourself and explore meaningful ways forward.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: '#D4B892',
                lineHeight: 1.75,
                margin: 0,
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0,0,0,0.9)'
              }}
            >
              Through an integrated approach to psychological wellbeing, mind-body balance and personal development, we support you in reconnecting with yourself and moving towards greater awareness and wellbeing.
            </p>
          </motion.div>

          {/* Dual Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
          >
            <motion.button 
              onClick={onOpenBooking} 
              whileHover={{ scale: 1.04, boxShadow: '0 15px 35px rgba(184, 149, 106, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #C5A075 0%, #B8956A 50%, #9E7B52 100%)',
                color: '#161D17',
                padding: '18px 36px',
                borderRadius: '4px',
                border: '1px solid #E2CAAA',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 12px 30px rgba(184, 149, 106, 0.35), inset 0 1px 0 rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              <Calendar style={{ width: '18px', height: '18px' }} />
              <span>BOOK A CONSULTATION</span>
              <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
            </motion.button>

            <motion.button 
              onClick={onExploreServices} 
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(184, 149, 106, 0.2)', borderColor: '#B8956A' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                color: '#F5F1E8',
                padding: '18px 36px',
                borderRadius: '4px',
                border: '1px solid rgba(184, 149, 106, 0.6)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <Compass style={{ width: '18px', height: '18px', color: '#B8956A' }} />
              <span>EXPLORE OUR SERVICES</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          opacity: 0.8
        }}
        onClick={onExploreServices}
      >
        <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#D4B892', textTransform: 'uppercase' }}>
          SCROLL
        </span>
        <div style={{ width: '1px', height: '24px', backgroundColor: '#B8956A' }} />
      </motion.div>
    </section>
  );
};
