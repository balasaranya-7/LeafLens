import { useState } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { type LanguageCode } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import DetectionDemo from '@/components/DetectionDemo';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import WeatherAlert from '@/components/WeatherAlert';
import SmartRemedies from '@/components/SmartRemedies';
import ExpertConnect from '@/components/ExpertConnect';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

function AppContent() {
  useScrollReveal();

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [language, setLanguage] = useState<LanguageCode>('en');

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const scrollToDemo = () => {
    document.getElementById('detection-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExperts = () => {
    document.getElementById('experts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onScanClick={scrollToDemo}
        onAuthClick={openAuth}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        <Hero onScanClick={scrollToDemo} />
        <ProblemSection />
        <HowItWorks />
        <div id="detection-demo">
          <DetectionDemo onScanClick={() => openAuth('login')} />
        </div>
        <Features />
        <Dashboard />
        <WeatherAlert />
        <SmartRemedies />
        <ExpertConnect />
        <Benefits />
        <About />
        <CTA onScanClick={scrollToDemo} onExpertClick={scrollToExperts} />
      </main>

      <Footer />

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitch={setAuthMode}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
