import React from 'react';
import { Trophy, Code2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { LeetCodeIcon } from '../common/BrandIcons';
import { dsaTopics } from '../../data/portfolioData';

interface ProblemSolvingSectionProps {
  leetcodeSolved: number;
  leetcodeUrl: string;
}

export function ProblemSolvingSection({ leetcodeSolved, leetcodeUrl }: ProblemSolvingSectionProps) {
  return (
    <section
      id="dsa"
      style={{
        position: 'relative',
        padding: '100px 0',
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
              background: 'rgba(255, 161, 22, 0.1)',
              border: '1px solid rgba(255, 161, 22, 0.3)',
              color: '#ffa116',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <LeetCodeIcon size={16} />
            <span>Problem Solving & Algorithms</span>
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
            Data Structures & <span style={{ color: '#ffa116' }}>Algorithms</span>
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
            Strong foundation in algorithmic problem solving with 200+ solved LeetCode challenges, optimizing space and time complexity across core computer science patterns.
          </p>
        </div>

        {/* Main Banner Card */}
        <div
          style={{
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.08) 0%, rgba(15, 23, 42, 0.9) 60%)',
            border: '1px solid rgba(255, 161, 22, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 161, 22, 0.15)',
            padding: '36px',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          {/* Left stats highlight */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '20px',
                background: 'rgba(255, 161, 22, 0.15)',
                border: '1.5px solid #ffa116',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(255, 161, 22, 0.35)',
              }}
            >
              <Trophy size={40} color="#ffa116" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1,
                  }}
                >
                  200+
                </span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffa116' }}>
                  Problems Solved
                </span>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginTop: '6px' }}>
                Verified problem solving achievement covering essential Data Structures & Algorithms.
              </p>
            </div>
          </div>

          {/* Right action button */}
          <a
            href={leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #ffa116, #ea580c)',
              color: '#030712',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 0 25px rgba(255, 161, 22, 0.4)',
              transition: 'all 0.2s ease',
            }}
            className="hover-lift"
          >
            <LeetCodeIcon size={20} />
            <span>View LeetCode Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* DSA Topic Badges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px',
          }}
        >
          {dsaTopics.map((topic, idx) => (
            <div
              key={idx}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.25s ease',
              }}
              className="hover:border-amber-500/40"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 161, 22, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#f8fafc' }}>
                  {topic.name}
                </h4>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 8px',
                    borderRadius: '999px',
                    background: 'rgba(255, 161, 22, 0.12)',
                    color: '#ffa116',
                    fontWeight: 600,
                  }}
                >
                  {topic.count}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
