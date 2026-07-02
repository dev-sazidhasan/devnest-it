'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';

interface DevType {
  name: string; position: string; imageUrl: string; bio?: string; skills?: string[];
  socials: { facebook?: string; instagram?: string; github?: string; linkedin?: string; };
}

const developers: DevType[] = [
  { name: 'Shahir Islam',          position: 'Full Stack Developer',   imageUrl: '/sazid.jpg',   bio: 'Building end-to-end solutions with React, Node.js & cloud architecture.',                  skills: ['React','Node.js','AWS'],          socials: { facebook: '#', instagram: '#', github: '#', linkedin: '#' } },
  { name: 'Anayet Shorif Shorno',  position: 'Backend Developer',      imageUrl: '/jane.jpg',    bio: 'Architecting scalable APIs and microservices that power modern apps.',                     skills: ['Python','Django','PostgreSQL'],    socials: { github: '#', linkedin: '#' } },
  { name: 'Sazid Hasan',          position: 'Frontend Developer',     imageUrl: '/john.jpg',    bio: 'Crafting pixel-perfect interfaces with React and modern CSS techniques.',                   skills: ['Next.js','TypeScript','Tailwind'], socials: { facebook: '#', github: '#', linkedin: '#' } },
  { name: 'Mashkurul Udoy',       position: 'Frontend Developer',     imageUrl: '/emily.jpg',   bio: 'Passionate about creating smooth, accessible, and responsive web experiences.',             skills: ['Vue.js','React','GSAP'],           socials: { instagram: '#', linkedin: '#' } },
  { name: 'Badhon Krishna Halder', position: 'UI/UX Designer',         imageUrl: '/michael.jpg', bio: 'Turning complex problems into elegant, intuitive user experiences.',                        skills: ['Figma','Prototyping','Research'],  socials: { github: '#', linkedin: '#' } },
  { name: 'Rakib Islam',           position: 'Mobile App Developer',   imageUrl: '/ashik.jpg',   bio: 'Building high-performance cross-platform apps with Flutter and React Native.',             skills: ['Flutter','React Native','Firebase'], socials: { github: '#', linkedin: '#' } },
];

const grads = [
  'linear-gradient(135deg,#6366f1,#8b5cf6)',
  'linear-gradient(135deg,#06b6d4,#3b82f6)',
  'linear-gradient(135deg,#ec4899,#f43f5e)',
  'linear-gradient(135deg,#10b981,#14b8a6)',
  'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  'linear-gradient(135deg,#f59e0b,#ea580c)',
];

const socialConfig = [
  { key: 'facebook'  as const, icon: FaFacebookF,  color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',  label: 'Facebook'  },
  { key: 'instagram' as const, icon: FaInstagram,  color: '#ec4899', bg: 'rgba(236,72,153,0.1)', label: 'Instagram' },
  { key: 'github'    as const, icon: FaGithub,     color: '#e5e7eb', bg: 'rgba(229,231,235,0.1)', label: 'GitHub'    },
  { key: 'linkedin'  as const, icon: FaLinkedinIn, color: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  label: 'LinkedIn'  },
];

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

function DevCard({ dev, index }: { dev: DevType; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const grad = grads[index % grads.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: 320, cursor: 'pointer', perspective: 1000 }}
      onClick={() => setFlipped(f => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', ...glassStyle, borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          {/* Serial */}
          <div style={{ position: 'absolute', top: 14, left: 14, width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{index + 1}</div>
          <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 11, color: '#4b5563', fontWeight: 500 }}>tap to flip</div>

          {/* Avatar */}
          <div style={{ position: 'relative' }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 0 24px rgba(99,102,241,0.2)' }}>
              <img src={dev.imageUrl} alt={dev.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { const t = e.target as HTMLImageElement; t.style.display = 'none'; const p = t.parentElement; if (p) p.innerHTML = `<span style="color:#fff;font-size:28px;font-weight:900">${dev.name[0]}</span>`; }}
              />
            </div>
            <div style={{ position: 'absolute', bottom: -4, right: -4, width: 16, height: 16, borderRadius: '50%', background: '#4ade80', border: '3px solid #050510' }} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{dev.name}</h3>
            <p style={{ fontSize: 13, color: '#818cf8', fontWeight: 500 }}>{dev.position}</p>
          </div>

          {dev.skills && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6 }}>
              {dev.skills.map(s => <span key={s} style={{ padding: '3px 10px', fontSize: 11, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 6, color: '#9ca3af' }}>{s}</span>)}
            </div>
          )}
        </div>

        {/* BACK */}
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', ...glassStyle, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RiCodeSSlashLine style={{ color: '#fff', fontSize: 24 }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{dev.name}</h3>
            <p style={{ fontSize: 12, color: '#818cf8', fontWeight: 500, marginBottom: 10 }}>{dev.position}</p>
            {dev.bio && <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.7 }}>{dev.bio}</p>}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {socialConfig.map(({ key, icon: Icon, color, bg, label }) =>
              dev.socials[key] ? (
                <a key={key} href={dev.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={label}
                  onClick={e => e.stopPropagation()}
                  style={{ width: 36, height: 36, borderRadius: 10, background: bg, border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none', transition: 'all 0.2s' }}
                >
                  <Icon size={14} />
                </a>
              ) : null
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Developer() {
  return (
    <section id="developer" style={{ position: 'relative', padding: '120px 24px', overflow: 'hidden', background: 'linear-gradient(180deg, #050510 0%, #08081a 50%, #050510 100%)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)' }} />
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, borderRadius: '50%', background: 'rgba(139,92,246,0.06)', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...glassStyle, borderRadius: 999, padding: '8px 16px', marginBottom: 24, borderColor: 'rgba(139,92,246,0.3)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>The Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: '-1px' }}
          >
            Meet Our <span className="gradient-text">Developers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 17, color: '#9ca3af', maxWidth: 520, margin: '0 auto' }}
          >
            A passionate team dedicated to building extraordinary things.{' '}
            <span style={{ color: '#4b5563', fontSize: 13 }}>(Tap a card to flip)</span>
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {developers.map((dev, idx) => <DevCard key={dev.name} dev={dev} index={idx} />)}
        </div>
      </div>
    </section>
  );
}
