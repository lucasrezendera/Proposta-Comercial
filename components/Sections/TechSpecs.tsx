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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-[9px] sm:text-[10px] font-mono text-primary mb-3 sm:mb-4 mx-auto lg:mx-0 shadow-lg shadow-primary/5">
                <Terminal size={12} className="sm:w-3 sm:h-3" />
                <span className="font-bold tracking-wider">TECNOLOGIA EXCLUSIVA</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight UPPERCASE px-4 lg:px-0">
                Não é apenas um site.<br />
                É uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">Plataforma Next.js</span>.
              </h2>
              <p className="text-slate-400 leading-relaxed font-light text-base sm:text-lg px-4 lg:px-0">
                Diferente de sites comuns (Wordpress/Wix) que são lentos e inseguros, utilizaremos a mesma tecnologia usada pela <span className="text-white font-semibold">Netflix, Uber e Twitch</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 px-4 lg:px-0">
              {[
                { 
                  icon: <Zap size={20} className="sm:w-6 sm:h-6" />, 
                  title: "VELOCIDADE EXTREMA", 
                  desc: "Carregamento instantâneo. Ninguém gosta de esperar.",
                  color: "from-yellow-500 to-orange-500"
                },
                { 
                  icon: <Cpu size={20} className="sm:w-6 sm:h-6" />, 
                  title: "SEO OTIMIZADO", 
                  desc: "Google lê Next.js melhor. Topo das buscas.",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: <Lock size={20} className="sm:w-6 sm:h-6" />, 
                  title: "SEGURANÇA TOTAL", 
                  desc: "Sem plugins vulneráveis. Blindado contra ataques.",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  icon: <Layers size={20} className="sm:w-6 sm:h-6" />, 
                  title: "ESCALABILIDADE", 
                  desc: "Milhares de acessos simultâneos sem cair.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((item, i) => (
                <div key={i} className="group relative glass-card p-4 sm:p-5 rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                  <div className="relative space-y-2.5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <h4 className="text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dossier List UI - Melhorado */}
          <div className="relative group mt-6 sm:mt-8 lg:mt-0">
            <div className="hidden md:block absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative glass border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="flex justify-between items-center mb-5 sm:mb-6 pb-4 border-b border-slate-800/50">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide uppercase">Arquitetura do Portal</h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-1">ESTRUTURA COMPLETA</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                </div>
              </div>

              <ul className="space-y-0 divide-y divide-slate-800/30">
                {[
                  { name: "Home Impactante", desc: "Vídeo Hero + CTA", icon: "🏠" },
                  { name: "Sobre a Feira", desc: "História e Propósito", icon: "📖" },
                  { name: "Agenda Completa", desc: "Palestras e Shows", icon: "📅" },
                  { name: "Mapa do Evento", desc: "Stands e Banheiros", icon: "🗺️" },
                  { name: "Área do Expositor", desc: "Login Restrito", icon: "🔐" },
                  { name: "Imprensa & Mídia", desc: "Credenciamento Press", icon: "📰" },
                  { name: "Contato & Local", desc: "Google Maps", icon: "📍" }
                ].map((page, i) => (
                  <li key={i} className="py-3 sm:py-4 flex justify-between items-center group/item hover:bg-white/[0.02] transition-all px-2 -mx-2 rounded-lg">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-lg">{page.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-slate-200 font-medium text-sm sm:text-base group-hover/item:text-primary transition-colors">{page.name}</span>
                        <span className="text-slate-600 text-[10px] sm:text-xs font-mono">{page.desc}</span>
                      </div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-primary transition-colors"></div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 bg-slate-900/30 -mx-6 sm:-mx-8 px-6 sm:px-8 -mb-6 sm:-mb-8 pb-6 sm:pb-8">
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 tracking-wider">NEXT.JS 15.1 // SSG/ISR</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-green-500 font-bold">PRODUCTION READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};