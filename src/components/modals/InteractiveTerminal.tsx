import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import type { ProfileData } from '../../types/portfolio';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
}

export function InteractiveTerminal({
  isOpen,
  onClose,
  profile,
}: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <div style={{ color: '#00f0ff', fontWeight: 700 }}>
            ╔══════════════════════════════════════════════════════════════════╗
            <br />
            ║ VASU BANDARU DEVELOPER CLI v3.2.0 (x86_64-fullstack-ai)          ║
            <br />
            ║ Interactive Full-Stack & AI Terminal Environment                 ║
            <br />
            ╚══════════════════════════════════════════════════════════════════╝
          </div>
          <div style={{ marginTop: '8px', color: '#94a3b8' }}>
            Type <span style={{ color: '#00f0ff', fontWeight: 700 }}>help</span> to view available commands. Try running <span style={{ color: '#c084fc', fontWeight: 700 }}>game</span>, <span style={{ color: '#34d399', fontWeight: 700 }}>projects</span>, or <span style={{ color: '#ffa116', fontWeight: 700 }}>dsa</span>.
          </div>
        </div>
      ),
    },
  ]);

  const [commandList, setCommandList] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandList((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', color: '#cbd5e1' }}>
            <div><span style={{ color: '#00f0ff', fontWeight: 700 }}>about</span> — Overview of Vasu Bandaru and background</div>
            <div><span style={{ color: '#00f0ff', fontWeight: 700 }}>skills</span> — List technical skills across all categories</div>
            <div><span style={{ color: '#c084fc', fontWeight: 700 }}>game</span> — Launch the interactive 3D Skills Arcade</div>
            <div><span style={{ color: '#34d399', fontWeight: 700 }}>projects</span> — View 7 live clickable production applications</div>
            <div><span style={{ color: '#ffa116', fontWeight: 700 }}>dsa</span> / <span style={{ color: '#ffa116', fontWeight: 700 }}>leetcode</span> — 200+ solved problems metrics</div>
            <div><span style={{ color: '#38bdf8', fontWeight: 700 }}>resume</span> — Download Vasu_Bandaru_Resume.pdf</div>
            <div><span style={{ color: '#ec4899', fontWeight: 700 }}>contact</span> — Direct email, LinkedIn, and GitHub channels</div>
            <div><span style={{ color: '#94a3b8', fontWeight: 700 }}>clear</span> — Clear terminal output</div>
            <div><span style={{ color: '#94a3b8', fontWeight: 700 }}>exit</span> — Close terminal</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
            <div style={{ color: '#00f0ff', fontWeight: 700, marginBottom: '4px' }}>Vasu Bandaru</div>
            <div>Role: {profile.role}</div>
            <div>Headline: {profile.headline}</div>
            <div>Education: {profile.education.degree} ({profile.education.period}) — {profile.education.institution}</div>
            <div style={{ marginTop: '6px', color: '#94a3b8' }}>"{profile.description}"</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div style={{ color: '#cbd5e1', lineHeight: 1.5 }}>
            <div style={{ color: '#00f0ff', fontWeight: 700 }}>Frontend:</div>
            <div>React, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Redux Toolkit, Three.js, R3F, Framer Motion</div>
            <div style={{ color: '#a855f7', fontWeight: 700, marginTop: '6px' }}>Backend:</div>
            <div>Node.js, Express.js, Django, PHP, REST APIs, JWT Auth, Middleware</div>
            <div style={{ color: '#34d399', fontWeight: 700, marginTop: '6px' }}>Databases:</div>
            <div>MongoDB, Mongoose, PostgreSQL, MySQL, SQL</div>
            <div style={{ color: '#fbbf24', fontWeight: 700, marginTop: '6px' }}>AI & LLM:</div>
            <div>Google Gemini API, Google AI Studio, OpenAI APIs, Claude, Prompt Engineering</div>
          </div>
        );
        break;

      case 'game':
        output = (
          <div style={{ color: '#c084fc' }}>
            Navigating to 3D Skills Playground Arcade...
          </div>
        );
        document.getElementById('skills-game')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'projects':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', color: '#cbd5e1' }}>
            <div>1. <span style={{ color: '#00f0ff' }}>Autonomous GST Reconciliation</span>: https://autonomous-gst-reconciliation.vercel.app/</div>
            <div>2. <span style={{ color: '#a855f7' }}>AI Voice Chat Platform</span>: https://vasu-ai-voice-frontend.vercel.app/</div>
            <div>3. <span style={{ color: '#34d399' }}>FinTrack Expense Tracker</span>: https://vasu-9390.github.io/expense-tracker/</div>
            <div>4. <span style={{ color: '#3b82f6' }}>AI Support SaaS</span>: https://ai-support-saas-beige.vercel.app/</div>
            <div>5. <span style={{ color: '#ec4899' }}>Hospital Management System</span>: https://hospital-management-fjt8-lovat.vercel.app/</div>
            <div>6. <span style={{ color: '#f59e0b' }}>Charis AI Gift Concierge</span>: https://charis-ai-gift-concierge.vercel.app/</div>
            <div>7. <span style={{ color: '#06b6d4' }}>SupportAI Ticket System</span>: https://supportai-ticket-system.vercel.app/login</div>
          </div>
        );
        break;

      case 'dsa':
      case 'leetcode':
        output = (
          <div style={{ color: '#ffa116', lineHeight: 1.5 }}>
            <div style={{ fontWeight: 800 }}>🏆 200+ Problems Solved on LeetCode</div>
            <div style={{ color: '#94a3b8' }}>Profile: {profile.leetcode}</div>
            <div style={{ color: '#cbd5e1', marginTop: '4px' }}>Topics: Arrays, Strings, Linked Lists, Stacks, Queues, Hashing, Binary Search, Trees, Graphs, Dynamic Programming</div>
          </div>
        );
        break;

      case 'resume':
        output = (
          <div style={{ color: '#34d399' }}>
            Initiating download for Vasu_Bandaru_Resume.pdf...
          </div>
        );
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Vasu_Bandaru_Resume.pdf';
        link.click();
        break;

      case 'contact':
        output = (
          <div style={{ color: '#cbd5e1' }}>
            <div>Email: <a href={`mailto:${profile.email}`} style={{ color: '#00f0ff' }}>{profile.email}</a></div>
            <div>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: '#0077b5' }}>{profile.linkedin}</a></div>
            <div>GitHub: <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>{profile.github}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = (
          <div style={{ color: '#f87171' }}>
            command not found: "{rawCmd}". Type <span style={{ color: '#00f0ff' }}>help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandList.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: isMaximized ? '95vw' : '720px',
          height: isMaximized ? '85vh' : '520px',
          borderRadius: '16px',
          background: 'rgba(10, 15, 29, 0.98)',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 240, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
          transition: 'all 0.25s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            padding: '12px 16px',
            background: 'rgba(15, 23, 42, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '0.82rem', color: '#94a3b8', marginLeft: '8px' }}>
              vasu@portfolio:~ (bash)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}
            >
              {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '18px',
            fontSize: '0.86rem',
            lineHeight: 1.6,
          }}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff' }}>
                <span>vasu@portfolio:~$</span>
                <span style={{ color: '#f8fafc' }}>{item.command}</span>
              </div>
              <div style={{ marginTop: '4px' }}>{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Prompt */}
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(15, 23, 42, 0.8)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#00f0ff', fontSize: '0.9rem' }}>vasu@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
            }}
          />
          <CornerDownLeft size={16} color="#64748b" />
        </div>
      </div>
    </div>
  );
}
