import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  UserCheck, 
  Eye, 
  Sparkles, 
  Calendar, 
  MessageCircle, 
  Brain, 
  Compass, 
  Feather, 
  Sun, 
  Users, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigateHome?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigateHome }) => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      titleKey: 'step1_title',
      subtitleKey: 'step1_sub',
      descKey: 'step1_desc'
    },
    {
      number: '02',
      titleKey: 'step2_title',
      subtitleKey: 'step2_sub',
      descKey: 'step2_desc'
    },
    {
      number: '03',
      titleKey: 'step3_title',
      subtitleKey: 'step3_sub',
      descKey: 'step3_desc'
    },
    {
      number: '04',
      titleKey: 'step4_title',
      subtitleKey: 'step4_sub',
      descKey: 'step4_desc'
    }
  ];

  const modalities = [
    {
      icon: Brain,
      titleKey: 'service_counselling_title',
      descKey: 'service_counselling_desc'
    },
    {
      icon: Compass,
      titleKey: 'service_hypno_title',
      descKey: 'service_hypno_desc'
    },
    {
      icon: Feather,
      titleKey: 'service_acu_title',
      descKey: 'service_acu_desc'
    },
    {
      icon: Sun,
      titleKey: 'service_access_title',
      descKey: 'service_access_desc'
    },
    {
      icon: Users,
      titleKey: 'service_const_title',
      descKey: 'service_const_desc'
    },
    {
      icon: GraduationCap,
      titleKey: 'service_train_title',
      descKey: 'service_train_desc'
    }
  ];

  const values = [
    {
      icon: Heart,
      titleKey: 'val1_title',
      descKey: 'val1_desc'
    },
    {
      icon: ShieldCheck,
      titleKey: 'val2_title',
      descKey: 'val2_desc'
    },
    {
      icon: UserCheck,
      titleKey: 'val3_title',
      descKey: 'val3_desc'
    },
    {
      icon: Eye,
      titleKey: 'val4_title',
      descKey: 'val4_desc'
    },
    {
      icon: Sparkles,
      titleKey: 'val5_title',
      descKey: 'val5_desc'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5F1E8', color: '#1C261D', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. HERO & BREADCRUMB BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/about_sanctuary_space.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '110px 0 90px 0',
          color: '#F5F1E8',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(14, 20, 15, 0.92) 0%, rgba(24, 33, 25, 0.88) 60%, rgba(14, 20, 15, 0.96) 100%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}
          >
            {/* Breadcrumb navigation */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '12px', 
                letterSpacing: '2.5px', 
                color: '#B8956A', 
                marginBottom: '20px', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <span 
                onClick={onNavigateHome} 
                style={{ cursor: onNavigateHome ? 'pointer' : 'default', opacity: 0.85 }}
                onMouseEnter={(e) => { if(onNavigateHome) e.currentTarget.style.color = '#F5F1E8'; }}
                onMouseLeave={(e) => { if(onNavigateHome) e.currentTarget.style.color = '#B8956A'; }}
              >
                {t('nav_home')}
              </span>
              <span>/</span>
              <span style={{ color: '#F5F1E8' }}>{t('nav_about')}</span>
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 62px)',
                fontWeight: 500,
                color: '#F5F1E8',
                lineHeight: 1.15,
                marginBottom: '20px',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)'
              }}
            >
              {t('about_hero_title')}
            </h1>

            <div className="gold-line" style={{ width: '90px', margin: '0 auto 28px auto' }} />

            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                color: '#D4B892',
                fontStyle: 'italic',
                marginBottom: '28px',
                fontWeight: 400
              }}
            >
              {t('about_hero_sub')}
            </p>

            <p
              style={{
                fontSize: '17.5px',
                color: 'rgba(245, 241, 232, 0.92)',
                lineHeight: 1.85,
                maxWidth: '800px',
                margin: '0 auto 36px auto'
              }}
            >
              {t('about_hero_desc')}
            </p>

            {/* Badge Highlight Box */}
            <div
              style={{
                backgroundColor: 'rgba(184, 149, 106, 0.16)',
                border: '1px solid rgba(184, 149, 106, 0.45)',
                backdropFilter: 'blur(10px)',
                padding: '18px 36px',
                borderRadius: '6px',
                display: 'inline-block',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  color: '#B8956A',
                  fontWeight: 600,
                  letterSpacing: '2.5px'
                }}
              >
                {t('welcome_badge')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT AAVIRA VISION SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span 
                style={{ 
                  fontSize: '11.5px', 
                  fontWeight: 600, 
                  letterSpacing: '3px', 
                  color: '#B8956A', 
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                {t('about_sanc_tag')}
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 46px)',
                  color: '#1C261D',
                  fontWeight: 600,
                  marginBottom: '20px',
                  lineHeight: 1.25
                }}
              >
                {t('about_sanc_title')}
              </h2>

              <div className="gold-line" style={{ width: '60px', margin: '0 0 24px 0' }} />

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '20px' }}>
                {t('about_sanc_p1')}
              </p>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '28px' }}>
                {t('about_sanc_p2')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  t('about_sanc_item1'),
                  t('about_sanc_item2'),
                  t('about_sanc_item3')
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 style={{ width: '20px', height: '20px', color: '#B8956A', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#1C261D', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(184, 149, 106, 0.3)'
                }}
              >
                <img
                  src="/images/about_sanctuary_space.png"
                  alt="Aavira Wellness Sanctuary Space"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>

              {/* Decorative Floating Quote Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '-25px',
                  backgroundColor: '#1E271F',
                  color: '#F5F1E8',
                  padding: '24px 30px',
                  borderRadius: '8px',
                  border: '1px solid rgba(184, 149, 106, 0.4)',
                  maxWidth: '320px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                }}
              >
                <p className="font-serif" style={{ fontSize: '15px', fontStyle: 'italic', color: '#D4B892', margin: 0, lineHeight: 1.6 }}>
                  {t('about_sanc_quote')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MEET AFEEFA - FOUNDER DEEP-DIVE */}
      <section
        style={{
          backgroundColor: '#172018',
          color: '#F5F1E8',
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Soft Background Accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(184, 149, 106, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            {/* Left: Realistic Portrait of Afeefa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(184, 149, 106, 0.4)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                  position: 'relative'
                }}
              >
                <img
                  src="/images/kerala_banyan_pavilion.png"
                  alt="Kerala style Banyan Tree Wellness Retreat Pavilion - Founder Afeefa"
                  className="responsive-img-height"
                  style={{
                    width: '100%',
                    height: '520px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'contrast(1.02) brightness(0.98)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20, 27, 21, 0.75) 0%, transparent 60%)'
                  }}
                />
              </div>

              {/* Corner Gold Frame Accents */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  width: '80px',
                  height: '80px',
                  borderTop: '2px solid #B8956A',
                  borderLeft: '2px solid #B8956A',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  borderBottom: '2px solid #B8956A',
                  borderRight: '2px solid #B8956A',
                  pointerEvents: 'none'
                }}
              />
            </motion.div>

            {/* Right: Detailed Founder Biography */}
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
                  marginBottom: '10px'
                }}
              >
                {t('founder2_tag')}
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: '#F5F1E8',
                  fontWeight: 500,
                  marginBottom: '12px'
                }}
              >
                {t('founder2_title')}
              </h2>

              {/* Credentials Subtitle Pill Bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px'
                }}
              >
                {[
                  t('hero_badge1'),
                  t('hero_badge2'),
                  t('hero_badge3'),
                  t('hero_badge4')
                ].map((cred, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '12px',
                      backgroundColor: 'rgba(184, 149, 106, 0.15)',
                      border: '1px solid rgba(184, 149, 106, 0.35)',
                      color: '#D4B892',
                      padding: '5px 12px',
                      borderRadius: '30px',
                      fontWeight: 500
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.85, marginBottom: '18px' }}>
                {t('founder2_p1')}
              </p>

              <p style={{ fontSize: '16px', color: 'rgba(245, 241, 232, 0.85)', lineHeight: 1.8, marginBottom: '18px' }}>
                {t('founder2_p2')}
              </p>

              <p style={{ fontSize: '16px', color: 'rgba(245, 241, 232, 0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
                {t('founder2_p3')}
              </p>

              <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.8)', lineHeight: 1.8, marginBottom: '32px' }}>
                {t('founder2_p4')}
              </p>

              {/* Her Intention Box */}
              <div
                style={{
                  backgroundColor: 'rgba(26, 36, 27, 0.9)',
                  borderLeft: '4px solid #B8956A',
                  padding: '24px 28px',
                  borderRadius: '0 8px 8px 0',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
              >
                <h4
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: '#B8956A',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}
                >
                  {t('about_afeefa_intention_tag')}
                </h4>
                <p
                  className="font-serif"
                  style={{
                    fontSize: '18px',
                    color: '#F5F1E8',
                    fontStyle: 'italic',
                    margin: 0,
                    lineHeight: 1.6
                  }}
                >
                  {t('about_afeefa_intention_desc')}
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. HER PROFESSIONAL APPROACH - WHOLE-PERSON PERSPECTIVE */}
      <section className="section-padding" style={{ backgroundColor: '#EFEAE0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  color: '#B8956A',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                {t('about_appr_tag')}
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 46px)',
                  color: '#1C261D',
                  fontWeight: 600,
                  marginBottom: '18px'
                }}
              >
                {t('about_appr_title')}
              </h2>

              <div className="gold-line" style={{ width: '70px', margin: '0 0 24px 0' }} />

              <p style={{ fontSize: '17px', color: '#2B382C', lineHeight: 1.85, marginBottom: '20px' }}>
                {t('about_appr_p1')}
              </p>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '20px' }}>
                {t('about_appr_p2')}
              </p>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '28px' }}>
                {t('about_appr_p3')}
              </p>

              <div
                style={{
                  backgroundColor: '#F5F1E8',
                  border: '1px solid rgba(184, 149, 106, 0.4)',
                  padding: '20px 24px',
                  borderRadius: '6px'
                }}
              >
                <p style={{ fontSize: '15px', color: '#8C6C42', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
                  {t('about_appr_note')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(184, 149, 106, 0.3)'
                }}
              >
                <img
                  src="/images/about_mindful_integration.png"
                  alt="Mindful Reflection & Integration"
                  style={{ width: '100%', height: '460px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. LISTEN. UNDERSTAND. INTEGRATE. EMPOWER. (4 STEPS) */}
      <section className="section-padding" style={{ backgroundColor: '#1C261D', color: '#F5F1E8' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}
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
              {t('about_pillars_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4vw, 50px)',
                color: '#F5F1E8',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              {t('about_pillars_title')}
            </h2>
            <div className="gold-line" style={{ width: '80px', margin: '18px auto 0 auto' }} />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px'
            }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: 'rgba(28, 38, 29, 0.85)',
                  border: '1px solid rgba(184, 149, 106, 0.28)',
                  borderRadius: '8px',
                  padding: '36px 28px',
                  position: 'relative',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    fontSize: '44px',
                    fontFamily: 'var(--font-serif)',
                    color: '#B8956A',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '16px',
                    opacity: 0.9
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '22px',
                    color: '#F5F1E8',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    marginBottom: '6px'
                  }}
                >
                  {t(step.titleKey)}
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    color: '#D4B892',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    marginBottom: '16px',
                    textTransform: 'uppercase'
                  }}
                >
                  {t(step.subtitleKey)}
                </p>

                <p style={{ fontSize: '14.5px', color: 'rgba(245, 241, 232, 0.8)', lineHeight: 1.7, margin: 0 }}>
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AN INTEGRATIVE APPROACH TO WELLBEING */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px auto' }}
          >
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 600,
                letterSpacing: '3px',
                color: '#B8956A',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              {t('about_integ_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: '#1C261D',
                fontWeight: 600,
                marginBottom: '14px'
              }}
            >
              {t('about_integ_title')}
            </h2>

            <div className="gold-line" style={{ width: '80px', margin: '0 auto 20px auto' }} />

            <p style={{ fontSize: '17px', color: '#3A473C', lineHeight: 1.8 }}>
              {t('about_integ_desc')}
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {modalities.map((mod, idx) => {
              const IconComp = mod.icon;
              return (
                <motion.div
                  key={mod.titleKey}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(184, 149, 106, 0.25)',
                    borderRadius: '8px',
                    padding: '36px 30px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(184, 149, 106, 0.12)',
                      border: '1px solid rgba(184, 149, 106, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <IconComp style={{ width: '24px', height: '24px', color: '#B8956A' }} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '22px',
                      color: '#1C261D',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}
                  >
                    {t(mod.titleKey)}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#4A574C', lineHeight: 1.7, margin: 0 }}>
                    {t(mod.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHAT AAVIRA VALUES */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/about_values_reflection.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
          color: '#F5F1E8',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(16, 23, 17, 0.93) 0%, rgba(25, 34, 26, 0.9) 100%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
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
              {t('about_values_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4vw, 50px)',
                color: '#F5F1E8',
                fontWeight: 500
              }}
            >
              {t('about_values_title')}
            </h2>
            <div className="gold-line" style={{ width: '80px', margin: '18px auto 0 auto' }} />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px'
            }}
          >
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={val.titleKey}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  style={{
                    backgroundColor: 'rgba(25, 34, 26, 0.85)',
                    border: '1px solid rgba(184, 149, 106, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    padding: '30px 24px',
                    textAlign: 'center',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(184, 149, 106, 0.15)',
                      border: '1px solid rgba(184, 149, 106, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 18px auto'
                    }}
                  >
                    <ValIcon style={{ width: '22px', height: '22px', color: '#B8956A' }} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '18px',
                      color: '#B8956A',
                      fontWeight: 600,
                      letterSpacing: '1.5px',
                      marginBottom: '12px'
                    }}
                  >
                    {t(val.titleKey)}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'rgba(245, 241, 232, 0.8)', lineHeight: 1.65, margin: 0 }}>
                    {t(val.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. A SPACE FOR YOUR JOURNEY & CALL TO ACTION */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: '#161E17',
              color: '#F5F1E8',
              borderRadius: '12px',
              border: '1px solid rgba(184, 149, 106, 0.35)',
              padding: '60px 40px',
              textAlign: 'center',
              maxWidth: '960px',
              margin: '0 auto',
              boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
              position: 'relative',
              overflow: 'hidden'
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
                marginBottom: '12px'
              }}
            >
              {t('about_cta_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                color: '#F5F1E8',
                fontWeight: 500,
                marginBottom: '20px'
              }}
            >
              {t('about_cta_title')}
            </h2>

            <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />

            <p style={{ fontSize: '17.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.85, maxWidth: '800px', margin: '0 auto 28px auto' }}>
              {t('about_cta_desc')}
            </p>

            <div
              style={{
                backgroundColor: 'rgba(184, 149, 106, 0.15)',
                border: '1px solid rgba(184, 149, 106, 0.4)',
                padding: '16px 32px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '36px'
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  color: '#B8956A',
                  fontWeight: 600,
                  letterSpacing: '2px'
                }}
              >
                {t('welcome_badge')}
              </span>
            </div>

            <div style={{ borderTop: '1px solid rgba(184, 149, 106, 0.25)', paddingTop: '36px', marginTop: '10px' }}>
              <h3 className="font-serif" style={{ fontSize: '24px', color: '#F5F1E8', fontWeight: 600, marginBottom: '10px' }}>
                {t('about_cta_box')}
              </h3>
              <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.8)', marginBottom: '30px' }}>
                {t('about_cta_box_desc')}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                <button
                  onClick={() => onOpenBooking('General Consultation')}
                  className="btn-bronze"
                  style={{ padding: '16px 36px', fontSize: '12.5px' }}
                >
                  <Calendar style={{ width: '16px', height: '16px' }} />
                  {t('hero_btn_book')}
                </button>

                <a
                  href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                  style={{ padding: '16px 36px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                >
                  <MessageCircle style={{ width: '18px', height: '18px', color: '#25D366' }} />
                  {t('whatsapp_btn')}
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};
