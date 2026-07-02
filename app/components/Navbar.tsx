'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiCodeSSlashLine } from 'react-icons/ri';

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team',      href: '#developer' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <motion.a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} whileHover={{ scale: 1.02 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(99,102,241,0.4)',
            }}>
              <RiCodeSSlashLine style={{ color: '#fff', fontSize: 20 }} />
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px' }}>DevNest</div>
              <div style={{ color: '#818cf8', fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', marginTop: 2 }}>IT Solutions</div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <ul style={{ display: 'none', gap: 4, listStyle: 'none', alignItems: 'center' }} className="md-flex">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    position: 'relative', display: 'inline-block',
                    padding: '8px 16px', borderRadius: 10,
                    fontSize: 14, fontWeight: 500, textDecoration: 'none',
                    color: activeLink === link.href ? '#fff' : '#9ca3af',
                    background: activeLink === link.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = activeLink === link.href ? '#fff' : '#9ca3af'; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginLeft: 12 }}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block', padding: '10px 20px', borderRadius: 10,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
                }}
              >
                Get Started
              </motion.a>
            </li>
          </ul>

          {/* Mobile btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 72, left: 16, right: 16, zIndex: 49,
              background: 'rgba(8,8,24,0.95)',
              backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: 20,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block', padding: '12px 16px', borderRadius: 12,
                      color: '#d1d5db', fontWeight: 500, fontSize: 15, textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.color = '#fff'; el.style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.color = '#d1d5db'; el.style.background = 'transparent'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block', padding: '12px 16px', borderRadius: 12, textAlign: 'center',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
                  }}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline style for desktop nav show/hide */}
      <style>{`
        .md-flex { display: none !important; }
        .mobile-menu-btn { display: flex !important; }
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
