'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneLine, RiCheckLine } from 'react-icons/ri';
import { HiArrowRight } from 'react-icons/hi';

const contactInfo = [
  { icon: RiMailLine,    label: 'Email Us',  value: 'hello@devnestit.com',  href: 'mailto:hello@devnestit.com', grad: 'linear-gradient(135deg,#6366f1,#8b5cf6)', glow: 'rgba(99,102,241,0.3)' },
  { icon: RiPhoneLine,   label: 'Call Us',   value: '+880 1800 000 000',     href: 'tel:+8801800000000',         grad: 'linear-gradient(135deg,#06b6d4,#3b82f6)', glow: 'rgba(6,182,212,0.3)' },
  { icon: RiMapPinLine,  label: 'Find Us',   value: 'Dhaka, Bangladesh',     href: '#',                          grad: 'linear-gradient(135deg,#ec4899,#f43f5e)', glow: 'rgba(236,72,153,0.3)' },
];

const services = ['Web Development','Mobile App','UI/UX Design','Cloud Solutions','AI Integration','Other'];

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

const inputStyle = {
  width: '100%', padding: '12px 16px', borderRadius: 12,
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.10)',
  color: '#fff', fontSize: 14,
  transition: 'border-color 0.2s',
  outline: 'none',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none' as const,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ position: 'relative', padding: '120px 24px', background: '#050510', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />
      <div style={{ position: 'absolute', top: '20%', left: 0, width: 320, height: 320, borderRadius: '50%', background: 'rgba(99,102,241,0.07)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: 0, width: 320, height: 320, borderRadius: '50%', background: 'rgba(139,92,246,0.07)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...glassStyle, borderRadius: 999, padding: '8px 16px', marginBottom: 24, borderColor: 'rgba(236,72,153,0.3)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#f472b6', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#f9a8d4', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-1px' }}
          >
            Start a <span className="gradient-text">Conversation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 17, color: '#9ca3af', maxWidth: 520, margin: '0 auto' }}
          >
            Have a project in mind? We'd love to hear about it. Let's build something amazing together.
          </motion.p>
        </div>

        {/* Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div style={{ ...glassStyle, borderRadius: 20, padding: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Get in touch</h3>
              <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>We typically respond within 2 hours during business days.</p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.a key={i} href={item.href} whileHover={{ x: 4 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, ...glassStyle, borderRadius: 16, padding: '16px 20px', textDecoration: 'none', transition: 'all 0.3s' }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 12, background: item.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 18px ${item.glow}` }}>
                  <item.icon style={{ color: '#fff', fontSize: 20 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>{item.value}</p>
                </div>
                <HiArrowRight style={{ color: '#4b5563', fontSize: 14 }} />
              </motion.a>
            ))}

            <div style={{ ...glassStyle, borderRadius: 16, padding: '16px 20px', borderColor: 'rgba(74,222,128,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4ade80' }} />
                <div>
                  <p style={{ fontSize: 14, color: '#fff', fontWeight: 600 }}>Available for projects</p>
                  <p style={{ fontSize: 12, color: '#6b7280' }}>Usually responds in &lt; 2 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
          >
            <div style={{ ...glassStyle, borderRadius: 24, padding: 32 }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 0', textAlign: 'center' }}
                >
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#14b8a6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}>
                    <RiCheckLine style={{ color: '#fff', fontSize: 28 }} />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontSize: 14, color: '#9ca3af', maxWidth: 280, lineHeight: 1.7 }}>Thanks for reaching out! We'll get back to you within 2 hours.</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, fontSize: 13, color: '#818cf8', background: 'none', border: 'none', cursor: 'pointer' }}>Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: '#9ca3af', fontWeight: 500, marginBottom: 8 }}>Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={onChange} placeholder="John Doe" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: '#9ca3af', fontWeight: 500, marginBottom: 8 }}>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="john@example.com" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: '#9ca3af', fontWeight: 500, marginBottom: 8 }}>Service Needed</label>
                      <select name="service" value={form.service} onChange={onChange} style={selectStyle}>
                        <option value="" style={{ background: '#0d0d1a' }}>Select a service</option>
                        {services.map(s => <option key={s} value={s} style={{ background: '#0d0d1a' }}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, color: '#9ca3af', fontWeight: 500, marginBottom: 8 }}>Budget Range</label>
                      <select name="budget" value={form.budget} onChange={onChange} style={selectStyle}>
                        <option value="" style={{ background: '#0d0d1a' }}>Select budget</option>
                        <option value="<5k" style={{ background: '#0d0d1a' }}>Less than $5K</option>
                        <option value="5k-15k" style={{ background: '#0d0d1a' }}>$5K – $15K</option>
                        <option value="15k-50k" style={{ background: '#0d0d1a' }}>$15K – $50K</option>
                        <option value="50k+" style={{ background: '#0d0d1a' }}>$50K+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: '#9ca3af', fontWeight: 500, marginBottom: 8 }}>Your Message *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell us about your project, goals, and timeline..." style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <motion.button
                    type="submit" disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%', padding: '14px 24px', borderRadius: 12,
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff', fontWeight: 600, fontSize: 15, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      boxShadow: '0 4px 24px rgba(99,102,241,0.35)', opacity: loading ? 0.7 : 1,
                      transition: 'all 0.3s',
                    }}
                  >
                    {loading ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><RiSendPlaneLine style={{ fontSize: 16 }} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
