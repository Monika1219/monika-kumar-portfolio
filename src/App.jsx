// filepath: c:\Users\Acer\Downloads\portfoliogit\src\App.jsx
// ...existing code...
import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* apply left margin only on md+ so mobile uses full width */}
      <div className="md:ml-64">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
// ...existing code...
