import React from 'react';
import { COMPANY_NAME } from '../../constants';
import { EagleLogo } from '../UI/EagleLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 text-center flex flex-col items-center">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-tighter uppercase">
          {COMPANY_NAME}<span className="text-primary">.</span>
        </h2>
        
        <div className="flex justify-center gap-6 sm:gap-10 mb-6 sm:mb-8">
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Instagram</a>
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">LinkedIn</a>
           <a href="#" className="text-slate-500 hover:text-primary transition-colors font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">WhatsApp</a>
        </div>
        
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-4 sm:mb-6"></div>
        
        <p className="text-slate-600 text-[8px] sm:text-[9px] tracking-[0.4em] sm:tracking-[0.6em] uppercase font-mono max-w-lg leading-loose">
          TECNOLOGIA PARA EVENTOS • BUSINESS INTELLIGENCE • DESIGN SYSTEM
        </p>
      </div>
    </footer>
  );
};