import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Diagnosis } from './components/Sections/Diagnosis';
import { Solution } from './components/Sections/Solution';
import { TechSpecs } from './components/Sections/TechSpecs';
import { PreviewMockup } from './components/Sections/PreviewMockup';
import { Branding } from './components/Sections/Branding';
import { Comparison } from './components/Sections/Comparison';
import { Investment } from './components/Sections/Investment';
import { Results } from './components/Sections/Results';
import { Services } from './components/Sections/Services';
import { ProposalChat } from './components/Features/ProposalChat';
import { ProposalPdfTemplate } from './components/PDF/ProposalPdfTemplate';

// Wrapper component to handle the "Sticky Card" effect
interface StickySectionProps {
  children?: React.ReactNode;
  className?: string;
}

const StickySection: React.FC<StickySectionProps> = ({ children, className = "" }) => {
  return (
    <div className={`pdf-section lg:sticky-wrapper ${className}`}>
      <div className="h-full w-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-primary selection:text-white relative">
      <Header />
      
      <main id="proposal-content" className="relative">
        
        {/* Hero doesn't need to be sticky, it's the base */}
        <div className="pdf-section min-h-screen relative z-0">
          <Hero />
        </div>

        {/* Stacked Sections */}
        <StickySection className="z-10 bg-dark-950">
          <Diagnosis />
        </StickySection>
        
        <StickySection className="z-20 bg-dark-950">
          <Solution />
        </StickySection>
        
        <StickySection className="z-30 bg-dark-950">
          <TechSpecs />
        </StickySection>

        <StickySection className="z-40 bg-dark-950">
           <Services />
        </StickySection>

        <StickySection className="z-50 bg-dark-950">
           <Results />
        </StickySection>
        
        <StickySection className="z-[60] bg-dark-950">
          <PreviewMockup />
        </StickySection>
        
        <StickySection className="z-[70] bg-dark-900">
          <Branding />
        </StickySection>
        
        <StickySection className="z-[80] bg-dark-950">
          <Comparison />
        </StickySection>
        
        <StickySection className="z-[90] bg-dark-950">
          <Investment />
        </StickySection>

      </main>

      {/* 
        Template de PDF: 
        Renderizado fora da visão para captura pelo html2pdf
      */}
      <div 
        className="absolute left-[-9999px] top-0 pointer-events-none opacity-0" 
        style={{ width: '794px' }} 
        aria-hidden="true"
      >
        <ProposalPdfTemplate />
      </div>

      <div className="no-print relative z-[100] bg-slate-950">
        <Footer />
        <ProposalChat />
      </div>
    </div>
  );
}

export default App;