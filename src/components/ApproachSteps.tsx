import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ApproachStepsProps {
  onOpenBooking: () => void;
}

export const ApproachSteps: React.FC<ApproachStepsProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%']
  });

  const progressLineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      num: '01',
      title: 'LISTEN',
      subtitle: 'Be Heard & Honoured',
      desc: 'A safe, compassionate space to be heard and acknowledged without judgement.'
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      subtitle: 'Awareness & Insight',
      desc: 'Explore your thoughts, emotions, experiences and patterns with greater awareness.'
    },
    {
      num: '03',
      title: 'INTEGRATE',
      subtitle: 'Everyday Harmony',
      desc: 'Bring insights together and explore ways to create greater balance in everyday life.'
    },
    {
      num: '04',
      title: 'EMPOWER',
      subtitle: 'Self-Mastery & Growth',
      desc: 'Move forward with greater self-awareness, confidence and a deeper connection with yourself.'
    }
  ];

  return (
    <section
      ref={containerRef}
      id="approach"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'url(/images/nature_leaf.png)',
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
          background: 'linear-gradient(180deg, rgba(18, 25, 19, 0.92) 0%, rgba(35, 45, 36, 0.88) 50%, rgba(18, 25, 19, 0.95) 100%)',
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
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}
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
            OUR APPROACH
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#F5F1E8',
              fontWeight: 500,
              marginBottom: '16px'
            }}
          >
            Listen. Understand. Integrate. Empower.
          </h2>
          <div className="gold-line" style={{ width: '80px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '17px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.7 }}>
            We believe meaningful wellbeing begins by creating space to listen and understand.
          </p>
        </motion.div>

        {/* Scroll Progress Connecting Line */}
        <div 
          style={{ 
            height: '2px', 
            backgroundColor: 'rgba(184, 149, 106, 0.25)', 
            maxWidth: '1100px', 
            margin: '0 auto 40px auto', 
            position: 'relative' 
          }}
        >
          <motion.div 
            style={{ 
              height: '100%', 
              backgroundColor: '#B8956A', 
              boxShadow: '0 0 12px rgba(184, 149, 106, 0.8)',
              width: progressLineWidth 
            }} 
          />
        </div>

        {/* 4 Steps Grid Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            position: 'relative'
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, borderColor: '#B8956A', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              style={{
                backgroundColor: 'rgba(22, 30, 23, 0.72)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(184, 149, 106, 0.3)',
                padding: '40px 28px',
                borderRadius: '6px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Step Number in Glowing Bronze */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                  className="font-serif"
                  style={{
                    fontSize: '48px',
                    color: '#B8956A',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '12px',
                    textShadow: '0 0 20px rgba(184, 149, 106, 0.4)'
                  }}
                >
                  {step.num}
                </motion.div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '22px',
                    color: '#F5F1E8',
                    letterSpacing: '2px',
                    marginBottom: '4px',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '11.5px',
                    color: '#D4B892',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '16px',
                    fontWeight: 600
                  }}
                >
                  {step.subtitle}
                </p>

                <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>

              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#B8956A',
                  marginTop: '24px',
                  boxShadow: '0 0 10px #B8956A'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="btn-outline"
            style={{ padding: '18px 40px' }}
          >
            EXPLORE OUR APPROACH
          </motion.button>
        </div>

      </div>
    </section>
  );
};
