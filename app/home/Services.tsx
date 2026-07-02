'use client';

import { motion, type Variants } from 'framer-motion';
import { RiCodeSSlashLine, RiSmartphoneLine, RiPaletteLine, RiCloudLine, RiRobot2Line, RiShieldCheckLine } from 'react-icons/ri';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  { icon: RiCodeSSlashLine,  title: 'Web Development',  desc: 'Modern, blazing-fast websites and web apps built with Next.js, React, and cutting-edge frameworks.',             grad: 'linear-gradient(135deg,#6366f1,#3b82f6)', glow: 'rgba(99,102,241,0.25)',  tags: ['Next.js','React','TypeScript'] },
  { icon: RiSmartphoneLine,  title: 'Mobile Apps',      desc: 'Cross-platform mobile experiences with Flutter and React Native that delight users on every device.',            grad: 'linear-gradient(135deg,#06b6d4,#14b8a6)', glow: 'rgba(6,182,212,0.25)',   tags: ['Flutter','React Native','iOS/Android'] },
  { icon: RiPaletteLine,     title: 'UI/UX Design',     desc: 'Human-centered design that tells your story beautifully — from wireframes to pixel-perfect interfaces.',         grad: 'linear-gradient(135deg,#ec4899,#f43f5e)', glow: 'rgba(236,72,153,0.25)',  tags: ['Figma','Prototyping','Design System'] },
  { icon: RiCloudLine,       title: 'Cloud Solutions',  desc: 'Scalable cloud infrastructure on AWS, GCP, and Azure — built for performance, security, and cost efficiency.',  grad: 'linear-gradient(135deg,#3b82f6,#6366f1)', glow: 'rgba(59,130,246,0.25)',  tags: ['AWS','Docker','Kubernetes'] },
  { icon: RiRobot2Line,      title: 'AI Integration',   desc: 'Supercharge your product with AI/ML features — smart automation, NLP, predictive analytics, and more.',          grad: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', glow: 'rgba(139,92,246,0.25)', tags: ['OpenAI','LangChain','TensorFlow'] },
  { icon: RiShieldCheckLine, title: 'Cyber Security',   desc: 'Protect your digital assets with enterprise-grade security audits, penetration testing, and compliance.',         grad: 'linear-gradient(135deg,#10b981,#14b8a6)', glow: 'rgba(16,185,129,0.25)',  tags: ['Security Audit','Pen Testing','Compliance'] },
];

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', padding: '120px 24px', overflow: 'hidden', background: 'linear-gradient(180deg, #050510 0%, #08081a 50%, #050510 100%)' }}>
      {/* Dividers */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }} />
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'rgba(99,102,241,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...glassStyle, borderRadius: 999, padding: '8px 16px', marginBottom: 24, borderColor: 'rgba(139,92,246,0.3)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-1px' }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 17, color: '#9ca3af', maxWidth: 520, margin: '0 auto' }}
          >
            End-to-end digital solutions crafted with precision and powered by the latest technology stack.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i} variants={cardVariants}
              whileHover={{ y: -8 }}
              style={{ ...glassStyle, borderRadius: 20, padding: 28, transition: 'all 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
            >
              {/* Hover glow top */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: s.grad, opacity: 0.6 }} />

              <div style={{ width: 56, height: 56, borderRadius: 16, background: s.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: `0 0 24px ${s.glow}` }}>
                <s.icon style={{ color: '#fff', fontSize: 26 }} />
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 10px', fontSize: 11, fontWeight: 500, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 6, color: '#6b7280' }}>{tag}</span>
                ))}
              </div>

              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#818cf8', textDecoration: 'none' }}>
                Learn more <HiArrowRight style={{ fontSize: 11 }} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <p style={{ color: '#4b5563', marginBottom: 16, fontSize: 14 }}>Need something custom? Let's talk.</p>
          <motion.a
            href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 12, ...glassStyle,
              color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            Discuss Your Project <HiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
