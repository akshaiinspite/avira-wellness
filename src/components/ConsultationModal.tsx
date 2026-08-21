import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const { t } = useLanguage();
  const [service, setService] = useState(initialService);
  const [mode, setMode] = useState('In-Person Sanctuary');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

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
          'Client Name': name,
          'Email Address': email,
          'Phone Number': phone,
          'Selected Service': service || 'General Wellness Consultation',
          'Session Format': mode,
          'Preferred Date': date || 'Flexible',
          'Client Note / Message': message || 'N/A',
          _subject: `New Consultation Request: ${name} (${service || 'General'})`,
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 4000);
    }
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 3000,
          backgroundColor: 'rgba(18, 24, 19, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{
            backgroundColor: '#FAF8F3',
            maxWidth: '620px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '8px',
            padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
            position: 'relative',
            boxShadow: '0 30px 70px rgba(0,0,0,0.4)',
            border: '1px solid #B8956A'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              border: 'none',
              color: '#4A3F35',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            <X size={24} />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 10px' }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(184, 149, 106, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto'
                }}
              >
                <CheckCircle style={{ width: '40px', height: '40px', color: '#B8956A' }} />
              </div>

              <h3 className="font-serif" style={{ fontSize: '32px', color: '#2B372C', marginBottom: '12px' }}>
                {t('modal_success_title')}
              </h3>

              <p style={{ fontSize: '16px', color: '#4A3F35', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
                {t('modal_success_desc')}
              </p>
            </motion.div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="font-script" style={{ fontSize: '36px', color: '#B8956A', display: 'block', lineHeight: 1 }}>
                  {t('modal_begin')}
                </span>
                <h3 className="font-serif" style={{ fontSize: '28px', color: '#2B372C', fontWeight: 600, marginTop: '4px' }}>
                  {t('modal_title')}
                </h3>
                <p style={{ fontSize: '14px', color: '#4A3F35', marginTop: '6px' }}>
                  {t('modal_sub')}
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Service Selection */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                    {t('modal_service_label')}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(184, 149, 106, 0.4)',
                      borderRadius: '4px',
                      fontSize: '15px',
                      color: '#2A2A2A',
                      outline: 'none'
                    }}
                  >
                    <option value="">{t('modal_choose_service')}</option>
                    <option value="Counselling Psychology">{t('service_counselling_title')}</option>
                    <option value="Clinical Hypnotherapy">{t('service_hypno_title')}</option>
                    <option value="Acupuncture Healing">{t('service_acu_title')}</option>
                    <option value="Access Bars® Session">{t('service_access_title')}</option>
                    <option value="Family Constellation">{t('service_const_title')}</option>
                    <option value="Training & Facilitation">{t('service_train_title')}</option>
                    <option value="General Consultation">{t('nav_book')}</option>
                  </select>
                </div>

                {/* Session Mode */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                    {t('modal_mode_label')}
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                      { key: 'In-Person Sanctuary', label: t('modal_mode_inperson') },
                      { key: 'Online Video Session', label: t('modal_mode_online') }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.key}
                        onClick={() => setMode(item.key)}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          borderRadius: '4px',
                          border: mode === item.key ? '1.5px solid #B8956A' : '1px solid rgba(184, 149, 106, 0.3)',
                          backgroundColor: mode === item.key ? 'rgba(184, 149, 106, 0.12)' : '#FFFFFF',
                          color: mode === item.key ? '#2B372C' : '#4A3F35',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      {t('modal_name_label')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('modal_name_ph')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(184, 149, 106, 0.4)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#2A2A2A',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      {t('modal_phone_label')}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t('modal_phone_ph')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(184, 149, 106, 0.4)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#2A2A2A',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Email & Date Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      {t('modal_email_label')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t('modal_email_ph')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(184, 149, 106, 0.4)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#2A2A2A',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      {t('modal_date_label')}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(184, 149, 106, 0.4)',
                        borderRadius: '4px',
                        fontSize: '14px',
                        color: '#2A2A2A',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                    {t('modal_note_label')}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t('modal_note_ph')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(184, 149, 106, 0.4)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      color: '#2A2A2A',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-bronze"
                  style={{ width: '100%', marginTop: '10px', padding: '16px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                >
                  <Sparkles style={{ width: '16px', height: '16px' }} />
                  {isSubmitting ? t('modal_sending') : t('modal_submit')}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
