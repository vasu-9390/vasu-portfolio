import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  life: number;
  maxLife: number;
  color: {
    r: number;
    g: number;
    b: number;
  };
  peakAlpha: number;
  swirlAngle: number;
  swirlSpeed: number;
  orbitRadius: number;
  isSatellite: boolean;
}

const NEON_PALETTE = [
  { r: 0, g: 240, b: 255 },    // Neon Cyan
  { r: 59, g: 130, b: 246 },   // Electric Blue
  { r: 168, g: 85, b: 247 },   // Neon Violet
  { r: 192, g: 132, b: 252 },  // Soft Purple
  { r: 255, g: 255, b: 255 },  // Pure White Sparkle
];

export function MouseParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const MAX_PARTICLES = 180;

    // Mouse coordinates and tracking state
    let mouseX = -1000;
    let mouseY = -1000;
    let lastMouseX = -1000;
    let lastMouseY = -1000;
    let isMouseOnScreen = false;
    let coreGlowAlpha = 0;
    let idleTick = 0;

    // Handle high-DPI displays for crisp rendering
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Spawn an individual particle with realistic energy properties
    const spawnParticle = (
      originX: number,
      originY: number,
      speedMultiplier: number = 1,
      isBurst: boolean = false
    ) => {
      if (particles.length >= MAX_PARTICLES) {
        particles.shift(); // Remove oldest to preserve 60fps performance
      }

      const color = NEON_PALETTE[Math.floor(Math.random() * NEON_PALETTE.length)];
      const angle = Math.random() * Math.PI * 2;
      const initialDist = Math.random() * (isBurst ? 16 : 8);
      const speed = (0.4 + Math.random() * 1.5) * speedMultiplier;
      const isSatellite = Math.random() < 0.25;

      const baseRadius = color.r === 255 && color.g === 255 && color.b === 255
        ? 1.2 + Math.random() * 1.0 // Micro white sparkles
        : 1.6 + Math.random() * 1.8; // Colorful glowing orbs

      particles.push({
        x: originX + Math.cos(angle) * initialDist,
        y: originY + Math.sin(angle) * initialDist,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.5,
        radius: baseRadius,
        baseRadius,
        life: 0,
        maxLife: Math.floor(35 + Math.random() * 30), // ~0.6s to 1.1s lifetime
        color,
        peakAlpha: 0.65 + Math.random() * 0.35,
        swirlAngle: angle,
        swirlSpeed: (Math.random() - 0.5) * 0.08,
        orbitRadius: 6 + Math.random() * 18,
        isSatellite,
      });
    };

    // Emit a cluster of particles, interpolating along mouse path for continuous trails
    const emitParticles = (x: number, y: number, dist: number) => {
      // Base particle count scaled by movement speed
      const count = Math.min(7, Math.max(2, Math.floor(dist / 7)));

      for (let i = 0; i < count; i++) {
        // Linear interpolation between last position and current to eliminate trail gaps
        const t = count === 1 ? 1 : i / (count - 1);
        const interpX = lastMouseX === -1000 ? x : lastMouseX + (x - lastMouseX) * t;
        const interpY = lastMouseY === -1000 ? y : lastMouseY + (y - lastMouseY) * t;
        spawnParticle(interpX, interpY, Math.min(2.0, 0.8 + dist * 0.03));
      }
    };

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (!isMouseOnScreen) {
        lastMouseX = currentX;
        lastMouseY = currentY;
        isMouseOnScreen = true;
      }

      const dx = currentX - lastMouseX;
      const dy = currentY - lastMouseY;
      const dist = Math.hypot(dx, dy);

      mouseX = currentX;
      mouseY = currentY;

      emitParticles(currentX, currentY, dist);

      lastMouseX = currentX;
      lastMouseY = currentY;
    };

    const handleMouseLeave = () => {
      isMouseOnScreen = false;
      lastMouseX = -1000;
      lastMouseY = -1000;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isMouseOnScreen = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    // Mobile touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;

      if (!isMouseOnScreen) {
        lastMouseX = currentX;
        lastMouseY = currentY;
        isMouseOnScreen = true;
      }

      const dx = currentX - lastMouseX;
      const dy = currentY - lastMouseY;
      const dist = Math.hypot(dx, dy);

      mouseX = currentX;
      mouseY = currentY;

      emitParticles(currentX, currentY, dist);

      lastMouseX = currentX;
      lastMouseY = currentY;
    };

    const handleTouchEnd = () => {
      isMouseOnScreen = false;
      lastMouseX = -1000;
      lastMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Main 60 FPS animation loop
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Smoothly transition core glow visibility
      const targetCoreAlpha = isMouseOnScreen ? 1 : 0;
      coreGlowAlpha += (targetCoreAlpha - coreGlowAlpha) * 0.12;

      // When cursor is idle on screen, occasionally release gentle ambient sparks
      if (isMouseOnScreen) {
        idleTick++;
        if (idleTick % 5 === 0) {
          spawnParticle(mouseX, mouseY, 0.4);
        }
      }

      // 1. Draw glowing neon core at cursor position with soft additive bloom
      if (coreGlowAlpha > 0.01 && mouseX > -500 && mouseY > -500) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        // Outer ambient neon bloom
        const outerGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 28);
        outerGlow.addColorStop(0, `rgba(0, 240, 255, ${0.35 * coreGlowAlpha})`);
        outerGlow.addColorStop(0.4, `rgba(168, 85, 247, ${0.18 * coreGlowAlpha})`);
        outerGlow.addColorStop(0.8, `rgba(59, 130, 246, ${0.05 * coreGlowAlpha})`);
        outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 28, 0, Math.PI * 2);
        ctx.fill();

        // Focused inner core aura
        const innerGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 10);
        innerGlow.addColorStop(0, `rgba(255, 255, 255, ${0.85 * coreGlowAlpha})`);
        innerGlow.addColorStop(0.45, `rgba(0, 240, 255, ${0.65 * coreGlowAlpha})`);
        innerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = innerGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
        ctx.fill();

        // Pin-point bright white center
        ctx.fillStyle = `rgba(255, 255, 255, ${0.95 * coreGlowAlpha})`;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // 2. Update and render active particles
      if (particles.length > 0) {
        ctx.save();
        // Use additive blending for bright glowing luminescence
        ctx.globalCompositeOperation = 'lighter';

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life++;

          if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            continue;
          }

          // Normalized progress [0 -> 1]
          const progress = p.life / p.maxLife;

          // Smooth sine curve for alpha (fade-in then gradual fade-out)
          const currentAlpha = Math.sin(progress * Math.PI) * p.peakAlpha;

          // Gentle particle shrink over time
          p.radius = Math.max(0.3, p.baseRadius * (1 - progress * 0.65));

          // Physical motion updates
          if (p.isSatellite && isMouseOnScreen) {
            // Orbital swirling motion around the cursor
            p.swirlAngle += p.swirlSpeed;
            p.orbitRadius += 0.25; // Gently expands outward
            const targetX = mouseX + Math.cos(p.swirlAngle) * p.orbitRadius;
            const targetY = mouseY + Math.sin(p.swirlAngle) * p.orbitRadius;
            p.x += (targetX - p.x) * 0.15;
            p.y += (targetY - p.y) * 0.15;
          } else {
            // Organic deceleration and upward buoyant drift
            p.vx *= 0.96;
            p.vy *= 0.96;
            p.vy -= 0.04; // Subtle upward floating energy

            // Natural micro-turbulence
            p.vx += Math.sin(p.life * 0.15 + i) * 0.08;
            p.vy += Math.cos(p.life * 0.12 + i) * 0.08;

            p.x += p.vx;
            p.y += p.vy;
          }

          // Draw the glowing particle
          const { r, g, b } = p.color;

          // Soft outer neon halo
          const haloRadius = Math.max(1, p.radius * 3.2);
          const haloGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloRadius);
          haloGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.9})`);
          haloGrad.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${currentAlpha * 0.4})`);
          haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
          ctx.fill();

          // Intense core center point
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.95})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.4, p.radius * 0.5), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Proper cleanup of event listeners and RAF
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
      aria-hidden="true"
    />
  );
}
