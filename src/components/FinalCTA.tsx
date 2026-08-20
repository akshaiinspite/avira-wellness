import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onOpenContact }) => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: '#1E271F',
        color: '#F5F1E8',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(184, 149, 106, 0.2)'
      }}
    >
      {/* Background Subtle Radial Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(184, 149, 106, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '850px', textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              letterSpacing: '3.5px', 
              color: '#B8956A', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}
          >
            START YOUR JOURNEY
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '20px'
            }}
          >
            Give Yourself the Space to Pause
          </h2>

          <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />

          <p style={{ fontSize: '17.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.85, marginBottom: '28px' }}>
            Sometimes, the first step towards change is simply giving yourself permission to stop, breathe and listen. Whether you are seeking emotional support, greater self-awareness, personal growth or simply meaningful time with yourself, Aavira offers a space to begin.
          </p>

          <div
            style={{
              backgroundColor: 'rgba(184, 149, 106, 0.12)',
              border: '1px solid rgba(184, 149, 106, 0.35)',
              padding: '20px 32px',
              borderRadius: '6px',
              marginBottom: '40px',
              display: 'inline-block'
            }}
          >
            <h3
              className="font-serif"
              style={{
                fontSize: '24px',
                color: '#B8956A',
                fontWeight: 600,
                letterSpacing: '1px',
                margin: 0
              }}
            >
              Your journey is unique. Let it begin with you.
            </h3>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 15px 35px rgba(184, 149, 106, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="btn-bronze"
              style={{ padding: '18px 40px', fontSize: '13px' }}
            >
              <Calendar style={{ width: '18px', height: '18px', marginRight: '10px' }} />
              BOOK A CONSULTATION
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(184, 149, 106, 0.15)', borderColor: '#B8956A' }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenContact}
              className="btn-outline"
              style={{ padding: '18px 40px', fontSize: '13px' }}
            >
              <Mail style={{ width: '18px', height: '18px', marginRight: '10px', color: '#B8956A' }} />
              GET IN TOUCH
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
