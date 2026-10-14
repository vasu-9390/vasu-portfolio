import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Download, Gamepad2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'skills-game', 'projects', 'dsa', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: '3D Game', href: '#skills-game', id: 'skills-game', isGame: true },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'DSA 200+', href: '#dsa', id: 'dsa' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(3, 7, 18, 0.9)' : 'rgba(3, 7, 18, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#030712',
              fontSize: '1rem',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
            }}
          >
            VB
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.01em' }}>
              Vasu Bandaru
            </div>
            <div style={{ fontSize: '0.68rem', color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
              Full Stack & AI Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  padding: '7px 12px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#00f0ff' : link.isGame ? '#c084fc' : '#94a3b8',
                  background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                {link.isGame && <Gamepad2 size={13} color="#c084fc" />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* CLI Terminal Modal Trigger */}
          <button
            onClick={onOpenTerminal}
            title="Open Interactive CLI Terminal (Ctrl+K or `)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="hover:text-cyan-400"
          >
            <Terminal size={14} />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* Download Resume Button (Must Download Real PDF with filename Vasu_Bandaru_Resume.pdf) */}
          <a
            href="/resume.pdf"
            download="Vasu_Bandaru_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
              color: '#030712',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.35)',
              transition: 'all 0.2s ease',
            }}
            className="hover-lift"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              cursor: 'pointer',
            }}
            className="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(3, 7, 18, 0.98)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: activeSection === link.id ? '#00f0ff' : '#94a3b8',
                background: activeSection === link.id ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {link.isGame && <Gamepad2 size={16} color="#c084fc" />}
              <span>{link.label}</span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Vasu_Bandaru_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
              color: '#030712',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              marginTop: '8px',
            }}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
