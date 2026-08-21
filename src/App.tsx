import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { ServicesSection } from './components/ServicesSection';
import { DayWithThyself } from './components/DayWithThyself';
import { PhilosophyBanner } from './components/PhilosophyBanner';
import { ApproachSteps } from './components/ApproachSteps';
import { AreasOfWellbeing } from './components/AreasOfWellbeing';
import { WhyAavira } from './components/WhyAavira';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ApproachPage } from './components/ApproachPage';
import { ContactPage } from './components/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'approach' | 'contact'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Lock activeSection directly to currentPage so scrolling on the Home page keeps 'HOME' active in header navigation
  useEffect(() => {
    setActiveSection(currentPage);
  }, [currentPage]);

  const handleNavigate = (targetId: string) => {
    if (targetId === 'about') {
      setCurrentPage('about');
      setActiveSection('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'services') {
      setCurrentPage('services');
      setActiveSection('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'approach') {
      setCurrentPage('approach');
      setActiveSection('approach');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'contact') {
      setCurrentPage('contact');
      setActiveSection('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setActiveSection(targetId);
      setTimeout(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            const navOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
          }
        }
      }, 100);
      return;
    }

    // Single page anchor scrolling when already on home
    setActiveSection(targetId);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    } else {
      setSelectedServiceForBooking('');
    }
    setIsBookingOpen(true);
  };

  return (
    <LanguageProvider>
      <div style={{ backgroundColor: '#F5F1E8', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        
        {/* Sticky Header Navigation */}
        <Header
          activeSection={currentPage !== 'home' ? currentPage : activeSection}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Main Page Rendering */}
        {currentPage === 'about' && (
          <AboutPage
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'approach' && (
          <ApproachPage
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            onNavigateServices={() => handleNavigate('services')}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'home' && (
          <main>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => handleOpenBooking()}
              onExploreServices={() => handleNavigate('services')}
            />

            {/* Welcome Section & Meet Afeefa */}
            <WelcomeSection
              onOpenBooking={() => handleNavigate('about')}
            />

            {/* Our Services Section */}
            <ServicesSection
              onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            />

            {/* Featured Experience: A Day With Thyself */}
            <DayWithThyself
              onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            />

            {/* Philosophy Banner */}
            <PhilosophyBanner />

            {/* Our Approach Section */}
            <ApproachSteps
              onOpenBooking={() => handleOpenBooking('General Consultation')}
            />

            {/* Areas of Wellbeing */}
            <AreasOfWellbeing />

            {/* Why Choose Aavira */}
            <WhyAavira />
          </main>
        )}

        {/* Interactive Consultation Booking Modal */}
        <ConsultationModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={selectedServiceForBooking}
        />

        {/* Footer & Contact Preview */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={handleNavigate}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;

