import React from 'react';
import { ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import type { SkillDetail } from '../../types/portfolio';
import { TechIcon } from '../common/BrandIcons';

interface SkillCardProps {
  skill: SkillDetail;
  onInspect: (skill: SkillDetail) => void;
}

export function SkillCard({ skill, onInspect }: SkillCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '22px',
        borderRadius: '16px',
        background: 'rgba(15, 23, 42, 0.72)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
      }}
      className="hover-card group"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 30px -10px rgba(0, 240, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top ambient color glow edge */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${skill.color || '#00f0ff'}, transparent)`,
          opacity: 0.6,
        }}
      />

      <div>
        {/* Header: Tech Logo + Name + Verified Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(10, 15, 29, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 15px ${skill.color ? `${skill.color}25` : 'rgba(0, 240, 255, 0.15)'}`,
              }}
            >
              <TechIcon name={skill.icon || skill.name} size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
                {skill.name}
              </h4>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: '#64748b',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {skill.category}
              </span>
            </div>
          </div>

          {skill.verifiedByResume && (
            <div
              title="Verified in Vasu's verified codebases & resume"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 8px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.68rem',
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={11} />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Short Technical Description */}
        <p
          style={{
            fontSize: '0.86rem',
            color: '#94a3b8',
            lineHeight: 1.55,
            marginBottom: '18px',
            minHeight: '40px',
          }}
        >
          {skill.description}
        </p>
      </div>

      {/* Card Footer: Inspect Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '14px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <span style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
          {skill.relatedProjects.length > 0 ? `${skill.relatedProjects.length} linked projects` : 'Core Foundation'}
        </span>

        <button
          onClick={() => onInspect(skill)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '8px',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            color: '#00f0ff',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          className="hover:bg-cyan-500/20"
        >
          <span>Inspect</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
