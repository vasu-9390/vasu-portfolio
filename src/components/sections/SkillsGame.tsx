import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameHUD } from './GameHUD';
import { SkillCollectionMode, type CollectibleSkill } from './SkillCollectionMode';
import { TechnologyQuizMode } from './TechnologyQuizMode';
import type { GameDifficulty } from '../../types/portfolio';
import { Gamepad2, Info, X, Sparkles, ShieldAlert } from 'lucide-react';

export function SkillsGame() {
  const [gameMode, setGameMode] = useState<'collect' | 'quiz'>('collect');
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused' | 'completed' | 'gameover'>('idle');
  const [score, setScore] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<GameDifficulty>('medium');
  const [collectedSkillIds, setCollectedSkillIds] = useState<string[]>([]);
  const [recentCollected, setRecentCollected] = useState<CollectibleSkill | null>(null);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState<boolean>(false);

  // Time remaining depends on difficulty: Easy: 60s, Medium: 45s, Hard: 30s
  const getInitialTime = (d: GameDifficulty) => {
    if (d === 'easy') return 60;
    if (d === 'hard') return 30;
    return 45;
  };

  const getTargetCount = (d: GameDifficulty) => {
    if (d === 'easy') return 8;
    if (d === 'hard') return 14;
    return 10;
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(() => getInitialTime('medium'));
  const timerRef = useRef<number | null>(null);

  const targetCount = getTargetCount(difficulty);

  // Timer loop when playing
  useEffect(() => {
    if (status === 'playing') {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setStatus('gameover');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  const handleStartGame = () => {
    setStatus('playing');
  };

  const handlePauseGame = () => {
    setStatus('paused');
  };

  const handleRestartGame = () => {
    setStatus('idle');
    setScore(0);
    setCollectedSkillIds([]);
    setRecentCollected(null);
    setTimeRemaining(getInitialTime(difficulty));
  };

  const handleChangeDifficulty = (d: GameDifficulty) => {
    setDifficulty(d);
    setTimeRemaining(getInitialTime(d));
    setCollectedSkillIds([]);
    setRecentCollected(null);
  };

  const handleCollectSkill = useCallback(
    (skill: CollectibleSkill) => {
      if (collectedSkillIds.includes(skill.id)) return;

      const newCollected = [...collectedSkillIds, skill.id];
      setCollectedSkillIds(newCollected);
      setRecentCollected(skill);

      // Score multiplier
      const multiplier = difficulty === 'hard' ? 1.5 : difficulty === 'medium' ? 1.0 : 0.75;
      const points = Math.round(100 * multiplier);
      setScore((prev) => prev + points);

      // Check win condition
      if (newCollected.length >= targetCount) {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatus('completed');
      }

      // Clear recent collected pop after 2.5s
      setTimeout(() => {
        setRecentCollected((curr) => (curr?.id === skill.id ? null : curr));
      }, 2500);
    },
    [collectedSkillIds, difficulty, targetCount]
  );

  const handleQuizScoreUpdate = (points: number) => {
    setScore((prev) => prev + points);
  };

  return (
    <section
      id="skills-game"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#c084fc',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Gamepad2 size={15} />
            <span>Interactive Tech Playground</span>
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
            3D Skills Playground —{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Explore My Skills
            </span>
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
            Interact with my actual programming languages, frameworks, and AI tools through this real-time 3D arcade experience and tech quiz.
          </p>
        </div>

        {/* Game HUD (Controls & Telemetry) */}
        <GameHUD
          gameMode={gameMode}
          onSelectMode={(mode) => {
            setGameMode(mode);
            handleRestartGame();
          }}
          status={status}
          score={score}
          timeRemaining={timeRemaining}
          collectedCount={collectedSkillIds.length}
          targetCount={targetCount}
          difficulty={difficulty}
          onChangeDifficulty={handleChangeDifficulty}
          onStart={handleStartGame}
          onPause={handlePauseGame}
          onRestart={handleRestartGame}
          onOpenInstructions={() => setIsInstructionsOpen(true)}
        />

        {/* Game Play Area (Mode 1 or Mode 2) */}
        {gameMode === 'collect' ? (
          <SkillCollectionMode
            status={status}
            difficulty={difficulty}
            collectedSkillIds={collectedSkillIds}
            onCollectSkill={handleCollectSkill}
            onStartGame={handleStartGame}
            onRestartGame={handleRestartGame}
            recentCollected={recentCollected}
          />
        ) : (
          <TechnologyQuizMode
            onScoreUpdate={handleQuizScoreUpdate}
            isPlaying={status === 'playing' || status === 'idle'}
            onStartQuiz={handleStartGame}
            onRestartQuiz={handleRestartGame}
          />
        )}

        {/* Educational Disclaimer */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: '#64748b',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <ShieldAlert size={14} color="#64748b" />
          <span>
            This interactive game is an educational portfolio demonstration and does not represent an official certification or measured assessment.
          </span>
        </div>
      </div>

      {/* Instructions Modal */}
      {isInstructionsOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={() => setIsInstructionsOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              borderRadius: '20px',
              background: 'rgba(15, 23, 42, 0.98)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.2)',
              padding: '28px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Gamepad2 size={22} color="#00f0ff" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  How to Play
                </h3>
              </div>
              <button
                onClick={() => setIsInstructionsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <div>
                <strong style={{ color: '#00f0ff' }}>Mode 1: 3D Skills Collector</strong>
                <p style={{ marginTop: '4px', color: '#94a3b8' }}>
                  Click Start Game. Floating 3D technology objects will move throughout the cosmic arena. Click or tap each technology orb (React, Node, MongoDB, etc.) to collect it, discover its description, and gain points.
                </p>
              </div>

              <div>
                <strong style={{ color: '#c084fc' }}>Mode 2: Guess the Technology (Quiz)</strong>
                <p style={{ marginTop: '4px', color: '#94a3b8' }}>
                  Answer multiple-choice questions regarding Vasu Bandaru's tech stack. Test your knowledge of frontend, backend, databases, and AI tooling.
                </p>
              </div>

              <div>
                <strong style={{ color: '#34d399' }}>Difficulty Settings</strong>
                <p style={{ marginTop: '4px', color: '#94a3b8' }}>
                  Easy grants 60s with slow movement. Medium sets 45s with normal movement. Hard triggers 30s with fast movement and more target skills!
                </p>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setIsInstructionsOpen(false)}
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
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
