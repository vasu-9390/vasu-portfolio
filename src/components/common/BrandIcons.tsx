import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export function GithubIcon({ size = 18, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16.1 16.9l-3.3 2.7c-1.8 1.5-4.5 1.2-5.9-.6l-4.1-5.1c-1.4-1.8-1.1-4.4.7-5.8l3.3-2.7c1.8-1.5 4.5-1.2 5.9.6l1.3 1.6" stroke="#FFA116" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10.8 11.2h8.4" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15.4 7.6l3.8 3.6-3.8 3.6" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ReactIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7 16.5c.5.8 1.4 1.3 2.4 1.3 1.3 0 2.1-.8 2.1-2.4v-6.9h-2v6.9c0 .6-.3.9-.8.9-.4 0-.7-.3-.9-.6L7 16.5zm8.4-.2c.8 1 2 1.6 3.4 1.6 2.1 0 3.2-1.1 3.2-2.7 0-1.6-1.1-2.2-2.8-2.9-1.2-.5-1.7-.8-1.7-1.4 0-.5.4-1 1.4-1 .8 0 1.5.4 2 .9l1.2-1.3c-.8-.9-1.8-1.3-3.2-1.3-2.1 0-3.3 1.2-3.3 2.7 0 1.5 1 2.2 2.6 2.8 1.3.5 1.9.9 1.9 1.5 0 .6-.6 1.1-1.6 1.1-1.1 0-1.9-.5-2.5-1.2l-1.3 1.2z" fill="#000000" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M5.5 10.5h6v1.8h-2v6.7h-2v-6.7h-2v-1.8zm7.8 7.3c.7.8 1.8 1.3 3 1.3 1.8 0 2.8-1 2.8-2.4 0-1.4-.9-2-2.4-2.6-1.1-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.7 0 1.3.3 1.8.8l1.1-1.2c-.7-.8-1.6-1.2-2.9-1.2-1.9 0-2.9 1.1-2.9 2.5 0 1.3.9 2 2.3 2.5 1.1.4 1.7.8 1.7 1.4 0 .6-.5 1-1.4 1-1 0-1.7-.5-2.2-1.1l-1.2 1.1z" fill="#ffffff" />
    </svg>
  );
}

export function PythonIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5v.8H5.2C3.3 8.3 2 10.1 2 12.2c0 2.4 1.6 3.6 4 3.6h1.2v-1.9c0-1.8 1.5-3.3 3.3-3.3h5v-.8c0-2-1.6-3.8-3.6-3.8h-5V5.5c0-.9.7-1.7 1.7-1.7h3.3c.9 0 1.7.7 1.7 1.7v.8h1.7V5.3C18.7 3.4 16.8 2 11.9 2zm-1.8 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
      <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5v-.8h6.7c1.9 0 3.2-1.8 3.2-3.9 0-2.4-1.6-3.6-4-3.6h-1.2v1.9c0 1.8-1.5 3.3-3.3 3.3h-5v.8c0 2 1.6 3.8 3.6 3.8h5v.8c0 .9-.7 1.7-1.7 1.7h-3.3c-.9 0-1.7-.7-1.7-1.7v-.8H8.5v.9c0 1.9 1.9 3.3 3.6 3.3zm1.8-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
    </svg>
  );
}

export function NodeIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z" fill="#339933" />
      <path d="M12 4.5l7 4v8l-7 4-7-4v-8l7-4z" fill="#215732" />
      <path d="M12 7l4 2.3v4.6L12 16.2l-4-2.3V9.3L12 7z" fill="#68A063" />
    </svg>
  );
}

export function MongoDBIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 2 6.5 7.8 6.5 13.5c0 4.1 3 7.8 5.5 8.5v-19c2.5.7 5.5 4.4 5.5 8.5C17.5 7.8 12 2 12 2z" fill="#47A248" />
      <path d="M12 22v-8.5c-2.5-.7-5.5-4.4-5.5-8.5 0 5.7 5.5 8.5 5.5 17z" fill="#499D4A" />
      <path d="M12 22.8c-.2 0-.3-.1-.4-.3-.3-.8-.7-1.5-.7-1.5s.4.1.8.1c.4 0 .8-.1.8-.1s-.4.7-.7 1.5c-.1.2-.2.3-.4.3z" fill="#3F8D3F" />
    </svg>
  );
}

export function DockerIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.8 6.6h2.2v2.2h-2.2V6.6zm-2.8 0h2.2v2.2H11V6.6zm-2.8 0h2.2v2.2H8.2V6.6zm-2.8 2.8h2.2v2.2H5.4V9.4zm2.8 0h2.2v2.2H8.2V9.4zm2.8 0h2.2v2.2H11V9.4zm2.8 0h2.2v2.2h-2.2V9.4zm2.8 0h2.2v2.2h-2.2V9.4zM2 13.5c.3 4.2 3.8 7.5 8.2 7.5 7.1 0 11.8-4.8 11.8-9.8 0-.3 0-.6-.1-.8-.8.3-2.1.2-2.9-.6-.6-.6-.8-1.5-.6-2.3-1.6.2-3.1 1.2-3.8 2.6H2.1c-.1 1.1-.1 2.3-.1 3.4z" fill="#2496ED" />
    </svg>
  );
}

export function GeminiIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E2" />
          <stop offset="0.5" stopColor="#9B51E0" />
          <stop offset="1" stopColor="#FF4081" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ThreeJSIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12,2 22,8.5 22,17.5 12,22 2,17.5 2,8.5" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="#a855f7" strokeWidth="1.5" />
      <line x1="2" y1="8.5" x2="22" y2="17.5" stroke="#00f0ff" strokeWidth="1.5" />
      <line x1="2" y1="17.5" x2="22" y2="8.5" stroke="#a855f7" strokeWidth="1.5" />
    </svg>
  );
}

export function TailwindIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
    </svg>
  );
}

export function JavaIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M10.2 16.5c-2.3.2-3.8.8-3.8 1.5 0 .9 2.5 1.6 5.6 1.6s5.6-.7 5.6-1.6c0-.7-1.5-1.3-3.8-1.5" stroke="#f89820" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 13.8c-1.8.2-3 .7-3 1.3 0 .8 2.9 1.4 6.5 1.4s6.5-.6 6.5-1.4c0-.6-1.2-1.1-3-1.3" stroke="#5382a1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 3c-1 1.5-2.5 3-1.5 4.5s2.5 2 1.5 3.5" stroke="#ea2d2e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 4.5c-.8 1.2-2 2.4-1.2 3.6s2 1.6 1.2 2.8" stroke="#f89820" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TechIcon({ name, size = 20, className = '' }: { name: string; size?: number; className?: string }) {
  const n = name.toLowerCase();
  if (n.includes('react') && !n.includes('router')) return <ReactIcon size={size} className={className} />;
  if (n.includes('javascript') || n === 'js') return <JavaScriptIcon size={size} className={className} />;
  if (n.includes('typescript') || n === 'ts') return <TypeScriptIcon size={size} className={className} />;
  if (n.includes('python')) return <PythonIcon size={size} className={className} />;
  if (n.includes('node')) return <NodeIcon size={size} className={className} />;
  if (n.includes('mongo')) return <MongoDBIcon size={size} className={className} />;
  if (n.includes('docker')) return <DockerIcon size={size} className={className} />;
  if (n.includes('gemini') || n.includes('ai') || n.includes('llm')) return <GeminiIcon size={size} className={className} />;
  if (n.includes('three') || n.includes('r3f') || n.includes('3d')) return <ThreeJSIcon size={size} className={className} />;
  if (n.includes('tailwind')) return <TailwindIcon size={size} className={className} />;
  if (n.includes('java') && !n.includes('script')) return <JavaIcon size={size} className={className} />;
  if (n.includes('git')) return <GithubIcon size={size} className={className} />;
  if (n.includes('leetcode')) return <LeetCodeIcon size={size} className={className} />;

  // Default stylized tech badge
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
