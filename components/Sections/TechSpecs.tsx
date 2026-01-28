import React from 'react';
import { Cpu, Lock, Zap, Layers, Terminal } from 'lucide-react';
import { SectionId } from '../../types';

export const TechSpecs: React.FC = () => {
  return (
    <section id={SectionId.TECH_SPECS} className="py-12 sm:py-16 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-xs sm:text-sm font-bold tracking-tighter">04 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[9px] sm:text-[10px] tracking-widest uppercase">Tecnologia & Escalabilidade</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] sm:text-[10px] font-mono text-primary mb-3 sm:mb-4 mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <Terminal size={10} className="sm:w-3 sm:h-3" />
                  TECNOLOGIA EXCLUSIVA
                </div>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight UPPERCASE px-4 lg:px-0">
                Não é apenas um site.<br />
                É uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">Plataforma Next.js</span>.
              </h2>
              <p className="text-slate-400 leading-relaxed font-light text-base sm:text-lg px-4 lg:px-0">
                Diferente de sites comuns (Wordpress/Wix) que são lentos e inseguros, utilizaremos a mesma tecnologia usada pela Netflix, Uber e Twitch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-5 sm:gap-y-6 text-left px-4 lg:px-0">
              {[
                { icon: <Zap size={18} className="sm:w-5 sm:h-5" />, title: "VELOCIDADE EXTREMA", desc: "Carregamento instantâneo. Ninguém gosta de esperar site abrir." },
                { icon: <Cpu size={18} className="sm:w-5 sm:h-5" />, title: "SEO OTIMIZADO", desc: "Google lê Next.js melhor. A Feira aparecerá no topo das buscas." },
                { icon: <Lock size={18} className="sm:w-5 sm:h-5" />, title: "SEGURANÇA TOTAL", desc: "Sem plugins vulneráveis. Blindado contra ataques comuns." },
                { icon: <Layers size={18} className="sm:w-5 sm:h-5" />, title: "ESCALABILIDADE", desc: "Aguenta milhares de acessos simultâneos sem cair no dia do evento." }
              ].map((item, i) => (
                <div key={i} className="space-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="text-primary">{item.icon}</div>
                  <h4 className="text-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase">{item.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dossier List UI */}
          <div className="relative group mt-6 sm:mt-8 lg:mt-0">
            <div className="hidden md:block absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative glass border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide uppercase">Arquitetura do Portal</h3>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
                </div>
              </div>

              <ul className="space-y-0 divide-y divide-slate-800/50">
                {[
                  { name: "Home Impactante", desc: "Vídeo Hero + CTA" },
                  { name: "Sobre a Feira", desc: "História e Propósito" },
                  { name: "Agenda Completa", desc: "Palestras e Shows" },
                  { name: "Mapa do Evento", desc: "Stands e Banheiros" },
                  { name: "Área do Expositor", desc: "Login Restrito" },
                  { name: "Imprensa & Mídia", desc: "Credenciamento Press" },
                  { name: "Contato & Local", desc: "Google Maps Integrado" }
                ].map((page, i) => (
                  <li key={i} className="py-3 sm:py-4 flex justify-between items-center group transition-all">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-700">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-slate-200 font-medium text-sm sm:text-base group-hover:text-primary transition-colors">{page.name}</span>
                    </div>
                    <span className="text-slate-600 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest group-hover:text-slate-400 hidden sm:inline">{page.desc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500">NEXT.JS 15.1 // RENDER: SSG/ISR</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-green-500">READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};