import React from 'react';
import { SectionId } from '../../types';
import { Layers, Palette, Grid, Maximize, FileText } from 'lucide-react';

export const Branding: React.FC = () => {
  return (
    <section id={SectionId.BRANDING} className="py-16 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center md:items-center font-mono justify-center md:justify-start text-center md:text-left">
          <span className="text-primary text-sm font-bold tracking-tighter">05 // 08</span>
          <div className="h-px w-12 md:flex-1 bg-slate-800"></div>
          <span className="text-slate-500 text-[10px] tracking-widest uppercase">Direção Criativa & Design</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Abstract Design Element (Blueprint Style) */}
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

            {/* Tech Blueprint Grid */}
            <div className="relative w-full max-w-sm aspect-square glass rounded-[3rem] border-white/5 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              <div className="relative w-64 h-64 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full blur-[2px]"></div>
              </div>

              <div className="z-10 bg-dark-950 p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center gap-4">
                <div className="w-16 h-1 bg-primary/20 rounded-full"></div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <Palette size={24} />
                  </div>
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-slate-400">
                    <Grid size={24} />
                  </div>
                </div>
                <div className="font-mono text-[10px] text-slate-500">IND_IND_BRAND_V01</div>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-slate-400 mb-4 uppercase tracking-widest mx-auto lg:mx-0">
                <Maximize size={12} className="text-primary" />
                DESIGN ESTRATÉGICO
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight UPPERCASE">
                IDENTIDADE VISUAL.<br />
                <span className="text-primary">DO FUTURO DA INDÚSTRIA.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Não é apenas um logotipo. Vamos construir um Sistema Visual Completo que transmite inovação, robustez e autoridade para a Feira.
              </p>
            </div>

            <div className="grid gap-3 text-left">
              {[
                { title: "LOGOTIPO & CONCEITO", desc: "Criação da marca vetorial, grid de construção e variações.", icon: <Layers size={16} /> },
                { title: "PALETA DE CORES", desc: "Definição das cores institucionais e fontes para uso.", icon: <Palette size={16} /> },
                { title: "MANUAL DA MARCA", desc: "Guia PDF completo com regras de aplicação e tom de voz.", icon: <FileText size={16} /> },
                { title: "MÍDIAS SOCIAIS", desc: "Templates editáveis para Instagram/Linkedin.", icon: <Maximize size={16} /> }
              ].map((item, i) => (
                <div key={i} className="group flex gap-5 p-3 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="shrink-0 w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/40 transition-all border border-transparent">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-display text-base font-bold text-white tracking-wide uppercase">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};