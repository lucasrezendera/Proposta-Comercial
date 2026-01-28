import React from 'react';
import { Check, ArrowRight, FileText, BadgeCheck, ShieldCheck, Box, Zap } from 'lucide-react';
import { Button } from '../UI/Button';
import { PLANS } from '../../constants';
import { SectionId } from '../../types';

export const Investment: React.FC = () => {
  return (
    <section id={SectionId.INVESTMENT} className="py-16 bg-dark-950 relative">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center md:items-center font-mono">
          <span className="text-primary text-sm font-bold tracking-tighter">07 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">Investimento & Aprovação</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
            A DECISÃO ESTRATÉGICA:<br />
            <span className="text-primary">INVESTIMENTO</span>
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Transparência total para o crescimento da AMPEI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col group transition-all duration-500 rounded-[2.5rem] overflow-hidden ${plan.highlight
                  ? 'glass-card border-primary ring-1 ring-primary/30 scale-105 z-10 shadow-2xl'
                  : 'bg-slate-900/40 border border-slate-800 hover:border-slate-600'
                }`}
            >
              {plan.highlight && (
                <div className="bg-primary px-6 py-2 flex justify-between items-center">
                  <span className="text-white font-mono font-bold text-[10px] tracking-[0.2em] uppercase">SOLUÇÃO RECOMENDADA</span>
                  <BadgeCheck size={16} className="text-white" />
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${plan.highlight ? 'text-primary' : 'text-slate-500'}`}>
                      {plan.id === 'ecosystem' ? 'PLATAFORMA COMPLETA' : 'ESSENTIAL PACK'}
                    </span>
                    <FileText size={18} className="text-slate-800" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-slate-500 text-lg font-mono">BRL</span>
                  <span className={`text-5xl font-display font-bold tracking-tighter ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-slate-600 font-mono text-xs">/PROJETO</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-4 text-sm ${!feature.included && 'opacity-20'}`}>
                      <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border ${feature.included ? (plan.highlight ? 'bg-primary border-primary text-white' : 'border-primary/40 text-primary') : 'border-slate-800 text-slate-700'}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className={`font-medium tracking-wide ${feature.included ? 'text-slate-300' : 'text-slate-600 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
                  size="lg"
                  className={`w-full py-5 text-sm font-mono tracking-widest ${plan.highlight ? 'shadow-lg shadow-primary/20 hover:scale-[1.02]' : ''}`}
                  onClick={() => {
                    window.open(`https://wa.me/?text=Olá, somos da AMPEI e gostaríamos de aprovar o plano ${plan.name}.`);
                  }}
                >
                  {plan.highlight ? 'APROVAR ECOSSISTEMA' : 'APROVAR BÁSICO'}
                  {plan.highlight && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>

                <div className="mt-6 text-center">
                  <span className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">Contrato Digital // Validade: 15 Dias</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <ShieldCheck size={16} />
            VELLO_VERIFIED_SECURITY
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Box size={16} />
            NEXT.JS_CORE_FRAMEWORK
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Zap size={16} />
            ULTRA_LOW_LATENCY
          </div>
        </div>
      </div>
    </section>
  );
};