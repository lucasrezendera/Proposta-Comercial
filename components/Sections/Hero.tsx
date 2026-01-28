import React from 'react';
import { ChevronDown, Crown } from 'lucide-react';
import { SectionId } from '../../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-900/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none delay-1000" />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-6xl px-6 relative z-10 flex flex-col items-center text-center py-20">
        
        {/* Badge: Proposta Exclusiva */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card border-primary/20 shadow-xl shadow-primary/5">
            <Crown className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-slate-300 text-[11px] font-mono font-bold tracking-[0.3em] uppercase">
              PROPOSTA EXCLUSIVA PARA: <span className="text-white">AMPEI</span>
            </span>
          </div>
        </div>

        {/* Main Title Group */}
        <div className="relative mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-display flex flex-col gap-2 items-center">
            <span className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter uppercase">
              FEIRA DAS
            </span>
            <span className="text-6xl md:text-9xl lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary via-orange-400 to-primaryDark text-glow">
              INDÚSTRIAS
            </span>
            <span className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-[0.5em] text-white opacity-40 uppercase -mt-2">
              INDAIATUBA
            </span>
          </h1>
        </div>

        {/* Subtitles */}
        <div className="max-w-3xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-3xl text-white font-display font-medium leading-tight">
            Transforme o evento em um <span className="text-primary underline decoration-primary/30 underline-offset-8">ecossistema inteligente</span>.
          </p>
          <p className="text-base md:text-xl text-slate-400 font-mono tracking-wide uppercase">
            Branding de Autoridade + Tecnologia de Gestão.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
         <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">Scroll</span>
         <button 
           onClick={() => document.getElementById(SectionId.DIAGNOSIS)?.scrollIntoView({ behavior: 'smooth'})}
           className="p-4 rounded-full border border-slate-800 text-slate-500 hover:text-primary hover:border-primary/50 transition-all glass"
         >
           <ChevronDown size={20} />
         </button>
      </div>

      {/* Decorative Sidebar Numbers (Desktop Only) */}
      <div className="hidden lg:flex absolute bottom-12 left-12 flex-col font-mono text-[10px] text-slate-700 tracking-[0.3em] uppercase">
        <span className="text-primary font-bold">01 // EAGLE</span>
        <span>PROPOSAL_2026</span>
      </div>
      
      <div className="hidden lg:flex absolute bottom-12 right-12 flex-col font-mono text-[10px] text-slate-700 tracking-[0.3em] uppercase text-right">
        <span>STRATEGIC_DOSSIER</span>
        <span className="text-white">STRICTLY_CONFIDENTIAL</span>
      </div>
    </section>
  );
};