import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TechIcon } from '../common/BrandIcons';
import type { GameDifficulty } from '../../types/portfolio';
import { Check, Sparkles, Trophy, Play } from 'lucide-react';

export interface CollectibleSkill {
  id: string;
  name: string;
  color: string;
  iconName: string;
  description: string;
  initialPos: [number, number, number];
  speedMultiplier: number;
}

interface SkillObjectProps {
  skill: CollectibleSkill;
  isCollected: boolean;
  isPlaying: boolean;
  difficulty: GameDifficulty;
  onCollect: (skill: CollectibleSkill) => void;
}

function CollectibleMesh({
  skill,
  isCollected,
  isPlaying,
  difficulty,
  onCollect,
}: SkillObjectProps) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Speed according to difficulty
  const speed = useMemo(() => {
    const base = skill.speedMultiplier;
    if (difficulty === 'easy') return base * 0.7;
    if (difficulty === 'hard') return base * 1.8;
    return base * 1.1;
  }, [skill.speedMultiplier, difficulty]);

  useFrame((state) => {
    if (!meshRef.current) return;
    if (!isPlaying) return;

    const t = state.clock.getElapsedTime();
    const ox = skill.initialPos[0];
    const oy = skill.initialPos[1];
    const oz = skill.initialPos[2];

    // Orbiting and floating within bounds
    meshRef.current.position.x = ox + Math.sin(t * speed + ox) * 1.8;
    meshRef.current.position.y = oy + Math.cos(t * speed * 0.8 + oy) * 1.2;
    meshRef.current.position.z = oz + Math.sin(t * speed * 0.5 + oz) * 0.8;

    meshRef.current.rotation.y += 0.015;
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.02;
      ringRef.current.rotation.z += 0.015;
    }
  });

  if (isCollected) {
    return null; // Disappears with celebration when collected
  }

  return (
    <group
      ref={meshRef}
      position={skill.initialPos}
      onClick={(e) => {
        e.stopPropagation();
        if (isPlaying) {
          onCollect(skill);
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = isPlaying ? 'pointer' : 'default';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      {/* 3D Central Node */}
      <mesh scale={hovered ? 1.25 : 1}>
        <dodecahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color={hovered ? '#ffffff' : skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 1.0 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Neon Ring */}
      <mesh ref={ringRef} scale={hovered ? 1.3 : 1}>
        <torusGeometry args={[0.85, 0.03, 16, 32]} />
        <meshBasicMaterial color={skill.color} wireframe />
      </mesh>

      {/* Floating 2D/3D Label Card */}
      <Html
        center
        distanceFactor={12}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '999px',
            background: hovered ? 'rgba(0, 240, 255, 0.9)' : 'rgba(10, 15, 29, 0.88)',
            color: hovered ? '#030712' : '#ffffff',
            border: `1.5px solid ${skill.color}`,
            boxShadow: `0 0 20px ${skill.color}66`,
            whiteSpace: 'nowrap',
            fontWeight: 700,
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            transition: 'all 0.15s ease',
          }}
        >
          <div style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TechIcon name={skill.iconName} size={14} />
          </div>
          <span>{skill.name}</span>
        </div>
      </Html>
    </group>
  );
}

interface SkillCollectionModeProps {
  status: 'idle' | 'playing' | 'paused' | 'completed' | 'gameover';
  difficulty: GameDifficulty;
  collectedSkillIds: string[];
  onCollectSkill: (skill: CollectibleSkill) => void;
  onStartGame: () => void;
  onRestartGame: () => void;
  recentCollected: CollectibleSkill | null;
}

export function SkillCollectionMode({
  status,
  difficulty,
  collectedSkillIds,
  onCollectSkill,
  onStartGame,
  onRestartGame,
  recentCollected,
}: SkillCollectionModeProps) {
  const skillsList: CollectibleSkill[] = useMemo(
    () => [
      { id: 'react', name: 'React', color: '#00d8ff', iconName: 'react', description: 'Declarative component-driven UI library', initialPos: [-5, 2, -2], speedMultiplier: 1.0 },
      { id: 'javascript', name: 'JavaScript', color: '#f7df1e', iconName: 'javascript', description: 'Core web programming language', initialPos: [5, 2.5, -3], speedMultiplier: 1.2 },
      { id: 'nodejs', name: 'Node.js', color: '#339933', iconName: 'nodejs', description: 'Event-driven backend JavaScript runtime', initialPos: [-4.5, -2, -2], speedMultiplier: 0.9 },
      { id: 'mongodb', name: 'MongoDB', color: '#47a248', iconName: 'mongodb', description: 'Flexible NoSQL document database', initialPos: [4.8, -1.8, -3], speedMultiplier: 1.1 },
      { id: 'python', name: 'Python', color: '#ffd43b', iconName: 'python', description: 'Versatile scripting & AI service language', initialPos: [-2, 3.2, -4], speedMultiplier: 1.3 },
      { id: 'django', name: 'Django', color: '#2ba977', iconName: 'django', description: 'Python full-stack web framework & ORM', initialPos: [2.5, 3.5, -4], speedMultiplier: 0.95 },
      { id: 'typescript', name: 'TypeScript', color: '#3178c6', iconName: 'typescript', description: 'Type-safe enterprise JavaScript superset', initialPos: [0, -3.2, -3], speedMultiplier: 1.15 },
      { id: 'html5', name: 'HTML5', color: '#e34f26', iconName: 'html5', description: 'Semantic modern web markup standard', initialPos: [-6.2, 0, -3], speedMultiplier: 0.85 },
      { id: 'css3', name: 'CSS3', color: '#1572b6', iconName: 'css3', description: 'Styling, layout grids & animations', initialPos: [6.2, 0.2, -3], speedMultiplier: 1.05 },
      { id: 'tailwind', name: 'Tailwind CSS', color: '#06b6d4', iconName: 'tailwind', description: 'Utility-first rapid modern CSS engine', initialPos: [-2.5, -1.5, -2], speedMultiplier: 1.2 },
      { id: 'docker', name: 'Docker', color: '#2496ed', iconName: 'docker', description: 'Container virtualization & isolation', initialPos: [2.8, -1.2, -2], speedMultiplier: 1.0 },
      { id: 'github', name: 'GitHub', color: '#ffffff', iconName: 'github', description: 'Collaborative Git version control hub', initialPos: [0, 1.8, -2], speedMultiplier: 0.9 },
      { id: 'gemini', name: 'Gemini API', color: '#9b51e0', iconName: 'gemini', description: 'Multimodal generative AI reasoning engine', initialPos: [-3.8, 1.2, -1], speedMultiplier: 1.4 },
      { id: 'threejs', name: 'Three.js', color: '#00f0ff', iconName: 'threejs', description: 'WebGL 3D interactive graphics engine', initialPos: [3.8, 1.2, -1], speedMultiplier: 1.25 },
    ],
    []
  );

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, #0a0f1d 0%, #030712 100%)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        boxShadow: 'inset 0 0 50px rgba(0, 240, 255, 0.1), 0 20px 40px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#a855f7" />

        {skillsList.map((skill) => (
          <CollectibleMesh
            key={skill.id}
            skill={skill}
            isCollected={collectedSkillIds.includes(skill.id)}
            isPlaying={status === 'playing'}
            difficulty={difficulty}
            onCollect={onCollectSkill}
          />
        ))}
      </Canvas>

      {/* Floating popup when a skill is collected */}
      {recentCollected && status === 'playing' && (
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 20px',
            borderRadius: '16px',
            background: 'rgba(10, 15, 29, 0.92)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid #00f0ff',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.35)',
            zIndex: 20,
            animation: 'fadeInUp 0.3s ease',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'rgba(0, 240, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TechIcon name={recentCollected.iconName} size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>
                Collected {recentCollected.name}!
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                +100 PTS
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              {recentCollected.description}
            </div>
          </div>
        </div>
      )}

      {/* Idle Splash Screen Overlay */}
      {status === 'idle' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(3, 7, 18, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 30,
            textAlign: 'center',
            padding: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(0, 240, 255, 0.12)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.25)',
            }}
          >
            <Sparkles size={32} color="#00f0ff" />
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
            3D Skills Collector Arcade
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', maxWidth: '440px', marginBottom: '24px', lineHeight: 1.6 }}>
            Click or tap the floating technology orbs as they traverse the 3D space. Collect all target skills before time runs out to earn your badge!
          </p>
          <button
            onClick={onStartGame}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
              color: '#030712',
              fontWeight: 800,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
            }}
            className="hover-lift"
          >
            <Play size={18} fill="#030712" />
            <span>Launch Arcade Game</span>
          </button>
        </div>
      )}

      {/* Completion Screen */}
      {status === 'completed' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(3, 7, 18, 0.88)',
            backdropFilter: 'blur(12px)',
            zIndex: 30,
            textAlign: 'center',
            padding: '24px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 240, 255, 0.2))',
              border: '2px solid #34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 0 35px rgba(52, 211, 153, 0.35)',
            }}
          >
            <Trophy size={36} color="#34d399" />
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>
            Mission Accomplished!
          </h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '460px', marginBottom: '24px' }}>
            You discovered all target technology skills across Vasu Bandaru's full-stack and AI ecosystem!
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={onRestartGame}
              style={{
                padding: '12px 28px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
                color: '#030712',
                fontWeight: 800,
                fontSize: '0.92rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {status === 'gameover' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(3, 7, 18, 0.88)',
            backdropFilter: 'blur(12px)',
            zIndex: 30,
            textAlign: 'center',
            padding: '24px',
          }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#f87171', marginBottom: '8px' }}>
            Time's Up!
          </h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '420px', marginBottom: '24px' }}>
            You collected {collectedSkillIds.length} skills. Give it another shot or switch difficulty!
          </p>
          <button
            onClick={onRestartGame}
            style={{
              padding: '12px 28px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
              color: '#030712',
              fontWeight: 800,
              fontSize: '0.92rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
