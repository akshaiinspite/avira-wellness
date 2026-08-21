import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  MessageCircle, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Globe, 
  Share2, 
  Navigation
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigateHome?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onNavigateHome }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Not Sure Yet',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/aavirawellness@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Sender Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email,
          'Service Interested In': formData.service,
          'Enquiry Message': formData.message || 'N/A',
          _subject: `New Website Enquiry: ${formData.name} (${formData.service})`,
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: 'Not Sure Yet', message: '' });
      }, 5000);
    }
  };

  const address = "54/1059, Ground Floor, Valuers Building, Bhattatiripadu Road, Near Jawahar Nagar, Elamkulam, Kadavanthara, Kaloor S.O, Kaloor, Ernakulam, Kerala – 682017";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Aavira Wellness " + address)}`;

  return (
    <div style={{ backgroundColor: '#F5F1E8', color: '#1C261D', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          backgroundImage: 'url(/images/contact_hero_reception.png)',
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
              <span style={{ color: '#F5F1E8' }}>{t('nav_contact')}</span>
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
              {t('cont_tag')}
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
              {t('cont_hero_title')}
            </h1>

            <div className="gold-line" style={{ width: '90px', margin: '0 auto 28px auto' }} />

            <p
              style={{
                fontSize: '17.5px',
                color: 'rgba(245, 241, 232, 0.92)',
                lineHeight: 1.85,
                maxWidth: '800px',
                margin: '0 auto 28px auto'
              }}
            >
              {t('cont_hero_desc')}
            </p>

            <p style={{ fontSize: '15.5px', color: '#D4B892', letterSpacing: '0.5px', fontWeight: 500 }}>
              {t('cont_hero_sub')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GET IN TOUCH & LOCATION */}
      <section className="section-padding" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '50px'
            }}
          >
            {/* Contact Details Column */}
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
                {t('cont_hear_tag')}
              </span>

              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 44px)',
                  color: '#1C261D',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                {t('cont_hear_title')}
              </h2>

              <p style={{ fontSize: '16.5px', color: '#3A473C', lineHeight: 1.8, marginBottom: '36px' }}>
                {t('cont_hear_desc')}
              </p>

              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                {/* Phone / WhatsApp */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(184, 149, 106, 0.3)',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 211, 102, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MessageCircle style={{ width: '22px', height: '22px', color: '#25D366' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', color: '#B8956A', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {t('cont_phone_title')}
                    </h4>
                    <a
                      href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: '19px', fontWeight: 600, color: '#1C261D', textDecoration: 'none', display: 'block', marginBottom: '4px' }}
                    >
                      +91 98951 22295
                    </a>
                    <p style={{ fontSize: '13.5px', color: '#6A776C', margin: 0 }}>
                      {t('cont_phone_sub')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid rgba(184, 149, 106, 0.3)',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
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
                      flexShrink: 0
                    }}
                  >
                    <Mail style={{ width: '22px', height: '22px', color: '#B8956A' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', color: '#B8956A', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {t('cont_email_title')}
                    </h4>
                    <a
                      href="mailto:contact@aavirawellness.com"
                      style={{ fontSize: '18px', fontWeight: 600, color: '#1C261D', textDecoration: 'none', display: 'block', marginBottom: '4px' }}
                    >
                      contact@aavirawellness.com
                    </a>
                    <p style={{ fontSize: '13.5px', color: '#6A776C', margin: 0 }}>
                      {t('cont_email_sub')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visit Sanctuary Location Card */}
              <div
                style={{
                  backgroundColor: '#1C261D',
                  color: '#F5F1E8',
                  borderRadius: '10px',
                  border: '1px solid rgba(184, 149, 106, 0.35)',
                  padding: '32px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: '#B8956A', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  {t('cont_visit_tag')}
                </span>

                <h3 className="font-serif" style={{ fontSize: '24px', color: '#F5F1E8', fontWeight: 600, marginBottom: '14px' }}>
                  {t('cont_visit_title')}
                </h3>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
                  <MapPin style={{ width: '20px', height: '20px', color: '#B8956A', flexShrink: 0, marginTop: '3px' }} />
                  <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.88)', lineHeight: 1.6, margin: 0 }}>
                    {address}
                  </p>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-bronze"
                  style={{ padding: '12px 24px', fontSize: '11.5px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <Navigation style={{ width: '14px', height: '14px' }} />
                  <span>{t('footer_directions')}</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Send Us An Enquiry Interactive Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="responsive-card-padding"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(184, 149, 106, 0.35)',
                  padding: '40px 36px',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.08)'
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: '#B8956A', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  {t('cont_enquiry_tag')}
                </span>

                <h3 className="font-serif" style={{ fontSize: '28px', color: '#1C261D', fontWeight: 600, marginBottom: '24px' }}>
                  {t('cont_enquiry_title')}
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      backgroundColor: 'rgba(184, 149, 106, 0.12)',
                      border: '1px solid rgba(184, 149, 106, 0.3)',
                      borderRadius: '8px',
                      padding: '30px',
                      textAlign: 'center'
                    }}
                  >
                    <CheckCircle2 style={{ width: '42px', height: '42px', color: '#B8956A', margin: '0 auto 12px auto' }} />
                    <h4 className="font-serif" style={{ fontSize: '22px', color: '#1C261D', marginBottom: '8px' }}>
                      {t('cont_enquiry_success_title')}
                    </h4>
                    <p style={{ fontSize: '15px', color: '#4A574C', margin: 0, lineHeight: 1.6 }}>
                      {t('cont_enquiry_success_desc')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1C261D', marginBottom: '6px' }}>
                        {t('cont_form_name')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t('modal_name_ph')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid #D1C7BD',
                          backgroundColor: '#FAF8F5',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1C261D', marginBottom: '6px' }}>
                          {t('cont_form_phone')}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder={t('modal_phone_ph')}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #D1C7BD',
                            backgroundColor: '#FAF8F5',
                            fontSize: '14.5px',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1C261D', marginBottom: '6px' }}>
                          {t('cont_form_email')}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t('modal_email_ph')}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #D1C7BD',
                            backgroundColor: '#FAF8F5',
                            fontSize: '14.5px',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1C261D', marginBottom: '6px' }}>
                        {t('cont_form_service')}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid #D1C7BD',
                          backgroundColor: '#FAF8F5',
                          fontSize: '14.5px',
                          outline: 'none'
                        }}
                      >
                        <option value="Not Sure Yet">{t('modal_choose_service')}</option>
                        <option value="Counselling Psychology">{t('service_counselling_title')}</option>
                        <option value="Clinical Hypnotherapy">{t('service_hypno_title')}</option>
                        <option value="Acupuncture">{t('service_acu_title')}</option>
                        <option value="Access Bars®">{t('service_access_title')}</option>
                        <option value="Family Constellation">{t('service_const_title')}</option>
                        <option value="Training & Facilitation">{t('service_train_title')}</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1C261D', marginBottom: '6px' }}>
                        {t('cont_form_msg')}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t('modal_note_ph')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid #D1C7BD',
                          backgroundColor: '#FAF8F5',
                          fontSize: '14.5px',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-bronze"
                      style={{ padding: '16px', width: '100%', fontSize: '12.5px', marginTop: '10px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                    >
                      <Send style={{ width: '16px', height: '16px' }} />
                      {isSubmitting ? t('cont_form_sending') : t('cont_form_submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. NOT SURE WHICH SERVICE IS RIGHT FOR YOU? & SOCIAL CONNECT */}
      <section className="section-padding" style={{ backgroundColor: '#EFEAE0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left: Not sure CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid rgba(184, 149, 106, 0.35)',
                padding: '36px 30px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.05)'
              }}
            >
              <h3 className="font-serif" style={{ fontSize: '24px', color: '#1C261D', fontWeight: 600, marginBottom: '14px' }}>
                {t('serv_begin_tag')}
              </h3>

              <p style={{ fontSize: '15.5px', color: '#3A473C', lineHeight: 1.75, marginBottom: '24px' }}>
                {t('serv_begin_p2')}
              </p>

              <a
                href="https://wa.me/?text=Hello%20Aavira%20Wellness,%20I%20am%20not%20sure%20which%20service%20is%20right%20for%20me%20and%20would%20like%20guidance."
                target="_blank"
                rel="noreferrer"
                className="btn-bronze"
                style={{ padding: '14px 28px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              >
                <MessageCircle style={{ width: '18px', height: '18px' }} />
                <span>{t('whatsapp_btn')}</span>
              </a>
            </motion.div>

            {/* Right: Connect With Aavira */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: '#1C261D',
                color: '#F5F1E8',
                borderRadius: '10px',
                border: '1px solid rgba(184, 149, 106, 0.35)',
                padding: '36px 30px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: '#B8956A', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                {t('cont_tag')}
              </span>

              <h3 className="font-serif" style={{ fontSize: '24px', color: '#F5F1E8', fontWeight: 600, marginBottom: '14px' }}>
                {t('cont_hear_title')}
              </h3>

              <p style={{ fontSize: '15px', color: 'rgba(245, 241, 232, 0.82)', lineHeight: 1.7, marginBottom: '24px' }}>
                {t('cont_hear_desc')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'between',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(184, 149, 106, 0.25)',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    color: '#F5F1E8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Globe style={{ width: '18px', height: '18px', color: '#E1306C' }} />
                    <span>Instagram</span>
                  </div>
                  <span style={{ color: '#B8956A' }}>→</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'between',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(184, 149, 106, 0.25)',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    color: '#F5F1E8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Share2 style={{ width: '18px', height: '18px', color: '#1877F2' }} />
                    <span>Facebook</span>
                  </div>
                  <span style={{ color: '#B8956A' }}>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. A SPACE TO BEGIN (FINAL CTA) */}
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
              maxWidth: '860px',
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

            <p style={{ fontSize: '17px', color: '#3A473C', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto 14px auto' }}>
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

            <div>
              <button
                onClick={() => onOpenBooking('General Consultation')}
                className="btn-bronze"
                style={{ padding: '16px 40px', fontSize: '12.5px' }}
              >
                <Calendar style={{ width: '16px', height: '16px' }} />
                {t('hero_btn_book')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
