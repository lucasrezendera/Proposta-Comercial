'use client'

import { Header } from '@/components/Layout/Header'
import { Footer } from '@/components/Layout/Footer'
import { Hero } from '@/components/Sections/Hero'
import { Diagnosis } from '@/components/Sections/Diagnosis'
import { Solution } from '@/components/Sections/Solution'
import { TechSpecs } from '@/components/Sections/TechSpecs'
import { PreviewMockup } from '@/components/Sections/PreviewMockup'
import { Branding } from '@/components/Sections/Branding'
import { Comparison } from '@/components/Sections/Comparison'
import { Investment } from '@/components/Sections/Investment'
import { ProposalPdfTemplate } from '@/components/PDF/ProposalPdfTemplate'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-primary selection:text-white relative">
      <Header />

      <main id="proposal-content">
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
  )
}
