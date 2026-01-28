import React from 'react';
import { Check, Minus, ShieldCheck, Zap } from 'lucide-react';
import { SectionId } from '../../types';

export const Comparison: React.FC = () => {
  const features = [
    { name: "Identidade Visual (Logo + Manual)", basic: true, pro: true },
    { name: "Website Institucional (Next.js)", basic: true, pro: true },
    { name: "Hospedagem Dedicada", basic: true, pro: true },
    { name: "App Android & iOS", basic: false, pro: true },
    { name: "Mapa de Stands Interativo", basic: false, pro: true },
    { name: "Sistema de Vendas Online", basic: false, pro: true },
    { name: "Área do Expositor", basic: false, pro: true },
    { name: "Credenciamento Digital", basic: false, pro: true },
    { name: "Dashboard Financeiro", basic: false, pro: true },
  ];

  return (
    <section id={SectionId.COMPARISON} className="py-16 bg-dark-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Padrão de cabeçalho de seção */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-sm font-bold tracking-tighter">06 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800/50"></div>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">Scope Matrix Comparison</span>
        </div>

        <div className="text-center mb-10">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
            ESCOPO <span className="text-primary">GERAL</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Comparativo detalhado entre os modelos de entrega para a evolução digital da AMPEI.
          </p>
        </div>

        {/* Tabela com visual Industrial/Moderno */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-3xl opacity-20 pointer-events-none"></div>
          
          <div className="glass-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/[0.02] border-b border-slate-800">
                  <th className="py-6 px-8 text-left align-bottom">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-600 font-mono text-[9px] uppercase tracking-[0.3em]">Módulo</span>
                      <span className="text-white font-display text-sm uppercase font-bold">Entrega Técnica</span>
                    </div>
                  </th>
                  <th className="py-6 px-8 text-center w-1/4 align-bottom">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em]">Essential</span>
                      <span className="text-slate-300 font-display text-xs uppercase font-bold tracking-tighter">Digital Branding</span>
                    </div>
                  </th>
                  <th className="py-6 px-8 text-center w-1/4 bg-primary/5 relative align-bottom overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                    <div className="flex flex-col items-center gap-1 relative z-10">
                      <Zap size={14} className="text-primary mb-1 animate-pulse" />
                      <span className="text-primary font-mono text-[9px] uppercase tracking-[0.3em] font-bold">Ecossistema</span>
                      <span className="text-white font-display text-xs uppercase font-bold tracking-tighter">VELLO PLATFORM</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {features.map((item, i) => (
                  <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-colors"></div>
                        <span className="text-slate-300 text-sm font-medium tracking-tight group-hover:text-white transition-colors">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center">
                      <div className="flex justify-center">
                        {item.basic ? (
                          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:border-slate-700 transition-all">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="text-slate-800">
                            <Minus size={14} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-8 text-center bg-primary/[0.03] group-hover:bg-primary/[0.05] transition-colors relative">
                      <div className="flex justify-center">
                        {item.pro ? (
                          <div className="w-9 h-9 rounded-lg bg-primary text-white shadow-lg shadow-primary/20 flex items-center justify-center border border-primary/50 group-hover:scale-110 transition-transform">
                            <Check size={16} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="text-red-900/30">
                            <Minus size={14} />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Rodapé da Tabela */}
            <div className="px-8 py-5 bg-white/[0.02] border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck size={14} className="text-slate-600" />
                <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">Compliance Técnico Eagle v2.6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legend / CTA Reforço */}
        <div className="mt-10 text-center">
           <p className="text-slate-500 text-xs font-mono uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
             * Todos os módulos do ecossistema vello são integrados de forma nativa via API proprietária.
           </p>
        </div>
      </div>
    </section>
  );
};