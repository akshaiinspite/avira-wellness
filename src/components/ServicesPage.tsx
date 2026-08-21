import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Compass, 
  Feather, 
  Sun, 
  Users, 
  GraduationCap, 
  Check, 
  Calendar, 
  MessageCircle, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigateHome?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking, onNavigateHome }) => {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: 'counselling',
      titleKey: 'service_counselling_title',
      subtitleKey: 'service_counselling_sub',
      image: '/images/service_counselling_space.png',
      icon: Brain,
      descKey: 'service_counselling_desc',
      listTitleKey: 'serv_list_counselling_title',
      bulletsKey: 'service_counselling_bullets',
      btnTextKey: 'service_counselling_btn'
    },
    {
      id: 'hypnotherapy',
      titleKey: 'service_hypno_title',
      subtitleKey: 'service_hypno_sub',
      image: '/images/service_hypnotherapy_space.png',
      icon: Compass,
      descKey: 'service_hypno_desc',
      listTitleKey: 'serv_list_hypno_title',
      bulletsKey: 'service_hypno_bullets',
      btnTextKey: 'service_hypno_btn'
    },
    {
      id: 'acupuncture',
      titleKey: 'service_acu_title',
      subtitleKey: 'service_acu_sub',
      image: '/images/service_acupuncture_space.png',
      icon: Feather,
      descKey: 'service_acu_desc',
      listTitleKey: 'serv_list_acu_title',
      bulletsKey: 'service_acu_bullets',
      btnTextKey: 'service_acu_btn'
    },
    {
      id: 'accessbars',
      titleKey: 'service_access_title',
      subtitleKey: 'service_access_sub',
      image: '/images/service_accessbars_space.png',
      icon: Sun,
      descKey: 'service_access_desc',
      listTitleKey: 'serv_list_access_title',
      bulletsKey: 'service_access_bullets',
      btnTextKey: 'service_access_btn'
    },
    {
      id: 'familyconstellation',
      titleKey: 'service_const_title',
      subtitleKey: 'service_const_sub',
      image: '/images/service_familyconstellation_space.png',
      icon: Users,
      descKey: 'service_const_desc',
      listTitleKey: 'serv_list_const_title',
      bulletsKey: 'service_const_bullets',
      btnTextKey: 'service_const_btn'
    },
    {
      id: 'training',
      titleKey: 'service_train_title',
      subtitleKey: 'service_train_sub',
      image: '/images/service_training_space.png',
      icon: GraduationCap,
      descKey: 'service_train_desc',
      listTitleKey: 'serv_list_train_title',
      bulletsKey: 'service_train_bullets',
      btnTextKey: 'service_train_btn'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5F1E8', color: '#1C261D', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. SERVICES HERO BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/service_hero_lounge.png)',
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
            {/* Breadcrumbs */}
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
              <span style={{ color: '#F5F1E8' }}>{t('nav_services')}</span>
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
              {t('services_tag')}
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(38px, 5vw, 64px)',
                fontWeight: 500,
                color: '#F5F1E8',
                lineHeight: 1.15,
                marginBottom: '20px',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)'
              }}
            >
              {t('serv_hero_title')}
            </h1>

            <div className="gold-line" style={{ width: '90px', margin: '0 auto 28px auto' }} />

            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                color: '#D4B892',
                fontStyle: 'italic',
                marginBottom: '24px',
                fontWeight: 400
              }}
            >
              {t('serv_hero_sub')}
            </p>

            <p
              style={{
                fontSize: '17.5px',
                color: 'rgba(245, 241, 232, 0.92)',
                lineHeight: 1.85,
                maxWidth: '820px',
                margin: '0 auto 32px auto'
              }}
            >
              {t('serv_hero_desc')}
            </p>

            <p style={{ fontSize: '15.5px', color: 'rgba(245, 241, 232, 0.8)', letterSpacing: '0.5px' }}>
              {t('serv_hero_footer')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INDIVIDUAL SERVICES DETAIL LIST (ALTERNATING LAYOUT) */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              const bulletsList = t(service.bulletsKey).split(',').map(b => b.trim());

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="responsive-card-padding responsive-grid-auto"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid rgba(184, 149, 106, 0.28)',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.06)',
                    padding: '44px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '48px',
                    alignItems: 'center'
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: 'rgba(184, 149, 106, 0.12)',
                        border: '1px solid rgba(184, 149, 106, 0.3)',
                        padding: '6px 14px',
                        borderRadius: '30px',
                        marginBottom: '16px'
                      }}
                    >
                      <IconComponent style={{ width: '18px', height: '18px', color: '#B8956A' }} />
                      <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '2px', color: '#B8956A', textTransform: 'uppercase' }}>
                        {t(service.titleKey)}
                      </span>
                    </div>

                    <h2
                      className="font-serif"
                      style={{
                        fontSize: 'clamp(28px, 3.5vw, 40px)',
                        color: '#1C261D',
                        fontWeight: 600,
                        marginBottom: '16px',
                        lineHeight: 1.25
                      }}
                    >
                      {t(service.subtitleKey)}
                    </h2>

                    <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.8, marginBottom: '24px' }}>
                      {t(service.descKey)}
                    </p>

                    <h4
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        color: '#1C261D',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                      }}
                    >
                      {t(service.listTitleKey)}
                    </h4>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '12px',
                        marginBottom: '32px'
                      }}
                    >
                      {bulletsList.map((bullet, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(184, 149, 106, 0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}
                          >
                            <Check style={{ width: '12px', height: '12px', color: '#B8956A' }} />
                          </div>
                          <span style={{ fontSize: '14.5px', color: '#4A574C', lineHeight: 1.5 }}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenBooking(t(service.titleKey))}
                      className="btn-bronze"
                      style={{ padding: '14px 28px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                    >
                      <span>{t(service.btnTextKey)}</span>
                      <ArrowRight style={{ width: '15px', height: '15px' }} />
                    </button>
                  </div>

                  {/* Image Column */}
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(184, 149, 106, 0.3)'
                      }}
                    >
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="responsive-img-height"
                        style={{
                          width: '100%',
                          height: '420px',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FIND THE APPROACH THAT FEELS RIGHT FOR YOU */}
      <section
        style={{
          backgroundColor: '#161F17',
          color: '#F5F1E8',
          padding: '90px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(184, 149, 106, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}
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
              {t('serv_pace_tag')}
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4.2vw, 50px)',
                color: '#F5F1E8',
                fontWeight: 500,
                marginBottom: '18px'
              }}
            >
              {t('serv_pace_title')}
            </h2>

            <div className="gold-line" style={{ width: '80px', margin: '0 auto 24px auto' }} />

            <p style={{ fontSize: '17.5px', color: 'rgba(245, 241, 232, 0.9)', lineHeight: 1.85, marginBottom: '20px' }}>
              {t('serv_pace_p1')}
            </p>

            <p style={{ fontSize: '16.5px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.8, marginBottom: '32px' }}>
              {t('serv_pace_p2')}
            </p>

            <div
              style={{
                backgroundColor: 'rgba(184, 149, 106, 0.16)',
                border: '1px solid rgba(184, 149, 106, 0.4)',
                padding: '16px 36px',
                borderRadius: '6px',
                display: 'inline-block'
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: 'clamp(18px, 2.3vw, 24px)',
                  color: '#B8956A',
                  fontWeight: 600,
                  letterSpacing: '2.5px'
                }}
              >
                {t('about_pillars_title')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. NOT SURE WHERE TO BEGIN? (FINAL CTA) */}
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
              maxWidth: '920px',
              margin: '0 auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(184, 149, 106, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}
            >
              <HeartHandshake style={{ width: '26px', height: '26px', color: '#B8956A' }} />
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4.2vw, 48px)',
                color: '#1C261D',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              {t('serv_begin_tag')}
            </h2>

            <div className="gold-line" style={{ width: '70px', margin: '0 auto 24px auto' }} />

            <p style={{ fontSize: '17px', color: '#3A473C', lineHeight: 1.85, maxWidth: '780px', margin: '0 auto 18px auto' }}>
              {t('serv_begin_p1')}
            </p>

            <p style={{ fontSize: '16px', color: '#4A574C', lineHeight: 1.8, maxWidth: '780px', margin: '0 auto 36px auto' }}>
              {t('serv_begin_p2')}
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
                href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20understand%20which%20service%20is%20right%20for%20me."
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ padding: '16px 36px', fontSize: '12.5px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', borderColor: '#B8956A', color: '#1C261D' }}
              >
                <MessageCircle style={{ width: '18px', height: '18px', color: '#25D366' }} />
                {t('whatsapp_btn')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
