import React, { useState, useEffect } from 'react';
import { FloatingSkills3D } from './components/3d/FloatingSkills3D';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { SkillsGame } from './components/sections/SkillsGame';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProblemSolvingSection } from './components/sections/ProblemSolvingSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { InteractiveTerminal } from './components/modals/InteractiveTerminal';

import {
  portfolioProfile,
  skillsCategoriesData,
  projectsData,
  experienceData,
  certificationsData,
} from './data/portfolioData';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global Keyboard shortcut for Terminal: Ctrl+K or `
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh', background: '#030712', color: '#f8fafc' }}>
      {/* 1. Full-screen Continuous 3D Floating Skills Background */}
      <FloatingSkills3D />

      {/* 2. Top Navigation Bar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* 3. Main Portfolio Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section with Vasu's Real Photograph & 4 Action Buttons */}
        <HeroSection profile={portfolioProfile} />

        {/* About Vasu Bandaru, Education & Technical Strengths */}
        <AboutSection profile={portfolioProfile} />

        {/* Categorized Skills Dashboard with Inspect Modals */}
        <SkillsSection categories={skillsCategoriesData} />

        {/* NEW FEATURE: 3D Skills Playground Arcade & Quiz Game */}
        <SkillsGame />

        {/* 7 Clickable Production Live Projects */}
        <ProjectsSection projects={projectsData} />

        {/* Dedicated 200+ LeetCode DSA Problem Solving Section */}
        <ProblemSolvingSection
          leetcodeSolved={portfolioProfile.leetcodeSolved}
          leetcodeUrl={portfolioProfile.leetcode}
        />

        {/* Verified Experience: DevGnan Frontend Internship */}
        <ExperienceSection experience={experienceData} />

        {/* Verified Certifications: AWS, Coursera, IBM */}
        <CertificationsSection certifications={certificationsData} />

        {/* Contact Section with Validated Form & Direct Transmission */}
        <ContactSection profile={portfolioProfile} />
      </main>

      {/* 4. Footer */}
      <Footer
        profile={portfolioProfile}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* 5. Interactive CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        profile={portfolioProfile}
      />
    </div>
  );
}

export default App;
