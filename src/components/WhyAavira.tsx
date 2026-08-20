import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserCheck, Layers, ArrowUpRight } from 'lucide-react';

export const WhyAavira: React.FC = () => {
  const pillars = [
    {
      title: 'Compassionate',
      icon: <Heart style={{ width: '30px', height: '30px', color: '#B8956A' }} />,
      desc: 'A welcoming, safe and non-judgemental environment.'
    },
    {
      title: 'Personalised',
      icon: <UserCheck style={{ width: '30px', height: '30px', color: '#B8956A' }} />,
      desc: 'Approaches thoughtfully considered around your needs, goals and comfort.'
    },
    {
      title: 'Integrative',
      icon: <Layers style={{ width: '30px', height: '30px', color: '#B8956A' }} />,
      desc: 'A combination of psychological and complementary wellness practices where appropriate.'
    },
    {
      title: 'Empowering',
      icon: <ArrowUpRight style={{ width: '30px', height: '30px', color: '#B8956A' }} />,
      desc: 'Supporting you in developing awareness, clarity and a stronger connection with yourself.'
    }
  ];

  return (
    <section
      id="whyaavira"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundImage: 'url(/images/banner_why_aavira.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#F5F1E8',
        overflow: 'hidden'
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(16, 22, 17, 0.92) 0%, rgba(30, 39, 31, 0.88) 50%, rgba(16, 22, 17, 0.94) 100%)',
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
            WHY AAVIRA?
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
            A Compassionate Space for Your Journey
          </h2>
          <div className="gold-line" style={{ width: '80px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.8 }}>
            At Aavira, your experience comes first. We recognise that every individual is different, and wellbeing cannot always follow a one-size-fits-all approach. Our work is centred around understanding your needs and creating an experience that feels safe, respectful and meaningful to you.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              style={{
                backgroundColor: 'rgba(22, 29, 23, 0.72)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(184, 149, 106, 0.3)',
                borderTop: '3.5px solid #B8956A',
                padding: '36px 28px',
                borderRadius: '6px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                y: -6,
                borderColor: '#B8956A',
                backgroundColor: 'rgba(28, 37, 29, 0.88)'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(184, 149, 106, 0.15)',
                  border: '1px solid rgba(184, 149, 106, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {pillar.icon}
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: '24px',
                  color: '#F5F1E8',
                  marginBottom: '12px',
                  fontWeight: 600
                }}
              >
                {pillar.title}
              </h3>

              <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.7, margin: 0 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
