import React from 'react';
import { Cpu, Lock, Zap, Layers, Terminal } from 'lucide-react';
import { SectionId } from '../../types';

export const TechSpecs: React.FC = () => {
  return (
    <section id={SectionId.TECH_SPECS} className="py-16 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-sm font-bold tracking-tighter">04 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">Tecnologia & Escalabilidade</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[10px] font-mono text-primary mb-4 mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <Terminal size={12} />
                  TECNOLOGIA EXCLUSIVA
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight UPPERCASE">
                Não é apenas um site.<br/>
                É uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">Plataforma Next.js</span>.
              </h2>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Diferente de sites comuns (Wordpress/Wix) que são lentos e inseguros, utilizaremos a mesma tecnologia usada pela Netflix, Uber e Twitch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
               {[
                 { icon: <Zap size={20} />, title: "VELOCIDADE EXTREMA", desc: "Carregamento instantâneo. Ninguém gosta de esperar site abrir." },
                 { icon: <Cpu size={20} />, title: "SEO OTIMIZADO", desc: "Google lê Next.js melhor. A Feira aparecerá no topo das buscas." },
                 { icon: <Lock size={20} />, title: "SEGURANÇA TOTAL", desc: "Sem plugins vulneráveis. Blindado contra ataques comuns." },
                 { icon: <Layers size={20} />, title: "ESCALABILIDADE", desc: "Aguenta milhares de acessos simultâneos sem cair no dia do evento." }
               ].map((item, i) => (
                 <div key={i} className="space-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
                   <div className="text-primary">{item.icon}</div>
                   <h4 className="text-white font-display font-bold text-sm tracking-widest uppercase">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Dossier List UI */}
          <div className="relative group mt-8 lg:mt-0">
             <div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative glass border-white/5 rounded-3xl p-8 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-display text-xl font-bold text-white tracking-wide uppercase">Arquitetura do Portal</h3>
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
                    <li key={i} className="py-4 flex justify-between items-center group transition-all">
                       <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-slate-700">{String(i+1).padStart(2, '0')}</span>
                          <span className="text-slate-200 font-medium group-hover:text-primary transition-colors">{page.name}</span>
                       </div>
                       <span className="text-slate-600 text-[10px] font-mono uppercase tracking-widest group-hover:text-slate-400">{page.desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-5 border-t border-slate-800 flex justify-between items-center">
                   <span className="text-[10px] font-mono text-slate-500">NEXT.JS 15.1 // RENDER: SSG/ISR</span>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-mono text-green-500">READY</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};