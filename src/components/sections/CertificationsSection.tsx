import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';

interface CertificationsSectionProps {
  certifications: CertificationItem[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      style={{
        position: 'relative',
        padding: '80px 0',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#34d399',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Award size={14} />
            <span>Accreditations</span>
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
            Professional <span style={{ background: 'linear-gradient(135deg, #34d399, #00f0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Certifications</span>
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
            Verified credentials in cloud development, enterprise web architecture, and relational database management.
          </p>
        </div>

        {/* 3 Certifications Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                borderRadius: '20px',
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              className="hover-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(52, 211, 153, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Award size={24} color="#34d399" />
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.88rem', color: '#00f0ff', fontWeight: 600, marginBottom: '14px' }}>
                  {cert.issuer}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
