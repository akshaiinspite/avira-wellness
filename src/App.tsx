import { useState, useEffect } from 'react';
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

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Scrollspy observer for active section header highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
    <div style={{ backgroundColor: '#F5F1E8', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* Sticky Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Home Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Welcome Section & Meet Afeefa M. P. */}
        <WelcomeSection
          onOpenBooking={() => handleOpenBooking('General Consultation')}
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

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedServiceForBooking}
      />

      {/* Footer & Contact Preview */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

export default App;
