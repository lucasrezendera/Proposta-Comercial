import React, { useLayoutEffect, useRef } from 'react';
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
import { ProposalPdfTemplate } from './components/PDF/ProposalPdfTemplate';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.pdf-section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: mainRef });

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-primary selection:text-white relative">
      <Header />

      <main id="proposal-content" ref={mainRef}>
        <div className="pdf-section">
          <Hero />
        </div>
        <div className="pdf-section">
          <Diagnosis />
        </div>
        <div className="pdf-section">
          <Solution />
        </div>
        <div className="pdf-section">
          <TechSpecs />
        </div>
        <div className="pdf-section">
          <PreviewMockup />
        </div>
        <div className="pdf-section">
          <Branding />
        </div>
        <div className="pdf-section">
          <Comparison />
        </div>
        <div className="pdf-section">
          <Investment />
        </div>
      </main>

      {/* 
        Template de PDF: 
        Usamos absolute e uma posição lateral extrema para garantir que o componente
        esteja renderizado com sua altura real, permitindo que o html2pdf capture tudo.
      */}
      <div
        className="absolute left-[-9999px] top-0 pointer-events-none opacity-0"
        style={{ width: '794px' }}
        aria-hidden="true"
      >
        <ProposalPdfTemplate />
      </div>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}

export default App;