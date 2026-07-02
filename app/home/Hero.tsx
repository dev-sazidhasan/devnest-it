'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { RiSparklingFill } from 'react-icons/ri';

const words = ['Innovation', 'Excellence', 'Solutions', 'Future', 'Success'];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5+',   label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

interface Particle { id: number; left: number; top: number; duration: number; delay: number; }

function FloatingOrbs() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(99,102,241,0.08)', filter: 'blur(120px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(139,92,246,0.08)', filter: 'blur(100px)' }} />
      <div style={{ position: 'absolute', top: '40%', left: '40%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(6,182,212,0.06)', filter: 'blur(80px)' }} />
      {/* Grid */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', background: 'rgba(99,102,241,0.6)', left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          className="gradient-text"
          style={{ display: 'inline-block', fontWeight: 900 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', background: '#050510',
        width: '100%', boxSizing: 'border-box',
      }}
    >
      <FloatingOrbs />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 10, marginBottom: 32,
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: 999, padding: '8px 16px',
          maxWidth: 'calc(100vw - 48px)',
        }}
      >
        <RiSparklingFill style={{ color: '#818cf8', fontSize: 14 }} />
        <span style={{ fontSize: 13, color: '#d1d5db', fontWeight: 500 }}>Bangladesh's Premier IT Studio</span>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y, opacity, position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 16px', maxWidth: 1024, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: 'clamp(28px, 7vw, 90px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16, wordBreak: 'break-word' }}
        >
          We Build Digital <br />
          <CyclingWord />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontSize: 'clamp(14px, 2.5vw, 20px)', color: '#9ca3af', maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.7, padding: '0 8px' }}
        >
          DevNest IT crafts cutting-edge web, mobile, and cloud solutions that transform your vision into reality. Future-ready tech, delivered today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64, padding: '0 16px' }}
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
              flex: '1 1 auto', minWidth: 160, maxWidth: 280,
            }}
          >
            Explore Services <HiArrowRight />
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 12,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              flex: '1 1 auto', minWidth: 160, maxWidth: 280,
            }}
          >
            <HiPlay style={{ color: '#818cf8' }} /> View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, maxWidth: 700, margin: '0 auto', width: '100%' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 16, padding: '20px 16px', textAlign: 'center',
                transition: 'all 0.3s',
              }}
            >
              <div className="gradient-text" style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}
      >
        <span style={{ fontSize: 11, color: '#4b5563', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 500 }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 22, height: 36, borderRadius: 11, border: '2px solid rgba(75,85,99,0.8)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6 }}
        >
          <div style={{ width: 4, height: 8, borderRadius: 2, background: '#818cf8' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
