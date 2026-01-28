import React from 'react';
import { Globe, Smartphone, BarChart3, Palette } from 'lucide-react';
import { SectionId } from '../../types';

export const Solution: React.FC = () => {
   return (
      <section id={SectionId.SOLUTION} className="py-12 sm:py-16 bg-dark-900 relative overflow-hidden">
         <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
               <span className="text-primary text-xs sm:text-sm font-bold tracking-tighter">03 // 08</span>
               <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
               <span className="text-slate-500 text-[9px] sm:text-[10px] tracking-widest uppercase">Arquitetura da Solução</span>
            </div>

            <div className="mb-6 sm:mb-8 text-center">
               <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tighter UPPERCASE">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">ECOSSISTEMA</span> VELLO
               </h2>
               <p className="text-slate-400 max-w-2xl text-base sm:text-lg font-light mx-auto px-4">
                  Uma infraestrutura digital completa para gerir o evento antes, durante e depois.
               </p>
            </div>

            {/* Bento Grid High-End */}
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[650px]">

               {/* Card 1: Site (Main) */}
               <div className="md:col-span-8 md:row-span-1 group relative glass-card rounded-2xl sm:rounded-[2rem] overflow-hidden p-6 sm:p-8 flex flex-col justify-between min-h-[280px]">
                  <div className="border-beam" style={{ "--duration": "3s" } as any} />
                  <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none transition-all group-hover:bg-primary/10"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div className="flex justify-between items-start">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl sm:rounded-2xl flex items-center justify-center text-primary border-primary/20">
                           <Globe size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono text-primary border border-primary/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">CORE SYSTEM</span>
                     </div>
                     <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 uppercase">WEB EXPERIENCE</h3>
                        <span className="text-[10px] sm:text-xs font-mono text-primary uppercase tracking-widest mb-2 block">NEXT.JS PERFORMANCE</span>
                        <p className="text-slate-400 text-xs sm:text-sm max-w-md">Site institucional de alta conversão. Otimizado para SEO local e credenciamento antecipado.</p>
                     </div>
                  </div>
               </div>

               {/* Card 2: App */}
               <div className="md:col-span-4 md:row-span-1 group relative glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-900/50 min-h-[280px]">
                  <div className="border-beam" style={{ "--duration": "5s" } as any} />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl sm:rounded-2xl flex items-center justify-center text-primary border-primary/20">
                     <Smartphone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                     <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 uppercase">APP NATIVO</h3>
                     <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block">IOS + ANDROID</span>
                     <p className="text-slate-400 text-xs sm:text-sm">Guia de bolso do visitante: Agenda, Mapa, Networking e Push Notifications.</p>
                  </div>
               </div>

               {/* Card 3: Gestão */}
               <div className="md:col-span-4 md:row-span-1 group relative glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border-dashed border-slate-800 min-h-[280px]">
                  <div className="border-beam" style={{ "--duration": "4s" } as any} />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl sm:rounded-2xl flex items-center justify-center text-primary border-primary/20">
                     <BarChart3 size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                     <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 uppercase">GESTÃO TOTAL</h3>
                     <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block">DASHBOARD VELLO</span>
                     <p className="text-slate-400 text-xs sm:text-sm">Controle financeiro em tempo real. Mapa de stands interativo (SVG) para reservas online.</p>
                  </div>
               </div>

               {/* Card 4: Marca */}
               <div className="md:col-span-8 md:row-span-1 group relative glass-card rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[280px]">
                  <div className="border-beam" style={{ "--duration": "7s" } as any} />
                  <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-xl sm:rounded-2xl flex items-center justify-center text-primary border-primary/20">
                     <Palette size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                     <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 uppercase">IDENTIDADE VISUAL</h3>
                     <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 block">REBRANDING 2026</span>
                     <p className="text-slate-400 text-xs sm:text-sm max-w-sm">Uma nova marca sólida e inovadora. Design System completo, manual e materiais de apoio.</p>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};