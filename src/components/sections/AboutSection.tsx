import React from 'react';
import { User, GraduationCap, MapPin, Calendar, Award, Code, CheckCircle2, Sparkles, Database, Layers, Cpu, MessageSquare } from 'lucide-react';
import type { ProfileData } from '../../types/portfolio';
import { technicalStrengthsData } from '../../data/portfolioData';

interface AboutSectionProps {
  profile: ProfileData;
}

const getStrengthIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code size={20} color="#00f0ff" />;
    case 'layers':
      return <Layers size={20} color="#a855f7" />;
    case 'database':
      return <Database size={20} color="#34d399" />;
    case 'cpu':
      return <Cpu size={20} color="#fbbf24" />;
    case 'message-square':
      return <MessageSquare size={20} color="#38bdf8" />;
    default:
      return <Sparkles size={20} color="#00f0ff" />;
  }
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              color: '#00f0ff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <User size={14} />
            <span>Profile & Background</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '14px',
            }}
          >
            About <span style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vasu Bandaru</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Engineering scalable full-stack applications with modern React ecosystems, resilient Node/Express backends, and cutting-edge generative AI integrations.
          </p>
        </div>

        {/* 2-Column Grid: Narrative Summary + Education & Key Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Left Card: Professional Summary from Resume */}
          <div
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} color="#00f0ff" />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc' }}>
                Professional Summary
              </h3>
            </div>

            <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.75, marginBottom: '20px' }}>
              {profile.summary}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: '#94a3b8' }}>
                📍 {profile.location}
              </div>
              <div style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)', fontSize: '0.8rem', color: '#00f0ff' }}>
                🚀 200+ LeetCode Solved
              </div>
              <div style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.2)', fontSize: '0.8rem', color: '#c084fc' }}>
                🧠 LLM & Gemini Integration
              </div>
            </div>
          </div>

          {/* Right Card: Education */}
          <div
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={20} color="#c084fc" />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc' }}>
                  Education
                </h3>
              </div>

              <div
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(10, 15, 29, 0.65)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {profile.education.degree}
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#c084fc', marginBottom: '10px' }}>
                  {profile.education.institution}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.84rem', color: '#94a3b8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} color="#64748b" />
                    <span>{profile.education.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={14} color="#64748b" />
                    <span>{profile.education.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={16} color="#34d399" />
                <span>Specialized in Computer Science & Full-Stack Systems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={16} color="#34d399" />
                <span>Hands-on production projects & internships</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#34d399' }}>
                <CheckCircle2 size={16} color="#34d399" />
                <span>Active LeetCode problem solver (200+ Solved)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Strengths Grid */}
        <div>
          <h3
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Core Technical Strengths
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {technicalStrengthsData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                }}
                className="hover:border-cyan-400"
              >
                <div style={{ marginBottom: '14px' }}>
                  {getStrengthIcon(item.icon)}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
