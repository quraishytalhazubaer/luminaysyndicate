import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CampaignsSection from './components/CampaignsSection';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import AuthModal from './components/AuthModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  const openModal = (type) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        onOpenDonate={() => openModal('donate')}
        onOpenAuth={() => openModal('auth')}
      />

      <main className="main">
        <HeroSection
          onOpenDonate={() => openModal('donate')}
          onOpenVideo={() => openModal('video')}
        />

        <AboutSection
          onOpenVideo={() => openModal('video')}
        />

        <CampaignsSection
          onOpenDonate={() => openModal('donate')}
        />

        <EventsSection />
      </main>

      <Footer />

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          {modal === 'donate' && (
        <DonateModal onClose={closeModal} />
      )}

      {modal === 'auth' && (
        <AuthModal onClose={closeModal} />
      )}

      {modal === 'video' && (
        <VideoModal onClose={closeModal} />
      )}

        </div>
      )}
    </div>
  );
}