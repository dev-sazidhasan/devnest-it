'use client';

import { motion, type Variants } from 'framer-motion';
import { RiRocketLine, RiShieldCheckLine, RiBarChartBoxLine, RiTeamLine } from 'react-icons/ri';

const values = [
  { icon: RiRocketLine,      title: 'Innovation',   grad: 'linear-gradient(135deg,#6366f1,#8b5cf6)', glow: 'rgba(99,102,241,0.3)',  text: 'We embrace the latest technologies to deliver forward-thinking solutions that keep you ahead of the competition.' },
  { icon: RiBarChartBoxLine, title: 'Scalability',  grad: 'linear-gradient(135deg,#06b6d4,#3b82f6)', glow: 'rgba(6,182,212,0.3)',   text: 'Our systems are engineered to grow with your business — flexible, efficient, and built for the long run.' },
  { icon: RiShieldCheckLine, title: 'Reliability',  grad: 'linear-gradient(135deg,#8b5cf6,#ec4899)', glow: 'rgba(139,92,246,0.3)',  text: 'We ensure high availability and peak performance, so your operations run smoothly around the clock.' },
  { icon: RiTeamLine,        title: 'Partnership',  grad: 'linear-gradient(135deg,#10b981,#14b8a6)', glow: 'rgba(16,185,129,0.3)',  text: 'We work as an extension of your team, deeply invested in your goals and long-term success.' },
];

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', padding: '120px 24px', background: '#050510', overflow: 'hidden' }}>
      {/* Dividers */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />
      {/* BG orbs */}
      <div style={{ position: 'absolute', top: '30%', left: '5%',  width: 400, height: 400, borderRadius: '50%', background: 'rgba(99,102,241,0.05)',  filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(139,92,246,0.05)', filter: 'blur(80px)',  pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...glassStyle, borderRadius: 999, padding: '8px 16px', marginBottom: 24, borderColor: 'rgba(99,102,241,0.3)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#a5b4fc', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>Who We Are</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 24, letterSpacing: '-1px' }}
          >
            Building the <span className="gradient-text">Digital Future</span><br />Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 17, color: '#9ca3af', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}
          >
            At <span style={{ color: '#818cf8', fontWeight: 600 }}>DevNest IT</span>, we are passionate engineers, designers, and strategists transforming ideas into powerful digital experiences.
          </motion.p>
        </div>

        {/* Two column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center', marginBottom: 80 }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.3 }}>
              We don't just write code —{' '}
              <span className="gradient-text">we build possibilities</span>
            </h3>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 16 }}>
              Since our founding, we've been on a mission to bridge the gap between cutting-edge technology and business goals. From startups to enterprises, we've helped 150+ clients launch products that users love.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: 28 }}>
              Our team brings together expertise in software engineering, cloud architecture, AI/ML integration, and human-centered design — all under one roof.
            </p>
            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Next.js','React','Node.js','TypeScript','AWS','Docker','Flutter','PostgreSQL'].map(t => (
                <span key={t} style={{ padding: '6px 12px', fontSize: 12, fontWeight: 500, ...glassStyle, borderRadius: 8, color: '#9ca3af' }}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <div style={{ ...glassStyle, borderRadius: 24, padding: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { label: 'Projects Completed', value: '150+', color: '#818cf8' },
                  { label: 'Happy Clients',       value: '80+',  color: '#22d3ee' },
                  { label: 'Team Members',        value: '12',   color: '#a78bfa' },
                  { label: 'Awards Won',          value: '8',    color: '#f472b6' },
                ].map((item, i) => (
                  <motion.div
                    key={i} whileHover={{ scale: 1.04 }}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 16px', transition: 'all 0.3s' }}
                  >
                    <div style={{ fontSize: 32, fontWeight: 900, color: item.color, marginBottom: 4 }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}
        >
          {values.map((v, i) => (
            <motion.div
              key={i} variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ ...glassStyle, borderRadius: 20, padding: 24, transition: 'all 0.3s', cursor: 'default' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: v.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: `0 0 20px ${v.glow}` }}>
                <v.icon style={{ color: '#fff', fontSize: 24 }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{v.title}</h3>
              <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7 }}>{v.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
            }}
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
