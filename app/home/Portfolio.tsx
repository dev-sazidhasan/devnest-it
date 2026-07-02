'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { RiGithubLine } from 'react-icons/ri';

const categories = ['All', 'Web', 'Mobile', 'Design', 'Cloud'];

const projects = [
  { id: 1, title: 'E-Commerce Platform',     category: 'Web',    desc: 'High-performance store with AI-powered recommendations, real-time inventory, and seamless checkout.',         tags: ['Next.js','Stripe','PostgreSQL'],     grad: 'linear-gradient(135deg,#6366f1,#8b5cf6)', year: '2025', status: 'Live' },
  { id: 2, title: 'Mobile Fitness App',       category: 'Mobile', desc: 'Cross-platform wellness app with AI workout tracking, nutrition analysis, and social challenges.',             tags: ['Flutter','Firebase','ML Kit'],       grad: 'linear-gradient(135deg,#06b6d4,#3b82f6)', year: '2025', status: 'Live' },
  { id: 3, title: 'Corporate Website Redesign', category: 'Design', desc: 'Complete brand transformation with award-winning UI/UX, boosting engagement by 340%.',                    tags: ['Figma','Next.js','Framer'],          grad: 'linear-gradient(135deg,#ec4899,#f43f5e)', year: '2024', status: 'Live' },
  { id: 4, title: 'Cloud Infrastructure',     category: 'Cloud',  desc: 'Migrated legacy systems to microservices on AWS, achieving 99.99% uptime and 60% cost reduction.',           tags: ['AWS','Docker','Terraform'],          grad: 'linear-gradient(135deg,#10b981,#14b8a6)', year: '2024', status: 'Live' },
  { id: 5, title: 'AI Dashboard SaaS',        category: 'Web',    desc: 'Real-time analytics platform with NLP-powered insights, serving 50K+ monthly active users.',                  tags: ['React','Python','OpenAI'],           grad: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', year: '2025', status: 'Beta' },
  { id: 6, title: 'FinTech Mobile Wallet',    category: 'Mobile', desc: 'Secure digital wallet with biometric auth, instant transfers, and real-time spending insights.',              tags: ['React Native','Node.js','Redis'],    grad: 'linear-gradient(135deg,#f59e0b,#ea580c)', year: '2025', status: 'Live' },
];

const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1,   y: 0,  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } },
};

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" style={{ position: 'relative', padding: '120px 24px', background: '#050510', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />
      <div style={{ position: 'absolute', top: '20%', right: 0, width: 400, height: 400, borderRadius: '50%', background: 'rgba(139,92,246,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: 0, width: 400, height: 400, borderRadius: '50%', background: 'rgba(6,182,212,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...glassStyle, borderRadius: 999, padding: '8px 16px', marginBottom: 24, borderColor: 'rgba(6,182,212,0.3)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#67e8f9', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#fff', marginBottom: 20, letterSpacing: '-1px' }}
          >
            Featured <span className="gradient-text">Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 17, color: '#9ca3af', maxWidth: 520, margin: '0 auto 40px' }}
          >
            A selection of projects that showcase our craft, creativity, and technical depth.
          </motion.p>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}
          >
            {categories.map(cat => (
              <button
                key={cat} onClick={() => setActive(cat)}
                style={{
                  padding: '9px 20px', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s',
                  background: active === cat ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.04)',
                  border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.10)',
                  color: active === cat ? '#fff' : '#9ca3af',
                  boxShadow: active === cat ? '0 4px 20px rgba(99,102,241,0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.id} variants={cardVariants} layout whileHover={{ y: -8 }}
                style={{ ...glassStyle, borderRadius: 20, overflow: 'hidden', transition: 'all 0.3s', cursor: 'default' }}
              >
                {/* Card header */}
                <div style={{ position: 'relative', height: 150, background: p.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.3))' }} />
                  {/* Status */}
                  <div style={{ position: 'absolute', top: 14, right: 14, padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600,
                    background: p.status === 'Live' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)',
                    border: `1px solid ${p.status === 'Live' ? 'rgba(16,185,129,0.4)' : 'rgba(245,158,11,0.4)'}`,
                    color: p.status === 'Live' ? '#34d399' : '#fbbf24',
                  }}>
                    {p.status === 'Live' ? '● Live' : '◐ Beta'}
                  </div>
                  <div style={{ position: 'absolute', bottom: 12, left: 16, fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{p.year}</div>
                  <span style={{ fontSize: 72, fontWeight: 900, color: 'rgba(255,255,255,0.08)', userSelect: 'none' }}>{String(p.id).padStart(2, '0')}</span>
                </div>

                {/* Body */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{p.title}</h3>
                    <span style={{ fontSize: 11, color: '#6b7280', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '3px 8px', flexShrink: 0, marginLeft: 8 }}>{p.category}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                    {p.tags.map(t => <span key={t} style={{ padding: '3px 8px', fontSize: 11, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, color: '#6b7280' }}>{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: '#818cf8', textDecoration: 'none' }}>
                      <HiExternalLink style={{ fontSize: 12 }} /> View Case Study
                    </a>
                    <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none' }}>
                      <RiGithubLine style={{ fontSize: 14 }} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: 64 }}
        >
          <motion.a
            href="#contact" whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
            }}
          >
            Start Your Project <HiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
