import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  Grid,
} from 'lucide-react';

interface SkillCategoryTabsProps {
  categories: { id: string; name: string }[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  skillCounts: Record<string, number>;
  totalSkillsCount: number;
}

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'all':
      return <Grid size={16} />;
    case 'languages':
      return <Code2 size={16} />;
    case 'frontend':
      return <Layout size={16} />;
    case 'backend':
      return <Server size={16} />;
    case 'databases':
      return <Database size={16} />;
    case 'devops-cloud':
      return <Cloud size={16} />;
    case 'tools':
      return <Wrench size={16} />;
    case 'ai-llm':
      return <Sparkles size={16} />;
    default:
      return <Code2 size={16} />;
  }
};

export function SkillCategoryTabs({
  categories,
  activeCategoryId,
  onSelectCategory,
  skillCounts,
  totalSkillsCount,
}: SkillCategoryTabsProps) {
  const allTabs = [
    { id: 'all', name: 'All Technologies' },
    ...categories,
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '36px',
      }}
    >
      {allTabs.map((cat) => {
        const isActive = activeCategoryId === cat.id;
        const count = cat.id === 'all' ? totalSkillsCount : skillCounts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '999px',
              background: isActive
                ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(168, 85, 247, 0.25))'
                : 'rgba(15, 23, 42, 0.65)',
              border: isActive
                ? '1px solid #00f0ff'
                : '1px solid rgba(255, 255, 255, 0.08)',
              color: isActive ? '#00f0ff' : '#94a3b8',
              boxShadow: isActive ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="hover-lift"
          >
            <span style={{ color: isActive ? '#00f0ff' : '#64748b' }}>
              {getCategoryIcon(cat.id)}
            </span>
            <span>{cat.name}</span>
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                padding: '2px 7px',
                borderRadius: '999px',
                background: isActive ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                color: isActive ? '#f8fafc' : '#64748b',
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
