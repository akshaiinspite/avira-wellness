import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles } from 'lucide-react';

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
  const [service, setService] = useState(initialService);
  const [mode, setMode] = useState('In-Person Sanctuary');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setSubmitted(false);
      onClose();
    }, 3000);
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
            padding: '40px 32px',
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
                Consultation Requested
              </h3>

              <p style={{ fontSize: '16px', color: '#4A3F35', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
                Thank you, <strong>{name || 'Friend'}</strong>. Afeefa and the Aavira team have received your request. We will reach out shortly via email or phone to confirm your session timing.
              </p>
            </motion.div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="font-script" style={{ fontSize: '36px', color: '#B8956A', display: 'block', lineHeight: 1 }}>
                  Begin Your Healing
                </span>
                <h3 className="font-serif" style={{ fontSize: '28px', color: '#2B372C', fontWeight: 600, marginTop: '4px' }}>
                  Book a Consultation
                </h3>
                <p style={{ fontSize: '14px', color: '#4A3F35', marginTop: '6px' }}>
                  Select your service and preferred schedule below
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Service Selection */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                    Select Service / Therapy
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
                    <option value="">-- Choose a Service --</option>
                    <option value="Counselling Psychology">Counselling Psychology</option>
                    <option value="Clinical Hypnotherapy">Clinical Hypnotherapy</option>
                    <option value="Acupuncture Healing">Acupuncture Healing</option>
                    <option value="Access Bars® Session">Access Bars® Session</option>
                    <option value="Family Constellation">Family Constellation</option>
                    <option value="Training & Facilitation">Training & Workshop Facilitation</option>
                    <option value="General Consultation">General Wellness Consultation</option>
                  </select>
                </div>

                {/* Session Mode */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                    Session Format
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {['In-Person Sanctuary', 'Online Video Session'].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMode(m)}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          borderRadius: '4px',
                          border: mode === m ? '1.5px solid #B8956A' : '1px solid rgba(184, 149, 106, 0.3)',
                          backgroundColor: mode === m ? 'rgba(184, 149, 106, 0.12)' : '#FFFFFF',
                          color: mode === m ? '#2B372C' : '#4A3F35',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#3B483C', display: 'block', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
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
                      Preferred Date
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
                    Personal Note / What brings you to Aavira?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any specific goals or details..."
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
                  className="btn-bronze"
                  style={{ width: '100%', marginTop: '10px', padding: '16px' }}
                >
                  <Sparkles style={{ width: '16px', height: '16px' }} />
                  CONFIRM CONSULTATION REQUEST
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
