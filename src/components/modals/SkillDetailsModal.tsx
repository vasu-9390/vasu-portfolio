import React, { useEffect } from 'react';
import { X, CheckCircle2, FolderGit2, Sparkles, ExternalLink } from 'lucide-react';
import type { SkillDetail } from '../../types/portfolio';
import { TechIcon } from '../common/BrandIcons';

interface SkillDetailsModalProps {
  skill: SkillDetail | null;
  onClose: () => void;
  onSelectProject?: (projectTitle: string) => void;
}

export function SkillDetailsModal({ skill, onClose, onSelectProject }: SkillDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(3, 7, 18, 0.82)',
        backdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 240, 255, 0.2)',
          padding: '28px',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glowing cyber accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #00f0ff, #a855f7, #ec4899)',
          }}
        />

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(10, 15, 29, 0.9)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
              }}
            >
              <TechIcon name={skill.icon || skill.name} size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
                  {skill.name}
                </h3>
                {skill.verifiedByResume && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#34d399',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                )}
              </div>
              <span style={{ fontSize: '0.8rem', color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                {skill.category}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Technical Overview */}
        <div style={{ marginBottom: '20px' }}>
          <h5 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
            Technical Capability
          </h5>
          <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.6, background: 'rgba(10, 15, 29, 0.6)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            {skill.description}
          </p>
        </div>

        {/* Role in Vasu's Tech Stack */}
        <div style={{ marginBottom: '22px' }}>
          <h5 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
            Application in Production
          </h5>
          <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
            {skill.roleInStack}
          </p>
        </div>

        {/* Related Projects */}
        <div>
          <h5 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
            Verified Linked Projects & Use Cases
          </h5>
          {skill.relatedProjects.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {skill.relatedProjects.map((proj, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(0, 240, 255, 0.05)',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                    color: '#e2e8f0',
                    fontSize: '0.88rem',
                  }}
                >
                  <FolderGit2 size={16} color="#00f0ff" />
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: '0.86rem', color: '#64748b', fontStyle: 'italic' }}>
              Integrated as core engineering foundation across full-stack repositories.
            </div>
          )}
        </div>

        {/* Modal Close Button */}
        <div style={{ marginTop: '26px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              padding: '9px 20px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
              color: '#030712',
              fontWeight: 700,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
