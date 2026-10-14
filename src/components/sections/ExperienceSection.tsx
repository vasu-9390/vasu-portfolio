import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';
import type { ExperienceItem } from '../../types/portfolio';
import { TechIcon } from '../common/BrandIcons';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
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
            <Briefcase size={14} />
            <span>Career Milestones</span>
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
            Professional <span style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experience</span>
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
            Hands-on software engineering experience delivering production web applications, architecting state systems, and optimizing user engagement.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '16px',
              bottom: '16px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f0ff, #a855f7, transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experience.map((item) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  paddingLeft: '56px',
                }}
              >
                {/* Timeline Node Point */}
                <div
                  style={{
                    position: 'absolute',
                    left: '11px',
                    top: '24px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#00f0ff',
                    boxShadow: '0 0 16px #00f0ff',
                    border: '3px solid #030712',
                  }}
                />

                {/* Experience Card */}
                <div
                  style={{
                    borderRadius: '24px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    padding: '32px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 240, 255, 0.1)',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
                        {item.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', fontWeight: 600, color: '#00f0ff' }}>
                        <Building size={16} />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 12px',
                          borderRadius: '999px',
                          background: 'rgba(0, 240, 255, 0.12)',
                          color: '#00f0ff',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: '#64748b' }}>
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {item.responsibilities.map((resp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color="#00f0ff" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                      Technologies & Frameworks Utilized
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {item.technologies.map((tech) => (
                        <div
                          key={tech}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '5px 12px',
                            borderRadius: '8px',
                            background: 'rgba(10, 15, 29, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#e2e8f0',
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          <TechIcon name={tech} size={13} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
