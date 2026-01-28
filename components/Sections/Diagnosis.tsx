import React from 'react';
import { AlertTriangle, TrendingDown, Target, Activity } from 'lucide-react';
import { SectionId } from '../../types';

export const Diagnosis: React.FC = () => {
  return (
    <section id={SectionId.DIAGNOSIS} className="py-8 sm:py-12 relative bg-dark-950">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-xs sm:text-sm font-bold tracking-tighter">02 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[9px] sm:text-[10px] tracking-widest uppercase">Análise de Risco & Gargalos</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div className="space-y-5 sm:space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-red-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mx-auto md:mx-0">
                <Activity size={12} className="sm:w-[14px] sm:h-[14px]" />
                Scanning Status: Vulnerabilidades Detectadas
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] uppercase">
                O GARGALO <span className="text-primary">ATUAL</span>
              </h2>
              <p className="text-slate-400 leading-relaxed md:border-l-2 md:border-primary/20 md:pl-6 text-base sm:text-lg font-light pt-3 sm:pt-4 md:pt-0 border-t-2 border-primary/20 md:border-t-0">
                Hoje, a Feira corre o risco de ser "apenas mais um evento". Sem tecnologia centralizada, enfrentamos três problemas críticos:
              </p>
            </div>

            <div className="grid gap-3 text-left">
              {[
                { title: "GESTÃO MANUAL", desc: "Venda de stands por planilha gera erros, conflitos de reserva e falta de dados financeiros.", icon: "01" },
                { title: "EXPERIÊNCIA LIMITADA", desc: "Sem app oficial, o visitante se perde e o expositor perde oportunidades de conexão.", icon: "02" },
                { title: "IDENTIDADE DEFASADA", desc: "A marca atual não reflete a inovação da indústria. É preciso modernizar.", icon: "03" }
              ].map((item, i) => (
                <div key={i} className="group glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 sm:p-4 text-slate-800 font-mono text-3xl sm:text-4xl font-bold opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all pointer-events-none">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-sm sm:text-base mb-1 flex items-center gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-[85%]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-6 sm:mt-8 md:mt-0">
            <div className="hidden md:block absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative glass p-6 sm:p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center gap-5 sm:gap-6 shadow-3xl md:backdrop-blur-md">
              <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center border-primary/40 mb-1 md:backdrop-blur-sm">
                <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>

              <div className="space-y-1">
                <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                  -30%
                </div>
                <div className="text-primary font-mono font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
                  EFICIÊNCIA
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

              <p className="text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed italic">
                "Custo invisível de processos manuais e falta de integração digital."
              </p>

              <div className="flex gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};