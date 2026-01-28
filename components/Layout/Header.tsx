import React, { useState, useEffect } from 'react';
import { Download, Loader2, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, CLIENT_NAME } from '../../constants';
import { EagleLogo } from '../UI/EagleLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <header className="fixed w-full z-50 transition-all duration-500 no-print top-0 pt-4 md:pt-6">
      <div className={`container mx-auto max-w-6xl px-4 md:px-6 transition-all duration-500 ${isScrolled ? 'max-w-5xl' : 'max-w-6xl'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 rounded-2xl px-4 py-3 md:px-8 md:py-4 ${isScrolled ? 'glass border border-white/10 shadow-2xl scale-95 md:backdrop-blur-xl' : 'bg-transparent border border-transparent'}`}>

          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col h-10 justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg md:text-xl tracking-tighter text-white leading-none">
                  {COMPANY_NAME}<span className="text-primary">.</span>
                </span>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <span className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none mt-1.5 hidden sm:block font-medium">
                Proposta Comercial
              </span>
            </div>
          </div>

          {/* Center Info - Only Scrolled */}
          <div className={`hidden lg:flex items-center gap-6 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">#2026-V1 // ATIVA</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="relative overflow-hidden px-4 py-2.5 md:px-6 md:py-3 bg-white text-black rounded-xl flex items-center gap-2.5 text-[10px] md:text-xs font-bold font-display hover:bg-primary hover:text-white transition-all duration-500 disabled:opacity-50 group active:scale-95 shadow-xl shadow-white/5"
            >
              <div className="relative z-10 flex items-center gap-2">
                {isGeneratingPDF ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                )}
                <span className="tracking-tight uppercase">
                  {isGeneratingPDF ? 'Gerando...' : 'Baixar PDF'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};