import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { TechIcon, GithubIcon } from '../common/BrandIcons';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'FinTech', 'AI / LLM', 'SaaS', 'Healthcare'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <Layers size={14} />
            <span>Production Portfolio</span>
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
            Featured <span style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Live Projects</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            Seven production-ready applications spanning autonomous financial reconciliation, conversational voice AI, personal finance dashboards, and healthcare systems.
          </p>

          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  background: activeFilter === cat ? 'linear-gradient(135deg, #00f0ff, #3b82f6)' : 'rgba(15, 23, 42, 0.7)',
                  color: activeFilter === cat ? '#030712' : '#94a3b8',
                  border: activeFilter === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === cat ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '24px',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="hover-card group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = proj.accentColor;
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px -15px ${proj.accentColor}33, 0 0 20px ${proj.accentColor}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top Browser Bar Mockup */}
              <div
                style={{
                  height: '140px',
                  background: `linear-gradient(135deg, #0a0f1d 0%, ${proj.accentColor}18 100%)`,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ambient glow in background */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: proj.accentColor,
                    filter: 'blur(45px)',
                    opacity: 0.25,
                    pointerEvents: 'none',
                  }}
                />

                {/* Browser dots + category badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', opacity: 0.7 }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', opacity: 0.7 }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', opacity: 0.7 }} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                    }}
                  >
                    {proj.category}
                  </span>
                </div>

                {/* Subtitle preview link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: proj.accentColor }} />
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {proj.liveUrl.replace('https://', '')}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#f8fafc',
                      marginBottom: '10px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      minHeight: '68px',
                    }}
                  >
                    {proj.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {proj.keyHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={13} color={proj.accentColor} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Technology Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {proj.techStack.map((tech) => (
                      <div
                        key={tech}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: 'rgba(10, 15, 29, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#e2e8f0',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <TechIcon name={tech} size={12} />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '18px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    gap: '12px',
                  }}
                >
                  {/* View Live Project (Clickable Target Blank with Rel) */}
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '11px 18px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${proj.accentColor}, #3b82f6)`,
                      color: '#030712',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      boxShadow: `0 0 20px ${proj.accentColor}40`,
                      transition: 'all 0.2s ease',
                    }}
                    className="hover-lift"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={15} />
                  </a>

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      style={{
                        padding: '11px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#f8fafc',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
                      className="hover:border-cyan-400"
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
