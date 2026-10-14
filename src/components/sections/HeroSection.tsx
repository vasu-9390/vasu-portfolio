import React from 'react';
import { ArrowRight, Download, Gamepad2, Mail, Sparkles, Trophy, Code2, Layers, Cpu } from 'lucide-react';
import type { ProfileData } from '../../types/portfolio';
import { LeetCodeIcon } from '../common/BrandIcons';

interface HeroSectionProps {
  profile: ProfileData;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 40px)',
        paddingBottom: '80px',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '56px',
          }}
        >
          {/* Left Column: Introduction & Call-to-Actions */}
          <div style={{ zIndex: 10 }}>
            {/* Status Radar Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
                marginBottom: '20px',
              }}
            >
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff', display: 'inline-block' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--cyan-400)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Available for Full-Stack & AI Roles
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '12px',
                color: '#ffffff',
              }}
            >
              Hi, I'm <span className="section-title-highlight" style={{ background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{profile.name}</span>
            </h1>

            {/* Role Title */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--cyan-400)',
                marginBottom: '16px',
              }}
            >
              <span style={{ color: 'var(--purple-400)' }}>&gt;</span>
              <span>{profile.role}</span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                fontWeight: 700,
                color: '#f1f5f9',
                lineHeight: 1.3,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              {profile.headline}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.15vw, 1.15rem)',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '36px',
              }}
            >
              "{profile.description}"
            </p>

            {/* 4 Working Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '40px',
              }}
            >
              {/* 1. View My Projects */}
              <button
                onClick={() => scrollTo('projects')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
                  color: '#030712',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.35)',
                  transition: 'all 0.25s ease',
                }}
                className="hover-lift"
              >
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </button>

              {/* 2. Play Skills Game */}
              <button
                onClick={() => scrollTo('skills-game')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '10px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  color: '#c084fc',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(168, 85, 247, 0.45)',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                  transition: 'all 0.25s ease',
                }}
                className="hover-lift"
              >
                <Gamepad2 size={18} color="#c084fc" />
                <span>Play Skills Game</span>
              </button>

              {/* 3. Download Resume */}
              <a
                href="/resume.pdf"
                download="Vasu_Bandaru_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#34d399',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)',
                  transition: 'all 0.25s ease',
                }}
                className="hover-lift"
              >
                <Download size={17} color="#34d399" />
                <span>Download Resume</span>
              </a>

              {/* 4. Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#f8fafc',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                className="hover-lift"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Prominent Statistics Row with 200+ LeetCode Achievement */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* LeetCode Achievement */}
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 161, 22, 0.35)',
                  boxShadow: '0 0 20px rgba(255, 161, 22, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <LeetCodeIcon size={18} />
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffa116' }}>200+</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.3 }}>
                  Problems Solved
                </div>
              </div>

              {/* Live Projects */}
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Layers size={18} color="#00f0ff" />
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00f0ff' }}>7</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.3 }}>
                  Live Production Apps
                </div>
              </div>

              {/* Technologies */}
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Cpu size={18} color="#c084fc" />
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c084fc' }}>30+</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.3 }}>
                  Skills & Tools
                </div>
              </div>

              {/* AI & Full-Stack Focus */}
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Sparkles size={18} color="#34d399" />
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399' }}>MERN+AI</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.3 }}>
                  Modern Full-Stack
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vasu's Real Photograph in Futuristic Holographic Frame */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
            }}
          >
            {/* Ambient Cyan-Purple Glow Aura */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.28) 0%, rgba(168, 85, 247, 0.24) 50%, transparent 70%)',
                filter: 'blur(35px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Outer Rotating Neon Accent Ring */}
            <div
              style={{
                position: 'absolute',
                width: '370px',
                height: '370px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(0, 240, 255, 0.45)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
                animation: 'spin 24s linear infinite',
                pointerEvents: 'none',
              }}
            />

            {/* Inner Counter-Rotating Purple Accent Ring */}
            <div
              style={{
                position: 'absolute',
                width: '395px',
                height: '395px',
                borderRadius: '50%',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                animation: 'spin-reverse 18s linear infinite',
                pointerEvents: 'none',
              }}
            />

            {/* Profile Picture Card Container */}
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '390px',
                borderRadius: '28px',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.35) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(236, 72, 153, 0.25) 100%)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.25)',
                zIndex: 1,
              }}
            >
              {/* Inner Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  background: '#0a0f1d',
                }}
              >
                {/* Real Photograph of Vasu Bandaru */}
                <img
                  src="/vasu-profile.jpg"
                  alt="Vasu Bandaru - MERN Stack & AI Full Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(1.02)',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Subtle Cyber Gradient Overlay at the bottom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(3, 7, 18, 0.85) 0%, rgba(3, 7, 18, 0.2) 35%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Bottom Card Identity Plate */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    right: '14px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    background: 'rgba(10, 15, 29, 0.82)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>
                      Vasu Bandaru
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                      Full Stack & AI Engineer
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 8px',
                      borderRadius: '999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#34d399' }}>Active</span>
                  </div>
                </div>

                {/* Cyber Corner Decals */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', width: '14px', height: '14px', borderTop: '2px solid #00f0ff', borderLeft: '2px solid #00f0ff' }} />
                <div style={{ position: 'absolute', top: '10px', right: '10px', width: '14px', height: '14px', borderTop: '2px solid #a855f7', borderRight: '2px solid #a855f7' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
