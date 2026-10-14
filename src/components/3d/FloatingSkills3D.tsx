import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { TechIcon } from '../common/BrandIcons';

interface FloatingNodeProps {
  name: string;
  position: [number, number, number];
  color: string;
  speed?: number;
  rotationSpeed?: number;
  iconName: string;
}

function FloatingTechNode({ name, position, color, speed = 1.2, rotationSpeed = 0.6, iconName }: FloatingNodeProps) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth levitation
    meshRef.current.position.y = initialPos.y + Math.sin(t * speed + position[0]) * 0.4;
    meshRef.current.position.x = initialPos.x + Math.cos(t * speed * 0.5 + position[1]) * 0.25;

    // Rotation
    meshRef.current.rotation.y = t * rotationSpeed * 0.3;
    if (ringRef.current) {
      ringRef.current.rotation.x = t * rotationSpeed * 0.8;
      ringRef.current.rotation.z = t * rotationSpeed * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer Wireframe / Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.65, 0.02, 16, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} wireframe />
      </mesh>

      {/* HTML Billboard for Readable Technology Name & Real Logo */}
      <Html
        center
        distanceFactor={15}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.25)] whitespace-nowrap">
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            <TechIcon name={iconName} size={14} />
          </div>
          <span className="text-[11px] font-semibold tracking-wide text-slate-100 font-mono">
            {name}
          </span>
        </div>
      </Html>
    </group>
  );
}

function StarfieldParticles({ count = 220 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#00f0ff'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#3b82f6'),
      new THREE.Color('#38bdf8'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.01) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function CameraRig({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.03;
    camera.position.y += (-mouse.y * 1.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function FloatingSkills3D() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handlePointerMove = (e: PointerEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const floatingSkills: FloatingNodeProps[] = [
    { name: 'React.js', position: [-7.5, 4.2, -4], color: '#00d8ff', iconName: 'react', speed: 1.1 },
    { name: 'TypeScript', position: [7.2, 3.8, -3], color: '#3178c6', iconName: 'typescript', speed: 1.3 },
    { name: 'Node.js', position: [-8.2, -2.5, -5], color: '#339933', iconName: 'nodejs', speed: 0.9 },
    { name: 'MongoDB', position: [8.5, -2.2, -4], color: '#47a248', iconName: 'mongodb', speed: 1.2 },
    { name: 'Gemini AI', position: [-3.8, 5.5, -6], color: '#9b51e0', iconName: 'gemini', speed: 1.4 },
    { name: 'Docker', position: [4.5, 5.2, -5], color: '#2496ed', iconName: 'docker', speed: 1.0 },
    { name: 'Three.js', position: [-6.8, 0.8, -3], color: '#00f0ff', iconName: 'threejs', speed: 1.25 },
    { name: 'Python', position: [6.5, 0.5, -4], color: '#ffd43b', iconName: 'python', speed: 1.15 },
    { name: 'Tailwind CSS', position: [-4.2, -4.8, -5], color: '#06b6d4', iconName: 'tailwind', speed: 1.05 },
    { name: 'Java & DSA', position: [4.8, -5.2, -6], color: '#f89820', iconName: 'java', speed: 1.2 },
    { name: 'GitHub', position: [0, 6.2, -7], color: '#ffffff', iconName: 'github', speed: 0.95 },
    { name: 'Express.js', position: [-1.5, -5.8, -6], color: '#e2e8f0', iconName: 'express', speed: 1.1 },
  ];

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030712] to-black" />
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-screen h-screen select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#a855f7" />
        <CameraRig mouse={mouse} />
        <StarfieldParticles count={250} />

        {floatingSkills.map((skill) => (
          <Float key={skill.name} speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <FloatingTechNode {...skill} />
          </Float>
        ))}
      </Canvas>
    </div>
  );
}
