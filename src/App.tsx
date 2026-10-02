import { useState } from 'react';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { CustomCursor } from './components/animation/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingQuickActions } from './components/layout/FloatingQuickActions';
import { HeroSection } from './components/sections/HeroSection';
import { StatsRibbon } from './components/sections/StatsRibbon';
import { AboutSection } from './components/sections/AboutSection';
import { AcademicsSection } from './components/sections/AcademicsSection';
import { SportsSection } from './components/sections/SportsSection';
import { BoardingLifeSection } from './components/sections/BoardingLifeSection';
import { CampusTourSection } from './components/sections/CampusTourSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionsSection } from './components/sections/AdmissionsSection';
import { FAQSection } from './components/sections/FAQSection';
import { InquiryModal } from './components/ui/InquiryModal';
import { TourBookingModal } from './components/ui/TourBookingModal';

export function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryGrade, setInquiryGrade] = useState('Class IX');
  const [tourModalOpen, setTourModalOpen] = useState(false);

  const handleOpenInquiry = (grade?: string) => {
    if (grade) setInquiryGrade(grade);
    setInquiryModalOpen(true);
  };

  const handleOpenTour = () => {
    setTourModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-[#b90124] selection:text-white">
      {/* Standout Feature D: Top Viewport Scroll Progress Bar */}
      <ScrollProgress />

      {/* Standout Feature A: Spring Physics Custom Interactive Cursor */}
      <CustomCursor />

      {/* Header & Sticky Navigation with Theme Switcher (Standout Feature C) */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onOpenTour={handleOpenTour}
      />

      {/* Semantic Main Landing Container with Scroll-Triggered Reveals (Standout Feature B) */}
      <main id="main-content" className="relative overflow-hidden">
        {/* Hero Section */}
        <HeroSection
          onOpenInquiry={handleOpenInquiry}
          onOpenTour={handleOpenTour}
        />

        {/* Statistical Ribbon with Animated Viewport Counters */}
        <StatsRibbon />

        {/* About: The Modern Gurukul Philosophy */}
        <AboutSection
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Academics: CBSE & Cambridge Pathways */}
        <AcademicsSection
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Sports: 16+ Disciplines & Foundation */}
        <SportsSection />

        {/* Boarding Life & Pastoral Care */}
        <BoardingLifeSection
          onOpenTour={handleOpenTour}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 360° Campus Tour & Infrastructure Gallery */}
        <CampusTourSection
          onOpenTour={handleOpenTour}
        />

        {/* Authentic Voices: Testimonials */}
        <TestimonialsSection />

        {/* Admissions Roadmap & Fast Application */}
        <AdmissionsSection
          onOpenTour={handleOpenTour}
        />

        {/* Searchable FAQ Accordion */}
        <FAQSection
          onOpenInquiry={handleOpenInquiry}
        />
      </main>

      {/* Semantic Footer with CBSE Public Disclosures */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenTour={handleOpenTour}
      />

      {/* Floating High-Converting Action Triggers */}
      <FloatingQuickActions
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Interactive Admission Inquiry Modal with Confetti Celebration */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultGrade={inquiryGrade}
      />

      {/* Interactive Experience Day / Campus Tour Booking Modal */}
      <TourBookingModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
      />
    </div>
  );
}

export default App;
