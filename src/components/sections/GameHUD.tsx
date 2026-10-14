import React from 'react';
import { Play, Pause, RotateCcw, HelpCircle, Trophy, Clock, Target, Sparkles, Gamepad2, BrainCircuit } from 'lucide-react';
import type { GameDifficulty } from '../../types/portfolio';

interface GameHUDProps {
  gameMode: 'collect' | 'quiz';
  onSelectMode: (mode: 'collect' | 'quiz') => void;
  status: 'idle' | 'playing' | 'paused' | 'completed' | 'gameover';
  score: number;
  timeRemaining: number;
  collectedCount: number;
  targetCount: number;
  difficulty: GameDifficulty;
  onChangeDifficulty: (d: GameDifficulty) => void;
  onStart: () => void;
  onPause: () => void;
  onRestart: () => void;
  onOpenInstructions: () => void;
}

export function GameHUD({
  gameMode,
  onSelectMode,
  status,
  score,
  timeRemaining,
  collectedCount,
  targetCount,
  difficulty,
  onChangeDifficulty,
  onStart,
  onPause,
  onRestart,
  onOpenInstructions,
}: GameHUDProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        background: 'rgba(10, 15, 29, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '20px',
        padding: '18px 24px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.1)',
        marginBottom: '20px',
      }}
    >
      {/* Top Bar: Mode Switcher & Difficulty */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '14px',
        }}
      >
        {/* Mode Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => onSelectMode('collect')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              background: gameMode === 'collect' ? 'linear-gradient(135deg, #00f0ff, #3b82f6)' : 'rgba(255, 255, 255, 0.05)',
              color: gameMode === 'collect' ? '#030712' : '#94a3b8',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Gamepad2 size={16} />
            <span>3D Skills Collector</span>
          </button>

          <button
            onClick={() => onSelectMode('quiz')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              background: gameMode === 'quiz' ? 'linear-gradient(135deg, #a855f7, #ec4899)' : 'rgba(255, 255, 255, 0.05)',
              color: gameMode === 'quiz' ? '#ffffff' : '#94a3b8',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <BrainCircuit size={16} />
            <span>Guess the Tech (Quiz)</span>
          </button>
        </div>

        {/* Difficulty Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
            DIFFICULTY:
          </span>
          {(['easy', 'medium', 'hard'] as GameDifficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => onChangeDifficulty(d)}
              disabled={status === 'playing'}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                background: difficulty === d ? 'rgba(0, 240, 255, 0.2)' : 'transparent',
                color: difficulty === d ? '#00f0ff' : '#64748b',
                border: difficulty === d ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: status === 'playing' ? 'not-allowed' : 'pointer',
                opacity: status === 'playing' && difficulty !== d ? 0.4 : 1,
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Main HUD Row: Status Counters & Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Score & Telemetry Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
          {/* Score */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
            }}
          >
            <Trophy size={18} color="#00f0ff" />
            <div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                Score
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                {score}
              </div>
            </div>
          </div>

          {/* Timer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            <Clock size={18} color="#c084fc" />
            <div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                Time Left
              </div>
              <div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: timeRemaining <= 10 && timeRemaining > 0 ? '#ef4444' : '#c084fc',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {timeRemaining}s
              </div>
            </div>
          </div>

          {/* Collected Counter (for Collection mode) */}
          {gameMode === 'collect' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <Target size={18} color="#34d399" />
              <div>
                <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  Collected
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  {collectedCount} / {targetCount}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {status === 'idle' || status === 'completed' || status === 'gameover' ? (
            <button
              onClick={onStart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
                color: '#030712',
                fontWeight: 800,
                fontSize: '0.92rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              }}
              className="hover-lift"
            >
              <Play size={16} fill="#030712" />
              <span>Start Game</span>
            </button>
          ) : status === 'playing' ? (
            <button
              onClick={onPause}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#f8fafc',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              <Pause size={16} />
              <span>Pause</span>
            </button>
          ) : (
            <button
              onClick={onStart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Play size={16} />
              <span>Resume</span>
            </button>
          )}

          {/* Restart Button */}
          <button
            onClick={onRestart}
            title="Restart Game"
            style={{
              padding: '10px 14px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RotateCcw size={16} />
          </button>

          {/* Instructions Button */}
          <button
            onClick={onOpenInstructions}
            title="How to Play"
            style={{
              padding: '10px 14px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HelpCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
