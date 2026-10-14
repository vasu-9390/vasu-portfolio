import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Code } from 'lucide-react';
import type { SkillCategoryGroup, SkillDetail } from '../../types/portfolio';
import { SkillCategoryTabs } from './SkillCategoryTabs';
import { SkillCard } from './SkillCard';
import { SkillDetailsModal } from '../modals/SkillDetailsModal';

interface SkillsSectionProps {
  categories: SkillCategoryGroup[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectingSkill, setInspectingSkill] = useState<SkillDetail | null>(null);

  // Flatten all skills for quick lookups and global count
  const allSkills = useMemo(() => {
    return categories.flatMap((cat) => cat.skills);
  }, [categories]);

  // Skill counts per category
  const skillCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat.id] = cat.skills.length;
    });
    return counts;
  }, [categories]);

  // Filtered skills based on category and search query
  const filteredSkills = useMemo(() => {
    let list = allSkills;
    if (activeCategoryId !== 'all') {
      list = list.filter((s) => s.categoryId === activeCategoryId);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.relatedProjects.some((p) => p.toLowerCase().includes(q))
      );
    }
    return list;
  }, [allSkills, activeCategoryId, searchQuery]);

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
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
            Skills & <span style={{ background: 'linear-gradient(135deg, #00f0ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Technology Stack</span>
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
            A comprehensive matrix of verified programming languages, frameworks, cloud tooling, and generative AI interfaces powering my applications.
          </p>

          {/* Search bar */}
          <div
            style={{
              maxWidth: '440px',
              margin: '0 auto',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '16px',
                color: '#64748b',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search technologies, tools, or projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.9rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#00f0ff')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  padding: '4px',
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <SkillCategoryTabs
          categories={categories.map((c) => ({ id: c.id, name: c.name }))}
          activeCategoryId={activeCategoryId}
          onSelectCategory={(id) => setActiveCategoryId(id)}
          skillCounts={skillCounts}
          totalSkillsCount={allSkills.length}
        />

        {/* Active Category Description */}
        {activeCategoryId !== 'all' && (
          <div
            style={{
              textAlign: 'center',
              marginBottom: '32px',
              fontSize: '0.92rem',
              color: '#94a3b8',
              fontStyle: 'italic',
            }}
          >
            {categories.find((c) => c.id === activeCategoryId)?.description}
          </div>
        )}

        {/* Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onInspect={(s) => setInspectingSkill(s)}
            />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#64748b',
            }}
          >
            No skills found matching "{searchQuery}". Try a different keyword or category.
          </div>
        )}
      </div>

      {/* Detail Inspection Modal */}
      <SkillDetailsModal
        skill={inspectingSkill}
        onClose={() => setInspectingSkill(null)}
      />
    </section>
  );
}
