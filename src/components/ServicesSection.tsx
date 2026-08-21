import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  titleKey: string;
  categoryKey: string;
  image: string;
  shortDescKey: string;
  fullDescKey: string;
  linkTextKey: string;
  benefitsKey: string;
}

interface TiltCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

// GSAP-style 3D Tilt Card Component with Interactive Radial Spotlight
const TiltCard: React.FC<TiltCardProps> = ({ service, index, onSelect }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt angles relative to center (-7deg to 7deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = -((y - centerY) / centerY) * 7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const title = t(service.titleKey);
  const category = t(service.categoryKey);
  const shortDesc = t(service.shortDescKey);
  const linkText = t(service.linkTextKey);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        backgroundColor: '#FAF8F3',
        border: '1px solid rgba(184, 149, 106, 0.3)',
        borderTop: isHovered ? '3px solid #B8956A' : '3px solid rgba(184, 149, 106, 0.5)',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
        boxShadow: isHovered 
          ? '0 25px 50px rgba(184, 149, 106, 0.25), 0 10px 20px rgba(0,0,0,0.1)' 
          : '0 10px 25px rgba(0,0,0,0.04)',
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
      }}
    >
      {/* Interactive GSAP-style Spotlight Gradient Layer */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(184, 149, 106, 0.18), transparent 75%)`,
            zIndex: 5
          }}
        />
      )}

      <div>
        {/* Image Banner */}
        <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={service.image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.94) contrast(1.03)',
              transform: isHovered ? 'scale(1.08)' : 'scale(1.0)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26, 35, 27, 0.45) 0%, transparent 60%)'
            }}
          />

          {/* Hover Floating Sparkles Badge */}
          {isHovered && (
            <div
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(26, 35, 27, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #B8956A',
                borderRadius: '50%',
                padding: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                zIndex: 6
              }}
            >
              <Sparkles style={{ width: '16px', height: '16px', color: '#B8956A' }} />
            </div>
          )}
        </div>

        <div style={{ padding: '28px 28px 16px 28px' }}>
          {/* Category Eyebrow */}
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              color: '#B8956A',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            {category}
          </span>

          {/* Service Title */}
          <h3
            className="font-serif"
            style={{
              fontSize: '24px',
              color: '#2B372C',
              marginBottom: '12px',
              fontWeight: 600,
              transition: 'color 0.3s ease'
            }}
          >
            {title}
          </h3>

          {/* Short Description */}
          <p style={{ fontSize: '15px', color: '#4A3F35', lineHeight: 1.7, margin: 0 }}>
            {shortDesc}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          borderTop: '1px solid rgba(184, 149, 106, 0.2)',
          padding: '18px 28px',
          backgroundColor: isHovered ? 'rgba(184, 149, 106, 0.08)' : '#FAF8F3',
          transition: 'background-color 0.3s ease'
        }}
      >
        <span 
          style={{ 
            fontSize: '13px', 
            fontWeight: 600, 
            color: '#B8956A',
            letterSpacing: '0.5px'
          }}
        >
          {linkText} →
        </span>
        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight style={{ width: '16px', height: '16px', color: '#B8956A' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'counselling',
      titleKey: 'service_counselling_title',
      categoryKey: 'service_counselling_cat',
      image: '/images/service_counselling.png',
      shortDescKey: 'service_counselling_desc',
      fullDescKey: 'service_counselling_full',
      linkTextKey: 'service_counselling_link',
      benefitsKey: 'service_counselling_bullets'
    },
    {
      id: 'hypnotherapy',
      titleKey: 'service_hypno_title',
      categoryKey: 'service_hypno_cat',
      image: '/images/service_hypnotherapy.png',
      shortDescKey: 'service_hypno_desc',
      fullDescKey: 'service_hypno_full',
      linkTextKey: 'service_hypno_link',
      benefitsKey: 'service_hypno_bullets'
    },
    {
      id: 'acupuncture',
      titleKey: 'service_acu_title',
      categoryKey: 'service_acu_cat',
      image: '/images/service_acupuncture.png',
      shortDescKey: 'service_acu_desc',
      fullDescKey: 'service_acu_full',
      linkTextKey: 'service_acu_link',
      benefitsKey: 'service_acu_bullets'
    },
    {
      id: 'accessbars',
      titleKey: 'service_access_title',
      categoryKey: 'service_access_cat',
      image: '/images/service_accessbars.png',
      shortDescKey: 'service_access_desc',
      fullDescKey: 'service_access_full',
      linkTextKey: 'service_access_link',
      benefitsKey: 'service_access_bullets'
    },
    {
      id: 'familyconstellation',
      titleKey: 'service_const_title',
      categoryKey: 'service_const_cat',
      image: '/images/service_familyconstellation.png',
      shortDescKey: 'service_const_desc',
      fullDescKey: 'service_const_full',
      linkTextKey: 'service_const_link',
      benefitsKey: 'service_const_bullets'
    },
    {
      id: 'facilitation',
      titleKey: 'service_train_title',
      categoryKey: 'service_train_cat',
      image: '/images/service_training.png',
      shortDescKey: 'service_train_desc',
      fullDescKey: 'service_train_full',
      linkTextKey: 'service_train_link',
      benefitsKey: 'service_train_bullets'
    }
  ];

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: '#F5F1E8',
        position: 'relative',
        color: '#2A2A2A',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
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
            {t('services_tag')}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#3B483C',
              fontWeight: 500,
              marginBottom: '16px'
            }}
          >
            {t('services_title')}
          </h2>
          <div className="gold-line" style={{ width: '80px', margin: '0 auto 20px auto' }} />
          <p style={{ fontSize: '17px', color: '#4A3F35', lineHeight: 1.7 }}>
            {t('services_sub')}
          </p>
        </motion.div>

        {/* 6 GSAP-Style Interactive 3D Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}
        >
          {services.map((service, index) => (
            <TiltCard
              key={service.id}
              service={service}
              index={index}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 15px 35px rgba(184, 149, 106, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenBooking()}
            className="btn-bronze"
            style={{ padding: '18px 40px' }}
          >
            {t('services_btn_all')}
          </motion.button>
        </div>

      </div>

      {/* Service Detail Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(20, 26, 21, 0.82)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#FAF8F3',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '8px',
                position: 'relative',
                boxShadow: '0 30px 70px rgba(0,0,0,0.4)',
                border: '1.5px solid #B8956A'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.4)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Image Header */}
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={selectedService.image}
                  alt={t(selectedService.titleKey)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(250, 248, 243, 1) 0%, transparent 80%)'
                  }}
                />
              </div>

              <div style={{ padding: '0 36px 36px 36px' }}>
                {/* Service Header */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', color: '#B8956A', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                    {t(selectedService.categoryKey)}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '32px', color: '#2B372C', fontWeight: 600, marginTop: '4px' }}>
                    {t(selectedService.titleKey)}
                  </h3>
                </div>

                <div className="gold-line" style={{ marginBottom: '24px' }} />

                <p style={{ fontSize: '16px', color: '#4A3F35', lineHeight: 1.8, marginBottom: '28px' }}>
                  {t(selectedService.fullDescKey)}
                </p>

                <h4 className="font-serif" style={{ fontSize: '20px', color: '#2B372C', marginBottom: '16px' }}>
                  {t('services_modal_benefits')}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                  {t(selectedService.benefitsKey).split(',').map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 style={{ width: '18px', height: '18px', color: '#B8956A', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#383838' }}>{benefit.trim()}</span>
                    </div>
                  ))}
                </div>

                {/* Modal CTA */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      const title = t(selectedService.titleKey);
                      setSelectedService(null);
                      onOpenBooking(title);
                    }}
                    className="btn-bronze"
                    style={{ width: '100%', padding: '16px' }}
                  >
                    {t('services_modal_book')}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
