import React from 'react';
import { ChevronDown, Crown, Sparkles } from 'lucide-react';
import { SectionId } from '../../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Orbes de Luz Dinâmicos - Desabilitados em mobile */}
      <div className="hidden md:block absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow pointer-events-none mix-blend-screen" />
      <div className="hidden md:block absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none delay-1000 mix-blend-screen" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 flex flex-col items-center py-12 sm:py-20">

        {/* Badge: Proposta Exclusiva */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
            <Crown size={10} className="text-primary sm:w-3 sm:h-3" />
            <span className="text-slate-400 text-[8px] sm:text-[10px] font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              PROPOSTA EXCLUSIVA PARA: <span className="text-white">AMPEI</span>
            </span>
          </div>
        </div>

        {/* Main Title Architecture */}
        <div className="relative mb-8 sm:mb-10 animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-display flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-3 sm:gap-x-4 leading-none">
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                FEIRA DAS
              </span>
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-primary leading-none">
                INDÚSTRIAS
              </span>
            </div>
            <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.3em] sm:tracking-[0.5em] text-slate-500 uppercase mt-2">
              INDAIATUBA
            </span>
          </h1>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-fade-in-up text-center px-4" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg sm:text-xl md:text-3xl text-slate-300 font-display leading-tight">
            Transforme o evento em um <br /><span className="text-white border-b-2 border-primary/40">ecossistema inteligente</span>.
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
            <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-mono tracking-widest uppercase">
              Branding de Autoridade
            </span>
            <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
            <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-mono tracking-widest uppercase">
              Tecnologia de Gestão
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Refinado */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-3 sm:gap-4 group">
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <button
          onClick={() => document.getElementById(SectionId.DIAGNOSIS)?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 sm:p-3 rounded-full border border-slate-800 text-slate-500 hover:text-white hover:border-primary transition-all glass-card group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* Metadados Laterais */}
      <div className="hidden xl:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-20 [writing-mode:vertical-lr] rotate-180 items-center">
        <span className="font-mono text-[9px] text-slate-700 tracking-[0.5em] uppercase font-bold">2026 // EDITION</span>
        <div className="h-24 w-px bg-slate-800"></div>
        <span className="font-mono text-[9px] text-primary tracking-[0.5em] uppercase font-bold">EAGLE DIGITAL HOUSE</span>
      </div>

      <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-20 [writing-mode:vertical-lr] items-center">
        <span className="font-mono text-[9px] text-slate-700 tracking-[0.5em] uppercase font-bold">STRATEGIC DOSSIER</span>
        <div className="h-24 w-px bg-slate-800"></div>
        <span className="font-mono text-[9px] text-white tracking-[0.5em] uppercase font-bold">CONFIDENTIAL</span>
      </div>
    </section>
  );
};