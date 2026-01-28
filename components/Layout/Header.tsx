import React, { useState, useEffect } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { COMPANY_NAME, CLIENT_NAME } from '../../constants';
import { EagleLogo } from '../UI/EagleLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPDF = async () => {
    if (isGeneratingPDF) return;
    
    setIsGeneratingPDF(true);
    
    const element = document.getElementById('pdf-export-template');
    if (!element) {
      console.error('Template de PDF não encontrado');
      setIsGeneratingPDF(false);
      return;
    }

    const opt = {
      margin: 0,
      filename: `Proposta_Eagle_Digital_${CLIENT_NAME}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#020617',
        logging: false,
        letterRendering: true,
        windowWidth: 794,
        scrollY: 0,
        x: 0,
        y: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    try {
      // @ts-ignore - html2pdf is loaded via CDN
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 no-print ${isScrolled ? 'py-3 md:py-4 glass border-b' : 'py-4 md:py-6 bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 group">
            <EagleLogo size={32} className="md:w-[44px] md:h-[44px] transition-transform group-hover:scale-110 duration-500" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-lg md:text-2xl tracking-tighter text-white leading-none whitespace-nowrap">
                {COMPANY_NAME}<span className="text-primary">.</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none hidden md:block mt-1">
                Proposta Comercial
              </span>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col pl-4 border-l border-slate-800">
             <span className="text-[10px] font-mono text-primary font-bold uppercase leading-none">#2026-V1 // ATIVA</span>
          </div>
        </div>

        <button 
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="px-4 py-2.5 md:px-6 md:py-2.5 bg-primary border border-primary/20 rounded-lg flex items-center gap-2 text-[10px] md:text-xs font-mono text-white hover:bg-primaryDark transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 group font-bold tracking-wide"
        >
          {isGeneratingPDF ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />}
          {isGeneratingPDF ? 'GERANDO...' : 'BAIXAR PDF'}
        </button>
      </div>
    </header>
  );
};