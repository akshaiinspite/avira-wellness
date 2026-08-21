import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  UserCheck, 
  Eye, 
  Sparkles, 
  HeartHandshake,
  Calendar,
  Compass,
  Brain,
  Feather,
  Sun,
  Users,
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ApproachPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigateServices?: () => void;
  onNavigateHome?: () => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ 
  onOpenBooking, 
  onNavigateServices, 
  onNavigateHome 
}) => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      titleKey: 'step1_title',
      subtitleKey: 'step1_sub',
      descKey: 'step1_desc',
      tagKey: 'step1_tag'
    },
    {
      number: '02',
      titleKey: 'step2_title',
      subtitleKey: 'step2_sub',
      descKey: 'step2_desc',
      tagKey: 'step2_tag'
    },
    {
      number: '03',
      titleKey: 'step3_title',
      subtitleKey: 'step3_sub',
      descKey: 'step3_desc',
      tagKey: 'step3_tag'
    },
    {
      number: '04',
      titleKey: 'step4_title',
      subtitleKey: 'step4_sub',
      descKey: 'step4_desc',
      tagKey: 'step4_tag'
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
      icon: HeartHandshake,
      titleKey: 'about_integ_tag',
      descKey: 'about_integ_desc'
    },
    {
      icon: Sparkles,
      titleKey: 'val5_title',
      descKey: 'val5_desc'
    }
  ];

  const modalitiesSummary = [
    { titleKey: 'service_counselling_title', descKey: 'service_counselling_desc', icon: Brain },
    { titleKey: 'service_hypno_title', descKey: 'service_hypno_desc', icon: Compass },
    { titleKey: 'service_acu_title', descKey: 'service_acu_desc', icon: Feather },
    { titleKey: 'service_access_title', descKey: 'service_access_desc', icon: Sun },
    { titleKey: 'service_const_title', descKey: 'service_const_desc', icon: Users },
    { titleKey: 'service_train_title', descKey: 'service_train_desc', icon: GraduationCap }
  ];

  const wellbeingAreas = [
    { titleKey: 'area1_title', descKey: 'area1_desc' },
    { titleKey: 'area2_title', descKey: 'area2_desc' },
    { titleKey: 'area3_title', descKey: 'area3_desc' },
    { titleKey: 'area4_title', descKey: 'area4_desc' },
    { titleKey: 'area5_title', descKey: 'area5_desc' },
    { titleKey: 'area6_title', descKey: 'area6_desc' },
    { titleKey: 'area7_title', descKey: 'area7_desc' }
  ];

  return (
    <div style={{ backgroundColor: '#F5F1E8', color: '#1C261D', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/approach_hero_path.png)',
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
            {/* Breadcrumb */}
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
              <span style={{ color: '#F5F1E8' }}>{t('nav_approach')}</span>
            </div>

            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 600,
                letterSpacing: '3.5px',
                color: '#B8956A',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px'
              }}
            >
              {t('nav_approach')}
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(38px, 5vw, 62px)',
                fontWeight: 500,
                color: '#F5F1E8',
                lineHeight: 1.15,
                marginBottom: '20px',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)'
              }}
            >
              {t('about_pillars_title')}
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
              {t('appr_hero_sub')}
            </p>

            <p
              style={{
                fontSize: '17.5px',
                color: 'rgba(245, 241, 232, 0.92)',
                lineHeight: 1.85,
                maxWidth: '820px',
                margin: '0 auto 28px auto'
              }}
            >
              {t('appr_hero_desc')}
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.82)', fontStyle: 'italic' }}>
              {t('appr_hero_p3')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. A WHOLE-PERSON APPROACH */}
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
                {t('appr_whole_tag')}
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
                {t('appr_whole_title')}
              </h2>

              <div className="gold-line" style={{ width: '70px', margin: '0 0 24px 0' }} />

              <p style={{ fontSize: '17px', color: '#2B382C', lineHeight: 1.85, marginBottom: '20px', fontWeight: 500 }}>
                {t('appr_whole_p1')}
              </p>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '20px' }}>
                {t('appr_whole_p2')}
              </p>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85, marginBottom: '28px' }}>
                {t('appr_whole_p3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(184, 149, 106, 0.3)'
                }}
              >
                <img
                  src="/images/approach_whole_person.png"
                  alt="A Whole Person Approach to Wellbeing"
                  className="responsive-img-height"
                  style={{ width: '100%', height: '460px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE AAVIRA APPROACH (01 - 04 STEPS) */}
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
              {t('appr_meth_tag')}
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
              {t('appr_meth_title')}
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
                className="responsive-card-padding"
                style={{
                  backgroundColor: 'rgba(28, 38, 29, 0.85)',
                  border: '1px solid rgba(184, 149, 106, 0.3)',
                  borderRadius: '8px',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '44px',
                      fontFamily: 'var(--font-serif)',
                      color: '#B8956A',
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: '16px'
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

                  <p style={{ fontSize: '14.5px', color: 'rgba(245, 241, 232, 0.8)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {t(step.descKey)}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(184, 149, 106, 0.25)',
                    paddingTop: '14px'
                  }}
                >
                  <p className="font-serif" style={{ fontSize: '14.5px', color: '#B8956A', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
                    "{t(step.tagKey)}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT GUIDES OUR WORK (CORE VALUES) */}
      <section className="section-padding" style={{ backgroundColor: '#EFEAE0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}
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
              {t('about_values_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: '#1C261D',
                fontWeight: 600
              }}
            >
              {t('about_values_title')}
            </h2>
            <div className="gold-line" style={{ width: '70px', margin: '18px auto 0 auto' }} />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px'
            }}
          >
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <motion.div
                  key={v.titleKey}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    backgroundColor: '#F5F1E8',
                    borderRadius: '8px',
                    border: '1px solid rgba(184, 149, 106, 0.3)',
                    padding: '32px 26px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(184, 149, 106, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    <IconComp style={{ width: '22px', height: '22px', color: '#B8956A' }} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '20px',
                      color: '#1C261D',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      marginBottom: '10px'
                    }}
                  >
                    {t(v.titleKey)}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: '#4A574C', lineHeight: 1.7, margin: 0 }}>
                    {t(v.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. AN INTEGRATIVE WAY OF WORKING */}
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

            <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.85 }}>
              {t('about_integ_desc')}
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {modalitiesSummary.map((m, idx) => {
              const MIcon = m.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(184, 149, 106, 0.25)',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(184, 149, 106, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MIcon style={{ width: '20px', height: '20px', color: '#B8956A' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16.5px', color: '#1C261D', fontWeight: 600, marginBottom: '6px' }}>
                      {t(m.titleKey)}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#4A574C', lineHeight: 1.6, margin: 0 }}>
                      {t(m.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              backgroundColor: '#EFEAE0',
              border: '1px solid rgba(184, 149, 106, 0.4)',
              padding: '20px 28px',
              borderRadius: '6px',
              textAlign: 'center',
              maxWidth: '840px',
              margin: '0 auto'
            }}
          >
            <p style={{ fontSize: '15px', color: '#8C6C42', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
              {t('about_appr_note')}
            </p>
          </div>
        </div>
      </section>

      {/* 6. AREAS OF WELLBEING */}
      <section className="section-padding" style={{ backgroundColor: '#172018', color: '#F5F1E8' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 56px auto' }}
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
                fontWeight: 500
              }}
            >
              {t('areas_title')}
            </h2>
            <div className="gold-line" style={{ width: '70px', margin: '18px auto 0 auto' }} />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {wellbeingAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  backgroundColor: 'rgba(28, 38, 29, 0.85)',
                  border: '1px solid rgba(184, 149, 106, 0.25)',
                  borderRadius: '8px',
                  padding: '28px 24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircle2 style={{ width: '18px', height: '18px', color: '#B8956A', flexShrink: 0 }} />
                  <h3 className="font-serif" style={{ fontSize: '19px', color: '#F5F1E8', fontWeight: 600, margin: 0 }}>
                    {t(area.titleKey)}
                  </h3>
                </div>
                <p style={{ fontSize: '14.5px', color: 'rgba(245, 241, 232, 0.8)', lineHeight: 1.65, margin: 0 }}>
                  {t(area.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. YOUR JOURNEY STARTS WHERE YOU ARE (CTA) */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(184, 149, 106, 0.35)',
              padding: '60px 40px',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
            }}
          >
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4.2vw, 48px)',
                color: '#1C261D',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              {t('about_cta_title')}
            </h2>

            <div className="gold-line" style={{ width: '70px', margin: '0 auto 24px auto' }} />

            <p style={{ fontSize: '17px', color: '#3A473C', lineHeight: 1.85, maxWidth: '760px', margin: '0 auto 16px auto' }}>
              {t('about_cta_desc')}
            </p>

            <div
              style={{
                backgroundColor: 'rgba(184, 149, 106, 0.12)',
                border: '1px solid rgba(184, 149, 106, 0.35)',
                padding: '14px 28px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '36px'
              }}
            >
              <span className="font-serif" style={{ fontSize: '18px', color: '#B8956A', fontWeight: 600, letterSpacing: '2px' }}>
                {t('welcome_badge')}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <button
                onClick={() => onOpenBooking('General Consultation')}
                className="btn-bronze"
                style={{ padding: '16px 36px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Calendar style={{ width: '16px', height: '16px' }} />
                {t('hero_btn_book')}
              </button>

              <button
                onClick={onNavigateServices}
                className="btn-outline"
                style={{ padding: '16px 36px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '10px', borderColor: '#B8956A', color: '#1C261D' }}
              >
                <span>{t('hero_btn_explore')}</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
