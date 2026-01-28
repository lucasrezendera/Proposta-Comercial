import React from 'react';
import { COMPANY_NAME } from '../../constants';
import { EagleLogo } from '../UI/EagleLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20">
      <div className="container mx-auto max-w-6xl px-6 text-center flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
          <EagleLogo size={80} className="relative z-10" />
        </div>
        
        <h2 className="font-display text-3xl font-bold text-white mb-6 tracking-tighter uppercase">
          {COMPANY_NAME}<span className="text-primary">.</span>
        </h2>
        
        <div className="flex justify-center gap-10 mb-12">
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">Instagram</a>
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">LinkedIn</a>
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">WhatsApp</a>
        </div>
        
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>
        
        <p className="text-slate-600 text-[9px] tracking-[0.6em] uppercase font-mono max-w-lg leading-loose">
          TECNOLOGIA PARA EVENTOS • BUSINESS INTELLIGENCE • DESIGN SYSTEM
        </p>
      </div>
    </footer>
  );
};