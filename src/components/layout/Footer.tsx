import React from 'react';
import { ArrowUp, Terminal, Mail, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/BrandIcons';
import type { ProfileData } from '../../types/portfolio';

interface FooterProps {
  profile: ProfileData;
  onOpenTerminal: () => void;
}

export function Footer({ profile, onOpenTerminal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(2, 6, 23, 0.95)',
        padding: '64px 0 32px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                  color: '#030712',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                VB
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#f8fafc' }}>
                Vasu Bandaru
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              MERN Stack & Full Stack Developer building intelligent digital experiences with React, Node.js, and LLM generative integrations.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:text-cyan-400"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:text-cyan-400"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode (200+ Solved)"
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:text-amber-400"
              >
                <LeetCodeIcon size={18} />
              </a>

              <button
                onClick={onOpenTerminal}
                title="Interactive CLI Terminal"
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hover:text-cyan-400"
              >
                <Terminal size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#home" style={{ color: '#94a3b8', textDecoration: 'none' }}>Overview</a>
              <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Vasu</a>
              <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Skills Matrix</a>
              <a href="#skills-game" style={{ color: '#c084fc', textDecoration: 'none', fontWeight: 600 }}>3D Skills Playground</a>
              <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Production Projects</a>
              <a href="#dsa" style={{ color: '#ffa116', textDecoration: 'none' }}>LeetCode 200+ DSA</a>
              <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
              <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '16px', fontFamily: 'var(--font-mono)' }}>
              Direct Transmission
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>EMAIL</span>
                <a href={`mailto:${profile.email}`} style={{ color: '#00f0ff', textDecoration: 'none' }}>
                  {profile.email}
                </a>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>RESUME</span>
                <a href="/resume.pdf" download="Vasu_Bandaru_Resume.pdf" style={{ color: '#34d399', textDecoration: 'none', fontWeight: 600 }}>
                  Download Vasu_Bandaru_Resume.pdf
                </a>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>LOCATION</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} Vasu Bandaru. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '0.78rem',
            }}
            className="hover:text-cyan-400"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
