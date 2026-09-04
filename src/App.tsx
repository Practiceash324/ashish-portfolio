import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

// Dedicated Multi-Page Views
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { TrainingPage } from './components/pages/TrainingPage';
import { PerformanceMarketingPage } from './components/pages/PerformanceMarketingPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { TrackingPage } from './components/pages/TrackingPage';
import { WorkPage } from './components/pages/WorkPage';
import { InsightsPage } from './components/pages/InsightsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ThankYouPage } from './components/pages/ThankYouPage';

import { NavPage, UserJourney } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactIntent, setContactIntent] = useState<UserJourney>('learn');
  const [contactTopic, setContactTopic] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<{
    name?: string;
    email?: string;
    intent?: string;
    organization?: string;
  }>({
    name: 'Valued Learner',
    email: '',
    intent: 'Training & Mentorship',
    organization: ''
  });

  // Synchronize hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: NavPage[] = [
        'home', 
        'about', 
        'training', 
        'performance-marketing', 
        'services', 
        'tracking', 
        'work', 
        'insights', 
        'contact',
        'thank-you'
      ];

      if (validPages.includes(hash as NavPage)) {
        setCurrentPage(hash as NavPage);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (intent: UserJourney = 'general', topic?: string) => {
    setContactIntent(intent);
    if (topic) setContactTopic(topic);
    setIsContactModalOpen(true);
  };

  const handleFormSubmitted = (data: {
    name: string;
    email: string;
    intent: string;
    organization?: string;
  }) => {
    setSubmittedData(data);
    setIsContactModalOpen(false);
    handleNavigate('thank-you');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'training':
        return <TrainingPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'performance-marketing':
        return <PerformanceMarketingPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'tracking':
        return <TrackingPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'work':
        return <WorkPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case 'contact':
        return (
          <ContactPage 
            onNavigate={handleNavigate} 
            defaultIntent={contactIntent} 
            onFormSubmitted={handleFormSubmitted}
          />
        );
      case 'thank-you':
        return (
          <ThankYouPage 
            onNavigate={handleNavigate} 
            onOpenContact={handleOpenContact} 
            submittedData={submittedData}
            onResetInquiry={() => handleNavigate('contact')}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-slate-100 selection:bg-violet-500/30 selection:text-violet-200 antialiased overflow-x-hidden font-sans">
      {/* Global Multi-Page Sticky Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenContact={handleOpenContact} 
      />

      {/* Dynamic Multi-Page Content */}
      <main id="main-content">
        {renderActivePage()}
      </main>

      {/* Global Multi-Page Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenContact={handleOpenContact} 
      />

      {/* Global Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialIntent={contactIntent}
        initialTopic={contactTopic}
      />
    </div>
  );
}
