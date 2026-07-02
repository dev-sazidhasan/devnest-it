'use client';

import { motion } from 'framer-motion';
import { RiCodeSSlashLine, RiHeartFill } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const footerLinks = {
  Company:  ['About Us', 'Our Team', 'Careers', 'Blog'],
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions'],
  Support:  ['Contact Us', 'FAQ', 'Documentation', 'Privacy Policy'],
};

const socials = [
  { icon: FaFacebookF,  href: '#', label: 'Facebook',  color: '#60a5fa' },
  { icon: FaInstagram,  href: '#', label: 'Instagram', color: '#f472b6' },
  { icon: FaTwitter,    href: '#', label: 'Twitter',   color: '#38bdf8' },
  { icon: FaGithub,     href: '#', label: 'GitHub',    color: '#e5e7eb' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn',  color: '#60a5fa' },
];

const glassStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.10)',
};

export default function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#030310', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />
      <div style={{ position: 'absolute', bottom: '30%', left: '20%', width: 256, height: 256, borderRadius: '50%', background: 'rgba(99,102,241,0.06)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '10%', right: '20%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(139,92,246,0.06)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 40px', position: 'relative', zIndex: 1 }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 64 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
                <RiCodeSSlashLine style={{ color: '#fff', fontSize: 20 }} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 18, lineHeight: 1 }}>DevNest</div>
                <div style={{ color: '#818cf8', fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', marginTop: 2 }}>IT Solutions</div>
              </div>
            </motion.div>
            <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.8, maxWidth: 260, marginBottom: 24 }}>
              Building the digital future, one line of code at a time. We craft innovative solutions that transform businesses worldwide.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: 10, ...glassStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = color; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)'; }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([cat, links], ci) => (
            <motion.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * (ci + 1) }}>
              <h4 style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 16, letterSpacing: '0.5px' }}>{cat}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: '#6b7280', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#d1d5db'; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6b7280'; }}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ ...glassStyle, borderRadius: 20, padding: '24px 28px', marginBottom: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}
        >
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Stay in the loop</h4>
            <p style={{ color: '#9ca3af', fontSize: 13 }}>Get the latest updates on tech, projects, and insights.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <input type="email" placeholder="your@email.com"
              style={{ padding: '10px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: '#fff', fontSize: 13, outline: 'none', minWidth: 220 }}
            />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '10px 20px', borderRadius: 10, background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <p style={{ color: '#4b5563', fontSize: 13 }}>© {new Date().getFullYear()} DevNest IT. All rights reserved.</p>
          <p style={{ color: '#4b5563', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            Made with <RiHeartFill style={{ color: '#f472b6', fontSize: 12 }} /> in Bangladesh
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy','Terms','Cookies'].map(l => (
              <a key={l} href="#" style={{ color: '#4b5563', fontSize: 12, textDecoration: 'none' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#9ca3af'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#4b5563'; }}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
