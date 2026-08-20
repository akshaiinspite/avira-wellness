import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeSectionProps {
  onOpenBooking: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenBooking }) => {
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
        
        {/* Top Header & Intro (Clean layout - Black square box removed) */}
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
            WELCOME TO AAVIRA
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.85)'
            }}
          >
            Your Journey Inward Begins Here
          </h2>

          <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />

          <p 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(20px, 2.3vw, 25px)', 
              color: '#D4B892', 
              fontStyle: 'italic', 
              marginBottom: '24px', 
              fontWeight: 400,
              textShadow: '0 2px 12px rgba(0,0,0,0.9)'
            }}
          >
            Life can often leave little space to pause and truly listen to ourselves.
          </p>

          <p 
            style={{ 
              fontSize: '17px', 
              color: 'rgba(245, 241, 232, 0.95)', 
              lineHeight: 1.85, 
              marginBottom: '20px',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)'
            }}
          >
            Aavira offers a dedicated space for reflection, self-awareness and personal wellbeing. Founded by <strong style={{ color: '#B8956A', fontWeight: 600 }}>Afeefa M. P.</strong>, Aavira brings together counselling psychology and complementary wellness practices to support the individual as a whole.
          </p>

          <p 
            style={{ 
              fontSize: '16.5px', 
              color: 'rgba(245, 241, 232, 0.88)', 
              lineHeight: 1.8, 
              marginBottom: '36px',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)'
            }}
          >
            Whether you are navigating emotional challenges, feeling mentally exhausted, seeking greater self-awareness, or simply looking for meaningful time with yourself, our approach begins with understanding where you are.
          </p>

          {/* Motto Box */}
          <div
            style={{
              backgroundColor: 'rgba(184, 149, 106, 0.14)',
              border: '1px solid rgba(184, 149, 106, 0.4)',
              padding: '20px 36px',
              borderRadius: '4px',
              display: 'inline-block',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
            }}
          >
            <span 
              className="font-serif"
              style={{ 
                fontSize: 'clamp(20px, 2.5vw, 26px)', 
                color: '#B8956A', 
                fontWeight: 600, 
                letterSpacing: '2px' 
              }}
            >
              Pause. Listen. Understand. Reconnect.
            </span>
          </div>
        </motion.div>

        {/* Founder Feature Block: MEET AFEEFA M. P. */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                src="/images/afeefa_founder.png"
                alt="Afeefa M. P. - Founder of Aavira Wellness"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'brightness(0.95) contrast(1.02)'
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
              MEET AFEEFA M. P.
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
              Founder & Wellness Practitioner at Aavira
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
              Counselling Psychologist | Clinical Hypnotherapist | Acupuncture Therapist | Access Bars® Practitioner | Family Constellation Facilitator | Trainer
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.8, marginBottom: '16px' }}>
              Afeefa M. P. is a Counselling Psychologist and integrative wellness practitioner working across psychological wellbeing, mind-body balance, hypnotherapy and personal development.
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.8, marginBottom: '16px' }}>
              Her approach is centred on creating a safe, compassionate and non-judgemental space where individuals can pause, reflect, understand themselves and explore meaningful ways forward.
            </p>

            <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.8, marginBottom: '28px' }}>
              With training and practice across counselling psychology, clinical hypnotherapy, acupuncture, Access Bars®, Family Constellation facilitation and professional training, Afeefa brings together complementary approaches according to each individual's needs, comfort and goals.
            </p>

            <button
              onClick={onOpenBooking}
              className="btn-bronze"
              style={{ padding: '16px 36px' }}
            >
              DISCOVER AFEEFA'S APPROACH
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
